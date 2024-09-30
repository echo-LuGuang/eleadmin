import { markRaw, unref } from 'vue';
import * as ALL_ICONS from '@/components/icons';

/**
 * 标识 js 变量名
 */
export class JsVar {
  __isJsVar = true;

  constructor(props) {
    /** 生成 ElForm 代码时显示的变量名称 */
    this.name = props.name;
    /** 生成 ProForm 代码时显示的变量名称 */
    this.proName = props.proName;
    /** 生成 ElForm 代码时添加的声明代码 */
    this.code = props.code;
    /** 生成 ProForm 代码时添加的声明代码 */
    this.proCode = props.proCode;
    /** 生成 ElForm 代码时添加的导入代码 */
    this.imports = props.imports;
    /** 生成 ProForm 代码时添加的导入代码 */
    this.proImports = props.proImports;
    /** ProForm 预览界面获取对应的 js 变量 */
    this.jsCode = props.jsCode;
  }
}

/**
 * 移除字符串前缀
 * @param content 字符串
 * @param prefix 一个或多个前缀
 */
export function removePrefixStr(content, prefix) {
  if (typeof prefix === 'string') {
    if (content.startsWith(prefix)) {
      return content.slice(prefix.length);
    }
    return content;
  }
  let result = content;
  prefix.forEach((temp) => {
    result = removePrefixStr(result, temp);
  });
  return result;
}

/**
 * JSON 数据转换 JsVar 对象
 * @param jv JSON 解析后的值
 */
export function transformJsVar(jv) {
  if (jv == null) {
    return;
  }
  if (typeof jv === 'string') {
    if (
      jv.startsWith('__PRO_FORM_ICON__') ||
      jv.startsWith('/*__PRO_FORM_ICON__*/')
    ) {
      const icon = removePrefixStr(jv, [
        '__PRO_FORM_ICON__',
        '/*__PRO_FORM_ICON__*/'
      ]);
      return new JsVar({
        name: icon,
        proName: `markRaw(${icon})`,
        imports: [`import { ${icon} } from '@/components/icons';`],
        proImports: [
          `import { markRaw } from 'vue';`,
          `import { ${icon} } from '@/components/icons';`
        ],
        jsCode: () => markRaw(ALL_ICONS[icon] ?? ALL_ICONS.UserOutlined)
      });
    }
    if (jv.startsWith('__PRO_FORM__') || jv.startsWith('/*__PRO_FORM__*/')) {
      const codeName = removePrefixStr(jv, [
        '__PRO_FORM__',
        '/*__PRO_FORM__*/'
      ]);
      if (codeName === 'searchExpand') {
        return new JsVar({
          name: `form.${codeName}`,
          proName: `'${codeName}'`,
          jsCode: (_form, _formItems, _formProps, searchExpand) => {
            return () => searchExpand;
          }
        });
      }
      return new JsVar({
        name: codeName,
        proName: codeName,
        jsCode: (form, formItems, _formProps, searchExpand) => {
          try {
            return new Function(
              'form',
              'items',
              'searchExpand',
              `return (${codeName})`
            )(form, unref(formItems), unref(searchExpand));
          } catch (_e) {
            return codeName;
          }
        }
      });
    }
  }
  if (typeof jv !== 'object') {
    return;
  }
  if (jv instanceof JsVar) {
    return jv;
  }
  if (jv.__isJsVar === true && (jv.name != null || jv.proName != null)) {
    return new JsVar(jv);
  }
}

/**
 * 生成 ProForm 代码时的 JSON 数据转换 JsVar 对象
 * @param jv JSON 解析后的值
 */
export function transformProJsVar(jv) {
  const jsVar = transformJsVar(jv);
  if (jsVar != null) {
    return new JsVar({ ...jsVar, name: jsVar.proName });
  }
  return jsVar;
}

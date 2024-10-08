<template>
  <ele-card header="选择图片后先裁剪">
    <div style="margin-bottom: 12px">
      与文件选择和图片裁剪一起三者结合使用。
    </div>
    <ele-upload-list
      :limit="1"
      :tools="true"
      v-model="images"
      :beforeUploadClick="beforeUploadClick"
      :beforeItemEdit="beforeUploadClick"
      @remove="handleRemove"
    />
    <file-picker
      title="图片选择"
      :limit="1"
      :fileLimit="2"
      accept="image/*"
      :params="{ contentType: 'image/' }"
      v-model="showFilePicker"
      @done="handleFilePickerDone"
      @close="handleFilePickerClose"
    />
    <ele-cropper-modal
      v-model="showCropperModal"
      :src="cropperSrc"
      :options="{
        aspectRatio: 1,
        autoCropArea: 1,
        viewMode: 1,
        dragMode: 'move'
      }"
      :modal-props="{ destroyOnClose: true }"
      :beforeUploadClick="cropperBeforeUploadClick"
      @done="handleCropperDone"
    />
  </ele-card>
</template>

<script setup>
  import { ref } from 'vue';
  import FilePicker from '@/components/FilePicker/index.vue';

  /** 已上传数据 */
  const images = ref([]);

  /** 是否打开文件选择弹窗 */
  const showFilePicker = ref(false);

  /** 是否打开裁剪弹窗 */
  const showCropperModal = ref(false);

  /** 裁剪图片地址 */
  const cropperSrc = ref('');

  /** 裁剪弹窗上传按钮回调 */
  let currentCropperCallback = null;

  /** 删除事件 */
  const handleRemove = () => {
    images.value = [];
  };

  /** 上传按钮点击打开文件选择弹窗 */
  const beforeUploadClick = () => {
    showFilePicker.value = true;
    return false;
  };

  /** 文件选择弹窗选择完成事件 */
  const handleFilePickerDone = (files) => {
    showFilePicker.value = false;
    if (files.length && files[0].url) {
      if (currentCropperCallback != null) {
        currentCropperCallback(files[0].url, files[0].contentType);
        currentCropperCallback = null;
        return;
      }
      cropperSrc.value = files[0].url;
      showCropperModal.value = true;
    }
  };

  /** 裁剪完成事件 */
  const handleCropperDone = (data) => {
    showCropperModal.value = false;
    images.value = [
      {
        key: String(Date.now()),
        url: data,
        status: 'done'
      }
    ];
  };

  /** 裁剪弹窗上传按钮点击打开文件选择弹窗 */
  const cropperBeforeUploadClick = (_e, onResult) => {
    currentCropperCallback = onResult;
    showFilePicker.value = true;
    return false;
  };

  /** 文件选择弹窗关闭事件 */
  const handleFilePickerClose = () => {
    currentCropperCallback = null;
  };
</script>

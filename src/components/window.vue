<template>
    <div>
      <button @click="showModal">显示提示</button>
      <a-modal v-model:visible="modalVisible" title="提示">
        <p>这里是提示语！</p>
      </a-modal>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        modalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.modalVisible = true;
      },
    },
  };
  </script>
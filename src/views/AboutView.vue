<template>
  <div class="about">
    <a-space direction="horizontal">
      <a-button type="primary" @click="openModal">openModal</a-button>
      <a-button @click="openMessage">openMessage</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="outline">Outline</a-button>
      <a-button type="text">Text</a-button>
    </a-space>
    <a-form class="mt-5" :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
      <a-form-item field="name" tooltip="Please enter username" label="Username">
        <a-input v-model="form.name" placeholder="please enter your username..." />
      </a-form-item>
      <a-form-item field="post" label="Post">
        <a-input v-model="form.post" placeholder="please enter your post..." />
      </a-form-item>
      <a-form-item field="isRead">
        <a-checkbox v-model="form.isRead"> I have read the manual </a-checkbox>
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { ModalInfo, messageInfo } from '@/utils'
import { reactive } from 'vue'
const form = reactive({
  name: '',
  post: '',
  isRead: false
})
const handleSubmit = (data: any) => {
  console.log(data)
}

const openModal = () => {
  ModalInfo({ content: 'chenguzhen87' })
}

const openMessage = () => {
  messageInfo({ content: 'chenguzhen87' })
}
</script>
<style></style>

<script setup lang="ts">
import { useRequest } from 'vue-request'
import TheWelcome from '../components/TheWelcome.vue'
import { recordList } from '@/api'
import { watch } from 'vue'

const { data } = useRequest(recordList, {
  defaultParams: [
    {
      pageNumber: 1,
      pageSize: 10,
      walletAddr: '0x021126967D56EaA9e80efC0492799579E61ab6bC'
    }
  ]
})

watch(data, () => {
  console.log(data)
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

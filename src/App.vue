<script setup lang="ts"></script>

<template>
  <a-config-provider :global="true">
    <Suspense>
      <template #default>
        <RouterView />
      </template>
      <template #fallback>
        <a-skeleton :animation="true">
          <a-space direction="vertical" :style="{ width: '100%' }" size="large">
            <a-skeleton-line :rows="3" />
          </a-space>
        </a-skeleton>
      </template>
    </Suspense>
  </a-config-provider>
</template>

<style scoped></style>

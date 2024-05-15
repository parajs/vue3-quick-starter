<template>
  <router-view v-slot="{ Component, route }">
    <component
      v-if="!(route.meta && route.meta.keepAlive)"
      :is="Component"
      :key="route?.meta?.usePathKey ? route.path : undefined"
    />
    <keep-alive>
      <component
        v-if="route.meta && route.meta.keepAlive"
        :is="Component"
        :key="route.meta.usePathKey ? route.path : undefined"
      />
    </keep-alive>
  </router-view>
</template>

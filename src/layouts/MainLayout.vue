<template>
  <header class="flex flex-row items-center h-12 justify-around">
    <LogoSvg class="w-[40px] h-[40px]" />
    <div class="wrapper">
      <nav>
        <RouterLink class="pr-5 pl-5" to="/">Home</RouterLink>
        <RouterLink class="pr-5 pl-5" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <div class="p-10">
    <RouterView />
  </div>
</template>
<script lang="ts" setup>
import LogoSvg from '@/assets/icons/logo.svg'
</script>
<style scoped>
.router-link-exact-active {
  color: cadetblue;
}
</style>

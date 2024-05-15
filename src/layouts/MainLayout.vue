<template>
  <header class="flex flex-row items-center h-12 justify-around">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />

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
<script lang="ts" setup></script>
<style scoped>
.router-link-exact-active {
  color: cadetblue;
}
</style>

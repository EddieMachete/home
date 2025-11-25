<script setup lang="ts">
// import { useNuxtApp } from "#app";
// const nuxtApp = useNuxtApp();

// Loads custom elements only on client side
// This is related to the `isCustomElement` check in `nuxt.config.ts`
// We get errors loading custom elements on server side, because the HTMLElement api is not available
// here we are loading the custom elements only on the client side
if (process.client) {
  import("eddiemachete-ui");
}
</script>

<template>
  <div
    style="
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 4rem;
    "
  >
    <h1>Eddie Machete</h1>
    <em-corna class="bouncing-corna"></em-corna>
    <div style="width: 100%; height: 400px"></div>
  </div>
</template>

<style>
body {
  background-color: #970f00;
  background-image: url("/svg/bg-text-tile.svg");
  background-repeat: repeat;
  color: #fff;
  font-size: 2rem;
}
.bouncing-corna {
  animation: bounce 2s ease-in-out infinite;
  filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.2));
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
    filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.2));
  }
  25% {
    transform: translateY(-20px);
    filter: drop-shadow(0 20px 12px rgba(0, 0, 0, 0.15));
  }
  50% {
    transform: translateY(0);
    filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.2));
  }
}
</style>

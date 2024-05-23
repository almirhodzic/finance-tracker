<template>
  <div class="container mx-auto max-w-4xl px-8">
    <AppHeader />
    <main class="my-8">
      <slot />
    </main>
  </div>
</template>

<script setup>

import AppHeader from '../components/app-header.vue';

// Link to Google Fonts
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Plus%20Jakarta%20Sans&display=swap',
      crossorigin: ''
    }
  ]
})
</script>

<style>
/* Set the font family for the entire site */
body {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
/* Set the background color for the entire site */
body {
  @apply dark:bg-gray-900 bg-white
}
</style>
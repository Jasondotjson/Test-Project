<template>
      <div>
    <h1>URL Shortener</h1>
    <form @submit.prevent="createShortUrl">
      <input v-model="originalUrl" type="text" placeholder="Enter URL" />
      <button type="submit">Shorten</button>
    </form>
    
    <div v-if="shortUrl">
      <p>Short URL: <a :href="shortUrl" target="_blank">{{ shortUrl }}</a></p>
      <button @click="copyToClipboard">Copy</button>
    </div>
  </div>
</template>


<script>

import "firebase/compat/firestore";
import 'firebase/compat/auth'


export default {
  data() {
    return {
      originalUrl: '',
      shortUrl: ''
    };
  },
};
</script>


<style>
div {text-align: center;}
</style>


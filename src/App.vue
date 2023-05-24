<template>

  <div class="title">
    <h1>Welcome to ShortLinks!</h1>
    <img src="./assets/logo.png" class="center">
    <h3>Enter a link to shorten, and register to view and manage your links!</h3>
  </div>
  
  <div class="container">
    <router-view />
  </div>
  
</template>


<style>
    h1 {text-align:center}
    h3 {text-align:center}
    img{ display:block; margin-left:auto;margin-right:auto;width:300px;height:150px}
</style>





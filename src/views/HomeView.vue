<template>
    <LinkShorten/>
    <UserCreate />
    <UserList />
</template>
  
<script>
  
  import UserCreate from '@/components/UserCreate.vue'
  import UserList from '@/components/UserList.vue'
  import LinkShorten from '@/components/LinkShorten.vue'

  export default {
    name: 'HomeView',
    components: {LinkShorten, UserCreate, UserList }
  }
</script>
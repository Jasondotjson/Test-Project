<template>
  
  <div class="card card-body mt-4">

    <form @submit.prevent="onSubmit">

      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Email</label>
        <input
          v-model="form.email"
          class="form-control"
          type="email"
          required
        />
      </div>

        <div class="form-group mt-2">
        <label>Password</label>
        <input
          v-model="form.password"
          class="form-control"
          type="password"
          required
        />
      </div>


      <button type="submit" class="btn btn-success mt-3">
        Create User
      </button>

    </form>
  </div>
</template>

<script>
import { createUser } from '@/firebase'
//import { ClientRequest } from 'http'
import { reactive } from 'vue'

export default {
  setup() {
    
    const form = reactive({ name: '', email: '',password:'' })
    const onSubmit = async () => {
      await createUser({ ...form })
      form.name = ''
      form.email = ''
      form.password = ''
    }
    return { form, onSubmit }
  }
}
</script>
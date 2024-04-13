<template>
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Username" v-model="username">
      <input type="password" placeholder="Password" v-model="password">
      <button @click="login">Login</button>
    </div>
  </template>

<script>
export default {
  name: 'LoginView',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      // Implement your login logic here
      this.$router.push('/home')
    }
  }
}
</script>

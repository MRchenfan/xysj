<template>
  <div class="login-page">
    login page
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        phone: '',
        password: ''
      }
    }
  }
}
</script>

<style>
.login-page {
  width: 100%;
  height: 100%;
  background-image: url(../../static/img/login.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>

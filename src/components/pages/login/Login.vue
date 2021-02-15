<template>
<span>
<nav-bar></nav-bar>
<login-body-vue></login-body-vue>
<footer-vue></footer-vue>
</span>

</template>

<script>
import NavBar from '@/components/layouts/NavBar'
import FooterVue from '@/components/layouts/FooterVue'
import LoginBodyVue from '@/components/layouts/LoginBodyVue'
export default {
  components: { NavBar, FooterVue, LoginBodyVue },
  name: 'Login'
}
</script>

<style>




</style>

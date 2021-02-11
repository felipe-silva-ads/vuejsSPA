<template>
<span>
<nav-bar></nav-bar>
<body-vue></body-vue>
<footer-vue></footer-vue>
</span>

</template>

<script>
import NavBar from '@/components/layouts/NavBar'
import FooterVue from '@/components/layouts/FooterVue'
import BodyVue from '@/components/layouts/BodyVue'
export default {
  components: { NavBar, FooterVue, BodyVue },
  name: 'Home'
}
</script>

<style>

</style>

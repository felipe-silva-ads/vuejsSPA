<template>
<span>
<nav-bar></nav-bar>
<home-body-vue></home-body-vue>
<footer-vue></footer-vue>
</span>

</template>

<script>
import NavBar from '@/components/layouts/NavBar'
import FooterVue from '@/components/layouts/FooterVue'
import HomeBodyVue from '@/components/layouts/HomeBodyVue'
export default {
  components: { NavBar, FooterVue, HomeBodyVue },
  name: 'Home'
}
</script>

<style>




</style>

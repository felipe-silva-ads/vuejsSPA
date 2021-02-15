<template>
<span>
<nav-bar></nav-bar>
<cadastro-body-vue></cadastro-body-vue>
<footer-vue></footer-vue>
</span>

</template>

<script>
import NavBar from '@/components/layouts/NavBar'
import FooterVue from '@/components/layouts/FooterVue'
import CadastroBodyVue from '@/components/layouts/CadastroBodyVue'
export default {
  components: { NavBar, FooterVue, CadastroBodyVue },
  name: 'Cadastro'
}
</script>

<style>




</style>

<template>

<div class="navbar-fixed">
  <nav>
    <div class="nav-wrapper teal">
      <router-link to="/" class="brand-logo">MyResume</router-link>
      <a href="#!" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/cadastro">Cadastro</a></li>
        <li><a href="/">Contato</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/cadastro">Cadastro</a></li>
        <li><a href="/">Contato</a></li>
  </ul>
</div>

</template>

<script>

export default {
  name: 'NavBar',
  data () {
    return {
    }
  }
}


$(document).ready(function(){
    $('.sidenav').sidenav();
});

</script>

<style>

</style>

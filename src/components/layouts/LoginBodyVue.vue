<template>

<div class="row container login-body">

<div class="col s12 l12">
    <div class="row">
        <div class="col s10 l6 offset-s1 offset-l3 card">
                <div class="row">
                    <h4 class="center">Login</h4>
                </div>
            <input type="text" placeholder="login">
            <input type="password" placeholder="senha">
            <div class="center buttons">
            <router-link to="/" class="button-logar btn waves-effect waves-light teal">Logar</router-link>
            <router-link to="/cadastro" class="button-logar btn waves-effect waves-light pink darken-3">Cadastrar-se</router-link>
            </div>
        </div>
    </div>
</div>



</div>



</template>

<script>

export default {
  name: 'LoginBodyVue',
  data () {
    return {
    }
  }
}


</script>

<style>

.login-body{
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.buttons{
    margin-top: 80px;
    margin-bottom: 40px;
}

</style>

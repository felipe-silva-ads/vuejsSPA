<template>

<div class="row container cadastro-body">

<div class="col s12 l12">
    <div class="row">
        <div class="col s10 l6 offset-s1 offset-l3 card">
                <div class="row">
                    <h4 class="center">Cadastro</h4>
                </div>
            <input type="text" placeholder="login">
            <input type="email" placeholder="e-mail">
            <input type="password" placeholder="senha">
            <input type="password" placeholder="confirmar senha">
            <div class="center buttons">
            <router-link to="/" class="button-logar btn waves-effect waves-light teal">Cadastrar</router-link>
            <router-link to="/login" class="button-logar btn waves-effect waves-light pink darken-3">Logar</router-link>
            </div>
        </div>
    </div>
</div>



</div>



</template>

<script>

export default {
  name: 'CadastroBodyVue',
  data () {
    return {
    }
  }
}


</script>

<style>

.cadastro-body{
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

<template>

<div class="row container">
<!------------------------sidebox------------------------->
    <div class="col xs12 s12 m4 l4 card sidebox">
        <div class="row">
            <div class="col s12 center">
                <img src="data:image/png;base64,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" class="responsive-img circle">
            </div>
            <div class="col s10 offset-s1 infos">
                <label><i class="material-icons">account_circle</i>Nome: </label>
                <p>Felipe Silva</p>

                <label><i class="material-icons">date_range</i>Data de Nascimento: </label>
                <p>20/11/1993</p>

                <label><i class="material-icons">place</i>Cidade: </label>
                <p>Curitiba</p>

                <label><i class="material-icons">create</i>Formação: </label>
                <p>Cursando Analise e Desenvolvimento de Sistemas</p>
            </div>
        </div>
    </div>

<!------------------------mainbox------------------------->
    <div class="col xs12 s12 m7 l7 card">
    <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Crie uma nova publicação...</label>
          <button class="btn waves-effect right">Publicar</button>
        </div>
    </div>
    <div class="col xs12 s12 m7 l7 card">

    <div class="row valign-wrapper">
    <div class="col s2 l2">
    <img src="data:image/png;base64,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" class="responsive-img circle">
    </div>
    <div class="col s10 l10">
    <p>Felipe Silva</p>
    <p><small>Postado: 11/02/21 às 10:00</small></p>
    </div>
    </div>
    <p>texto sobre a publicação</p>
    <div class="divider"></div>
    <div class="row">
    <div class="col s12 l12 post-img">
    <img src="https://i0.wp.com/geekness.com.br/wp-content/uploads/2020/06/Wallpaper-Minimalista-GEEKNESS-01.png?resize=1200%2C750&ssl=1" class="responsive-img">
    </div>
    </div>
    <div class="divider"></div>
    <div class="row">
    <div class="col s12 l12 post-comment">
    <i class="material-icons">favorite</i>
    <i class="material-icons">comment</i>
    </div>
    </div>
    </div>




</div>



</template>

<script>

export default {
  name: 'HomeBodyVue',
  data () {
    return {
    }
  }
}
</script>

<style>

.container{
    margin-top: 20px;
}

.sidebox{
    margin-right: 20px;
}

.sidebox img{
    margin-top: 20px;
}

.infos{
    margin-top: 80px;
}

.infos p{
    text-align: justify;
}

.post-img{
    margin-top: 20px;
    cursor: pointer;
}

.post-comment i{
    margin-top: 20px;
    cursor: pointer;
}

</style>

<template>
  <section class="container">
    <div class="form-img">
      <img src="img\undraw_My_location_re_r52x-removebg-preview.png" alt="imagem de localização">
    </div>
    <div class="form">
      <div class="form-header">
        <div class="title">
          <h2>Buscar CEP</h2>
        </div>
        <div class="form-group">
          <input type="text">
          <button class="btn">Buscar</button>
        </div>
        <div class="endereco-info">
          <!-- Adicionar as informações que serão recebidas da API-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing:border-box;
}

#app {
  width: 100%;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container{
  width: 80%;
  height: 80vh;
  display: flex;
  box-shadow: 5px 5px 10px rgba(0,0,0, .212);
}

.form-img{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fde3a7d7;
  padding: 1rem;

}
.form-img img{
  width: 31rem;
}

.form{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color:#fbfbfc;
  padding: 3rem;
}

.form-header{
  margin-bottom: 10rem;
  
}
.title{
  margin-bottom: 2rem;
  font-size: 20px;
  font-family: tahoma,sans-serif;
}

.btn{
  border: none;
  background-color: #6c63ff;
  padding: 0.4rem 1rem;
  border-radius: 5px;
  color: #fff;
  cursor: point;
}
</style>

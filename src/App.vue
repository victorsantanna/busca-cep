<template>
  <section class="container">
    <div class="form-img">
      <img :src="currentImage" alt="imagem de localização" class="image-transition">
    </div>
    <div class="form">
      <div class="form-header">
        <div class="title">
          <h2>Buscar Endereço</h2>
        </div>
        <div class="form-group">
          <input 
          class="input-cep"
          type="text"
          id="cep"
          name="cep"
          placeholder="Digite o CEP"
          v-model="endereco.cep"
          @keyup.enter="buscarCep"
          maxlength="8"
         
          >
          <button 
          class="btn"
          @click="buscarCep"
          >
          Buscar
          </button>
        </div>
        <p class="cep-erro" v-if="esconderErro">{{ this.erro }}</p>
        <div class="endereco-info" v-if="esconderInfo">
          <div class="info">
            <label for="logradouro" class="info-linha">Logradouro: </label>
            <input type="text" name="logradouro" id="logradouro" v-model="endereco.logradouro" class="input-info">
            <label for="bairro" class="info-linha">Bairro: </label>
            <input type="text" name="bairro" id="bairro" v-model="endereco.bairro" class="input-info">
            <label for="localidade" class="info-linha">Localidade: </label>
            <input type="text" name="localidade" id="localidade" v-model="endereco.localidade" class="input-info">
            <label for="ud" class="info-linha">UF: </label>
            <input type="text" name="uf" id="uf" v-model="endereco.uf" class="input-info">
          </div>
          
        </div>
        <div class="parent">
          <vue-element-loading 
          :active="show" 
          spinner="line-scale" 
          color="#4f4f4f"
          text="Carregando"
          duration="1.1"
          />
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
import VueElementLoading from "vue-element-loading";

export default {
  name: 'App',
  components: {
    VueElementLoading,
  },
  data(){
    return{
      endereco:{
        cep:'',
        logradouro:'',
        bairro:'',
        localidade:'',
        uf:'',
      },
      show:false,
      esconderInfo:false,
      erro:'',
      esconderErro:false,
      currentIndex: 0,
      imagens:[
      'img/map.png','img/map2.png', 'img/map3.png',
      ]
    };
  },
  methods:{
    async buscarCep(){
      if(this.endereco.cep){
        if(/^\d+$/.test(this.endereco.cep)){
          try {
          this.esconderInfo = false;
          this.esconderErro=false;
          this.show=true;
          const response = await fetch(`http://viacep.com.br/ws/${this.endereco.cep}/json/`)
          const data = await response.json();        
              setTimeout(() => {
                if(data.erro){
                  this.erro = 'CEP não encontrado!';
                  this.esconderErro=true;
                }else{
                  this.endereco.logradouro = data.logradouro;
                  this.endereco.bairro = data.bairro;
                  this.endereco.localidade = data.localidade;
                  this.endereco.uf = data.uf;
                  this.esconderInfo = true;
                }
                this.show = false;
              }, 900);  
        } catch (error) {
        
        }
        }else{
          alert('Por favor, não utilize letras!')
        }
      }else{
        alert('Por gentileza digite um CEP!')
      }

    },
  },
  computed:{
    currentImage() {
    return this.imagens[this.currentIndex];
  },
  },
  mounted() {
  setInterval(() => {
    this.currentIndex = (this.currentIndex + 1) % this.imagens.length;
  }, 5000); // Alterna a cada 5 segundos (5000 milissegundos)
},
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
  width: 85%;
  height: 85vh;
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
  background-color:#f4f4fe;
  padding: 4rem;
}

.form-header{
  margin-top: 6rem;
  margin-bottom: 2rem;
  
}
.title{
  margin-bottom: .5rem;
  font-size: 17px;
  font-family: tahoma,sans-serif;
}

.btn{
  border: none;
  background-color: #09445f;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}
.btn:hover{
  border: #02AEFF;
  background-color: #006492;
  transition: 0.3s;
}

.info{
  display: flex;
  flex-direction: column;
}
.info-linha{
  padding: .15rem;
}

.endereco-info{
  margin-top: 1rem;
}

.parent{
  margin-top: 5rem;
}
.input-info {
  margin: 0.4rem 0;
  padding: 0.4rem 1.2rem;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 6px #0000001c;
  font-family: Verdana, Tahoma, sans-serif;
}
.input-cep{
  margin: 0.4rem 0;
  padding: 0.5rem 1.2rem;
  border:none;
  border-radius: 5px;
  box-shadow: 2px 4px 10px #0000001c;
}
p{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 15px;
}
</style>

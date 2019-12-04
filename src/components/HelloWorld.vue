<template>
  <div id="app">


  <nav class = "nav-center">
      <div class="nav-wrapper blue darken-1">
      <router-link to="/" class="center">T_T - MINER</router-link>
      </div>
    </nav>

  <ul class="sidenav" id="mobile-demo">

  </ul>

    <div class="container">

      <div class="row">

      <form @submit.prevent="listTopicsLocation">

              <select @change="handleChange" class="browser-default select" 
              style="margin-top:10px;width: auto; float:left; " >
                  <option value="" disabled selected>Selecione a localidade</option>
                  <option value="worldwide" >Mundial</option>
                  <option value="brazil" >Brasil</option>
                  <option value="sao-paulo" >São Paulo</option>
                  <option value="fortaleza" >Fortaleza</option>
                  <option value="rio-de-janeiro" >Rio de Janeiro</option>
                  <option value="recife" >Recife</option>

                </select>


                <button style="margin: 15px 0 0 15px;" class="left waves-effect waves-light btn-small">Buscar<i class="material-icons right">search</i></button>

      </form>
      </div>

       <div class="row">

      <form @submit.prevent="listTopicsSubject">

        <div class="input-field col s6">
          <input @change="handleChangeName" id="last_name" type="text" class="validate">
          <label for="last_name">Escreva sua pesquisa</label>
        </div>


        <button style="margin: 30px 0 0 0px;" class="left waves-effect waves-light btn-small">Buscar<i class="material-icons right">search</i></button>

      </form>

      </div>

      
        <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div><div class="gap-patch">
              <div class="circle"></div>
            </div><div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>


      <table v-for="(topic, index) of configs" :key="topic.id">

        <thead>

          <tr>

            <th>{{topic.timestamp.substring(0,10)}} - {{topic.timestamp.substring(11,19)}}
              - {{topic.location}}
            </th>

          </tr>

        </thead>

        <tbody>

          <tr v-for="(trendings, index2) in configs[index].topics" :key="trendings.id">
              <p style="float:left"> {{index2 + 1}} - {{trendings.subject}} </p>
          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

import Configs from '../services/configs'

  // document.addEventListener('click', function() {
  //   var elems = document.querySelectorAll('.sidenav');
  //   var instances = M.Sidenav.init(elems, {});
  // });

  // document.addEventListener('mouseover', function() {
  //   var elems = document.querySelectorAll('.collapsible');
  //   var instances = M.Collapsible.init(elems, {});
  // });

export default{


  data(){
    return{
      configs:[],
      location: "",
      search: ""
    }
  },

  mounted(){
    this.listConfigs();

  },
  methods:{

    listConfigs(){
        document.getElementsByClassName("preloader-wrapper")[0].style.display = "inline-block";
        Configs.listTopics().then(resp => {
          this.configs = resp.data
          document.getElementsByClassName("preloader-wrapper")[0].style.display = "none";
        })
    },
    handleChange(e) {
        if(e.target.options.selectedIndex > -1) {
          this.location = e.target.options[e.target.options.selectedIndex].value
        }
    },

    handleChangeName(e) {
          this.search = e.target.value
          console.log(this.search);
    },

    listTopicsLocation(){
        document.getElementsByClassName("preloader-wrapper")[0].style.display = "inline-block";
        Configs.findLocation(this.location).then(resp => {
          this.configs = resp.data
          document.getElementsByClassName("preloader-wrapper")[0].style.display = "none";
        })
    },
    listTopicsSubject(){
        document.getElementsByClassName("preloader-wrapper")[0].style.display = "inline-block";
        Configs.findSubject(this.search).then(resp => {
          this.configs = resp.data
          document.getElementsByClassName("preloader-wrapper")[0].style.display = "none";
        })
    },

     
  } 
}

</script>

<style>
/* nav.nav-center ul {
    text-align: center;
}
nav.nav-center ul li {
    display: inline;
    float: none;
}
nav.nav-center ul li a {
    display: inline-block;
}

.select{
  width:fit-content; 
}

#search{
  border-radius: 10px;
  padding-left: 20px;
}

.card-css{
  height: 28em;
}

.cardOut-css{
  margin-top: 2em;
  margin-bottom: 2em;
  border-radius: 30px;
}

.siteLink{
  color: white;
}

@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans);


.profile {
  background-color: #f4f4f4;
  width: 45em;
  margin: 10px auto;
  box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.7);
}

.pheader {
  overflow: hidden;
  width: 100%;
  max-height: 200px;
}

h3{
  margin-top: 0.5em; 
}

h4{
  margin-top: 1em;
}

.pheader img{
  width: 30%;
}

.pcontent {
  width: 85%;
  margin: 35px auto;
}

.pcontent h3 {
  font-size: 30px;
  margin-bottom: 0;
  color: #303F9F;
  font-family: 'Montserrat', sans-serif;
}

.pcontent h4 {
  font-size: 14px;
  color: #FF5252;
  font-family: 'Montserrat', sans-serif;
}

.pcontent p {
  color: #727272;
  font-size: 12px;
  font-family: 'Open Sans', sans-serif;
  
}
*/

.preloader-wrapper{
  display: none;
  margin-top: 2em;
} 
</style>

<template>
    <div id="contedor">
        <h1>
         Agregue su pelicula favorita
        </h1>
        <p>
            <input type="text" v-model="title" placeholder="Nombre de la pelciula"/>
+       </p>
        <p>
            <input type="text" v-model="year" placeholder="Año de estreno"/>
+       </p>
        <p>
            <input type="text" v-model="imagen" placeholder="Link de la imagen"/>
+       </p>
        <button v-on:click="agregarPelicula">Agregar nueva</button>
        <div v-for="pelicula in peliculas" :key="pelicula.title">
            <pelicula :pelicula="pelicula"/>
        </div>
         
        
    </div>
</template>
<script>
import Pelicula from './Pelicula.vue';


export default {
  components: { Pelicula },
    name:'Componente',
    data(){
        return{
           
            peliculas:[
                {title:'Batman Begins',year:2005,imagen:'https://okdiario.com/img/2020/06/16/batman-655x368.jpg'},
                {title:'Barbie el cascanueces',year:2001,imagen:'https://cdn.sincroguia.tv/uploads/programs/c/i/n/cine-9731_SPA.jpg'},
                {title:'Kung Fu Sion',year:2004,imagen:'https://manzanasasesinas.files.wordpress.com/2015/08/kung-fusion-3.jpg?w=750&h=424'}
            ],
            title:'',
            year:'',
            imagen:''
        }
    },
    methods:{
        agregarPelicula(){
            //this.nombre=event.target.value;
            
           const pelicula={
               title:this.title,
               year:this.year,
               imagen:this.imagen
            }
            this.peliculas.push(pelicula);
            this.title='';
            this.year='';
            this.imagen='';
        }  
    }

}
</script>


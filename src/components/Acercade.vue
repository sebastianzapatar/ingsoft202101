<template>
    <div class="container">
        <h1>Creado por los estudiantes de la UTadeo</h1>
        <br/>
        <div class="form-group">
        <label for="mensaje">Coloque su mensaje</label>
        <textarea 
        class="form-control" 
        placeholder="Su mensaje"
        v-model="mensaje"></textarea>
        <button class="btn btn-primary"
        v-on:click="manejarMensaje">Enviar mensaje</button>
  </div>
    <div v-for="mensaje in mensajes" :key="mensaje">
        {{mensaje}}
        <hr/>        
    </div>
    </div>
</template>
<script>
export default {
    name:'acercade',
    data(){
        return{
            mensaje:'',
            mensajes:['Hola soy el profesor','Denuncie','En Ing Soft']
        }
    },
    methods:{
        manejarMensaje(){
            alert('Su mensaje ha sido enviado');
            this.mensajes.push(this.mensaje);
            this.mensaje='';
        }
    },
}
</script>
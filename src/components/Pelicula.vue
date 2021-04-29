<template>
    <div>
        <h3>
            {{pelicula.title}} fue lanzada en {{pelicula.year}}
        </h3>
        <img :src="pelicula.imagen" width="150px"/>
    </div>
</template>
<script>
export default {
    name:'Pelicula',
    props:['pelicula']
}
</script>
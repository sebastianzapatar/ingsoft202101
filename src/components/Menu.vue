<template>
    <header id="header">
        <div class="center">
            <div id="menu">
                <nav id="menu">
                    <ul>
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/listar">Listar Peliculas</router-link>
                        </li>
                        <li>
                            <router-link to="/acerca">Acerca de Nosotros</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header> 
</template>
<script>
export default {
    name:'menu'
}
</script>
<style>
@import  '../assets/styles/styles.css';
</style>

<script setup>
import { useRouter } from 'vue-router';
</script>

<template>

    <nav>
        <ul>
            <li><router-link to="/">Zurück zur Startseite</router-link></li>
            <li><router-link to="/castles">Burgen, Festungen & Schlösser</router-link></li>
            <li><router-link to="/churches">Kirchen & Dome</router-link></li>
            <li><router-link to="/nature">Naturlandschaften</router-link></li>
        </ul>
    </nav>
    
    <router-view></router-view>

    <footer>
        <p>&copy;2025 Michi Schick. Die Rechte der hier gezeigten Bilder liegen bei Ihren Besitzern. Die Quellen dafür sind angegeben.</p>
    </footer>
</template>

<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        text-align: center;
    }
    header {
        background-color: #333;
        color: rgb(255, 255, 255);
        text-align: center;
        padding: 1rem;
    }
    nav {
    background: #555;
    padding: 10px;
    display: flex;
    justify-content: center;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;
    max-width: 600px;
    margin: auto;
}

nav li {
    padding: 10px 15px;
}

nav a {
    color: rgb(255, 255, 255);
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
}

nav a:hover {
    color: rgb(0, 110, 255);
} 


    footer {
        margin-top: 20px;
        background: #333;
        color: white;
        padding: 1rem;
    }
</style>


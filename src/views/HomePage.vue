<script setup>
import Slideshow from '../components/Slideshow.vue';

import Flag from '@/assets/home/Flag.png';
import Flowers from '@/assets/home/Flowers.jpg';
import RLP_position from '@/assets/home/RLP_position.png';

const imageList = [
Flag,
Flowers,
RLP_position
];
</script>

<template>
     <title>Sehenswürdigkeiten in Rheinland-Pfalz</title>
     <header>
        <h1>Sehenswürdigkeiten in Rheinland-Pfalz</h1>
    </header>
    <div class="container">
    <h3>Willkommen auf meiner Internetpräsenz</h3>
    <p>Hier finden Sie außergewöhnliche, historische und interessante Fakten und mögliche Touristenziele in Rheinland-Pfalz.</p>
    </div>
    <div class="container">
    <Slideshow :images="imageList" />   
    </div>
    <div class="container">
        <h2>Referenzen</h2>
        <ul class="references">
            <p><router-link to="/castles">Burgen, Festungen & Schlösser</router-link></p>
            <p><router-link to="/churches">Kirchen & Dome</router-link></p>
            <p><router-link to="/nature">Naturlandschaften</router-link></p>
        </ul>
    </div>
  </template>
  
  
  <style scoped>
  </style>
  
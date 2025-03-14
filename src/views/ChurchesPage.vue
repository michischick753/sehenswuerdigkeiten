<script setup>
import Slideshow from '../components/Slideshow.vue';


import Dom_speyer_night from '@/assets/church/Dom_speyer_night.jpg';
import dom_speyer_side from '@/assets/church/dom_speyer_side.jpg';
import Dom_speyer from '@/assets/church/Dom_speyer.webp';
import Mainz_dom_top from '@/assets/church/Mainz_dom_top.jpg';
import Mainz_dom_turm from '@/assets/church/Mainz_dom_turm.jpg';
import Mainz_dom from '@/assets/church/Mainz_dom.webp';
import trier_dom_back from '@/assets/church/trier_dom_back.jpg';
import trier_dom_front from '@/assets/church/Trier_dom_front.jpg';
import Trier_dom_garten from '@/assets/church/Trier_dom_garten.jpg';

const imageList = [
Dom_speyer_night,
dom_speyer_side,
Dom_speyer
];

const imageList2 = [
Mainz_dom_top,
Mainz_dom_turm,
Mainz_dom
];

const imageList3 = [
trier_dom_back,
trier_dom_front,
Trier_dom_garten
];
</script>


<template>
        <title>Kirchen & Dome in Rheinland-Pfalz</title>
        <header>
        <h1>Kirchen & Dome in Rheinland-Pfalz</h1>
    </header>
    <div class="container">
        <p>Hier finden Sie beeindruckende Fakten und Bilder zu Kirchen und Dome in Rheinland-Pfalz</p>
        <ul>
            <h2>Kaiserdom in Speyer</h2>
            <p>Der Kaiserdom in Speyer ist eine der größten romanischen Kirchen in Europa und ein UNESCO-Weltkulturerbe. Der Dom gilt als herausragendes Beispiel der romanischen Architektur und ist berühmt für seine imposante Westfassade und das riesige Kuppeldach.</p>
            <Slideshow :images="imageList" />

            <h2>Mainzer Dom</h2>
            <p>Der Mainzer Dom ist eine imposante Kathedrale im Zentrum von Mainz. Er wurde im 10. Jahrhundert gegründet und ist ein herausragendes Beispiel der rheinischen Romanik mit gotischen und barocken Einflüssen.</p>
            <Slideshow :images="imageList2" />

            <h2>Trierer Dom</h2>
            <p>Der Trierer Dom ist die älteste Bischofskirche Deutschlands und wurde im 4. Jahrhundert gegründet. Besonders bekannt ist der Dom für seine heiligen Relikte, darunter das Heilige Rock, der Überlieferung nach das Gewand Jesu.</p>
            <Slideshow :images="imageList3" />

        </ul>
    </div>
  </template>
  
  <style scoped>
  </style>
  
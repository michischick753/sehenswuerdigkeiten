<script setup>
import Slideshow from '../components/Slideshow.vue';


import Hunsrück_denkmal from '@/assets/nature/Hunsrück_denkmal.jpg';
import hunsrück_forest from '@/assets/nature/hunsrück_forest.jpg';
import Hunsrück_sign from '@/assets/nature/Hunsrück_sign.jpg';
import Pfaelzerwald_hills from '@/assets/nature/Pfaelzerwald_hills.jpg';
import Pfaelzerwald_rock from '@/assets/nature/Pfaelzerwald_rock.webp';
import pfaelzerwald from '@/assets/nature/pfaelzerwald.jpeg';
import Mittelrheintal_bacharach from '@/assets/nature/Mittelrheintal_bacharach.jpg';
import mittelrheintal_weiler from '@/assets/nature/mittelrheintal_weiler.jpg';
import Mittelrheintal_castle from '@/assets/nature/Mittelrheintal_castle.jpg';

const imageList = [
Hunsrück_denkmal,
hunsrück_forest,
Hunsrück_sign
];

const imageList2 = [
Pfaelzerwald_hills,
Pfaelzerwald_rock,
pfaelzerwald
];

const imageList3 = [
Mittelrheintal_bacharach,
mittelrheintal_weiler,
Mittelrheintal_castle
];
</script>

<template>
        <title>Naturlandschaften in Rheinland-Pfalz</title>
        <header>
        <h1>Naturlandschaften in Rheinland-Pfalz</h1>
    </header>
    <div class="container">
        <p>Hier finden Sie beeindruckende Fakten und Bilder zu Naturlandschaften in Rheinland-Pfalz</p>
        <ul>
            <h2>Nationalpark Hunsrück-Hochwald</h2>
            <p>Der Nationalpark Hunsrück-Hochwald erstreckt sich über Teile des Hunsrücks und des Hochwaldes in Rheinland-Pfalz und dem Saarland. Er umfasst eine Fläche von rund 10.000 Hektar und zeichnet sich durch eine abwechslungsreiche Landschaft aus, mit dichten Wäldern, klaren Bächen und steilen Berghängen.</p>
            <Slideshow :images="imageList" />
          
            <h2>Pfälzerwald</h2>
            <p>Der Pfälzerwald ist das größte zusammenhängende Waldgebiet Deutschlands. Die Region ist bekannt für ihre dichten Wälder, bizarren Sandsteinfelsen und Burgruinen, darunter die Reichsburg Trifels.</p>
            <Slideshow :images="imageList2" />
           
            <h2>Mittelrhein-Tal</h2>
            <p>Das Mittelrheintal, oft als Oberes Mittelrheintal bezeichnet, ist eine rund 65 Kilometer lange Flusslandschaft zwischen Bingen/Rüdesheim und Koblenz. Eine der bekanntesten Sehenswürdigkeiten ist der Loreley-Felsen, der mit der gleichnamigen Sage verbunden ist.</p>
            <Slideshow :images="imageList3" />
           
        </ul>
    </div>
</template>

<style scoped>

</style>

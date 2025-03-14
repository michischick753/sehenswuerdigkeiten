<script setup>
import Slideshow from '../components/Slideshow.vue';

import SchlossDhaun from '@/assets/castle/SchlossDhaun.jpg';
import SchlossDhaungate from '@/assets/castle/SchlossDhaungate.jpg';
import SchlossDhauntop from '@/assets/castle/SchlossDhauntop.jpeg';
import Ehrenbreitstein_top from '@/assets/castle/Ehrenbreitstein_top.jpg';
import Ehrenbreitstein_u_Koblenz from '@/assets/castle/Ehrenbreitstein_u_Koblenz.jpg';
import Ehrenbreitstein_water from '@/assets/castle/Ehrenbreitstein_water.jpg';
import Ebernburg from '@/assets/castle/Ebernburg.jpg';
import Ebernburg_far from '@/assets/castle/Ebernburg_far.jpg';
import Ebernburg_bridge from '@/assets/castle/Ebernburg_bridge.jpg';

const imageList = [
SchlossDhaun,
SchlossDhaungate,
SchlossDhauntop
];

const imageList2 = [
Ehrenbreitstein_top,
Ehrenbreitstein_u_Koblenz,
Ehrenbreitstein_water
];

const imageList3 = [
Ebernburg,
Ebernburg_far,
Ebernburg_bridge
];
</script>


<template>
    <title>Burgen, Festungen und Schlösser in Rheinland-Pfalz</title>
    <header>
      <h1>Burgen, Festungen & Schlösser in Rheinland-Pfalz</h1>
    </header>
      <div class="container">
        <p>Hier finden Sie beeindruckende Fakten und Bilder zu Burgen und Festungen in Rheinland-Pfalz</p>
        <ul>
            <h2>Schloss Dhaun</h2>
            <p>Schloss Dhaun ist eine historische Schlossanlage im Hunsrück, Rheinland-Pfalz, nahe der Stadt Kirn. Die Ursprünge reichen bis ins 12. Jahrhundert zurück. Im 18. Jahrhundert wurde die Anlage zu einem barocken Schloss umgebaut.</p>
            <Slideshow :images="imageList" />
            
            <h2>Festung Ehrenbreitstein</h2>
            <p>Die Festung Ehrenbreitstein liegt hoch über dem Rhein in Koblenz und ist eine der größten erhaltenen Festungsanlagen Europas. Von der Festung aus hat man eine spektakuläre Aussicht auf das Deutsche Eck.</p>
            <Slideshow :images="imageList2" />

            <h2>Ebernburg</h2>
            <p>Die Ebernburg oberhalb von Bad Kreuznach wurde im Mittelalter errichtet und spielte eine wichtige Rolle in der Reformationszeit. Von der Burg aus hat man eine wunderschöne Aussicht auf das Nahetal.</p>
            <Slideshow :images="imageList3" />

        </ul>
    </div>
  </template>
  
  <style scoped>
  </style>
  
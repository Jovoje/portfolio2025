<script setup>
import mig from '../assets/school/mig.jpeg'
</script>

<template>
  <div class="about-container">
    <div class="in">
      Hi!  
      I’m Josefine Vöge Jensen <br><br>
      I’m a 23-year-old visual communication student based in Copenhagen, currently studying Coded Design <br>at the Danish School of Media and Journalism. <br> My main interests lie in game design, interaction design, <br> and visual storytelling. <br> I’m currently seeking an internship starting in October 2025.
    </div>

    <div class="image">
      <img :src="mig" alt="mig" />
    </div>
  </div>
</template>

<style>
.about-container {
  display: flex;
  align-items: flex-start; /* juster lodret */
  gap: 3rem; /* afstand mellem tekst og billede */
  margin-left: 8vw;
  margin-top: 6vw;
  font-size: large;
}

.in {
  width: 35vw;
  max-width: 600px;
  line-height: 1.6;
}

.image img {
    margin-top: 1vw;
  width: 200px;
  height: 200px;
  border-radius: 2px;
  transition: transform 0.4s cubic-bezier(0.25, 1.25, 0.5, 1);
}

.image img:hover {
  transform: scale(1.08);
}
</style>

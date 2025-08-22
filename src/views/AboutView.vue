<script setup>
import mig from '../assets/school/migny.png'
</script>

<template>
  <div class="about-container">
    <div class="in">
      <h1>Hi!  I’m Josefine Vöge Jensen</h1> <br>
      I’m a 23-year-old student based in Copenhagen,<br>currently studying Coded Design, visual communication at the Danish School of Media and Journalism. <br> My main interests lie in game design, interaction design, <br> and visual storytelling. <br> I’m currently seeking an internship starting in October 2025.
    </div>

    <div class="image">
      <img :src="mig" alt="mig" />
    </div>
  </div>
  <hr class="divider" />

  

  <section class="cv-section">
    <h2 class="cv-title">CV</h2>
    
    <div class="cv-entry">
      <div class="cv-year">2023 – 2026</div>
      <div class="cv-info">
        <strong>Danish School of Media and Journalism</strong><br>
        Bachelor Degree in Visual Communication – Coded Design
      </div>
    </div>

    <div class="cv-entry">
      <div class="cv-year">2022</div>
      <div class="cv-info">
        <strong>Modus Design Course</strong><br>
        Drawing and design program
      </div>
    </div>

    <div class="cv-entry">
      <div class="cv-year">2018-2021</div>
      <div class="cv-info">
        <strong>Gammel Hellerup Gymnasium</strong><br>
        A-level Ancient Greek and Latin
      </div>
        </div> <div class="cv-entry">
      <div class="cv-year">2017-2018</div>
      <div class="cv-info">
        <strong>Medieskolen Lyngby</strong><br>
        Graphic Design 
      </div>
    </div>
  </section>
</template>


<style>

.divider {
  border: none;          /* fjerner standard stregen */
  height: 1px;           /* tykkelse */
  background: #ffffff;      /* farve */
  margin: 3rem 8vw;      /* luft over/under + samme margin som din tekst */

           /* gør den lidt subtil */
}

.about-container {
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  margin-left: 8vw;
  margin-top: 6vw;
  font-size: large;
  font-family: Outfit, sans-serif;
  font-weight: 200;
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

/* ---- MOBIL LAYOUT ---- */
@media (max-width: 768px) {
  .about-container {
    flex-direction: column;   /* skift til lodret layout */
    align-items: center;      /* centrer begge dele */
    margin-left: 0;           /* fjern venstre margin */
    margin-top: 12vw;
    text-align: center;
  }

  .in {
    width: 85%;               /* gør teksten smallere så den er let at læse */
    max-width: 100%;
    font-size: 1rem;          /* lidt mindre font */
  }

  .image img {
    margin-top: 2rem;
    width: 180px;             /* evt. lidt mindre billede */
    height: 180px;
  }
}

.cv-section {
  margin: 4rem 8vw;
  color: white;
    font-family: Outfit, sans-serif;
      font-weight: 200;
}

.cv-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding-bottom: 0.5rem;
}

.cv-entry {
  display: flex;
  gap: 2rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.5); /* hvide streger */
}

.cv-entry:last-child {
  border-bottom: none; /* fjern streg under sidste */
}

.cv-year {
  min-width: 120px;
  font-weight: bold;
  color: #bbb;
}

.cv-info {
  flex: 1;
  line-height: 1.6;
}

</style>

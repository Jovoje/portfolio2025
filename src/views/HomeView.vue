<script setup>
import baggrund5 from '../assets/school/baggrund5.jpg'
import baggrund4 from '../assets/school/baggrund4.jpg'
import baggrund2 from '../assets/school/background2.png'

const lines = [
  "Portfolio of Josefine Vöge Jensen,",
  "Coded Design student",
  "at DMJX in Copenhagen."
]
</script>

<template>

  <div class="infbox">
    <div class="text">
      <p v-for="(line, lineIndex) in lines" :key="lineIndex">
        <span 
          v-for="(word, wordIndex) in line.split(' ')" 
          :key="wordIndex"
        >
          {{ word }}
        </span>
      </p>
    </div>
  </div>
</template>

<style>

p {
  line-height: 1.6;
}

p span {
  margin-right: 0.4rem; 
  cursor: pointer;
  transition: font-weight 0.2s ease;
}

p span:hover {
  font-weight: bold;
}

body {
  font-family: 'Outfit', sans-serif;
  margin: 0;
  color: white;
}

.infbox {
  font-family: 'Outfit', sans-serif;
  font-weight: 300;
  font-size: 30px;
  margin-left: 8vw; 
  margin-top: 6vw;
}

.text {
  flex: 0 0 auto;
  text-align: left; 
}

.image img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.4s cubic-bezier(0.25, 1.25, 0.5, 1);
}

.image img:hover {
  transform: scale(1.08);
}


/* Tablet */
@media (max-width: 1024px) {
  .infbox {
    font-size: 24px;    
    margin-left: 6vw;
    margin-top: 10vw;
  }
}

/* Mobil */
@media (max-width: 600px) {
  .infbox {
    font-size: 18px;     
    margin-left: 5vw;
    margin-top: 25vw;    
    line-height: 1.4;
    max-width: 90vw;     
  }

  p span {
    margin-right: 0.25rem;
  }
}

</style>



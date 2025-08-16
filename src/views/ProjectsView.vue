<script setup>
import { ref, onMounted } from 'vue'
import underwater from '../assets/school/underwater.png'
import projectionMapping from '../assets/school/projection.jpeg'
import experienceSite from '../assets/school/underisen.png'
import collum from '../assets/school/collum.png'
import threejs from '../assets/school/threejs.png'
import projectionMappingVideo from '../assets/school/projection_compressed.mp4'
import studentCard from '../assets/school/studentcard.png'  
import mainFinal from '../assets/school/mainFinal.png'
import elements from '../assets/school/elements.png'
import skærmoptagelse from '../assets/school/havet_compressed.mp4'
import foru from '../assets/school/Foru.png'
import snart1 from '../assets/school/snart1.jpeg'
import snart2 from '../assets/school/snart2.jpeg'
import snartvid from '../assets/school/snartvid_compressed.mp4'
import wireframe1 from '../assets/school/wireframe1.png'
import wireframe2 from '../assets/school/wireframe2.png'
import underisen from '../assets/school/underisen.png'
import isvideo from '../assets/school/underisen_compressed.mp4'
import collumvid from '../assets/school/collumvid_compressed.mp4'
import wireco from '../assets/school/wireco.png'
import interaktiv from '../assets/school/inter_compressed.mp4'
import three from '../assets/school/three_compressed.mp4'
import disney from '../assets/school/disney_compressed.mp4'
import mod from '../assets/school/mod.png'
import virum from '../assets/school/virum.png'
import ceramic from '../assets/school/ceramic_compressed.mp4'
import arctic from '../assets/school/arctic.png'
import pidag from '../assets/school/pidag.png'
import planet from '../assets/school/planet.png'
import mood from '../assets/school/mood.jpeg'
import heart from '../assets/school/heart.png'
import zones from '../assets/school/zones.png'
import color from '../assets/school/color.png'
import pivid from '../assets/school/pivid_compressed.mp4'
import pii from '../assets/school/pii.png'
import proj from '../assets/school/proj_compressed.mp4'
import sketch from '../assets/school/sketch.png'
const projects = [

  { id: 1, 
    title: 'second year exam', 
    subtitle: 'game design and virtual worlds, 2025', 
    image: underwater, 
    description: '...', 
    modalTitle: 'Second Year Exam – Havet Under Pres',   modalSubtitle: 'Concept, prototyping, Unity',
    modalGallery: [
  { type: 'video', src: skærmoptagelse },
  { type: 'image', src: zones },
  { type: 'image', src: elements }, 
  { type: 'image', src: color }],   // 3 billeder i venstre kolonne
    modalDescription: 
    ` <p>As my second-year exam project, which focused on experience design, I created a 2D game in Unity, inspired by pixel art and retro platformer games.</p>

      <p>The overall task was to design a learning experience for school children aged 10–13, helping them understand the challenges facing the Danish seas.</p>

      <p>The game presents topics such as pollution, overfishing, and oxygen depletion in a simple, visual way, combined with fact-based text.</p>

      <p>The exam project was created right after completing a game design course, where I learned the basics of Unity structure, 2D and 3D worlds, and simple game mechanics.</p>` },



  { id: 2, title: 'projection mapping', subtitle: 'experience design, 2025', video: projectionMappingVideo, description: '...',
    modalGallery: [
  { type: 'video', src: proj },
  { type: 'video', src: snartvid},
  { type: 'image', src: sketch },],
  modalDescription: 
  ` <p>In collaboration with <em>Soon – Lab for Possible Futures</em>, Generation Hope and the Thoravej 29 community, an exhibition of “future letters” written by young people was created.
    <p> The project followed a course on experience design and projection mapping, where the class was tasked with projecting an interpretation of the future letters onto a vase. </p> <p> My goal was to take drawings from the letters and animate them into a dynamic video. The exhibition ran from April 2025.</p>
    <p>The course on experience design and projection mapping delved into creating interactive experiences within spaces and on objects, and into the practice of mapping coded or animated content onto various surfaces.</p>
` },

  { id: 3, title: 'experience site', subtitle: 'experience design, 2025', image: experienceSite, description: '...',   
  modalGallery: [
  { type: 'video', src: isvideo },
  { type: 'image', src: wireframe1 },
  { type: 'image', src: wireframe2 },],
  modalDescription: 
  ` In a course on experience sites, I was tasked with creating a website that would, in an abstract way, embrace the political discussion around Donald Trump’s wish to purchase Greenland. I developed an experiential site where visitors can explore and investigate the minerals and natural resources that Greenland possesses.` },




  { id: 4, title: '3rd semester exam', subtitle: 'identity and visualization, 2024', image: collum, description: '...',
  modalGallery: [
  { type: 'video', src: collumvid },
  { type: 'image', src: wireco },
  { type: 'video', src: interaktiv },],
  modalDescription: 
  ` In a course on experience sites, I was tasked with creating a website that would, in an abstract way, embrace the political discussion around Donald Trump’s wish to purchase Greenland. I developed an experiential site where visitors can explore and investigate the minerals and natural resources that Greenland possesses.` },
    
  { id: 5, title: '3D worlds', subtitle: 'identity and visualization, 2024', video: three, description: '...' },
  
  { id: 7, title: '1st year exam', subtitle: 'front and back, 2024', image: mainFinal, description: '...' },
  { id: 8, title: 'student cards redesign', subtitle: 'front and back, 2024', image: studentCard, description: '...' },
  { id: 9, title: 'motion graphics', subtitle: 'motion design and living pictures, 2024', video: disney, description: '...' },
  { id: 17, title: '1st semester exam', subtitle: 'visualization and creativity, 2023', image: arctic, description: '...' },
  { id: 10, title: '3D modeling', subtitle: 'Kategori, 2023', image: mod, description: '...' },
  { id: 11, title: 'processing', subtitle: 'creative coding, 2023', image: pidag, description: '...',modalGallery: [
  { type: 'video', src: pivid },
  { type: 'image', src: pii },
  { type: 'video', src: interaktiv },],
  modalDescription: 
  ` In a course on experience sites, I was tasked with creating a website that would, in an abstract way, embrace the political discussion around Donald Trump’s wish to purchase Greenland. I developed an experiential site where visitors can explore and investigate the minerals and natural resources that Greenland possesses.` },
  { id: 12, title: 'virtual ceramics', subtitle: 'creative coding, 2023', video: ceramic, description: '...' },
  { id: 13, title: 'redesign project', subtitle: 'modus design course, 2023', image: planet, description: '...' },
  { id: 14, title: 'visual interpretation of a news article', subtitle: 'modus design course, 2023', image: mood, description: '...' },
  { id: 15, title: 'virumhallen', subtitle: 'medieskolen lyngby, 2018', image: virum, description: '...' },
  { id: 16, title: 'heart result logo', subtitle: 'medieskolen lyngby, 2017', image: heart, description: '...' }
]

const variants = ['normal','tall','wide','big']
projects.forEach(p => { p.variant = 'normal' }) 

onMounted(() => {
  projects.forEach(p => {
    const r = Math.random()
    if (r > 0.82) p.variant = 'big'
    else if (r > 0.65) p.variant = 'wide'
    else if (r > 0.48) p.variant = 'tall'
  })
})

const showModal = ref(false)
const selectedProject = ref(null)
const openProject = (project) => {
  selectedProject.value = project
  showModal.value = true
  document.documentElement.classList.add('no-scroll') 
}

const closeModal = () => {
  showModal.value = false
  selectedProject.value = null
  document.documentElement.classList.remove('no-scroll') 
}
</script>




<template>
  <div class="grid">
    <div
      v-for="project in projects"
      :key="project.id"
      class="card"
      @click="openProject(project)"
    >
      <template v-if="project.video">
        <video
          class="card-media"
          :src="project.video"
          autoplay
          muted
          loop
          playsinline
        ></video>
      </template>
      <template v-else>
        <img :src="project.image" alt="" class="card-media" />
      </template>

      <div class="card-content">
        <div class="card-title">{{ project.title }}</div>
        <div class="card-subtitle">{{ project.subtitle }}</div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <span class="modal-close" @click="closeModal">&times;</span>

      <!-- Header -->
      <div class="modal-header">
        <h2>{{ selectedProject?.modalTitle || selectedProject?.title }}</h2>
        <p class="modal-subtitle">
          {{ selectedProject?.modalSubtitle || selectedProject?.subtitle }}
        </p>
      </div>

      <div class="modal-content">
        <!-- Venstre side: galleri ELLER fallback -->
        <div class="modal-images">
  <!-- Galleri (billeder + videoer) -->
  <template v-if="selectedProject && selectedProject.modalGallery && selectedProject.modalGallery.length">
    <div class="media" v-for="(item, i) in selectedProject.modalGallery" :key="`gallery-${i}`">
      <img
        v-if="item.type === 'image'"
        :src="item.src"
        alt="modal image"
      />
      <video
        v-else-if="item.type === 'video'"
        :src="item.src"
        autoplay
        muted
        loop
        playsinline
        controls
        class="modal-video"
      ></video>
    </div>
  </template>

  <!-- Fallback hvis ingen modalGallery -->
  <template v-else>
    <div class="media" v-if="selectedProject?.video">
      <video
        :src="selectedProject.video"
        autoplay
        muted
        loop
        playsinline
        controls
        class="modal-video"
      ></video>
    </div>
    <div class="media" v-else-if="selectedProject?.image">
      <img
        :src="selectedProject.image"
        alt="modal image"
      />
    </div>
  </template>
</div>


        <!-- Højre side: tekst -->
        <div class="modal-text">
          <div v-if="selectedProject.modalDescription" v-html="selectedProject.modalDescription"></div>

        </div>
      </div>
    </div>
  </div>
</template>




<style>
body {
  margin: 0;
  background-color: #111;
  font-family: sans-serif;
  color: white;
  padding-top: 5rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.card {
background-color: rgba(0, 0, 0, 0.5); /* sort med 70% opacitet */
  overflow: hidden;
  /* border-radius: 2px; */
  cursor: pointer;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.01);
}

.card-media {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}


.card-content {
  padding: 0.75rem;
}

.card-title {
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.card-subtitle {
  color: #a1a1a1;
  font-size: 0.85rem;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal {
  position: relative;
  background: #000000;
  width: 90vw;       
  height: 86vh;     
  padding: 2rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  color: white;
  box-shadow: 0 0 30px rgba(0,0,0,0.8);
  overflow: hidden;  
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: #aaa;
  cursor: pointer;
}

.modal-close:hover {
  color: white;
}

/* --- MODAL LAYOUT --- */
.modal-content {
  display: flex;
  gap: 2rem;
  height: 100%;
}

.modal-images {
  flex: 0 0 65%;
  display: grid;
  grid-template-columns: 1fr; /* én kolonne */
  gap: 1rem;
  overflow-y: auto;
  padding-right: 0.5rem;
  align-content: start;
}

.modal-images img,
.modal-images video {
  width: 100%;
  height: auto;              
  object-fit: contain;       
  background: #000;
  border-radius: 4px;
  display: block;
}

/* Højre kolonne: tekst */
.modal-text {
  flex: 1;
  overflow-y: auto;
  padding-left: 1.5rem;
  padding-right: 0.5rem;
  font-size: 1rem;
  line-height: 1.75;
  color: #ddd;
}

.modal-text p {
  margin-bottom: 1.4rem;
}

.modal-text p { margin-bottom: 2.6rem;  line-height: 2.2; } .modal-header { margin-bottom: 0.75rem; } .modal-header h2 { margin: 0 0 0.25rem 0; font-size: 1.25rem; } .modal-subtitle { margin: 0; color: #43548c; font-size: 0.95rem; }

.media {
  scroll-snap-align: start;
}

.modal-images {
  flex: 0 0 65%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  overflow-y: auto;
  padding-right: 0.5rem;
  align-content: start;
  scroll-snap-type: y mandatory;
}

.modal-images img,
.modal-images video {
  width: 100%;
  height: auto;
  object-fit: contain;
  background: #000;
  border-radius: 4px;
  display: block;
}

/* --- MOBILE OPTIMERING --- */
@media (max-width: 768px) {
  .modal {
    width: 95vw;
    height: 90vh;
    padding: 1rem;
  }

  .modal-content {
    flex-direction: column;   
    gap: 1rem;
  }

  .modal-images {
    flex: none;
    max-height: 50vh;      
    scroll-snap-type: y mandatory;
  }

  .modal-text {
    padding: 0;
    font-size: 0.9rem;
    line-height: 1.5;
  }
}

</style>

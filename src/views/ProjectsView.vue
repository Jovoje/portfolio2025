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
import ceramic from '../assets/school/cervid3_compressed.mp4'
import ceramic2 from '../assets/school/cervid2_compressed.mp4'
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
import fysisk from '../assets/school/Fysisk_compressed.mp4'
import wib1 from '../assets/school/wib1.png'
import wib2 from '../assets/school/wib2.png'    
import wib3 from '../assets/school/wib3.png'
import kampagne from '../assets/school/Kampagne_compressed.mp4'
import stucard from '../assets/school/stucard.png'
import stucard2 from '../assets/school/stucard2.png'
import motion from '../assets/school/motion1_compressed.mp4'
import arc2 from '../assets/school/arc2.png'
import arcvid from '../assets/school/arcvid_compressed.mp4'
import amal from '../assets/school/amal.png'
import d1 from '../assets/school/3dmod1.png'
import d2 from '../assets/school/3dmod2.png'
import modus1 from '../assets/school/modus1.png'
import modus2 from '../assets/school/modus2.png'
import modus3 from '../assets/school/modus3.png'
import modus4 from '../assets/school/modus4.png'
import artikel2 from '../assets/school/artikel2.png'
import artikel from '../assets/school/artikel.png'
import virum2 from '../assets/school/virum2.png'
import wibf from '../assets/school/wibfinal.png'
import underis1 from '../assets/school/underis.png'
import underis2 from '../assets/school/underis2.png'
import wib4 from '../assets/school/wib4.png'

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
    ` <p>As my second-year exam project, which focused on experience design, I created a 2D game in Unity, inspired by pixel art and retro platform games.</p>
The overall task was to design a learning experience for school children aged 10–13, helping them understand the challenges facing the Danish seas.
The game presents topics such as pollution, overfishing, and oxygen depletion in a simple, visual way, combined with fact-based text.</p>

      <p>The exam project was created right after completing a game design course, where I learned the basics of Unity structure, 2D and 3D worlds, and simple game mechanics.</p>` },



  { id: 2, title: 'projection mapping', subtitle: 'experience design, 2025', video: projectionMappingVideo, description: '...',
    modalGallery: [
  { type: 'video', src: proj },
  { type: 'video', src: snartvid},
  { type: 'image', src: sketch },],
  modalDescription: 
  ` <p>In collaboration with <em>Soon – Lab for Possible Futures</em> and <em>Generation Hope </em>, an exhibition of “future letters” written by young people was created. The exhibition ran from April 2025.  </p>
    <p> The project followed a course on experience design and projection mapping, where the class was tasked with projecting an interpretation of the future letters onto a vase. </p>
    <p>The course on experience design and projection mapping delved into creating interactive experiences within spaces and on objects, and into the practice of mapping coded or animated content onto various surfaces.</p>
` },

  { id: 3, title: 'experience site', subtitle: 'experience design, 2025', image: experienceSite, description: '...',   
  modalGallery: [
  { type: 'video', src: isvideo },
  { type: 'image', src: underis2 },
  { type: 'image', src: underis1 },],
  modalDescription: 
  ` <p>''Under isen'' is an experience website I created in response to an assignment to interpret the political situation surrounding Donald Trump’s interest in Greenland and translate it into an interactive digital experience. The brief was relatively open, and I chose to focus on Greenland’s minerals and natural resources, which were central to Trump’s ambitions. </p> 
    <p> The final site was aimed at a younger audience and took the form of a playful experience where users are challenged to uncover ten hidden objects beneath the ice.
        For the visual identity, I explored Adobe Illustrator’s new AI-generator to design various assets, while the site itself was built using HTML, CSS, and JavaScript. </p>` },




  { id: 4, title: '3rd semester exam', subtitle: 'identity and visualization, 2024', image: collum, description: '...',
  modalGallery: [
  { type: 'video', src: collumvid },
  { type: 'image', src: wireco },
  { type: 'video', src: interaktiv },],
  modalDescription: 
  ` <p>Collum is an app I designed as part of my 3rd semester exam project. The assignment was to create a digital tool aimed at helping young people with neck-related issues. The app combines a clean visual layout with a front page, a dashboard, and an interactive feature that allows users to actively prevent or ease existing neck pain. <p>

 <p> The app was prototyped in Figma, while the interactive feature was coded using JavaScript, CSS, and HTML. This feature highlights different pain points in the neck, which users can interact with to receive targeted exercises designed to relieve discomfort. The videos used in the prototype are placeholders sourced from the web. <p>` },
    
  { id: 5, title: '3D worlds', subtitle: 'identity and visualization, 2024', video: three, description: '...', 
    modalDescription: 
    ` <p>In a course on 3D worlds, I created a 3D model of a deserted landscape using the Javascript library Three.js. The assignment was part of a storytelling course, where the task was to create a short narrative told through a 3D environment.</p>
      <p> Through the process, I gained hands-on experience with Three.js and learned how to structure and optimize a small 3D world for the web. The result was a playful prototype that combined narrative design with real-time rendering, showing how interactive worlds can act as both storytelling devices and creative experiments.</p>`
  },

  
  { id: 7, title: '1st year exam', subtitle: 'front and back, 2024', image: wibf, description: '...',
      modalGallery: [
  { type: 'image', src: wib1 },
  { type: 'image', src: wib2 },
  { type: 'image', src: wib4 },
  { type: 'image', src: wib3 },
  { type: 'video', src: kampagne },
    { type: 'video', src: fysisk },

    
],
  modalDescription: 
  ` <p> “While in Battle I’m Free, Never Free to Rest” was a contemporary dance performance showcased at Blågårds Plads in Copenhagen during the summer of 2024. As an exam project, we were tasked with creating a visual identity, a campaign website, and an interactive feature to be exhibited physically during the performance. </p>

  <p> The project became an exploration of the body’s dynamics and movement in dance, intertwined with themes of war, division, and liberation of the body.

  Through multiple iterations and sketches, we developed a distinctive visual style (image 1), a campaign site designed to express dynamics through shifting colors, and an interactive feature – a touch screen installation where users could assemble their own composition of “body parts” taken from our poster design. </p>

  <p>The project was created in collaboration with my classmate Alberte Stærmose. </p>` },




  { id: 8, title: 'student cards redesign', subtitle: 'front and back, 2024', image: studentCard, description: '...',    
  modalGallery: [
  { type: 'image', src: stucard },
  { type: 'image', src: stucard2 }],
  modalDescription: 
  ` <p> As part of a group project with five classmates, we were tasked with selecting an everyday object and redesigning it. We chose our student ID cards, which are usually very basic, formal, and purely informational. </p>
   <p> Through experimentation, we explored how Processing could be integrated into the design process. We mapped the four study directions of our program (ID, CD, KK, and GD) into generative visual patterns created in Processing. The result was a series of redesigned student cards that combine function with a more playful and expressive identity. </p>` },
 
 
   { id: 9, title: 'motion graphics', subtitle: 'motion design and living pictures, 2024', video: disney, description: '...',
          modalGallery: [
  { type: 'video', src: motion }],
  modalDescription:
` <p> As part of a course in motion graphics, we were tasked with creating a short video about a well-known animator. My group was assigned Walt Disney, and we produced a one-and-a-half-minute video that explored both his legacy and the possibilities of Adobe After Effects. </p> <p> The project became an exercise in experimenting with visual effects, layered compositions, and different animation techniques. It was both a technical and creative exploration, giving me hands-on experience in how motion graphics can be used to communicate storytelling in a dynamic way. </p>` },
  


{ id: 17, title: '1st semester exam', subtitle: 'visualization and creativity, 2023', image: arctic, description: '...',
    modalGallery: [
  { type: 'image', src: arctic },
  { type: 'image', src: arc2 },
  { type: 'video', src: arcvid }],
  modalDescription: 
  ` <p> As part of a group project with five classmates, we were tasked with selecting an everyday object and redesigning it. We chose our student ID cards, which are usually very basic, formal, and purely informational. </p>
   <p> Through experimentation, we explored how Processing could be integrated into the design process. We mapped the four study directions of our program (ID, CD, KK, and GD) into generative visual patterns created in Processing. The result was a series of redesigned student cards that combine function with a more playful and expressive identity. </p>` },

  { id: 10, title: '3D modeling', subtitle: 'Kategori, 2023', image: mod, description: '...',modalGallery: [
  { type: 'image', src: d2 },
  { type: 'image', src: d1 },],
  modalDescription: 
  ` <p> As part of learning 3D modeling in Blender, we were tasked with creating an island of our own design, with complete freedom in theme and visual style. </p> <p> I drew inspiration from one of my favorite childhood games; Spore, and designed a small representative island. </p>` },
  { id: 11, title: 'processing', subtitle: 'creative coding, 2023', image: pidag, description: '...',modalGallery: [
  { type: 'video', src: pivid },
  { type: 'image', src: pii },],
  modalDescription: 
  ` <p>For the official Pi Day at the University of Copenhagen, we were tasked with designing a dynamic poster in Processing, which visually represented the number π. </p> <p>Using generative design, I explored ways of representing the mathematical constant π as a visual, animated expression.</p>` },
  
  { id: 12, title: 'virtual ceramics', subtitle: 'creative coding, 2023', video: ceramic, description: '...', modalGallery: [
  { type: 'video', src: ceramic },
  { type: 'video', src: ceramic2 },
  { type: 'image', src: amal },],
  modalDescription: ` <p> This project was a playful experiment during my learning of Processing. </p> <p> I worked with ceramic sculptures created by my sister,  <a href="https://www.instagram.com/amalievoge" target="_blank" rel="noopener noreferrer"> 
      Amalie Vöge
    </a> and translated them into digital 3D forms. </p>`  },


  { id: 13, title: 'redesign project', subtitle: 'modus design course, 2023', image: modus3, description: '...',
  modalGallery: [
  { type: 'image', src: modus1 },
  { type: 'image', src: modus2 },
  { type: 'image', src: modus3 },
  { type: 'image', src: modus4 },],
 
  modalDescription: ` <p> During a design course at Modus, we explored the concept of redesign. A key focus of the course was the use of sketchbooks as a tool to support the design process. The assignment was simple: choose any object and reinterpret its visual expression. </p> <p> I chose the visual identity of Tycho Brahe Planetarium in Copenhagen, a building I personally admire. Through sketches and drawings, I investigated its structures and patterns, which eventually led me to create a poster with the theme ‘Open Up to the Universe.’ </p> (Disclaimer: this was a conceptual project and not used in practice.`  },
  
  
  { id: 14, title: 'visual interpretation of a news article', subtitle: 'modus design course, 2023', image: mood, description: '...',
     modalGallery: [
  { type: 'image', src: mood },
  { type: 'image', src: artikel },
  { type: 'image', src: artikel2 },],
 
  modalDescription: ` <p> This was a design assignment where I was asked to select a news article and interpret it visually.
The article I chose focused on misdiagnosis and the serious consequences it can have on an individual. </p>
<p> Throughout the creative process, I worked with moodboards and collage techniques to explore and express the themes of the article. </p>`  },

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
  flex: 0 0 75%;
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
  color: #ddd;
  font-family: Work Sans, sans-serif;
  font-weight: 300;
}

.modal-header {
  font-weight: 600;
  font-family: Outfit, sans-serif;
}

.modal-text p { margin-bottom: 1.6rem;  line-height: 1.8; } .modal-header  .modal-header h2 { margin: 0 0 0.25rem 0; font-size: 1.25rem; } .modal-subtitle { margin: 0; color: #6e6e6e; font-size: 0.95rem; }

.media {
  scroll-snap-align: none;
}

.modal-text a {
  color: #ffffff;       /* hvid tekst (eller en anden farve du vil have) */
  text-decoration: none; /* fjern standard underline */
  transition: border-bottom 0.2s ease;
}

.modal-text a:hover {
  border-bottom: 1px solid #ffffff; /* underline-effekt ved hover */
}



.modal-images {
  flex: 0 0 65%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  overflow-y: auto;
  padding-right: 0.5rem;
  align-content: start;
  scroll-snap-type: none;
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
    scroll-snap-type: none;
  }

  .modal-text {
    padding: 0;
    font-size: 0.9rem;
    line-height: 1.7;
  }
}

</style>

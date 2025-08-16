<script>
import Home from './views/HomeView.vue'
import About from './views/AboutView.vue'
import Contact from './views/ContactView.vue'
import Projects from './views/ProjectsView.vue'

// IMPORTÉR BAGGRUND
import bg from './assets/school/background2.png'

const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
  '/projects': Projects,
}

export default {
  data() {
    return {
      currentPath: window.location.hash,
      bg, // gør billedet tilgængeligt i templaten
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || null
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}
</script>

<template>
  <!-- FAST BAGGRUND -->
  <img class="bg" :src="bg" alt="" aria-hidden="true" />

  <!-- undgå <body> i templates, men hvis du vil beholde det, kan du udskifte div'en med body -->
  <div class="app-shell">
    <nav class="navbar">
      <ul class="navbar-left">
        <li><a href="/">home</a></li>
      </ul>
      <ul class="navbar-right">
        <li><a href="#/projects">projects</a></li>
        <li><a href="#/about">about</a></li>
        <li><a href="#/contact">contact</a></li>
      </ul>
    </nav>

    <component :is="currentView" />
  </div>
</template>

<style>
/* Nulstil baggrundsfarve så billedet ses korrekt */
body {
  background: transparent !important;
  font-family: 'Outfit', sans-serif;
  color: white;
  margin: 0;
  padding-top: 70px; /* giver plads til navbar */
}

/* FAST, ROBUST BAGGRUND DER VIRKER PÅ MOBIL */
.bg {
  position: fixed;
  inset: 0;
  width: 100vw;
  /* håndterer iOS’ dynamiske viewport */
  height: 100vh;
  height: 100dvh;
  height: 100svh;

  object-fit: cover;       /* svarer til background-size: cover */
  object-position: center; /* justér hvis motivet skal “fokusere” et andet sted */
  z-index: -1;
  pointer-events: none;    /* klik går igennem til indholdet */
}

.app-shell {
  /* tom wrapper så vi ikke bruger <body> i templaten */
}

/* NAVBAR */
.nothing-you-could-do-regular {
  font-family: "Nothing You Could Do", cursive;
  font-weight: 400;
  font-style: normal;
}

.navbar {
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: transparent;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3vw;
  z-index: 10;
}

.navbar-left,
.navbar-right {
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar li a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-size: 1rem;
}

.navbar li a:hover {
  color: #979797;
  transition: 0.5s;
}

/* (valgfrit) finjustér beskæringen på mobil */
@media (max-width: 768px) {
  .bg { object-position: center 30%; }
}
</style>

<script>
import Home from './views/HomeView.vue'
import About from './views/AboutView.vue'
import Contact from './views/ContactView.vue'
import Projects from './views/ProjectsView.vue'



const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
  '/projects': Projects,
}

export default {
  data() {
    return {
      currentPath: window.location.hash
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

  <body>
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
  </body>
</template>


<style>

.nothing-you-could-do-regular {
  font-family: "Nothing You Could Do", cursive;
  font-weight: 400;
  font-style: normal;
}


body {
  
  background-color: #141414;
  font-family: 'Outfit', sans-serif;
  color: white;
  margin: 0;
  padding-top: 70px; /* giver plads til navbar */
}

.navbar-container {
  position: relative;
  width: 100%;
  height: 70px; /* giver plads til navbar */
  margin: 30px 0 0 0; /* giver plads til navbar */
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




</style>
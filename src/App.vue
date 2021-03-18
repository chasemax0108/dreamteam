<template>
  <div id="app">
    <div id="header">
      <img id="logo" src="./assets/main_logo.png">
      <div id="nav">
        <router-link to="/" class="link">Players</router-link>
        <router-link to="/myteam" class="link">My Team ({{playerCount}})</router-link>
      </div>
    </div>
    <router-view/>
    <footer>
      <p>The code for this website can be found on <a href="https://github.com/chasemax0108/dreamteam">Github</a></p>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    playerCount() {
      return this.$root.$data.team.length;
    }
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg fill-opacity='0.82'%3E%3Cpolygon fill='%23282828' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23515151' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23797979' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23a2a2a2' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23cacaca' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}

footer {
  background-color: #FFF;
  width: 100%;
  padding: 10px;
  text-align: center;
}

h1, button, .link {
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
}

p {
   font-family: 'Barlow Condensed', sans-serif;
}

#logo {
  width: 370px;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#nav {
  display: flex;
  margin-bottom: 10px;
  justify-content: space-evenly;
  width: 375px;
}

.link {
  text-decoration: none;
  background-color: #0C6;
  color: #FFF;
  display: block;
  padding: 10px;
  width: 175px;
  text-align: center;
}

@media only screen and (min-width: 700px) {
  #header {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  #nav {
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
    margin-right: 20px;
    justify-content: flex-start;
  }
  .link {
    margin-top: 20px;
  }

  #app {
    align-items: flex-start;
  }
}
</style>

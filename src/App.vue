<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Weights' }">Weights</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Distances' }">Distances</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Speeds' }">Speeds</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <section>
      <router-view/>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function () {
    console.log('App.created')
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
/* Page structure */
#app {
  margin: 0;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
  color: black;
}
#app > header {
  margin: 0;
  margin-bottom: 0.125rem;
  padding: 0;
  background-color: #004488;
  color: black;
}
#app > section {
  height: 100%;
  overflow-y: auto;
}
#app > footer {
  margin-top: 0.12rem;
  background-color: #004488;
}
/* Header Menu */
header > nav {
  margin: 0.24rem;
  padding: 0;
  border: none;
}
header > nav ul {
  margin: 0;
  padding: 0;
  border: none;
  /* Sub-Layout */
  display: flex;
  flex-direction: row wrap;
}
header > nav li {
  margin: 0.24rem;
  padding: 0;
  flex: 1 1 100%;
  list-style-type: none;
}
header > nav li:first-of-type {
  margin-left: 0.12rem;
}
header > nav li:last-of-type {
  margin-right: 0.12rem;
}
header > nav a {
  display: inline-block;
  width: 100%;
  min-height: 2rem;
  line-height: 2rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  text-decoration: none;
  border-radius: 0.5rem;
  border: 0.12rem #08e8de solid;
  background-color: #004488;
  color: #08e8de;
}
header > nav a:hover {
  background-color: #08e8de;
  color: #004488;
}
</style>

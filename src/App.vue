<template>
  <div id="app">
    <nav
      class="navbar has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="./assets/img/logo.png" height="28" />
        </router-link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          @click="showNav = !showNav"
          :class="{ 'is-active': showNav }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/advanced" class="navbar-item">Advanced</router-link>
          <router-link to="/doc" class="navbar-item">Documentation</router-link>
        </div>
      </div>
    </nav>
    <section class="section">
      <router-view />
    </section>

    <footer class="footer">
      <div class="content has-text-centered">
        &copy; 2019 Riverbed Technology. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  data() {
    return {
      showNav: false
    };
  }
})
export default class App extends Vue {}
</script>

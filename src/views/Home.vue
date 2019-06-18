<template>
  <div class="home container has-text-centered">
    <div class="columns is-vcentered">
      <div class="column is-5">
        <figure class="image is-4by3">
          <img src="https://picsum.photos/800/600/?random" alt="Description" />
        </figure>
      </div>
      <div class="column is-6 is-offset-1">
        <h1 class="title is-2">IMS test UI</h1>
        <h2 class="subtitle is-4">
          Click the button below to make a AJAX request to IMS.
        </h2>
        <br />
        <p class="has-text-centered">
          <CallIMS />
        </p>
        <br />
        <div id="result" class="is-4"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CallIMS from "@/components/CallIMS.vue";

@Component({
  components: {
    CallIMS
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
img {
  border-radius: 4px;
  -webkit-box-shadow: 0px 2px 15px 0px rgba(71, 71, 71, 0.4);
  -moz-box-shadow: 0px 2px 15px 0px rgba(71, 71, 71, 0.4);
  box-shadow: 0px 2px 15px 0px rgba(71, 71, 71, 0.4);
}
</style>

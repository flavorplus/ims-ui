<template>
  <div class="callims">
    <button
      class="button is-info is-outlined is-medium"
      @click.prevent="onAjaxCall"
    >
      Send to IMS
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class CallIMS extends Vue {
  //@Prop() private msg!: string;

  result = {};

  payload = {
    version: "1.0",
    url: "http://web.ims.pcf8.rvbd.org/tier1/web",
    responseKB: "100-500",
    response: {
      html: {
        title: "SKO Demo",
        response_commented: true,
        report_debug_commented: false
      }
    },
    methods: [
      {
        name: "com.ims.web.a",
        actions: [
          {
            action: "sleep",
            ms: 1
          }
        ]
      },
      {
        name: "com.ims.web.b",
        actions: [
          {
            action: "sleep",
            ms: 2
          }
        ]
      },
      {
        name: "com.ims.web.c",
        actions: [
          {
            action: "sleep",
            ms: 7
          }
        ]
      }
    ]
  };

  onAjaxCall = async () => {
    const url = "http://52.168.0.101:8080/checkout";
    try {
      const response = await axios.post(url, this.payload);
      this.result = response.data;
      this.$toast.open({
        duration: 2500,
        queue: false,
        message: `Looks good! Request send and response recieved form IMS.`,
        type: "is-success",
        position: "is-bottom-right"
      });
    } catch (err) {
      this.$toast.open({
        duration: 2500,
        queue: false,
        message: `Something went wrong:` + err,
        type: "is-danger",
        position: "is-bottom-right"
      });
    }
  };
}
</script>

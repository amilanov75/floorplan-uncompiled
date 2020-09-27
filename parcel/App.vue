<template lang="html">
  <div>
    <navbar></navbar>
    <!--<keep-alive>-->
    <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
// import Vue from "vue";
import navbar from "./NavBar.vue";


export default {
  name: "app",
  components: {
    navbar
  },

mounted() {
  
  uibuilder.start();

}

};
</script>


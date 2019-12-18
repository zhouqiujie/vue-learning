<template>
  <el-container direction="vertical">
    <Header />
    <el-container class="container-main">
      home
      <router-link to="/home/page2">page2</router-link>
      <router-view />
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "../layout/header.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Header
  }
};
</script>

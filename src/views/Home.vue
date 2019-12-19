<template>
  <el-container direction="vertical">
    <Header />
    <el-container class="container-main">
      <div class="container pt-4 bg-dark">
        <h5 class="text-white">This is page home</h5>
        <div class="row">
          <div class="col-12">
            <router-link to="/home/page2">router-link to page2</router-link>
          </div>
          <div class="col-12">
            <router-link to="/home/page1/hello"
              >router-link to page1:hello</router-link
            >
            <br />
            <router-link to="/home/page1/hello2"
              >router-link to page1:hello2</router-link
            >
          </div>
        </div>
        <router-view />
      </div>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Header from '../layout/header.vue'

export default {
  name: 'home',
  components: {
    Header
  }
}
</script>

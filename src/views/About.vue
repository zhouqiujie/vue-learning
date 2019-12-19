<template>
  <el-container direction="vertical">
    <Header />
    <el-container class="container-main">
      <Aside />
      <el-main>
        <div class="container">
          <h5>This is About</h5>
          <div class="row">
            <div class="col">
              <router-link to="/about/page1">page1</router-link>
            </div>
          </div>
        </div>

        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from '../layout/header'
import Aside from '../layout/aside.vue'

export default {
  name: '',
  components: {
    Header,
    Aside
  }
}
</script>

<style lang="scss" scoped>
.el-main {
  background-color: #eee;
}
</style>

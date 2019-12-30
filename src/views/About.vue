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
          <div>name:{{ name }}</div>
          <div>
            <span v-for="(item, index) in list" v-bind:key="index">
              {{ index + item.scopeId }},
            </span>
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
import { getInfo } from '../axios/home.api'

export default {
  name: '',
  components: {
    Header,
    Aside
  },
  data: () => {
    return {
      list: [],
      name: ''
    }
  },
  created: function() {
    getInfo(this.$adal.user.userName).then(res => {
      console.log(res)
      // this.data.list = res
      this.name = 'ok'
      this.list.splice(0, this.list.length, ...res)
    })
  }
}
</script>

<style lang="scss" scoped>
.el-main {
  background-color: #eee;
}
</style>

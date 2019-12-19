<template>
  <el-header class="shadow-sm">
    <div class="flex-center">
      <a href="/">
        <img src="@/assets/logo.png" width="50" alt />
      </a>
    </div>
    <div>
      <!-- :default-active="activeIndex2" -->
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
      >
        <el-menu-item index="/home">Home</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="/about">About</el-menu-item>
      </el-menu>
    </div>
    <div class="flex-center">
      <el-avatar :size="40" :src="circleUrl"></el-avatar>
      <span class="px-2">Mike</span>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'Header',
  data: () => {
    return {
      activeIndex2: '',
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="scss">
.el-header {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  div:nth-child(1) {
    width: 120px;
  }
  div:nth-child(2) {
    flex: 1 1 auto;
  }
  div:nth-child(3) {
    width: 300px;
  }
}
</style>

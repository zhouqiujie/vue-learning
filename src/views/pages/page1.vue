<template>
  <div class="container bg-secondary">
    <h5>This is page1</h5>
    <p>msg: {{ title }}</p>
    <p class="text-info">ID: {{ $route.params.id }}</p>
    <div class="row">
      <div class="col">
        <button @click="event1(321)">test</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page1',
  data: () => {
    return {
      title: '123'
    }
  },
  props: {
    name1: String
  },
  methods: {
    event1(msg) {
      // alert(msg)
      // console.log(this.$router.push('/home'))
      alert(this.$route.params.id || 'NULL')
    }
  },
  watch: {
    $route(to, from) {
      console.log(to)
    }
  }
}
</script>

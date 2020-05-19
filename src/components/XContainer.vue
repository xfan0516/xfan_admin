<template>
  <div class="x-container">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'x-container',
  data () {
    return {
      msg: '这是 x-container 组件'
    }
  }
}
</script>
<style lang="scss">
.x-container {
  width: 100%;
  height: inherit;
}
</style>

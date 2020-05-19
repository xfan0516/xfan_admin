<template>
  <div class="x-menu">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'x-menu',
  data () {
    return {
      msg: '这是 x-menu 组件'
    }
  }
}
</script>
<style lang="scss">
.x-menu {
  width: 100%;
  max-width: 240px;
  height: inherit;
  background: $color-primary;
}
</style>

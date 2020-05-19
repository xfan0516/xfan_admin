<template>
  <div class="x-header">
    <h2 class="logo">ADMIN</h2>
  </div>
</template>
<script>
export default {
  name: 'x-header',
  data () {
    return {
      msg: '这是 x-header 组件'
    }
  }
}
</script>
<style lang="scss">
.x-header {
  position: absolute;
  top: 0;
  width: 100%;
  height: 60px;
  background: $color-primary;

  .logo {
    width: 240px;
    line-height: 60px;
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
  }
}
</style>

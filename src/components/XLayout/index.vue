<template>
  <div class="x-layout">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'x-layout',
  data () {
    return {
      msg: '这是 x-layout 组件'
    }
  }
}
</script>
<style lang="scss">
.x-layout {
  height: inherit;
  display: flex;
}
</style>

<template>
  <form class="x_form">
    <slot />
  </form>
</template>
<script>
export default {
  name: 'x-form',
  data () {
    return {
      msg: '这是 x_form 组件'
    }
  }
}
</script>
<style lang="scss">
.x_form {
  width: 100%;
  height: inherit;
}
</style>

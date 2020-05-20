<template>
  <div class="x-menu">
    <slot></slot>
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
  background: $menu-color;
  padding: 10px 0;
  box-sizing: border-box;

  .sid-active {
    background: #333f49;
    color: rgba(255, 255, 255, 1) !important;
    border-right: 4px solid $color-primary;
  }

  .x_icon {
    vertical-align: middle;
    color: #fff;
  }

}
</style>

<template>
  <div class="x_form_item">
    <label class="x_form_item-label" v-bind="labelVattr"> {{ label }}</label>
    <div class="x_form_item-content">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'x-form-item',
  props: {
    label: String,
    labelWidth: [String, Number]
  },
  data () {
    return {
      msg: '这是 x_form_item 组件'
    }
  },
  computed: {
    labelVattr () {
      let obj = {}
        obj.style = {}
        obj.style.width = this.labelWidth
      return obj
    },
    contentVattr () {
      let obj = {}
        obj.style = {}
        obj.style.width = this.labelWidth
      return obj
    },
    className () {
      var className = ['x_input'];
          className.push(this.size)
      
      return className
    },
  }
}
</script>
<style lang="scss">
.x_form_item {
  height: 32px;
  line-height: 32px;
  text-align: left;

  .x_form_item-label, .x_form_item-content {
    height: inherit;
    line-height: inherit;
    display: inline-block;
    padding: 5px;
  }

  .x_form_item-content {
    height: inherit;
  }
}
</style>

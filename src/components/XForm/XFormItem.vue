<template>
  <div :class="className">
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
    labelWidth: [String, Number],
    size: {
      type: String,
      default: 'moddle'
    }
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
      var className = ['x_form_item']
      className.push(`${className[0]}-${this.size}`)
      return className
    }
  }
}
</script>
<style lang="scss">
$btn-default: 40px;
@mixin formSize($num) {
  height: $btn-default + $num;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: $btn-default + $num;
  text-align: left;
}

.x_form_item {
  @include formSize(0);

  &-small {
    @include formSize(-8);
  }

  &-moddle {
    @include formSize(0);
  }

  &-big {
    @include formSize(8);
  }

  .x_form_item-label, .x_form_item-content {
    display: inline-block;
    height: inherit;
    padding: 0;
    line-height: inherit;
  }

  .x_form_item-label {
    padding: 0 10px 0 0;
    text-align: right;
  }

  .x_form_item-content {
    height: inherit;
  }
}
</style>

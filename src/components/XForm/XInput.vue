<template>
  <div class="x_input">
    <input
      class="x_input-inner"
      :type="type"
      :name="name"
      ref="input"
      :value="value"
      :placeholder="placeholder"
      @input="onInput"
    >
  </div>
</template>
<script>
export default {
  name: 'x-input',
  inheritAttrs: false,
  props: {
    value: [String, Number],
    size: String,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    propF: {
      type: String,
      validator (value) {
        console.log(value)
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  },
  data () {
    return {
      msg: '这是 x_input 组件'
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    }
  },
  computed: {
    className () {
      let className = ['x_input']
          className.push
      this.size
      return className
    },
    vAttr () {

    }
  }
}
</script>
<style lang="scss">
.x_input {
  height: inherit;

  input {
    box-sizing: border-box;
    height: inherit;
    padding: 0 10px;
    border: 1px solid #ddd;
    border-radius: 5px;

    &:hover {
      border-color: #ccc;
    }
  }
}
</style>

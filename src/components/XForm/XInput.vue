<template>
  <div class="x_input">
    <input
      class="x_input-inner"
      :type="type"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      @input="onInput"
    >
  </div>
</template>
<script>
export default {
  name: 'x-input',
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
    }
  },
  data () {
    return {
      msg: '这是 x_input 组件'
    }
  },
  computed: {
    className () {
      let className = ['x_input']
          className.push
      this.size
      return
    },
    vAttr () {

    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
<style lang="scss">
.x_input {
  height: inherit;

  input {
    height: 28px;
    padding: 0 10px;
    border: 1px solid #999;
    border-radius: 5px;
  }
}
</style>

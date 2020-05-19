<template>
  <button :class="className" @click="handleClick" :style="style">
    <slot></slot>
    <!-- {{text}} -->
  </button>
</template>
<script>
export default {
  name: "x-btn",
  props: {
    text: {
      type: String,
      default: "按钮"
    },
    type: String,
    size: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      msg: ""
    };
  },
  computed: {
    className() {
      var type = ['x_btn'];

      if (this.type) {
        type.push(`${type[0]}-${this.type}`)
      }
      if (this.size) {
        type.push(`${type[0]}-${this.size}`)
      }
      return type.join(' ');
    },
    style() {
      var style = {};
      if (this.size) {
        style.height = this.size;
      }
      return style;
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>
<style lang="scss">
$btn-default: 16px;
@mixin btnSize($num) {
  line-height: $btn-default + $num;
  padding: $btn-default / 2 + $num / 2  $btn-default + $num;
  border-radius: ($btn-default + $num) * 0.1;
  font-size: $btn-default + $num;
}

.x_btn {
  position: relative;
  display: inline-block;
  @include btnSize(0);
  color: $color-primary;
  vertical-align: middle;

  &-small {
    @include btnSize(-4)
  }

  &-big {
    @include btnSize(4)
  }

  &-primary {
    background: #0e90d2;
    color: #fff;

    &:hover {
      background: #0d7eb6;

    }
  }
  
  &-success {
    background: #5eb95e;
    color: #fff;

    &:hover {
      background: #4da14d;
    }
  }
  
  &-alert {
    background: #dd514c;
    color: #fff;

    &:hover {
      background: #c23d39;
    }
  }
}
</style>

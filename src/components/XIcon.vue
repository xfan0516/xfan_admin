<template>
  <i @click="hadleClick" :class="className" :style="style"><slot></slot></i>
</template>
<script>
export default {
  name: "x-icon",
  props: {
    type: {
        type: String,
        default:''
    },
    size: {
        type: String,
        default:''
    },
    color: String
  },
  data () {
    return {};
  },
  computed: {
    style () {
      let style = {}
      if (this.size && (this.size !== 'small' && this.size !== 'big')) {
        style['font-size'] = this.size
        style['width'] = this.size
        style['height'] = this.size
      }
      // switch(this.size) {
      //     case 'small':
      //         style['font-size'] = '24px'
      //         style['width'] = '24px'
      //         style['height'] = '24px'
      //         // style['lineHeight'] = '24px'
      //         break;
      //     case 'big':
      //         style['font-size'] = '40px'
      //         style['width'] = '40px'
      //         style['height'] = '40px'
      //         // style['lineHeight'] = '40px'
      //         break;
        
      //     default:
      //       if(this.size){
      //         style['font-size'] = this.size
      //         style['width'] = this.size
      //         style['height'] = this.size
      //         // style['lineHeight'] = this.size
      //       }else{

      //         style['font-size'] = '32px'
      //         style['width'] = '32px'
      //         style['height'] = '32px'
      //         // style['lineHeight'] = '32px'
      //       }
      // } 
      style['color'] = this.color
      
      return style
    },
    className () {
      var arr = ['x_icon']
      if (this.size === 'small' || this.size === 'big') {
        arr.push(`${arr[0]}-${this.size}`)
      }
      arr.push(`${arr[0]}-${this.type}`)
      return arr.join(' ')
    }
  },
  methods:{
    hadleClick(e){
      this.$emit('click',e)
    }
  },
  created(){
      
  }
};
</script>
<style lang="scss">
$icon-default: 32px;
@mixin iconSize($num) {
  width: $icon-default + $num;
  height: $icon-default + $num;
  line-height: $icon-default + $num;
  font-size: $icon-default + $num;
  border-radius: ($icon-default + $num) * 0.1;
}

.x_icon {
  position: relative;
  display: inline-block;
  @include iconSize(0);
  font-size: $icon-default;
  color: $color-primary;
  vertical-align: baseline;

  &-small {
    @include iconSize(-8)
  }

  &-big {
    @include iconSize(8)
  }
}
</style>
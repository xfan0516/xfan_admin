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
      if (this.size && (this.size !== 'small' || this.size !== 'big')) {
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
      var arr = ['x-icon']
      if (this.size === 'small' || this.size === 'big') {
        arr.push(`${arr[0]}-${this.size}`)
        arr.push(`${arr[0]}-${this.type}`)
      }
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
.x-icon {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 32px;
  line-height: 1em;
  font-size: 32px;
  color: $color-primary;
  vertical-align: middle;

  &-small {
    width: 24px;
    height: 24px;
    font-size: 24px;
  }

  &-big {
    width: 40px;
    height: 40px;
    font-size: 40px;
  }
}
</style>
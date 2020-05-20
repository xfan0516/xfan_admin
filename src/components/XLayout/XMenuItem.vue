<template>
  <div :class="`x_menu_item o${items.id}`">
    <div v-if="items && !items.children"
         :class="`sid-title ${ openKey == items.id ? 'sid-active' : ''}`"
         :style="{paddingLeft: 24 * (level + 1) + 'px'}"
         @click="onChange(items.id)"
         @onChange="onChange"
    >
      <x-icon
        v-if="items.icon"
        :id="items.id"
        :type="items.icon"
        size="small"
      />
      {{ items.text }}
    </div>
    <template v-else>
      <div :class="`sid-title ${ openKey == items.id ? 'sid-active' : ''}`"
           :style="{paddingLeft: 24 * (level + 1) + 'px'}"
           @click="onChange(items.id)"
           @onChange="onChange"
      >
        <x-icon
          v-if="items.icon"
          :id="items.id"
          :type="items.icon"
          size="16px"
        />
        <span>{{ items.text }}</span>
      </div>
      <x-menu-item 
        v-for="item in items.children"
        :key="item.id"
        :items="item"
        :level="level+1"
        :icons="icons"
        :open-key="openKey"
        @onChange="onChange"
      />
    </template>
  </div>
</template>
<script>
export default {
  name: 'x-menu-item',
  props: {
    items: {
      type: Object,
      default: () => {}
    },
    level: {
      type: Number,
      default: 0
    },
    icons: {
      type: Array,
      default: () => ['md-apps', 'md-apps', 'ios-arrow-down', 'md-apps']
    },
    openKey: {
      type: [Number, String],
      default: 1
    }
  },
  data () {
    return {
      msg: '这是 x_menu_item 组件',
      rootSubmenuKey: '',
      rootSubmenuKeys: []
    }
  },
  created () {
    console.log(this.items)
  },
  methods: {
    onOpenChange (id) {
      const divP = document.querySelector(`.o${id}`)
      if (this.rootSubmenuKey === id) {
        this.rootSubmenuKey = ''
        divP.style.height = 'auto'
        divP.style.overflow = 'initial'
      } else {
        this.rootSubmenuKey = id
        divP.style.height = '32px'
        divP.style.overflow = 'hidden'
      }
    },
    onChange (id) {
      this.$emit('onChange', id !== '1' ? id : '')
      console.log(id)
    }
  },
  computed: {
    icon () {
      return this.icons[this.level === 0 ? 0 : (this.rootSubmenuKey === this.items.id ? 2 : 3)]
    }
  }
}
</script>
<style lang="scss">
.x_menu_item {
  line-height: 40px;

  .sid-title {
    cursor: pointer;
  }


  .x_icon {
    padding-right: 8px;


    &:hover {
      color: #0e979e;
    }
  }

  span {
    vertical-align: middle;
  }
}

.o1 {
  padding-left: 0;
}
</style>

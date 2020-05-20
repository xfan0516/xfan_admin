<template>
  <div class="home">
    <x-header />
      <x-layout>
        <x-menu>
          <x-menu-item
            v-for="item in treeList"
            :key="item.id"
            :items="item"
            :open-key="openKey"
            @onChange="onMenuItem"
          />
        </x-menu>
        <x-container>
            <div class="item-c">
              <span class="labrl">图标：</span>
              <span>
                <x-icon type="ios-home" size="big" />
                <x-icon type="ios-home" />
                <x-icon type="ios-home" size="small" />
                
              </span>
            </div>
            <div class="item-c">
              <span class="labrl">按钮：</span>
              <span>
                <x-button type="primary" size="big">按钮</x-button>
                <x-button type="success">按钮</x-button>
                <x-button type="alert" size="small">按钮</x-button>
                
              </span>
            </div>
        </x-container>
      </x-layout>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      openKey: '20',
      treeList: [
        {
          id: '10',
          text: '基础组件',
          icon: 'md-apps',
          link: '',
          children: [
            {
              id: '10-10',
              text: '按钮',
              icon: '',
              link: '',
            },
            {
              id: '10-20',
              text: 'icon',
              icon: '',
            }
          ]
        },
        {
          id: '20',
          text: '表单组件',
          icon: 'md-checkbox',
          link: '',
          children: [
            {
              id: '20-10',
              text: '输入框',
              icon: '',
              link: '',
            },
            {
              id: '20-20',
              text: '选择器',
              icon: '',
              link: '',
            }
          ]
        }
      ]
    }
  },
  methods: {
    onMenuItem (obj) {
      console.log(obj)
      this.openKey = obj
    }
  }
}
</script>
<style lang="scss">
.home {
  box-sizing: border-box;
  height: inherit;
  padding-top: 60px;
  text-align: left;

  .item-c {
    padding: 15px;
    border-bottom: 1px solid #f5f5f5;
  }

  .labrl {
    display: inline-block;
    width: 100px;
  }

  .x_btn {
    margin: 0 5px;
  }
}
</style>


<template>
  <div class="home">
    <x-header />
      <x-layout>
        <x-menu />
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
  name: 'Home'
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


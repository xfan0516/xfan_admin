<template>
  <div class="home">
    <x-header />
      <x-layout>
        <x-menu />
        <x-container>
          <x-icon type="ios-home" size="big" />
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
}
</style>


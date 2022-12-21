<script setup>
import { count, mask, exception } from './databus'
import words5 from './mocks/words5'

import Letters from './components/Letters.vue'
import Exception from './components/Exception.vue'
import Words from './components/Words.vue'
</script>

<template>
  <header>
    
  </header>

  <main>
    <Exception/>
    <Letters :count="count" :mask="mask"/>
    <Words :data="words5" :mask="mask"/>
  </main>
</template>

<style lang="scss">
@import './assets/base.scss';

html {
  min-height: 100vh;
  background: $bg_color1;

  body {
    min-height: 100vh;
    background: $bg_color1;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  main {
    margin: 0 auto;
    padding: 20px;
    max-width: 1000px;
  }
}
</style>

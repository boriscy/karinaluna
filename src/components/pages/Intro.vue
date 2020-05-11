<template>
  <div class="intro background">
    <div class="layout">
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

      <h1>{{ $t('index.welcome') }}</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
      </p>

      <p class="home-links">
        <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
        <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.intro.background {
  background-image: url(/back1.jpg);
  background-size:100%;
  height: 100vh;
  padding-top: 70px;
}
.intro {
  color: white;
  .layout {
    background: rgba(0, 0, 0, 0.2);
    position: relative;
  }
}
</style>
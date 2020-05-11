<template>
  <Layout>
    <Intro />
    <!--
    <div class="back1" style="background-image: url(/back1.jpg);background-size:100%;">
      <div class="layout">

        <h1>{{ $t('index.welcome') }}</h1>

        <p style="height:600px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
        </p>

        <p class="home-links">
          <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
          <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
        </p>
      </div>
    </div>
    -->
    <div class="layout">
      <p style="height: 100vh;background: gray">
        Otro cont <br/>
        Otro cont <br/>
        Otro cont <br/>
        Otro cont <br/>
        Otro cont <br/>
        Otro cont <br/>
        Otro cont <br/>
        Otro cont <br/>
        Otro cont <br/>
        Otro cont <br/>
      </p>
    </div>
  </Layout>
</template>

<script>
import Intro from '@/components/pages/Intro.vue'

export default {
  components: {
    Intro
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<template>
  <Layout>
    <Intro />

    <Ayahuasca />

    <SanPedro />

    <Footer/>
  </Layout>
</template>

<script>
import Intro from '@/components/pages/Intro.vue'
import Ayahuasca from '@/components/pages/Ayahuasca.vue'
import SanPedro from '@/components/pages/SanPedro.vue'
import Footer from '@/components/pages/Footer.vue'

export default {
  components: {
    Intro,
    Ayahuasca,
    SanPedro,
    Footer
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

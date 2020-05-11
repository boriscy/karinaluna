<template>
  <Layout>
    <h2>{{ $t('404.notfound', this.locale) }}</h2>
    <g-link to="/">{{ $t('404.home', locale) }}</g-link>
  </Layout>
</template>

<script>
export default {
  data () {
    return {
      locale: 'en'
    }
  },
  created () {
    let loc = this.$route.path.split('/')[1] || 'en'
    loc = this.$i18n.availableLocales.includes(loc) ? loc : 'en'
    this.locale = loc
  }
}
</script>
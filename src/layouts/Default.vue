<template>
  <div>
    <div class="main-header" :class="mainCss">
      <header class="header layout">
        <strong>
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about/">About</g-link>
        </nav>
        <nav>
          <a @click="changeLocale('en')" href="javascript:;">English</a>
          &nbsp;
          <a @click="changeLocale('es')" href="javascript:;">Español</a>
        </nav>
      </header>
    </div>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data () {
    return {
      availableLocales: this.$i18n.availableLocales,
      mainCss: '',
    }
  },
  methods: {
    changeLocale (loc) {
      this.$router.push({
        path: this.$tp(this.$route.path, loc, true)
      })
    }
  },
  mounted () {
    setInterval(() => {
      if (window.pageYOffset > 20) {
        this.mainCss = ''
      } else {
        this.mainCss = 'top'
      }
    }, 20)
  }
}
</script>

<style lang="scss">
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding: 4px 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__link {
  margin-left: 20px;
}

/**
 *
 */
.main-header {
  position: fixed;
  width: 100%;
  height: 30px;
  background: rgba(0, 0, 0, 0.7);
  transition: all 500ms;
  z-index: 1000;
  a {
    color: white;
  }
  &.top {
    transition: all 500ms;
    height: 50px;
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>

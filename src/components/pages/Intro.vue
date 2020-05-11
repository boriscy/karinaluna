<template>
  <div class="intro background" :style="styles">
    <div class="cont">
      <div class="layout">
        <h1 class="is-size-1 is-size-3-mobile has-text-centered">{{ $t('index.heaven is where') }}</h1>

        <div :style="{opacity: opacity, height: `${textHeight}px`}">
          <p ref="textCont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non eros pharetra, consectetur turpis et, tristique arcu. Sed at purus sollicitudin, consectetur mi ut, faucibus sem. Cras tincidunt imperdiet purus, eu tincidunt tortor porttitor eu. In tortor ligula, bibendum sit amet nisi et, mollis sagittis lacus. In hac habitasse platea dictumst. Integer elementum pharetra dictum. Aenean ultricies nulla eu turpis tincidunt, ac rutrum tortor elementum. Integer lectus lacus, varius quis diam et, iaculis euismod justo. Phasellus non mauris nibh. Nulla nec mi augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  image: {
    width: 4450,
    height: 1080
  },
  data () {
    return {
      innerWidth: this.$options.image.width,
      innerHeight: this.$options.image.height,
      offsetX: 0, offsetY: 0, opacity: 0,
      textHeight: 0, initHeight: 0
    }
  },
  computed: {
    styles () {
      return {
        backgroundSize: this.backgroundSize,
        backgroundPosition: `${this.offsetX}px 0px`
      }
    },
    backgroundSize () {
      const ratio = this.innerHeight / this.$options.image.height
      return `${ratio * this.$options.image.width}px ${this.innerHeight}px`
    }
  },
  methods: {
    moveBackground () {
      this.offsetX = -window.pageYOffset
    },
    setSize () {
      this.innerHeight = window.innerHeight
    },
    setTextOpacity () {
      if (window.pageYOffset <= this.initHeight) {
        this.textHeight = window.pageYOffset
      } else {
        this.textHeight = this.initHeight
        this.opacity = (window.pageYOffset - this.initHeight) / 500
      }
    }
  },
  mounted () {
    this.initHeight = this.$refs.textCont.offsetHeight + 10
    window.onresize = () => { this.setSize() }
    this.setSize()

    setInterval(() => {
      this.moveBackground()
      this.setTextOpacity()
    }, 20)
  }
}
</script>

<style lang="scss">
.intro.background {
  background-image: url(/panoramic-1.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 4450px 1080px;
  background-position: 0px 0px;
  height: 2000px;//100vh;
  padding-top: 70px;
}
.intro {
  color: white;
  .cont {
    position: fixed;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center; /* aligns on vertical for column */
    align-items: center;
    .layout {
      background: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
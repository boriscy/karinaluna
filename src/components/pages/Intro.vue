<template>
  <div class="intro background" :style="styles">
    <div class="cont" :style="{opacity: contOpacity}">
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
import fnSpeed from '~/mixins/fn-speed'
const bgImage = require('@/assets/images/panoramic-1.jpg')

export default {
  bgImage: bgImage,
  mixins: [fnSpeed],
  image: {
    width: 4450,
    height: 1080
  },
  data () {
    return {
      innerWidth: this.$options.image.width,
      innerHeight: this.$options.image.height / 2,
      offsetX: 0, offsetY: 0, opacity: 0,
      textHeight: 0, initHeight: 0, bgImageWidth: 0,
      contOpacity: 1
    }
  },
  computed: {
    styles () {
      return {
        backgroundSize: this.backgroundSize,
        backgroundPosition: `${this.offsetX}px 0px`,
        backgroundImage: `url(${bgImage})`
      }
    },
    backgroundSize () {
      const ratio = this.innerHeight / this.$options.image.height
      return `${ratio * this.$options.image.width}px ${this.innerHeight}px`
    },
    imgWidth () {
      return (this.innerHeight / 1080) * this.$options.image.width
    },
    imgScroll () {
      return (this.imgWidth - window.innerWidth + this.offsetX - 20) > 0
    }
  },
  methods: {
    moveBackground () {
      if (this.imgScroll || window.pageYOffset * 2 < -this.offsetX) {
        this.offsetX = -window.pageYOffset * 2
      } else {
        this.offsetX = window.innerWidth - this.imgWidth
      }
    },
    setSize () {
      this.innerHeight = window.innerHeight > 600 ? window.innerHeight : 600
    },
    setTextOpacity () {
      if (window.pageYOffset <= this.initHeight) {
        this.textHeight = window.pageYOffset
      } else {
        this.textHeight = this.initHeight
        this.opacity = (window.pageYOffset - this.initHeight) / 500
      }
    },
    setContOpacity () {
      if ((window.innerHeight + window.pageYOffset) > 1550) {
        this.contOpacity = (1500 - window.pageYOffset) / 1500
      } else {
        this.contOpacity = 1
      }
    }
  },
  mounted () {
    this.initHeight = this.$refs.textCont.offsetHeight + 30
    window.onresize = () => { this.setSize() }
    this.setSize()

    window.onscroll = () => {
      this.moveBackground()
      this.setTextOpacity()
      this.setContOpacity()
    }
    /*
    setInterval(() => {
      this.moveBackground()
      this.setTextOpacity()
      this.setContOpacity()
    }, 20)
    */
  }
}
</script>

<style lang="scss">
.intro.background {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 4450px 1080px;
  background-position: 0px 0px;
  height: 1500px;
  padding-top: 70px;
}
.intro {
  color: white;
  .cont {
    position: fixed;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    .layout {
      background: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
<template>
  <div
    class="ayahuasca background"
    :style="styles"
    v-waypoint="{ active: true, callback: onVisible, options: {threshold: [0.35, 0.75]} }"
  >
    <div class="cont">
      <div class="layout" :class="slideCss">
        <h1 class="is-size-1 is-size-3-mobile has-text-centered">
          Ayahuasca
        </h1>

        <div>
          <p ref="textCont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non eros pharetra,
            consectetur turpis et, tristique arcu. Sed at purus sollicitudin, consectetur mi ut, faucibus sem.
            Cras tincidunt imperdiet purus, eu tincidunt tortor porttitor eu. In tortor ligula, bibendum sit amet nisi et,
            mollis sagittis lacus. In hac habitasse platea dictumst. Integer elementum pharetra dictum. Aenean ultricies
            nulla eu turpis tincidunt, ac rutrum tortor elementum. Integer lectus lacus, varius quis diam et, iaculis
            euismod justo. Phasellus non mauris nibh. Nulla nec mi augue. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
import fnSpeed from '~/mixins/fn-speed'
const bgImage = require('@/assets/images/jungle.jpg')

export default {
  bgImage: bgImage,
  mixins: [fnSpeed],
  data () {
    return {
      slideCss: 'slide-out'
    }
  },
  computed: {
    styles () {
      return {
        backgroundImage: `url(${bgImage})`
      }
    }
  },
  methods: {
    onVisible ({ going, direction }) {
      if (direction === undefined) { return }

      if (going === 'in') {
        this.slideCss = 'slide-in'
      }
    }
  }
}
</script>

<style lang="scss">
.ayahuasca.background {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 1000px;
  padding-top: 70px;
}
.ayahuasca {
  color: white;
  .cont {
    //position: fixed;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center; /* aligns on vertical for column */
    align-items: center;
    .layout {
      background: rgba(0, 0, 0, 0.2);
      transform: translateX(-200%);
      -webkit-transform-transform: translateX(-100vw);
    }
  }
}

.slide-in {
    animation: slide-in 0.5s forwards;
    -webkit-animation: slide-in 0.5s forwards;
}

.slide-out {
    animation: slide-out 0.5s forwards;
    -webkit-animation: slide-out 0.5s forwards;
}

@keyframes slide-in {
    100% { transform: translateX(0%); }
}

@-webkit-keyframes slide-in {
    100% { -webkit-transform: translateX(0vw); }
}

@keyframes slide-out {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100vw); }
}

@-webkit-keyframes slide-out {
    0% { -webkit-transform: translateX(0vw); }
    100% { -webkit-transform: translateX(-100vw); }
}
</style>
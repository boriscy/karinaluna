<template>
  <div class="san-pedro background" :style="styles">
    <div class="cont">
      <!--<g-image src="~/assets/images/cactus.png" style="position:absolute;z-index:-1"/>-->
      <div class="layout">
        <h1 class="is-size-1 is-size-3-mobile has-text-centered">
          San Pedro
        </h1>

        <div>
          <p ref="textCont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non eros pharetra, consectetur turpis et, tristique arcu. Sed at purus sollicitudin, consectetur mi ut, faucibus sem. Cras tincidunt imperdiet purus, eu tincidunt tortor porttitor eu. In tortor ligula, bibendum sit amet nisi et, mollis sagittis lacus. In hac habitasse platea dictumst. Integer elementum pharetra dictum. Aenean ultricies nulla eu turpis tincidunt, ac rutrum tortor elementum. Integer lectus lacus, varius quis diam et, iaculis euismod justo. Phasellus non mauris nibh. Nulla nec mi augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <!--<g-image src="~/assets/images/cactus.png"/>-->

      </div>
    </div>
  </div>
</template>


<script>
const bgImage = require('@/assets/images/illimani.jpg')

export default {
  bgImage: bgImage,
  data () {
    return {
    }
  },
  computed: {
    styles () {
      return {
        backgroundImage: `url(${bgImage})`
      }
    }
  }
}
</script>

<style lang="scss">
.san-pedro.background {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 1000px;
  padding-top: 70px;
}
.san-pedro {
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
    }
  }
}
</style>
<template>
  <div class="canvas tm-center">
    <div class="container">
      <div class="layer layer-back">
        <cld-image
          public-id="bridge-hero-graphics_vasydt"
          fetch-format="svg"
          quality="auto"
          class="graphics__item"
        />
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.canvas
  max-width 110rem
  width 100%
  display flex
  align-items center
  justify-content center
  position relative

.container
  position relative
  padding-bottom 80%
  height 0
  width 100%
  min-width 48rem
  max-width 180rem
  flex 0 0 163%

svg
  height auto

.layer
  position absolute
  trbl 0 0 auto

.layer-back
  display flex
  align-items center
  justify-content center
  position relative
  margin-top -6%

.graphics__item
  height auto
  position absolute
  right -16%
  width 100%

@media $breakpoint-medium
  .container
    padding-bottom (736/1440) * 100%
</style>

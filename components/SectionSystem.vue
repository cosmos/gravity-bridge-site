<template>
  <div class="tm-section tm-container tm-wrapper">
    <div class="tm-grid-base">
      <div class="graphics">
        <!-- <cld-image
          public-id="system-requirements-graphics_dq4bfn.svg"
          fetch-format="svg"
          quality="auto"
          class="graphics__item"
        /> -->
      </div>
      <div class="text tm-grid-base">
        <div
          class="
            overline
            tm-rf-1
            tm-rf0-m-up
            tm-medium
            tm-lh-title
            tm-overline
            tm-measure-narrow
            tm-muted
          "
        >
          system requirements
        </div>
        <div class="list mt-3">
          <div class="list-item">
            Linux server with any modern Linux distribution
          </div>
          <div class="list-item">4 cores</div>
          <div class="list-item">8 gb of ram</div>
          <div class="list-item">20GB or more of SSD storage</div>
        </div>
        <p class="desc mt-9 tm-muted">
          <tm-link href="#">Everything you need to know &#8599;</tm-link>
          to validate on the Althea blockchain and run the Gravity bridge
          module.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.text
.graphics
.overline
.list
.desc
  grid-column 1/-1

.graphics
  display flex
  justify-content flex-end
  align-items flex-end

.graphics__item
  width 130%
  height auto
  pointer-events none

.list-item
  padding-top var(--spacing-7)
  padding-bottom var(--spacing-7)
  border-bottom 1px solid var(--white-100)

@media $breakpoint-xl
  .graphics
    grid-column 2/span 2

  .overline
    grid-column 4/span 5

  .list
    grid-column 5/span 4

  .desc
    grid-column 4/span 6
</style>

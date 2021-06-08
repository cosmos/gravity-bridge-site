<template>
  <div class="section-hero">
    <div class="tm-container section-container">
      <div class="container">
        <div class="content">
          <div class="title tm-rf4 tm-bold tm-lh-title">
            Prepare your validators to defy Gravity.
          </div>
          <div class="subtitle tm-rf1 tm-lh-copy">
            Register now for the exclusive validator incentivized testnet for
            Gravity Bridge, connecting Ethereum and Cosmos.
          </div>
        </div>
        <div class="mt-10">
          <section-countdown />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="stylus" scoped>
.section-hero
  position relative
  height 100vh
  min-height 52rem
  max-height 72rem
  margin-top calc(var(--spacing-10) * -1)
  margin-bottom var(--spacing-10)
  display flex
  justify-content stretch
  align-items stretch
  text-align center
  .section-container
    display flex
    align-items stretch
    width 100%
    padding-top var(--spacing-12)
  .container
    position relative
    display flex
    width 100%
    flex-direction column
    align-items normal
    justify-content flex-start
    .content
      // margin auto
      width 100%
      .title
        margin 0
        padding-left var(--spacing-5)
        padding-right var(--spacing-5)
      .subtitle
        center()
        margin-top var(--spacing-7)
        color var(--primary-900)

@media screen and (max-width: 1024px)
  .section-hero
    display grid
    .container
      .headings
        .subtitle
          margin-top var(--spacing-7)

@media $breakpoint-medium-max
  .section-hero
    .container
      .content
        padding-bottom 20%

@media $breakpoint-small-max
  .section-hero
    min-height 32rem
    max-height none
    height auto
    margin-bottom var(--spacing-8)
    .section-container
      padding-top var(--spacing-4)
      padding-bottom var(--spacing-7)
    .container
      .content
        padding-top 20%
        .subtitle
          margin-top var(--spacing-6)
</style>

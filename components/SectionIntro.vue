<template>
  <div class="section-intro">
    <div class="tm-section tm-container tm-wrapper section-container">
      <div class="content tm-center tm-muted">
        <p>
          The <tm-link href="#">Gravity Bridge &#8599;</tm-link> is an
          open-source project designed specifically for the Cosmos Hub for
          bridging Cosmos and Ethereum chains.
        </p>
        <p>
          Gravity is intended to pull as much value as possible into the orbit
          of the Hub, by bringing ERC20 assets from Ethereum into Cosmos and
          Cosmos assets to Ethereum with a decentralized bridge.
        </p>
        <p>
          The incentivized testnet will be modeled after the successful game of
          zones and will be supported by members of the Gravity team (Peggy JV),
          <tm-link href="#">Althea &#8599;</tm-link>,
          <tm-link href="#">the Interchain Foundation &#8599;</tm-link>, and
          <tm-link href="#">Tendermint &#8599;</tm-link>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.section-container
  display flex
  align-items stretch
  width 100%

.container
  position relative
  display flex
  width 100%
  flex-direction column
  align-items normal
  justify-content flex-start

.content
  width 100%
  text-align left
  max-width 576px

@media $breakpoint-small-max
  .section-container
    padding-top var(--spacing-4)
    padding-bottom var(--spacing-7)
</style>

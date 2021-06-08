<template>
  <div class="tm-section tm-container tm-wrapper">
    <div class="tm-grid-base">
      <div
        class="
          overline
          tm-rf-1
          tm-rf0-m-up
          tm-medium
          tm-lh-title
          tm-overline
          tm-measure-narrow
          tm-title
        "
      >
        sponsored by
      </div>
    </div>

    <div class="logos-list mt-7">
      <tm-link v-for="item in list" :key="item.text" :href="item.url">
        <tm-tooltip :text="`${item.text} ↗`" position="top-center">
          <img
            :src="require(`~/assets/images/logos/${item.img}.svg`)"
            :alt="item.text"
          />
        </tm-tooltip>
      </tm-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          url: 'https://cosmos.network',
          text: 'ATOM (Cosmos Hub)',
          img: 'cosmos-hub',
        },
        {
          url: 'https://terra.money',
          text: 'Terra Money',
          img: 'terra-money',
        },
        {
          url: 'https://regen.network',
          text: 'Regen Network',
          img: 'regen-network',
        },
        {
          url: 'https://bitsong.io',
          text: 'Bitsong',
          img: 'bitsong',
        },
        {
          url: 'https://sentinel.co',
          text: 'Sentinel',
          img: 'sentinel',
        },
        {
          url: 'https://persistence.one',
          text: 'Persistence',
          img: 'persistence',
        },
        {
          url: 'https://akash.network',
          text: 'Akash',
          img: 'akash',
        },
        {
          url: 'https://e-money.com',
          text: 'e-Money',
          img: 'e-money',
        },
        {
          url: 'https://irisnet.org',
          text: 'Irisnet',
          img: 'irisnet',
        },
        {
          url: 'https://agoric.com',
          text: 'Agoric',
          img: 'agoric',
        },
        {
          url: 'https://cybercongress.ai',
          text: 'Cyber',
          img: 'cyber',
        },
        {
          url: 'https://www.desmos.network',
          text: 'Desmos',
          img: 'desmos',
        },
        {
          url: 'https://commercio.network',
          text: 'Commercio',
          img: 'commercio',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.logos-list
  display grid
  grid-template-columns repeat(2, 1fr)
  column-gap var(--spacing-7)
  row-gap var(--spacing-6)
  align-items center
  position relative

.logos-list > a
  opacity 0.35

.overline
  grid-column 1/-1

@media $breakpoint-xsmall-only
  .logos-list
    row-gap var(--spacing-7)

@media $breakpoint-large
  .logos-list
    grid-template-columns repeat(4, 1fr)

@media $breakpoint-xl
  .overline
    grid-column 2/span 2

  .logos-list
    grid-template-columns repeat(5, 1fr)
</style>

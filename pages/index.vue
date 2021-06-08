<template>
  <main>
    <section-hero />

    <div class="tm-section tm-wrapper tm-container">
      <div class="mt-10">
        <section-sponsored-coins />
      </div>
    </div>

    <div class="tm-section tm-container">
      <div class="tm-wrapper center">
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
          participate
        </div>
        <h1 class="title tm-rf4 tm-bold tm-lh-title tm-title mt-5">
          The interoperable future, starts here
        </h1>
        <p>
          Register now for the exclusive validator incentivized testnet for
          Gravity Bridge, connecting Ethereum and Cosmos.
        </p>
        <div class="btn-group mt-8">
          <tm-button
            to-link="external"
            href="https://v1.cosmos.network/intro"
            size="l"
            class="btn"
            >Learn<span class="icon__right">&rarr;</span></tm-button
          >
          <tm-button
            to-link="internal"
            to="/ecosystem/tokens"
            size="l"
            variant="text"
            class="btn"
            >Explore tokens<span class="icon__right">&rarr;</span></tm-button
          >
        </div>
      </div>
    </div>

    <section-register />

    <div class="tm-section tm-container">
      <div class="tm-wrapper center">
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
          faq
        </div>
        <h1 class="title tm-rf4 tm-bold tm-lh-title tm-title mt-5">
          Frequently asked questions
        </h1>
      </div>
      <section-questions class="mt-10" />
    </div>
  </main>
</template>

<script></script>

<style lang="stylus" scoped></style>

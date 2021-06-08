<template>
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
    <div class="tm-container mt-10">
      <tm-accordion :content="agendas" multiple />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      agendas: [
        {
          id: 101,
          title: 'Title 1',
          details: 'Desc 1',
          active: false,
        },
        {
          id: 102,
          title: 'Title 2',
          details: 'Desc 2',
          active: false,
        },
        {
          id: 103,
          title: 'Title 3',
          details: 'Desc 3',
          active: false,
        },
        {
          id: 104,
          title: 'Title 4',
          details: 'Desc 4',
          active: false,
        },
        {
          id: 105,
          title: 'Title 5',
          details: 'Desc 5',
          active: false,
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped></style>

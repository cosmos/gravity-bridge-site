<template>
  <div class="tm-container z-text">
    <tm-accordion :content="agendas" multiple />
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

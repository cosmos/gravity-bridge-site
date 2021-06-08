<template>
  <div class="center">
    <tm-countdown
      v-if="toTimezone(endDate, endTime) >= moment()"
      :now="currentTime"
      :end="countdownTimer(endDate, endTime)"
      :t-minus="true"
      class="time tm-rf7 tm-medium tm-lh-title mt-3"
    />
    <div v-else class="time tm-rf7 tm-medium tm-lh-title mt-3">00:00:00:00</div>
    <div class="date tm-rf0 tm-medium tm-lh-title tm-overline mt-3 tm-muted">
      Registration ends June 21
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'

export default {
  components: {},
  data() {
    return {
      moment,
    }
  },
  computed: {
    currentTime() {
      return this.$store.state.countdown.now
    },
    endDate() {
      return this.$store.state.countdown.date
    },
    endTime() {
      return this.$store.state.countdown.time
    },
  },
  mounted() {
    window.setInterval(() => {
      this.$store.commit('updateNow')
    }, 1000)
  },
  methods: {
    countdownTimer(date, time) {
      return moment.tz(`${date} ${time}`, 'UTC').format()
    },
    toTimezone(date, time) {
      return (
        moment
          // set base time with UTC
          // get timezone with i18n API - Intl.DateTimeFormat().resolvedOptions().timeZone
          .tz(`${date} ${time}`, 'UTC')
          // use client's locale time zone
          .tz(moment.tz.guess())
      )
    },
  },
}
</script>

<style lang="stylus" scoped></style>

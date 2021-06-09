export const state = () => ({
  countdown: {
    now: Math.trunc(new Date(new Date().toUTCString()).getTime() / 1000),
    // UTC time
    date: '2021-06-21',
    time: '00:00',
  },
  dates: [
    {
      title: 'Registration deadline',
      day: '21',
      month: 'June',
    },
    {
      title: 'Competition Phase 01',
      day: '28 - 02',
      month: 'June - July',
    },
    {
      title: 'Competition Phase 02',
      day: '06 - 10 ',
      month: 'July',
    },
    {
      title: 'Winners announced',
      day: '17',
      month: 'Jully',
    },
    {
      title: 'Prize handout',
      day: '25',
      month: 'July',
    },
  ],
})

export const mutations = {
  updateNow(state) {
    state.countdown.now = Math.trunc(new Date().getTime() / 1000)
  },
}

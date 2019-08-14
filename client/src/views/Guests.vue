<template lang="html">
  <div id="guests">
    <h2>Checked-In Guests</h2>

    <checked-in :bookings="bookings"/>
  </div>

</template>

<script>
import CheckedIn from '../components/CheckedIn.vue'
import { eventBus } from '../main'

export default {
  name: 'guests',
  data () {
    return {
      bookings: []
    }
  },
  components: {
    'checked-in': CheckedIn
  },
  mounted() {
    this.fetchData();

    eventBus.$on('booking-deleted', id => {
      const index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1);
    })
  },
  methods: {
    fetchData() {
    fetch("http://localhost:3000/api/bookings")
      .then(res => res.json())
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style lang="css" scoped>
</style>

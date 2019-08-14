<template lang="html">
  <div id="home">
    <bookings-form />
    <bookings-grid :bookings="bookings"/>
  </div>
</template>

<script>
import BookingsForm from '../components/BookingsForm.vue';
import BookingsGrid from '../components/BookingsGrid.vue';
import { eventBus } from '../main';

export default {
  name: 'home',
  data () {
    return {
      bookings: []
    }
  },
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  },
  mounted() {
    this.fetchData();

    eventBus.$on('booking-added', booking => this.bookings.push(booking));

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

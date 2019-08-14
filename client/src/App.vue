<template>
  <div id="app">
    <nav>
      <div><router-link :to="{ name: 'home' }">Home</router-link></div>
      <div><router-link :to="{ name: 'guests' }">Checked-in Guests</router-link></div>
    </nav>
    <router-view id="view"></router-view>
    <!-- <bookings-form />
    <bookings-grid :bookings="bookings"/> -->
  </div>
</template>

<script>

export default {
  name: 'app'
}
// import BookingsForm from './components/BookingsForm.vue';
// import BookingsGrid from './components/BookingsGrid.vue';
// import { eventBus } from './main';
//
// export default {
//   name: 'app',
//   data () {
//     return {
//       bookings: []
//     }
//   },
//   components: {
//     'bookings-form': BookingsForm,
//     'bookings-grid': BookingsGrid
//   },
//   mounted() {
//     this.fetchData();
//
//     eventBus.$on('booking-added', booking => this.bookings.push(booking));
//
//     eventBus.$on('booking-deleted', id => {
//       const index = this.bookings.findIndex(booking => booking._id === id);
//       this.bookings.splice(index, 1);
//     })
//   },
//   methods: {
//     fetchData() {
//     fetch("http://localhost:3000/api/bookings")
//       .then(res => res.json())
//       .then(bookings => this.bookings = bookings);
//     }
//   }
// }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

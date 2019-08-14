<template lang="html">

  <div id="checkedIn">

  
    <div class="booking" v-for="booking in bookings" v-if="booking.checkIn === 'Yes'">
      <h2>Guest name: {{ booking.firstName + ' ' + booking.lastName}}</h2>
      <p>Guest email: {{ booking.email }}</p>
      <!-- <p>Checked in?: {{ booking.checkIn }}</p> -->

      <button @click="handleDelete(booking._id)">Delete Booking</button>
    </div>
  </div>

</template>

<script>
import { eventBus } from '../main';
import BookingsService from '@/services/BookingsService.js'

export default {
  name: "checked-in",
  props: [ "bookings" ],
  methods: {
    handleDelete(id){
      BookingsService.deleteBooking(id)
      .then(response => eventBus.$emit('booking-deleted', id));
    }
  }
}
</script>

<style lang="css" scoped>
#checkedIn {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
h2 {
    padding: 0;
    margin: 0;
}
.booking {
    width: 30%;
    background: white;
    border: solid black;
    margin-bottom: 20px;
    padding: 25px;
}
button {
    color: white;
    border: none;
    font-size: 18px;
    padding: 10px;
    margin-top: 10px;
    background: red;
  }
</style>

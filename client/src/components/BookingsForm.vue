<template lang="html">
  <form id="bookings-form" v-on:submit="addBooking" method="post">
    <h2>New Booking</h2>
    <div class="formWrap">
      <label for="firstName">First Name: </label>
      <input type="text" id="firstName" v-model="firstName">
    </div>
    <div class="formWrap">
      <label for="lastName">Last Name: </label>
      <input type="text" id="lastName" v-model="lastName">
    </div>
    <div class="formWrap">
      <label for="email">e-mail: </label>
      <input type="text" id="email" v-model="email">
    </div>
    <div class="formWrap">
      <h3>Checked in?</h3>
      <label for="Yes">Yes</label>
      <input type="radio" id="Yes" value="Yes" name="checkIn" v-model="checkIn">
      <label for="No">No</label>
      <input type="radio" id="No" value="No" name="checkIn" v-model="checkIn">
    </div>

    <input type="submit" value="Save" id="save"/>
  </form>

</template>

<script>
import { eventBus } from '../main';
import BookingsService from '../services/BookingsService';

export default {
   name: "bookings-form",
   data() {
     return {
       firstName: '',
       lastName: '',
       email: '',
       checkIn: null
     }
   },
   methods: {
     addBooking(e){
       e.preventDefault()
       const booking = {
         firstName: this.firstName,
         lastName: this.lastName,
         email: this.email,
         checkIn: this.checkIn
       }
       BookingsService.postBooking(booking)
         .then(res => eventBus.$emit('booking-added', res))
     }
   }
}
</script>

<style lang="css" scoped>
</style>

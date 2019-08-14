use bookings;
db.dropDatbase();

db.guests.insertMany([
  {
    firstName: "Gavin",
    lastName: "Black",
    email: "gavin_black@hotmail.co.uk",
    checkIn: true
  },
  {
    firstName: "Eve",
    lastName: "Bramley",
    email: "evebramley@me.com",
    checkIn: false
  },
  {
    firstName: "John",
    lastName: "Harper",
    email: "john_harper@aol.com",
    checkIn: true
  }
]);

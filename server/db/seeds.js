use bookings;
db.dropDatbase();

db.bookings.insertMany([
  {
    firstName: "Gavin",
    lastName: "Black",
    email: "gavin_black@hotmail.co.uk",
    checkIn: "Yes"
  },
  {
    firstName: "Eve",
    lastName: "Bramley",
    email: "evebramley@me.com",
    checkIn: "No"
  },
  {
    firstName: "John",
    lastName: "Harper",
    email: "john_harper@aol.com",
    checkIn: "Yes"
  }
]);

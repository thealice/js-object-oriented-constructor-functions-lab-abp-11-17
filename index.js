function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
}
let redScooter = new Scooter(1979, 'red', 'Rover');

function Driver(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}
function PickupLocation(address, city) {
  this.address = address;
  this.city = city;
}

<<<<<<< HEAD
let newPickUp = new PickupLocation('123 Broadway', 'New York City')
=======
let newPickUp = new PickupLocation('123 Broadway', 'New York City')
>>>>>>> cb4ec93a3bd9caf678a72e0c71978a0afb88948b

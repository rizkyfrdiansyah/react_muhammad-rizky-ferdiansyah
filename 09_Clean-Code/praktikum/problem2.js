// CODINGAN JS PROBLEM 2
// class kendaraan {
// var totalroda = 0;
// var kecepatanperjam = 0;
// }
//
// class mobil extends kendaraan {
// void berjalan() {
// tambahkecepatan(10);
// }
//
// tambahkecepatan(var kecepatanbaru) {
// kecepatanperjam = kecepatanperjam + kecepatanbaru;
// }
// }
//
// void main() {
// mobilcepat = new mobil();
// mobilcepat.berjalan();
// mobilcepat.berjalan();
// mobilcepat.berjalan();
//
// mobillamban = new mobil();
// mobillamban.berjalan();
// }

// JAWABAN JS PROBLEM 2
class Vehicle {
  constructor() {
    this.wheel = 0;
    this.speed = 0;
  }
}

class Car extends Vehicle {
  move(distance) {
    for (let step = 0; step < distance; step++) {
      this.increaseSpeed(10);
    }
  }

  increaseSpeed(newSpeed) {
    this.speed += newSpeed;
  }

  display(speedLevel) {
    console.log("mobil " + speedLevel + " : " + this.speed + "km/jam");
  }
}

function main() {
  let fastCar = new Car();
  fastCar.move(3);
  fastCar.display("cepat");

  let slowCar = new Car();
  slowCar.move(1);
  slowCar.display("lamban");
}

main();

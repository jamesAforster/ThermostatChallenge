class Thermostat {

  constructor() {
    this.temp = 20
  }

  up(n) {
    this.temp += n
  }

  down(n) {
    this.temp -= n
  }

}
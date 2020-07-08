class Thermostat {

  constructor() {
    this.temp = 20
  }

  up(n) {
    this.temp += n
  }

  down(n) {
    if ((this.temp - n) < 10) throw Error("10 is the minimum temp");
    this.temp -= n
  }

}
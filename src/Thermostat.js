class Thermostat {

  constructor() {
    this.temp = 20;
    this.max = 25;
    this.min = 10;
    this.powersaving = true;
  }

  up(n) {
    if ((this.temp + n) > this.max) throw Error(`${this.max} is the maximum temp`)
    this.temp += n
  }

  down(n) {
    if ((this.temp - n) < this.min) throw Error(`${this.min} is the minimum temp`);
    this.temp -= n
  }

  powerMode() {
    if (this.powersaving == true) {
      this.powersaving = false
      this.max = 32
    }
    else {
      this.powersaving = true
      this.max = 25
    }
  }
}
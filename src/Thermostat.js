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

  reset() {
    this.temp = 20
  }

  usage () {
    function between(x, min, max) {
      return x >= min && x <= max;
    }

    if (between(this.temp, 0, 17)) {
      return "low-usage"
    } else if (between(this.temp, 18, 25)) {
      return "medium-usage"
    } else {
      return "high-usage"
    }
  }
}
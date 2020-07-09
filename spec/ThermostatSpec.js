describe ('Thermostat', function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temp', function() {
    it('Is created with a temperature of 20', function() {
      expect(thermostat.temp).toEqual(20);
    });

  });

  describe('up', function() {
    it('will increase the temp by the argument passed', function () {
      thermostat.up(1);
      expect(thermostat.temp).toEqual(21);
    })
  })

  describe('down', function() {
    it('will decrease the temp by the argument passed', function () {
      thermostat.down(1);
      expect(thermostat.temp).toEqual(19);
    })

    it('will throw an error if we try to decrease temp below 10', function () {
      thermostat.down(10);
      expect (function () {thermostat.down(1);}).toThrow(Error('10 is the minimum temp'))
    })
  })

  describe('powerMode', function() {
    it('will be turned on by default when thermostat is created', function () {
      thermostat = new Thermostat();
      expect(thermostat.powersaving).toEqual(true)
      expect (function () {thermostat.up(20);}).toThrow(Error('25 is the maximum temp'))
    });

    it('can be turned off and effect the max temp', function () {
      thermostat.powerMode();
      expect(thermostat.powersaving).toEqual(false)
      expect (function () {thermostat.up(20);}).toThrow(Error('32 is the maximum temp'))
    });
  });

  describe('reset', function () {
    it('will reset the temperature to 20 when called', function () {
      thermostat.up(3);
      thermostat.reset();
      expect(thermostat.temp).toEqual(20)
    })
  })

  describe('usage', function () {
    it('defines low usage correctly', function () {
      thermostat.down(5);
      expect(thermostat.usage()).toEqual("low-usage")
    })

    it('defines medium usage correctly', function () {
      expect(thermostat.usage()).toEqual("medium-usage")
    })

    it('defines high usage correctly', function () {
      thermostat.powerMode();
      thermostat.up(10);
      expect(thermostat.usage()).toEqual("high-usage")
    })

  })
});

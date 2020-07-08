describe ('Thermostat', function() {

  describe('temp', function() {
    it('Is created with a temperature of 20', function() {
      thermostat = new Thermostat();
      expect(thermostat.temp).toEqual(20);
    });

  });

  describe('up', function() {
    it('will increase the temp by the argument passed', function () {
      thermostat = new Thermostat();
      thermostat.up(1);
      expect(thermostat.temp).toEqual(21);
    })
  })

  describe('down', function() {
    it('will decrease the temp by the argument passed', function () {
      thermostat = new Thermostat();
      thermostat.down(1);
      expect(thermostat.temp).toEqual(19);
    })

    it('will throw an error if we try to decrease temp below 10', function () {
      thermostat = new Thermostat();
      thermostat.down(10);
      expect (function () {thermostat.down(1);}).toThrow(Error('10 is the minimum temp'))
    })

  })

});
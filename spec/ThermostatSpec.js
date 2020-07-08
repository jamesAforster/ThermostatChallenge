describe ('Thermostat', function() {

  describe('temp', function() {
    it('Is created with a temperature of 20', function() {
      thermostat = new Thermostat();
      expect(thermostat.temp).toEqual(20);
    });

  });

});
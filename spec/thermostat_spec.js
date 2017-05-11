describe("Thermostat", function() {
  var Thermostat = require('../lib/thermostat');
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it("initiates with a temperature function set to 20", function(){
    expect(thermostat._temp).toBe(20);
  });

  it('temperature can be increased with an up function', function(){
    thermostat.up(5);
    expect(thermostat._temp).toBe(25);
  });

  it('temperature can be decreased with an up function', function(){
    thermostat.down();
    expect(thermostat._temp).toBe(19);
  });

  it("should initiate with  power save mode set to on", function(){
    expect(thermostat._powerSave).toBe(true);
    expect(thermostat._maxTemp).toBe(25);
  });

  it("should allow us to change power saving mode from on to off", function(){
    thermostat.powerSaveToggle();
    expect(thermostat._powerSave).toBe(false);
  })

  it("should change the maxTemperature based on powerSave toggle", function(){
    thermostat.powerSaveToggle();
    expect(thermostat._maxTemp).toBe(32);
  })

  it("should reset to 20 degrees when the reset function is called", function(){
    thermostat.reset();
    expect(thermostat._temp).toBe(20);
  });

  it("should reset to predefined when the reset function is called with a parameter", function(){
    thermostat.reset(11);
    expect(thermostat._temp).toBe(11);
  });

  it("should have a status reading of low-usage when temperature is below 18", function(){
    thermostat.reset(17.99);
    expect(thermostat._status).toBe("low-usage");
  });

  it("should have a status reading of low-usage when temperature is below 25 and at least 18", function(){
    thermostat.reset(18);
    expect(thermostat._status).toBe("medium-usage");
    thermostat.reset(24.99);
    expect(thermostat._status).toBe("medium-usage");
  });

  it("should have a status reading of low-usage when temperature is below 25 and at least 18", function(){
    thermostat.powerSaveToggle();
    thermostat.reset(25.01);
    expect(thermostat._status).toBe("high-usage");
  });

  it("should throw an error and reset the temperature when invoking a temperature that is too high", function (){
    expect(function(){thermostat.reset(38)}).toThrowError('Too Hot! Auto-reset to 25°C');
    expect(thermostat._temp).toBe(25);
  });

  it("should throw an error and reset the temperature when invoking a temperature that is too high", function (){
    expect(function(){thermostat.reset(9)}).toThrowError('Too Cold! Auto-reset to 10°C');
    expect(thermostat._temp).toBe(10);
  });
});

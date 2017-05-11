$(document).ready(function(){

  
});

  var tstat = new Thermostat()

  $(".TemperatureDisplay").text(tstat._temp)

  function increaseTemp(){
    tstat.up()
    $(".TemperatureDisplay").text(tstat._temp)
  };

  function decreaseTemp(){
    tstat.down()
    $(".TemperatureDisplay").text(tstat._temp)
  };

  function resetTemp(){
    tstat.reset()
    $(".TemperatureDisplay").text(tstat._temp)
  };

  function pSave(){
    tstat.powerSaveToggle()
    $(".TemperatureDisplay").text(tstat._temp)
  };

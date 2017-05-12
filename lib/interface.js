$(document).ready(function(){


});

  var tstat = new Thermostat()

  $(".temperatureDisplay").text(tstat._temp)

  function increaseTemp(){
    tstat.up()
    $(".temperatureDisplay").text(tstat._temp)
  };

  function decreaseTemp(){
    tstat.down()
    $(".temperatureDisplay").text(tstat._temp)
  };

  function resetTemp(){
    tstat.reset()
    $(".temperatureDisplay").text(tstat._temp)
  };

  function pSave(){
    tstat.powerSaveToggle()
    $(".temperatureDisplay").text(tstat._temp)
  };

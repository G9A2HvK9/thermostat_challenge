function Thermostat(){
  this._temp = 20;
  this._powerSave = true;
  this._minTemp = 10;
  this._maxTemp = 25
  this._status = "medium-usage"
};


Thermostat.prototype.powerSaveToggle = function(){
  this._powerSave == true ? this._powerSave = false : this._powerSave = true;
  this._maxTempSetter();
  this._doChecks();
};


Thermostat.prototype.up = function(temp) {
  (temp) ? this._temp += temp : this._temp ++ ;
  this._doChecks();
};

Thermostat.prototype.down = function(temp) {
  (temp) ? this._temp -= temp : this._temp -- ;
  this._doChecks();
};

Thermostat.prototype.reset = function(temp) {
  (temp) ? this._temp = temp : this._temp = 20;
  this._doChecks();
};

// 'Private' methods


Thermostat.prototype._maxTempSetter = function(){
  this._powerSave === true ? this._maxTemp = 25 : this._maxTemp = 32
};

Thermostat.prototype._doChecks = function(){

  if (this._temp < this._minTemp) {
    this.reset(this._minTemp);
    this._statusSetter();
    console.log("Too Cold! Auto-reset to " + this._minTemp + "°C");
  } else if (this._temp > this._maxTemp) {
    this.reset(this._maxTemp);
    this._statusSetter();
    console.log("Too Hot! Auto-reset to " + this._maxTemp + "°C");
  };
};

Thermostat.prototype._statusSetter = function(){
  if (this._temp < 18){
    this._status = "low-usage"
  } else if (this._temp < 25){
    this._status = "medium-usage"
  } else {
    this._status = "high-usage"
  };
};

module.exports = Thermostat;


// if (this._powerSave == true ){
//   this._powerSave = false
//   this._maxTemp = 32
// }
// else {
//   this._powerSave = true
//   this._maxTemp = 25
// }

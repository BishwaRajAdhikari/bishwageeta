var Readable=require('stream').Readable;
var util=require('util');

// module.exports=function(){
//   var rs=new Readable();
//   rs.push('beep ');
//   rs.push('boop\n');
//   rs.push(null);
//   rs.pipe(process.stdout);
// }

module.exports = Thermometer;

function Thermometer(options) {
  if (! (this instanceof Thermometer)) return new Thermometer(options);
  if (! options) options = {};
  options.objectMode = true;
  Readable.call(this, options);
}

util.inherits(Thermometer, Readable);

Thermometer.prototype._read = function read() {
  var self = this;

  getTemperatureReadingFromThermometer(function(err, temperature) {
    if (err) self.emit('error', err);
    else self.push(temperature);
  });
};

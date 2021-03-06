// Generated by CoffeeScript 1.6.3
(function() {
  var Geo;

  Geo = (function() {
    function Geo() {}

    Geo.prototype.d2r = function(degrees) {
      return (degrees * Math.PI) / 180;
    };

    Geo.prototype.circlePoint = function(centerX, centerY, radius, angle) {
      var x, y;
      x = centerX + radius * Math.cos(this.d2r(angle));
      y = centerY + radius * Math.sin(this.d2r(angle));
      return {
        x: x,
        y: y
      };
    };

    Geo.prototype.areaFromRadius = function(radius) {
      return Math.PI * Math.pow(radius, 2);
    };

    Geo.prototype.radiusFromArea = function(area) {
      return Math.sqrt(area / Math.PI);
    };

    Geo.prototype.p2c = function(radius, angle) {
      var angleRadians, x, y;
      angleRadians = this.d2r(angle);
      x = radius * Math.cos(angleRadians);
      y = radius * Math.sin(angleRadians);
      return {
        x: x,
        y: y
      };
    };

    return Geo;

  })();

  window.Geo = Geo;

}).call(this);

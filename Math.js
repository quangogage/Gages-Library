var math = {};

// Get a random number between two.
math.getRandom = function(min, max) {
  return Math.random() * (max - min + 1) + min;
};

// Convert to radians
math.toRadians = function(degrees) {
  return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
math.toDegrees = function(radians) {
  return radians * 180 / Math.PI;
};

// Get distance between two points
math.getDistance = function(x1, y1, x2, y2) {
  var a = x1 - x2;
  var b = y1 - y2;

  return Math.sqrt(a * a + b * b);
};

module.exports = math;

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

module.exports = math;

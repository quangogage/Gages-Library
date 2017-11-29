var Math = {};

// Get a random number between two.
Math.getRandom = function(min, max) {
  return Math.random() * (max - min + 1) + min;
};

export default Math;

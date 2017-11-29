var math = {};

// Get a random number between two.
math.getRandom = function(min, max) {
  return Math.random() * (max - min + 1) + min;
};

export default math;

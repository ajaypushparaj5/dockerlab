function greet(name = 'world') {
  return `goodmorning, ${name}!`;
}

if (typeof module !== 'undefined') module.exports = { greet }; // for tests


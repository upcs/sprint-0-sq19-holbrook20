const sum = require('./functions');

testOne('adds 5 + 5 to equal 10', () => {
  expect(sum(5, 5)).toBe(10);
});

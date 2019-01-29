const sum = require('./functions');

test('adds 5 + 5 to equal 7', () => {
  expect(sum(5,5)).toBe(10);
  
  });
  
test('Difference between sum and number is the other number', () => {
  expect(difference(sum(5,5),5).toBe(5);
  });

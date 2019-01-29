const sum = require('./functions');

test('adds 5 + 5 to equal 10', () => {
  expect(sum(5, 5)).toBe(10);
});

test('adds 5 + 5 to equal 15', () => {
    expect(sum(5, 5)).toBe(10);
});

const add = (x, y) => x + y;

test('should add the 2 input arguments', () => {
  const result = add(1, 2);

  expect(result).toBe(3);
});
const location = ['123 toffee st', 'Los Angeles', 'CA', '91789'];

const [ , city, state, , country = 'USA'] = location;

test('should use variables from destructred array', () => {
  expect(city).toBe('Los Angeles');
  expect(state).toBe('CA');
  expect(country).toBe('USA');
});
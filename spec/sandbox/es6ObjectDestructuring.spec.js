const person = {
  name: 'Michael',
  age: 27,
  location: {
    city: 'Los Angeles',
    st: 'CA'
  }
};

const { name: firstName = 'anonymous', age = 0} = person;

test('should use variables from the destructred object', () => {
  expect(firstName).toBe('Michael');
  expect(age).toBe(27);
});


const { city, st: state } = person.location;

const testString = `hi my name is ${firstName} i am ${age} years old and i am from ${city}, ${state}`;

test('should use variables from destructred object to form a sentence', () => {
  const result = 'hi my name is Michael i am 27 years old and i am from Los Angeles, CA';

  expect(testString).toBe(result);
});


const testObj = {};

const { firstName: first = 'Michael', lastName = 'Chen'} = testObj;

test('should set default value in variable is value does not exist in destructred object', () => {
  expect(first).toBe('Michael');
  expect(lastName).toBe('Chen');
});

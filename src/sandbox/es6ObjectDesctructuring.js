const person = {
  name: 'Michael',
  age: 27,
  location: {
    city: 'Los Angeles',
    st: 'CA'
  }
};

const { name: firstName = 'anonymous', age = 0} = person;

console.log(`${firstName} is ${age}`);

const { city, st: state } = person.location;

console.log(`${city}, ${state}`);
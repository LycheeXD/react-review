const location = ['123 toffee st', 'Los Angeles', 'CA', '91789'];

const [ , city, state, , country = 'USA'] = location;

console.log(`you are in ${city}, ${state} ${country}`);
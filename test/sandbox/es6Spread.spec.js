const originalObject = {
  a: 1,
  b: 2,
  c: 3
};

const newObj1 = {
  ...originalObject,
  d: 4
};

test('should create a new object with everything from the original', () => {
  const result = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };

  expect(newObj1).toEqual(result);
});


const newObj2 = {
  ...originalObject,
  c: 4
};

test('should create a new object from the original with "c" overwritten', () => {
  const result = {
    a: 1,
    b: 2,
    c: 4
  };

  expect(newObj2).toEqual(result);
});


const originalArray = [0, 1, 2];

const newArray1 = [...originalArray, 3, 4];

test('should create a new array with everything from the original with values after', () => {
  const result = [0, 1, 2, 3, 4];

  expect(newArray1).toEqual(result);
});


const newArray2 = [-2, -1, ...originalArray, 3, 4];

test('should create a new array with everything from the original with before and after', () => {
  const result = [-2, -1, 0, 1, 2, 3, 4];

  expect(newArray2).toEqual(result);
});

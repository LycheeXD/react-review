const a = {
  a: 1,
  b: 2,
  c: 3
};

const b = {
  ...a,
  d: 4
};

console.log('a', a, 'b', b);

const c = {
  ...a,
  c: 4 // c gets overwritten
};

const d = [0, 1, 2];

const e = [...d, 3, 4];

console.log('d', d, 'e', e);

const f = [-2, -1, ...d, 3, 4];

console.log('f', f);
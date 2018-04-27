const { floor } = Math;

function summation(k, s) {
  const n = floor(s / k);
  return (k * (n * (n + 1))) / 2;
}

const a = summation(3, 999);
const b = summation(5, 999);
const c = summation(15, 999);

console.log(
  a + b - c
);

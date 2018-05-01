function fibo(n) {
  let a = 0;
  let b = 2;
  let temp = 0;
  let count2 = 0;

  while(b < n) {
    temp = b;
    b = 4 * b + a;
    a = temp;
    count2++
  }

  return Math.floor((a + b - 2) / 4);
}

fibo(4000000)

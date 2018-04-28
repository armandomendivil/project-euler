// First attempt
var a = 0;
var b = 1;
var c = 0;

var sum = 0;

while(c < 4000000) {
  c = a + b;
  a = b;
  b = c;

  if (!(c % 2)) sum += c;
}

console.log(sum);

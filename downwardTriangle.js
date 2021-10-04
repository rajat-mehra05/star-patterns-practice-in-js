let n = 5;
let str = "";

for (let i = 1; i <= n; i++) {
  for (let j = 0; j <= n - i; j++) {
    str += "*";
  }
  str += "\n";
}

/* or this loop works too
for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n; j++) {
    str += "*";
  }
  str += "\n";
}
*/
console.log(str);

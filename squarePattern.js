let n = 5;
let str = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);

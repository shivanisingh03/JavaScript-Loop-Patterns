// let n = 5;
// let string = "";
// // Pyramid
// for (let i = 1; i <= n; i++) {
//   for (let k = 1; k <= i; k++) {
//     string += k;
//   }
//   string += "\n";
// }


// Reverse Pyramid
// for (let i = 1; i <= n - 1; i++) {
//   for (let k = 1; k <= n - i; k++) {
//     string += k;
//   }
//   string += "\n";
// }
// console.log(string);



n=5
str=""
for(var i=0;i<=n;i++){
  for(var k=1;k<=i;k++){
  str+=k
  }
  str+="\n"
}
console.log(str)







// 1
// 12
// 123
// 1234
// 12345
// 1234
// 123
// 12
// 1

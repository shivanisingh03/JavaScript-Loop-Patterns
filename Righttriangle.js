// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// // *
// // **
// // ***
// // ****
// // *****




let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // creating spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // creating numbers
  for (let k = 1; k <= 2 * i - 1; k++) {
    string += k;
  }
  string += "\n";
}
console.log(string);

//     1
//    123
//   12345
//  1234567
// 123456789

for (let i = 1; i <= n; i++) {
  // creating spaces
  for (let j = 1; j < i; j++) {
    string += " ";
  }
  // creating numbers
  for (let k = 1; k <= 2 * (n - i + 1) - 1; k++) {
    string += k;
  }
  string += "\n";
}
console.log(string);


//     1
//    123
//   12345
//  1234567
// 123456789
// 123456789
//  1234567
//   12345
//    123
//     1


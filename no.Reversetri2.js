// use this for that 'n - j + 1'



// for loop

// let n = 5; // height of pattern
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     string += n - j + 1;
//   }
//   string += "\n";
// }
// console.log(string);


// 54321
// 5432
// 543
// 54
// 5


// while loop
let n = 5; // height of pattern
let string = "";
var i=1
while (i<=n){
    j=1
    while(j<=n-i+1){
        string+=n-j+1
        j++
    }
    string+="\n"
    i++
}
console.log(string);


// use this for that 'n - i - j + 2'


// for loop

// let n = 5; // height of pattern
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     string += n - j - i + 2;
//   }
//   string += "\n";
// }
// console.log(string);



// let n = 5; // height of pattern
// let string = "";


//while loop 

let n = 5; // height of pattern
let string = "";
var i=1
while (i<=n){
    j=1
    while(j<=n-i+1){
        string+=n - i - j + 2
        j++
    }
    string+="\n"
    i++
}
console.log(string);



// 54321
// 4321
// 321
// 21
// 1

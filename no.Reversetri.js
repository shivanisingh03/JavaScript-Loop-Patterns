// use this for that 'n - i + 1'

// for loop
let n = 5; // height of pattern
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string);



// while loop
let n1 = 5; // height of pattern
let string1 = "";
var i=1
while (i<=n1){
    j=1
    while(j<=n1-i+1){
        string1+=j
        j++
    }
    string1+="\n"
    i++
}
console.log(string1);








// 12345
// 1234
// 123
// 12
// 1
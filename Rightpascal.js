let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < n - i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);



// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *



var n1=5
var string1=""
var i=0
while (i<n1){
    var j=0
    while (j<n1-i){
        string1+="*"
        j++
    }
    i++
    string1+="\n"
}
console.log(string1)


// *****
// ****
// ***
// **
// *






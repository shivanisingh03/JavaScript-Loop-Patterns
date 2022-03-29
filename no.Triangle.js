// for loop

let n = 4; // height of pattern
let string = "";
let count = 1;
// External loop
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string += count;
    count++;
  }
  string += "\n";
}
console.log(string);





// while loop

var n1=4
var str="";
var i=1;
var c=1
while(i<=n1){
    var j=1
    while(j<=i){
        str+=c
        c++
        j++
    }
    str+="\n"
    i++
}
console.log(str);


// 1
// 23
// 456
// 78910






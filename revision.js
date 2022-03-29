// for loop

var n=5
var string=""
for (let i = 0; i < n; i++) {
    // printing star
    for (let k = 0; k < n - i; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
  



// while loop

var n=5
var string=""
var i=0
while (i<n){
    var j=0
    while (j<n-i){
        string+="*"
        j++
    }
    i++
    string+="\n"
}
console.log(string)
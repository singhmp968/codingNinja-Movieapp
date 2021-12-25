const { func } = require("prop-types");

function sum(a,b)
{
    return a+b;
}
console.log(sum)
// converting the above into curried function
function curriedSum(a){
    return function(b){
        return a+b;
    }
}
console.log(curriedSum(5)(6)); // here 5 is for curriedSum(a) is thevalue of a and  is the value of b
// other way of calling the curreid function
var addTen = curriedSum(10); // herw we return this value andthe value of a will be set to 10 ƒ (b){
//     return a+b;
// }
// now here we are passingthe value againg but this time we 
console.log(addTen(67)) // it will assign the value of vb as 67 and return 77 i.e 10 + 67
console.log(addTen(7)) // op 17
console.log(addTen(27)) // op 37

// vvi ho to call function using curreind function
function getCurryFunction(f){
    return function(a){
        return function(b){
            return function(c){
                return f(a,b,c);
            }
        }
    }
}

function sum(a,b,c){
    return a+b+c;
}

var curriedSum = getCurryFunction(sum);
console.log(curriedSum(1)(2)(3));
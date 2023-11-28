// var a = 5;
// a = "John";

// console.log(a);

var a = Array(6);
console.log(a);
var a = new Array(1,2,3,4,5);
console.log(a);
var a = [1,3,2,5,4];
console.log(a);
console.log(a[2]);
a[1] = 9;
console.log(a);
console.log(a.length);
a.push(12);
console.log(a);
a.pop();
console.log(a);
a.unshift(1,2,3);
console.log(a);
console.log(a.indexOf(2));
console.log(a.includes(2));
subA = a.slice(2,4); //-----> subA will also be var as a is var
console.log(subA);
var sum = 0;
for(var i = 0; i < a.length; i++){
    sum = sum + a[i];
}
console.log(sum);
//reduce()
var sum = a.reduce((sum,a) => sum + a);
console.log(sum);
//filter()
evenA = a.filter(x => x % 2 == 0);
console.log(evenA);
//map()
multiplyA = evenA.map(x => x * 3);
console.log(multiplyA);
sumA = multiplyA.reduce((sum,a) => sum + a);
console.log(sumA);
//function chaining
combineA = a.filter(x => x % 2 == 0).map(x => x * 3).reduce((sum,a) => sum + a);
console.log(combineA);
//string sorting
var fruits = ['A','E','D','B','C'];
fruits.sort();
console.log(fruits);
var numbers = [12,0o6,5,17,4];
numbers.sort();
console.log(numbers);
// numbers.sort(function(a,b){
//     return a-b;
// })
// console.log(numbers);
numbers.sort((a,b) => a - b);
console.log(numbers);
fruits.reverse();
console.log(fruits);
numbers.sort((a,b) => b - a);
console.log(numbers);
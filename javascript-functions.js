function sum(a,b) {
    return a + b;
}
console.log(sum(1,2));
var sum1 = function (a,b){
    return a + b;
}
console.log(sum1(2,3));
var sum2 = (a,b) => (a + b);
console.log(sum2(3,4));

//var -> can be declared at global level or at functional level
//let -> can be declared at global level or at block level

var a = 'a -> global';
let b = 'b -> global';
const c = 'c -> global';

if(true){
    var a = 'a -> block';
    console.log(a);
}
function A(){
    var a = 'a -> function';
    console.log(a);
}
A();
console.log(a);

if(true){
    let b = 'b -> block';
    console.log(b);
}
function B(){
    let b = 'b -> function';
    console.log(b);
}
B();
console.log(b);

if(true){
    const c = 'c -> block';
    console.log(c);
}
function C(){
    const c = 'c -> function';
    console.log(c);
}
C();
console.log(c);
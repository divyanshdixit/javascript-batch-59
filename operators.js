// airthmatic ope: (+, -, *, /, %, **)

var a = 10;
var b = 20;

a + b; // 30
a-b //  -10

// logical oper: (&&(and), ||(OR), !(not))

true && true => true
true && false => false
false && true => false
false && false => false

false || false => false
true || false => true
false || true => true
true || true => true

!true => false
!false => true
!0 => true


// comparison oper: (==, ===)

(==) // => check only value
(===) // => check value and datatype both

10 == '10' // true

'10' === '100' // false

// ternary oper (? :) => short form if else

if(cond){
    // 
}else {

}

(cond) ? 'true' : 'false'

// assignment oper (=)
var a = 10

// datatype oper (typeof, instanceof)

var t = 10
console.log(typeof t) // number
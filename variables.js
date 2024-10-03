// var, let , const

var x = 10; // number
var y = 20;

var char = "divyansh"; // '', "" string

// primitive(immutable) => value change => reference change

var g = 300; // 1000 => address

g = 400; // 1001

// 1000

// non-primitve => value change => reference will not change

var person1 = { // 2000
  name: "divyansh",
  age: 28,
  city: "noida",
  running: function () {},
};

person1.age = 29;
person1 // 2000

// function/method

// var person2 = {
//   name: "abhishek",
//   age: 29,
//   city: "kanpur",
//   cooking: function () {},
// };

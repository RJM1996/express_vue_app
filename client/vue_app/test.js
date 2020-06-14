// // let x
// // const y = 0
// // console.log(x, y)

// // var a = 100
// // x = 200
// // console.log(Object.getOwnPropertyDescriptor(global, a)) // 浏览器执行的时候global改为globalThis

// let objA = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// let objB = objA
// console.log(JSON.stringify(objA))
// console.log(JSON.stringify(objB))
// objB.b = 4
// console.log(JSON.stringify(objA))
// console.log(JSON.stringify(objB))
// let objC = objB
// console.log(JSON.stringify(objC))
// objC.b = 5
// console.log(JSON.stringify(objA))
// console.log(JSON.stringify(objB))
// console.log(JSON.stringify(objC))

// let result = '{"taskId":1152921504735848759,"status":"CREATED","progress":0.0,"success":true}'
// JSON.parse(result) 不为19位数补上双引号，直接parse时，精度丢失，结果如下：
// {
//  taskId: 1152921504735848700,
//  status: 'CREATED',
//  progress: 0,
//  success: true
// }
// const taskId = result.match(/[0-9]{19}/)[0] // 正则获取19位数字的值
// result = result.replace(taskId, `"${taskId}"`) // 补上双引号
// const data = JSON.parse(result)
// console.log(data)
// {
//  taskId: '1152921504735848759', // 解析出来之后是字符串，因此没有丢失精度
//  status: 'CREATED',
//  progress: 0,
//  success: true
// }

// console.log(0.1 + 0.2 - 0.3 <= Number.EPSILON);
// console.log(Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);

// var o = new Object();

// o[Symbol.iterator] = function() {
//   var v = 0;
//   return {
//     next: function() {
//       return { value: ++v, done: v > 10 };
//     },
//   };
// };

// for (var v of o) console.log(v); // 0 1 2 3 ... 9

// var symbolObject = (function(){ return this; }).call(Symbol("a"));

// console.log(typeof symbolObject); //object
// console.log(symbolObject instanceof Symbol); //true
// console.log(symbolObject instanceof Object); //true
// console.log(symbolObject.constructor == Symbol); //true

// var symbolObject = Object(Symbol("a"));

// console.log(Object.prototype.toString.call(symbolObject)); //[object Symbol]

// var o = {
//   valueOf: () => {
//     console.log("valueOf");
//     return {};
//     // return 2
//   },
//   toString: () => {
//     console.log("toString");
//     return {};
//   },
// };
// o + ''
// const a = o * 2;
// console.log(a)
// String(o)
// valueOf
// toString
// TypeError
// function fun01() {
//   let undefined = 99;
//   console.log(undefined);
// }
// fun01();
// let a = 1234567890987654321;
// console.log(BigInt(a));

// var cat = {
//   say() {
//     console.log("meow~");
//   },
//   jump() {
//     console.log("jump");
//   },
// };
// var tiger = Object.create(cat, {
//   say: {
//     writable: true,
//     configurable: true,
//     enumerable: true,
//     value: function() {
//       console.log("roar!");
//     },
//   },
// });
// var anotherCat = Object.create(cat);
// anotherCat.say();
// var anotherTiger = Object.create(tiger);
// anotherTiger.say();

// var o = new Object();
// var n = new Number();
// var s = new String();
// var b = new Boolean();
// var d = new Date();
// var arg = (function() {
//   return arguments;
// })();
// var r = new RegExp();
// var f = new Function();
// var arr = new Array();
// var e = new Error();
// console.log(
//   [o, n, s, b, d, arg, r, f, arr, e].map((v) =>
//     Object.prototype.toString.call(v)
//   )
// );

// // var o1 = { [Symbol.toStringTag]: "MyObject" };
// // console.log(o1 + "");

// function c1() {
//   this.p1 = 1;
//   this.p2 = function() {
//     console.log(this.p1);
//   };
// }
// var o1 = new c1();
// o1.p2();

// function c2() {}
// c2.prototype.p1 = 2;
// c2.prototype.p2 = function() {
//   console.log(this.p1);
// };
// var o2 = new c2();
// o2.p2();

// Object.create = function(prototype) {
//   var cls = function() {};
//   cls.prototype = prototype;
//   return new cls();
// };

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }
// const rectangle = new Rectangle(10, 20);
// console.log(rectangle.area);

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(this.name + " makes a noise.");
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//     // call the super class constructor and pass in the name parameter
//   }
//   speak() {
//     console.log(this.name + " barks.");
//   }
// }
// let dog = new Dog("Mitzie");
// dog.speak(); // Mitzie barks.

// console.log(new Date().toLocaleString())

var arr = new Array(6)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"
arr[3] = "James"
arr[4] = "Adrew"
arr[5] = "Martin"

arr.splice(-1,0,"William")
console.log(arr)

let arr01 = [
  'aaa',
  'bbb'
]
arr = arr.concat(arr01)
console.log(arr)


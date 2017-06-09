
// body...
/*let a=1;
let b= 2;
a=>a+1;
console.log(a)
console.log(b)
console.log(1111)
document.write(1111)
*/
/*var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log("var",i);
  };
}
a[6](); // 10*/
/*var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log("let",i);
  };
}
a[6](); // 6*/
/*//暂时性死区
// 1.
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError node环境运行报错
  console.log(tmp);
  let tmp;
}
// 2.
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 报错
// 3.
// 不报错
var x = x;
// 报错
let x = x;
// ReferenceError: x is not defined*/

/*// 不允许重复声明 
// 报错
function () {
  let a = 10;
  var a = 1;
}

// 报错
function () {
  let a = 10;
  let a = 1;
}
// 因此，不能在函数内部重新声明参数。
function func(arg) {
  let arg; // 报错
}

function func(arg) {
  {
    let arg; // 不报错
  }
}*/

/*//产生一个随机数
var num=Math.random();
//将这个数字输出到console
console.log(`your num is ${num}`);
*/
/*let x = do{
  let t = f();
  t * t + 1;
};
console.log(x)*/




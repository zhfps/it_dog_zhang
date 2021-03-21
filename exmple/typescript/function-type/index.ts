//Function-type

//具名方法
function add(x: number, y: number): number {
  return x + y;
}
//匿名方法
let Add = function (x: number, y: number): number {
  return x + y;
};
//箭头函数式
let Fadd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
console.log(add(1, 2));//3
console.log(Add(1, 2));//3
console.log(Fadd(1, 2));//3
//可选参数
function NotRequired(x: number, y?: number): void { }
//默认参数
function DefaultArgument(x: number, y = 1): void { }
//剩余参数
function ReseArgument(x: number, ...argument: number[]): void { }

//Literal Types 字面量类型

type week = 1 | 2 | 3 | 4 | 5 | 6 | 7

let sunday: week = 7
//Union Types 联合类型

let _union:string|number = 1
_union = 'hello'

//classes 类

//Enmus 枚举

//Generics 范型



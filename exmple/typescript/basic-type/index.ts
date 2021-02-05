//Boolean类型
let _boolean: boolean = false;
//console.log(_boolean)


//Number类型
let _number1: number = 0.1
let _number2: number = 0.2
//console.log(_number1+_number2)
//String类型
let _string: string = 'hello world'


//Array类型
//1.方式1
let _array0: number[] = [1, 2]
//2.方式2
let _array1: Array<number> = [1, 2]
//Tuple元组类型
let _tuple: [number, string] = [1, 'hello world']


//Enum枚举
enum _Enum {
  One,
  Tow,
  Three
}
let _enum: _Enum = _Enum.One
//console.log(_enum)
//unknown类型
let notSure: unknown = 4;
//string
notSure = "maybe a string instead";
//boolean
notSure = false;

//Any 类型
let _any: any = 'string'
_any = 5

//Void 类型
//1.指明方法无返回值
function _function(): void {
  //do something
}
//2.指定变量类型 只能赋值为null 和 undefined
let _void: void = undefined
//"strictNullChecks": false, 
_void = null

//Null and Undefined
let u: undefined = undefined
let n: null = null

//Never

//Object



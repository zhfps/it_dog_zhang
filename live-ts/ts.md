# Ts 再次学习

* 环境准备
* 类型注解 类型推断

``` javascript
let count: number

let num = 123 //num:number
```

* 函数相关类型

  + 函数的返回值

  

``` javascript
  function add(x: number, y: number): number {
      return x + y
  }
```

  + never 和 void 关键字

* 基础类型
    - boolean
    - number
    - string
    - void
    - undefinde
    - symbol
    - null
* 数组

  

``` typescript

    //
    let arr:(number|string)[]
    //
    let arr:string[]
    //
    let arr:{x:number,y:string}[]

  ```

* 元组

``` typescript

    let obj:[string,string,number] = ['A','B',12]

  ```

* interface 接口

``` typescript
    interface Person{
      name: string
      age?:number
      [propName:string]:any
      say():string
    }
    //函数定义
    interface functionName{
      (argment:string):string
    }
  ```

* class 类  (super)

  ```typescript
  class person{

    name:string
     constructor(name: string) {
        this.name = name
    }
    getName(){
      return this.name
    }

  }
  

* 访问类型 public protected private

* class类属性的两种写法

```typescript

class obj {
  public name:string
  constructor(name:string){

    this.name = name

  }
}
//等价于
class obj {
  constructor(public name:string){}
}

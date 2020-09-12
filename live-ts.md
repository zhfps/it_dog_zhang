# TypeScript 学习记录


1. 安装 ts

   ​ npm install typescrip

2. 初始化项目： tsc --init

3. 数据类型

   - 布尔类型 (boolean)
    ```typescript
       const bool:boolean = true
    ```
   - 数字类型 number
    ```typescript
       const height:number = 10
     ```
   - 字符串类型 string (个人习惯用 "'")
    ```typescript
      const name:string = 'name'
    ```
   - 数组类型 Arry
    ```typescript 
     // 常用定义方式   
     let arr:number[] =[]
     // 另一种定义方式
     let arr:Array<number> = []
    ```

  - 用接口表示数组

     ```ts
     interface NumberArray {
       [index: number]: number
     }
     let fibonacci: NumberArray = [1, 1, 2, 3, 5]
     ```

   - 元组
    ```typescript
     let tom: [string, number] = ['Tom', 25];
    ```
   - 枚举
    ```typescript
     enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
    ```
   - 任意类型 any

   - void 和 null

     声明一个 `void` 类型的变量没有什么用，因为你只能将它赋值为 `undefined` 和 `null`：
     ```typescript
     let unusable: void = undefined;
      ```
     在 TypeScript 中，可以使用 `null` 和 `undefined` 来定义这两个原始数据类型：

      ```typescript
      let u: undefined = undefined
      let n: null = null
      ```

      与 `void` 的区别是，`undefined` 和 `null` 是所有类型的子类型。也就是说 `undefined` 类型的变量，可以赋值给 `number` 类型的变量：
       ```typescript
      // 这样不会报错     
      let num: number = undefined;
      // 这样也不会报错
      let u: undefined;
      let num: number = u;

      而 `void` 类型的变量不能赋值给 `number` 类型的变量：
      let u: void;
      let num: number = u;

      // Type 'void' is not assignable to type 'number'.
      ```
      （注：javascript基本类型：
      * undefined
      * null
      * string
      * boolean
      * number
      * symbol(ES6)          
      * Object(引用类型) 
       ）
    （注：java的基本数据类型：
      *  整型：byte, short, int, long

      * 字符型：char

      * 浮点型：float, double

      * 布尔型：boolean
     ）
- 类型别名
  ```typescript
    type Nu = number
  ```

- 联合类型

  联合类型，表示取值可以为多种类型中的一种。

  ```typescript
    let myFavoriteNumber: string | number
    myFavoriteNumber = 'seven'
    myFavoriteNumber = 7
  ```

- 其它

  变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型

* 函数
    * 具名函数
    ```typescript
     function get(name:string):string{
       return name
     }
    ```
    * 匿名函数
    ```typescript
     const get= function(name:string):string{
       return name
     }
     //箭头函数
     const get = (name:string):string =>{
       return name
     }
    ```
    * 函数的使用
        * 对比
         ```typescript
         //typescript中的定义
         function Say(content:string):string{
            return content
          }

         const say = function(content:string):string{
            return content
          }
        //编译后
          function Say(content) {
              return content;
          }
          var say = function (content) {
              return content;
          };

          （注:typescript在编译期检查类型,所以在最终javascript代码中是不带类型检查的）
         ``` 
         * 函数类型
            ```typescript
            //声明
            let Say:(content:string) =>string
            //实现
            Say = (content:string):string =>{
              return content
            }
            //调用
            console.log(Say("hello world"))
            console.log(Say("my name is it_dog_zhang"))

            ```
         * 可选参数
            ```typescript
              function Add(a:number,b:number,c?:number):number{
                  if(c){
                    return a+b+c
                  }else{
                    return a+b
                  }
                }
                console.log(Add(5,4))
                //9
                (注：参数c 为可选参数，可选参数必须置于最后)
            ```
        * 默认参数
         ```typescript
         function Add(a:number,b:number,c:number = 2):number{
              if(c){
                return a+b+c
              }else{
                return a+b
              }
            }

            console.log(Add(5,4,3)) //12
            console.log(Add(5,4))//11
         ``` 
        * 剩余参数
        ```typescript
        //
        function Add(...args:number[]):number{
              let sum = 0
              for (const iterator of args) {
                sum += iterator
              }
              return sum
            }

            console.log(Add(5,4,3)) //12
            console.log(Add(5,4)) //9
        //编译后的js
        function Add() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var sum = 0;
            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                var iterator = args_1[_a];
                sum += iterator;
            }
            return sum;
        }
        console.log(Add(5, 4, 3));
        console.log(Add(5, 4));

        ```
      * 函数的重载
        ```typescript
        function Say(content:number):string; //声明
        function Say(content:string):string; //声明
        function Say(content:number|string):string{
            if(typeof content === 'number'){
              return content.toString()
            }else if(typeof content === 'string'){
              return content
            }else{
              return ""
            }
        }

        console.log(Say(345)) //345
        console.log(Say('hello')) //hello
        ```
* 类（class)
    ```typescript

      class Obj {
        //属性
        name:string
        //构造器
        constructor(){

        }
        //方法
        get(){
          
        }
      }

    ```


* 接口（interface）

   ```ts
   interface Person {
     name: string
     age: number
   }

   let tom: Person = {
     name: 'Tom',
     age: 25,
   }
   ```
* 命名空间（namespace）
  ```typescript
    namespace system{

    }

  ```

   可选属性

   有时我们希望不要完全匹配一个形状，那么可以用可选属性：

   ```ts
   interface Person {
     name: string
     age?: number
   }

   let tom: Person = {
     name: 'Tom',
   }
   ```

   任意属性

   有时候我们希望一个接口允许有任意的属性，可以使用如下方式：

   ```ts
   interface Person {
     name: string
     age?: number
     [propName: string]: any
   }

   let tom: Person = {
     name: 'Tom',
     gender: 'male',
   }
   ```

   使用 `[propName: string]` 定义了任意属性取 `string` 类型的值。

   需要注意的是，**一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集**：

   一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：

   ```ts
   interface Person {
     name: string
     age?: number
     [propName: string]: string | number
   }

   let tom: Person = {
     name: 'Tom',
     age: 25,
     gender: 'male',
   }
   ```

   只读属性

   有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 `readonly` 定义只读属性：

   ```ts
   interface Person {
     readonly id: number
     name: string
     age?: number
     [propName: string]: any
   }

   let tom: Person = {
     id: 89757,
     name: 'Tom',
     gender: 'male',
   }
   ```

   **注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候**：

   ```ts
   interface Person {
     readonly id: number
     name: string
     age?: number
     [propName: string]: any
   }

   let tom: Person = {
     name: 'Tom',
     gender: 'male',
   }

   tom.id = 89757

   // index.ts(8,5): error TS2322: Type '{ name: string; gender: string; }' is not assignable to type 'Person'.
   //   Property 'id' is missing in type '{ name: string; gender: string; }'.
   // index.ts(13,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
   ```

   上例中，报错信息有两处，第一处是在对 `tom` 进行赋值的时候，没有给 `id` 赋值。

   第二处是在给 `tom.id` 赋值的时候，由于它是只读属性，所以报错了。

1. 函数

   - 函数类型

     一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：

     ```ts
     function sum(x: number, y: number): number {
       return x + y
     }
     ```

   - 可选参数

2. 类型断言

   ```ts
   ;(值 as 类型) < 类型 > 值
   ```

3. 范型

4. 声明文件

   - [`declare var`](https://ts.xcatliu.com/basics/declaration-files.html#declare-var) 声明全局变量

   - [`declare function`](https://ts.xcatliu.com/basics/declaration-files.html#declare-function) 声明全局方法

   - [`declare class`](https://ts.xcatliu.com/basics/declaration-files.html#declare-class) 声明全局类

   - [`declare enum`](https://ts.xcatliu.com/basics/declaration-files.html#declare-enum) 声明全局枚举类型

   - [`declare namespace`](https://ts.xcatliu.com/basics/declaration-files.html#declare-namespace) 声明（含有子属性的）全局对象

   - [`interface` 和 `type`](https://ts.xcatliu.com/basics/declaration-files.html#interface-he-type) 声明全局类型

   - [`export`](https://ts.xcatliu.com/basics/declaration-files.html#export) 导出变量

   - [`export namespace`](https://ts.xcatliu.com/basics/declaration-files.html#export-namespace) 导出（含有子属性的）对象

   - [`export default`](https://ts.xcatliu.com/basics/declaration-files.html#export-default) ES6 默认导出

   - [`export =`](https://ts.xcatliu.com/basics/declaration-files.html#export-1) commonjs 导出模块

   - [`export as namespace`](https://ts.xcatliu.com/basics/declaration-files.html#export-as-namespace) UMD 库声明全局变量

   - [`declare global`](https://ts.xcatliu.com/basics/declaration-files.html#declare-global) 扩展全局变量

   - [`declare module`](https://ts.xcatliu.com/basics/declaration-files.html#declare-module) 扩展模块

   - [`/// `](https://ts.xcatliu.com/basics/declaration-files.html#san-xie-xian-zhi-ling) 三斜线指令

     声明文件必需以 `.d.ts` 为后缀

5. 类型别名 type
6.  tsconfig.json

7.  封装并发布 npm 包


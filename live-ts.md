# TypeScript学习记录

https://create-react-app.dev/docs/adding-typescripts/s

##### 1.创建项目：

yarn create react-app live-react-ts --template typescript

##### 2.覆盖配置：

https://gitee.com/dyb881/react-ts.git

##### 3.url-loader



1. 安装ts

   ​    npm install typescrip

2. tsc --init

3. 数据类型

   - 布尔类型

     const bool:boolean = true

   - 数字类型number

   - 字符串类型string

   - 数组类型Arry

     let arr:number[] =[]

     let arr:Array<number> = []

     用接口表示数组

     ```ts
    interface NumberArray {
         [index: number]: number;
    }
     let fibonacci: NumberArray = [1, 1, 2, 3, 5];
     ```
   
   - 元组
   
     let tom: [string, number] = ['Tom', 25];
   
   - 枚举
   
      enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
   
   - 任意类型 any
   
   - void 和 null
   
      声明一个 `void` 类型的变量没有什么用，因为你只能将它赋值为 `undefined` 和 `null`：
   
   
      let unusable: void = undefined;

      在 TypeScript 中，可以使用 `null` 和 `undefined` 来定义这两个原始数据类型：     
 ```ts
      let u: undefined = undefined;
      let n: null = null;
 ```

与 `void` 的区别是，`undefined` 和 `null` 是所有类型的子类型。也就是说 `undefined` 类型的变量，可以赋值给 `number` 类型的变量：


      // 这样不会报错
      let num: number = undefined;
      // 这样也不会报错
      let u: undefined;
      let num: number = u;
       
      而 `void` 类型的变量不能赋值给 `number` 类型的变量：
      let u: void;
      let num: number = u;
      
      // Type 'void' is not assignable to type 'number'.


   - 类型别名
   
   - 联合类型
   
      联合类型（Union Types）表示取值可以为多种类型中的一种。
   
      ```ts
      let myFavoriteNumber: string | number;
      myFavoriteNumber = 'seven';
      myFavoriteNumber = 7;
      ```
   
   - 其它
   
      变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型

4. 接口

   ```ts
   interface Person {
       name: string;
       age: number;
   }
   
   let tom: Person = {
       name: 'Tom',
       age: 25
   };
   ```

   可选属性

   有时我们希望不要完全匹配一个形状，那么可以用可选属性：

   ```ts
   interface Person {
       name: string;
       age?: number;
   }
   
   let tom: Person = {
       name: 'Tom'
   };
   ```

   任意属性

   有时候我们希望一个接口允许有任意的属性，可以使用如下方式：

   ```ts
   interface Person {
       name: string;
       age?: number;
       [propName: string]: any;
   }
   
   let tom: Person = {
       name: 'Tom',
       gender: 'male'
   };
   ```

   使用 `[propName: string]` 定义了任意属性取 `string` 类型的值。

   需要注意的是，**一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集**：

   一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：

   ```ts
   interface Person {
       name: string;
       age?: number;
       [propName: string]: string | number;
   }
   
   let tom: Person = {
       name: 'Tom',
       age: 25,
       gender: 'male'
   };
   ```

   只读属性

   有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 `readonly` 定义只读属性：

   ```ts
   interface Person {
       readonly id: number;
       name: string;
       age?: number;
       [propName: string]: any;
   }
   
   let tom: Person = {
       id: 89757,
       name: 'Tom',
       gender: 'male'
   };
   ```

   **注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候**：

   ```ts
   interface Person {
       readonly id: number;
       name: string;
       age?: number;
       [propName: string]: any;
   }
   
   let tom: Person = {
       name: 'Tom',
       gender: 'male'
   };
   
   tom.id = 89757;
   
   // index.ts(8,5): error TS2322: Type '{ name: string; gender: string; }' is not assignable to type 'Person'.
   //   Property 'id' is missing in type '{ name: string; gender: string; }'.
   // index.ts(13,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
   ```

   上例中，报错信息有两处，第一处是在对 `tom` 进行赋值的时候，没有给 `id` 赋值。

   第二处是在给 `tom.id` 赋值的时候，由于它是只读属性，所以报错了。

5. 函数

   - 函数类型

     一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：

     ```ts
     function sum(x: number, y: number): number {
         return x + y;
     }
     ```

   - 可选参数

6. 类型断言 

   ```ts
   值 as 类型
   <类型>值
   ```

7. 范型

8. 声明文件

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
   
8. 类型别名 type
   
10. tsconfig.json

11. 封装并发布npm包

    



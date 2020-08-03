##### Javascript学习&工作记录

 《你不知道的JavaScript（上卷）》

- 作用域

  - 函数作用域

    属于这个函数得全部变量都可以在整个函数(当前函数)内得范围内使用和复用。

  - 块级作用域

- 变量提升（先声明 后赋值）

  - 变量声明在编译阶段进行
  - 函数优先

- 作用域闭包

  - 闭包

    *闭包*是由函数以及声明该函数的词法环境组合而成的。该环境包含了这个闭包创建时作用域内的任何局部变量。

- this

  - call() and apply()

    call和apply作用是一样的，都是为了改变某个函数运行时的上下文（context）而存在的，换句话说，就是为了改变函数体内部this的指向。它们的第一个参数是一个对象，它们会把这个对象绑定到 this，接着在调用函数时指定这个 this。因为你可以直接指定 this 的绑定对象；
    
  - 默认绑定

  - 显示绑定

    1. 强制绑定（bind）
    2. 非强制绑定（new）

  - 隐式绑定

- 对象

  1. 构造法

     var obj = new Object()

     obj.key = value

  2. 文字法

     var obj ={

     ​     key=value

     }

  3. 类型

     - string 
     - number
     - boolean
     - null
     - undefined
     - object（引用对象）
     - symbol(es6 新增)

  4. 内置对象

  5. 对象得复制

     - 浅拷贝

       地址引用

     - 深拷贝

       复制产新得对象 1.借助JSON

  6. 原型

     [[Prototype]]
   
     原型链总是匹配最底层的正确匹配结果
     
     
     
     Object.Create():方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
     
     ```js
     //es6
     let a ={
        c: 'a.c'
     }
     let b = {
        c: 'b.c',
         b:'b.b'
     }
     
     Object.setPrototypeOf(a,b)
     console.log(a)
     ```
     
     ![image-20200803191026106](D:\project\it_dog_zhang\image\20200803191026106.png)
     
     《你不知道的JavaScript（中卷）》
     
     1.  浮点数
     
        ```js
        var b = 0.1 + 0.2
        console.log(b) //0.30000000000000004
        ```
     
     2. 



###### 1.Objcte

- 内建对象

  ES标准定义对象

- 宿主对象

- 自定义对象

-   创建对象

  ```javascript
        const obj = new Object();
        const obj = {};
  ```

- 给对象添加属性

  ```javascript
  obj.name = 'obj'
  obj["属性"] = 值
  ```

- 获取属性

     - obj.属性名


     - obj["属性"] 
    
     - 属性存在性测试，“in" 操作符
    
     const obj = {
         name: 'obj'
     }
     window.onload = function () {
         console.log("name" in obj) //true
     }

- 赋值

  ​    obj.属性名 = 值

  ​    obj["属性"]  = 值 

- 删除属性

  ​	delete obj.属性名

  ​	delete obj["属性"] 
  
  - 对象的复制和合并 Object.assign()
  
    ```javascript
    let user = {
        name: "John",
        age: 30
    };
    
    let clone = Object.assign({}, user);
    console.log(clone) // {name: "John",age:
    //  30}
    ```
  
  - 结构化克隆算法
  
    实现库lodash ,_.cloneDeep(obj)
  
  ###### Symbol 类型 （唯一标识符）
  
  ```javascript
  let id = Symbol()
   console.log(id)
  ```
  
  ###### Arry
  
  1. contact
  
     ```javascript
     const  arr = [1,2,3]
     function testConcat(){
         return arr.concat()
     }   // arr [1,2,3]
     
     const  arr = [1,2,3]
     function testConcat(){
         return arr.concat([4,5,6])
     }   // arr [1,2,3,4,5,6]
     ```
  
  2. slice()
  
     ```javascript
     const colors = ["red", "green", "blue", "yellow", "purple"]; 
     const colors2 = colors.slice(1); 
     const colors3 = colors.slice(1,4);
     
     alert(colors2);   //green,blue,yellow,purple 
     alert(colors3);   //green,blue,yellow
     ```
  
  3. splice()
  
     ```javascript
     const colors = ["red", "green", "blue", "yellow", "purple"];
     function test() {
          colors.splice(0,3)
          console.log(colors)
          colors.splice(1,0,"white")
          console.log(colors)
          colors.splice(1,3,"white")
          console.log(colors)
          // ["yellow", "purple"]
          // ["yellow", "white", "purple"]
          // ["yellow", "white"]
     }
     ```
  
  4. 迭代方法
  
     every()：对数组中的每一项运行给定函数，如果该函数对每一项都返回 true，则返回 true。
  
     filter()：对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的数组。
  
     forEach()：对数组中的每一项运行给定函数。这个方法没有返回值。 
  
     map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
  
     some()：对数组中的每一项运行给定函数，如果该函数对任一项返回 true，则返回 true
  
  5. 归并方法 
  
     给 reduce()和 reduceRight()的函数接收 4 个参数：前一个值、当前值、项的索引和数组对象。这 个函数返回的任何值都会作为第一个参数自动传给下一项。第一次迭代发生在数组的第二项上，因此第 一个参数是数组的第一项，第二个参数就是数组的第二项。
  
     ```javascript
     const colors = ["red", "green", "blue", "yellow", "purple"];
     function test() {
          colors.reduce(
              function (pre,cru,index,array)
              {
               console.log(pre,cru,index,array)
          })
     }
     
     red green 1 ["red", "green", "blue", "yellow", "purple"]
     undefined "blue" 2 ["red", "green", "blue", "yellow", "purple"]
     undefined "yellow" 3 ["red", "green", "blue", "yellow", "purple"]
     undefined "purple" 4 ["red", "green", "blue", "yellow", "purple"]
     ```

###### 2.Function

- 函数声明式

  function xx(){

     //doing

  }

- 函数表达式

  const xx= function(){

    //doing

  }

- ```javascript
  let func = new Function ([arg1, arg2, ...argN], functionBody);
  ```

- 没有重载,同名函数会覆盖原函数

- arguments.callee

- 立即执行()()

- 递归和栈堆

- 可变参数 ...

- arguments (箭头函数没有argument)

- **Spread** 语法 ...

- 闭包


###### 3.面对对象  

- object属性定义

   [[Configurable]]：表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的特 性，或者能否把属性修改为访问器属性。像前面例子中那样直接在对象上定义的属性，它们的 这个特性默认值为 true。

   [[Enumerable]]：表示能否通过 for-in 循环返回属性。像前面例子中那样直接在对象上定 义的属性，它们的这个特性默认值为 true。 

   [[Writable]]：表示能否修改属性的值。像前面例子中那样直接在对象上定义的属性，它们的 这个特性默认值为 true。 

   [[Value]]：包含这个属性的数据值。读取属性值的时候，从这个位置读；写入属性值的时候， 把新值保存在这个位置。这个特性的默认值为 undefined。

   [[Get]]：在读取属性时调用的函数。默认值为 undefined。 

   [[Set]]：在写入属性时调用的函数。默认值为 undefined。 

  要修改属性默认的特性，必须使用 ECMAScript 5的 Object.defineProperty()方法。这个方法 接收三个参数：属性所在的对象、属性的名字和一个描述符对象。

- 严格模式：'use strict'

- 访问属性getter&setter

###### 4.原型模式

- 原型prototype
- __proto__
- 继承

  - 原型链

###### 5.数组

- splice(添加，删除，插入)


###### 6.类

- 基本语法

  ```javascript
  class MyClass {
    // class 方法
    constructor() { ... }
    method1() { ... }
    method2() { ... }
    method3() { ... }
    ...
  }
  ```

- extends

- Mixin

  ```javascript
  // mixin
  let sayHiMixin = {
    sayHi() {
      alert(`Hello ${this.name}`);
    },
    sayBye() {
      alert(`Bye ${this.name}`);
    }
  };
  
  // 用法：
  class User {
    constructor(name) {
      this.name = name;
    }
  }
  
  // 拷贝方法
  Object.assign(User.prototype, sayHiMixin);
  
  // 现在 User 可以打招呼了
  new User("Dude").sayHi(); // Hello Dude!
  ```

###### 7. 脚本：async，defer

-   `defer` 特性告诉浏览器它应该继续处理页面，并“在后台”下载脚本，然后等页面加载完成后，再执行此脚本。
- async 页面不会等待异步脚本，它会继续处理并显示页面内容

###### 8.内置对象

- eval() 函数会将传入的字符串当做 JavaScript 代码进行执行。

  ```js
  eval("2+2") //结果：4
  ```

##### Jquery

1. 扩充Jquery对象

   - ```javascript
     // jQuery.fn.extend 扩展 jQuery 元素集来提供
     // 新的方法（通常用来制作插件）。
     jQuery.fn.extend({
         dogWang: function () {
              console.log("汪汪")
         }
     });
     
      $(function () {
               $('div').dogWang()
      }) // 汪汪
     ```

   - ```javascript
     // 扩展jQuery对象本身。
     
     // 用来在jQuery命名空间上增加新函数。
     jQuery.extend({
         dogWang: function () {
             console.log("汪汪")
         }
     })
     
      $(function () {
              $.dogWang()
       }) // 汪汪
     ```

   - ```
     // 属性方式扩展
     jQuery.dogWang = function () {
         console.log("wangwang")
     }
     
      $(function () {
              $.dogWang()
       }) // 汪汪
     ```

   - ```
     jQuery.prototype.dogWang = function (val) {
         console.log(val)
     }
      $(function () {
              $.prototype.dogWang("汪汪")
       }) // 汪汪
       $(function () {
        var jquer = new jQuery()
         jquer.dogWang("w")
     }) // 
     ```

     # 工作中用到的es6 语法
     
     

1.  数组的filter

   const  arr = []

   arr.filter(item =>{过滤条件})
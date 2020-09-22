# 面试题

## css
 * css水平、垂直居中的写法，请至少写出4种？ 🐕
    
    * 水平居中

      行内元素: text-align: center
      块级元素: margin: 0 auto
      position:absolute +left:50%+ transform:translateX(-50%)
      display:flex + justify-content: center
    * 垂直居中

      设置line-height 等于height
      position：absolute +top:50%+ transform:translateY(-50%)
      display:flex + align-items: center
      display:table+display:table-cell + vertical-align: middle;

## javascript
1. JavaScript 中的强制转型是指什么？🐕
在 JavaScript 中，两种不同的内置类型间的转换被称为强制转型。强制转型在 JavaScript 中有两种形式：显式和隐式。

    ```javascript
      //这是一个显式强制转型的例子：
      var a = "42";
      var b = Number(a);
      a; // "42"
      b; // 42 -- 是个数字!
      //这是一个隐式强制转型的例子：
      var a = "42";
      var b = a * 1; // "42" 隐式转型成 42 
      a; // "42"
      b; // 42 -- 是个数字!
    ```
2. JavaScript 中的作用域（scope）是指什么？🐕
  在 JavaScript 中，每个函数都有自己的作用域。作用域基本上是变量以及如何通过名称访问这些变量的规则的集合。只有函数中的代码才能访问函数作用域内的变量。
  同一个作用域中的变量名必须是唯一的。一个作用域可以嵌套在另一个作用域内。如果一个作用域嵌套在另一个作用域内，最内部作用域内的代码可以访问另一个作用域的变量。

3. 解释 JavaScript 中的相等性。🐕
  
    JavaScript 中有严格比较和类型转换比较：
    严格比较（例如 ===）在不允许强制转型的情况下检查两个值是否相等；
    抽象比较（例如 ==）在允许强制转型的情况下检查两个值是否相等。
      ```javascript
      var a = "42";
      var b = 42;
      a == b; // true
      a === b; // false
      ```
      一些简单的规则：
      如果被比较的任何一个值可能是 true 或 false，要用 ===，而不是 ==；
      如果被比较的任何一个值是这些特定值（0、“”或 []），要用 ===，而不是 ==；
      在其他情况下，可以安全地使用 ==。它不仅安全，而且在很多情况下，它可以简化代码，并且提升代码可读性。
4. 解释什么是回调函数，并提供一个简单的例子。 🐕
  回调函数是可以作为参数传递给另一个函数的函数，并在某些操作完成后执行。下面是一个简单的回调函数示例，这个函数在某些操作完成后打印消息到控制台。
    ```javascript
      function modifyArray(arr, callback) {
      // 对 arr 做一些操作
      arr.push(100);
      // 执行传进来的 callback 函数
      callback();
      }
      var arr = [1, 2, 3, 4, 5];
      modifyArray(arr, function() {
      console.log("array has been modified", arr);
      });
      ```
5. “use strict”的作用是什么？🐕
    use strict 出现在 JavaScript 代码的顶部或函数的顶部，可以帮助你写出更安全的 JavaScript 代码。如果你错误地创建了全局变量，它会通过抛出错误的方式来警告你。例如，以下程序将抛出错误：
    ```javascript
    function doSomething(val) {
    "use strict"; 
    x = val + 10;
    }
    ```
    它会抛出一个错误，因为 x 没有被定义，并使用了全局作用域中的某个值对其进行赋值，而 use strict 不允许这样做。下面的小改动修复了这个错误：
    ```javascript
    function doSomething(val) {
    "use strict"; 
    var x = val + 10;
    }
    ```
7. 解释 JavaScript 中的 null 和 undefined。🐕
    JavaScript 中有两种底层类型：null 和 undefined。它们代表了不同的含义：
    尚未初始化：undefined；
    空值：null。
    null和undefined是两个不同的对象
8. 编写一个可以执行如下操作的函数。🐕
    ```javascript
      var addSix = createBase(6);
      addSix(10); // 返回 16
      addSix(21); // 返回 27
    ```
    可以创建一个闭包来存放传递给函数 createBase 的值。被返回的内部函数是在外部函数中创建的，内部函数就成了一个闭包，它可以访问外部函数中的变量，在本例中是变量 baseNumber。
    ```javascript
      function createBase(baseNumber) {
      return function(N) {
      // 我们在这里访问 baseNumber，即使它是在这个函数之外声明的。
      // JavaScript 中的闭包允许我们这么做。
      return baseNumber + N;
      }
      }
      var addSix = createBase(6);
      addSix(10);
      addSix(21);
    ```
9.  解释 JavaScript 中的值和类型。🐕
    JavaScript提供两种数据类型: 基本数据类型和引用数据类型
    基本数据类型有:
    ```javascript
      String
      Number
      Boolean
      Null
      Undefined
      Symbol(es6)
    ```
    引用数据类型有:
    ```javascript
      Object
      Array
      Function
    ```
10. 解释事件冒泡以及如何阻止它？🐕
  事件冒泡是指嵌套最深的元素触发一个事件，然后这个事件顺着嵌套顺序在父元素上触发。
  防止事件冒泡的一种方法是使用 event.cancelBubble 或 event.stopPropagation()（低于 IE 9）。

10. JavaScript 中的 let 关键字有什么用？🐕
  除了可以在函数级别声明变量之外，ES6 还允许你使用 let 关键字在代码块（{..}）中声明变量。

11. 如何检查一个数字是否为整数？🐕
  检查一个数字是小数还是整数，可以使用一种非常简单的方法，就是将它对 1 进行取模，看看是否有余数。
  ```javascript
      function isInt(num) {
      return num % 1 === 0;
      }
      console.log(isInt(4)); // true
      console.log(isInt(12.2)); // false
      console.log(isInt(0.3)); // false
  ```
12. 什么是 IIFE（立即调用函数表达式）？🐕
  它是立即调用函数表达式（Immediately-Invoked Function Expression），简称 IIFE。函数被创建后立即被执行：
    ```javascript
      (function IIFE(){
      console.log( "Hello!" );
      })();
      // "Hello!"
    ```
13. 如何在 JavaScript 中比较两个对象？🐕
    对于两个非原始值，比如两个对象（包括函数和数组），== 和 === 比较都只是检查它们的引用是否匹配，并不会检查实际引用的内容。
    例如，默认情况下，数组将被强制转型成字符串，并使用逗号将数组的所有元素连接起来。所以，两个具有相同内容的数组进行 == 比较时不会相等
    ```javascript
      var a = [1,2,3];
      var b = [1,2,3];
      var c = "1,2,3";
      a == c; // true
      b == c; // true
      a == b; // false
    ```

14. 你能解释一下 ES5 和 ES6 之间的区别吗？🐕
    ECMAScript 5（ES5）：ECMAScript 的第 5 版，于 2009 年标准化。这个标准已在所有现代浏览器中完全实现。
    ECMAScript 6（ES6）或 ECMAScript 2015（ES2015）：第 6 版 ECMAScript，于 2015 年标准化。这个标准已在大多数现代浏览器中部分实现。
    以下是 ES5 和 ES6 之间的一些主要区别：
    箭头函数和字符串插值：
     ```javascript
      const greetings = (name) => {
      return `hello ${name}`;
      }
      const greetings = name => `hello ${name}`;
    ```
    常量
    常量在很多方面与其他语言中的常量一样，但有一些需要注意的地方。常量表示对值的“固定引用”。因此，在使用常量时，你实际上可以改变变量所引用的对象的属性，但无法改变引用本身。
    ```javascript
      const NAMES = [];
      NAMES.push("Jim");
      console.log(NAMES.length === 1); // true
      NAMES = ["Steve", "John"]; // error
    ```
    块作用域变量。
    新的 ES6 关键字 let 允许开发人员声明块级别作用域的变量。let 不像 var 那样可以进行提升。
    默认参数值
    默认参数允许我们使用默认值初始化函数。如果省略或未定义参数，则使用默认值，也就是说 null 是有效值。
    ```javascript
      // 基本语法
      function multiply (a, b = 2) {
      return a * b;
      }
      multiply(5); // 10
    ```
    类定义和继承
    ES6 引入了对类（关键字 class）、构造函数（关键字 constructor）和用于继承的 extend 关键字的支持。
    for…of 操作符
    for…of 语句将创建一个遍历可迭代对象的循环。
    用于对象合并的 Spread 操作
      ```javascript
      const obj1 = { a: 1, b: 2 }
      const obj2 = { a: 2, c: 3, d: 4}
      const obj3 = {...obj1, ...obj2}
    ```
    promise
    promise 提供了一种机制来处理异步操作结果。你可以使用回调来达到同样的目的，但是 promise 通过方法链接和简洁的错误处理带来了更高的可读性。
    ```javascript
        const isGreater = (a, b) => {
        return new Promise ((resolve, reject) => {
        if(a > b) {
        resolve(true)
        } else {
        reject(false)
        }
        })
        }
        isGreater(1, 2)
        .then(result => {
        console.log('greater')
        })
        .catch(result => {
        console.log('smaller')
        })
      ```
      模块导出和导入
      ```javascript
        const myModule = { x: 1, y: () => { console.log('This is ES5') }}
        export default myModule;
        import myModule from './myModule';
      ```
15. 解释 JavaScript 中“undefined”和“not defined”之间的区别。🐕
    
    在 JavaScript 中，如果你试图使用一个不存在且尚未声明的变量，JavaScript 将抛出错误“var name is not defined”，让后脚本将停止运行。但如果你使用 typeof undeclared_variable，它将返回 undefined。
    在进一步讨论之前，先让我们理解声明和定义之间的区别。
    “var x”表示一个声明，因为你没有定义它的值是什么，你只是声明它的存在。
    ```javascript
      var x; // 声明 x
      console.log(x); // 输出: undefined
    ```
    “var x = 1”既是声明又是定义（我们也可以说它是初始化），x 变量的声明和赋值相继发生。在 JavaScript 中，每个变量声明和函数声明都被带到了当前作用域的顶部，然后进行赋值，这个过程被称为提升（hoisting）。
    当我们试图访问一个被声明但未被定义的变量时，会出现 undefined 错误。    
        var x; // 声明
        if(typeof x === 'undefined') // 将返回 true     
    当我们试图引用一个既未声明也未定义的变量时，将会出现 not defined 错误。
    console.log(y); // 输出: ReferenceError: y is not defined
16. 匿名和命名函数有什么区别？ 🐕
      ```javascript
      var foo = function() { // 赋给变量 foo 的匿名函数
      // ..
      };
      var x = function bar(){ // 赋给变量 x 的命名函数 bar
      // ..
      };
      foo(); // 实际执行函数
      x();
    ```
17. Javascript 中的“闭包”是什么？举个例子？🐕
    闭包是在另一个函数（称为父函数）中定义的函数，并且可以访问在父函数作用域中声明和定义的变量。
    闭包可以访问三个作用域中的变量：
    在自己作用域中声明的变量；
    在父函数中声明的变量；
    在全局作用域中声明的变量。
    ```javascript
      var globalVar = "abc";
      // 自调用函数
      (function outerFunction (outerArg) { // outerFunction 作用域开始
      // 在 outerFunction 函数作用域中声明的变量
      var outerFuncVar = 'x'; 
      // 闭包自调用函数
      (function innerFunction (innerArg) { // innerFunction 作用域开始
      // 在 innerFunction 函数作用域中声明的变量
      var innerFuncVar = "y";
      console.log( 
      "outerArg = " + outerArg + "
      " +
      "outerFuncVar = " + outerFuncVar + "
      " +
      "innerArg = " + innerArg + "
      " +
      "innerFuncVar = " + innerFuncVar + "
      " +
      "globalVar = " + globalVar);
      // innerFunction 作用域结束
      })(5); // 将 5 作为参数
      // outerFunction 作用域结束
      })(7); // 将 7 作为参数
    ```
    innerFunction 是在 outerFunction 中定义的闭包，可以访问在 outerFunction 作用域内声明和定义的所有变量。除此之外，闭包还可以访问在全局命名空间中声明的变量。
    上述代码的输出将是：
    ```javascript
      outerArg = 7
      outerFuncVar = x
      innerArg = 5
      innerFuncVar = y
      globalVar = abc
     ```
18.  如何在 JavaScript 中创建私有变量？🐕
    要在 JavaScript 中创建无法被修改的私有变量，你需要将其创建为函数中的局部变量。即使这个函数被调用，也无法在函数之外访问这个变量。例如：
      ```javascript
        function func() {
        var priv = "secret code";
        }
        console.log(priv); // throws error
        要访问这个变量，需要创建一个返回私有变量的辅助函数。
        function func() {
        var priv = "secret code";
        return function() {
        return priv;
        }
        }
        var getPriv = func();
        console.log(getPriv()); // => secret code
      ```
19. 请解释原型设计模式。 🐕
    原型模式可用于创建新对象，但它创建的不是非初始化的对象，而是使用原型对象（或样本对象）的值进行初始化的对象。原型模式也称为属性模式。
    原型模式在初始化业务对象时非常有用，业务对象的值与数据库中的默认值相匹配。原型对象中的默认值被复制到新创建的业务对象中。
    经典的编程语言很少使用原型模式，但作为原型语言的 JavaScript 在构造新对象及其原型时使用了这个模式。
20. “this”关键字的原理是什么？🐕 请提供一些代码示例。
    在 JavaScript 中，this 是指正在执行的函数的“所有者”，或者更确切地说，指将当前函数作为方法的对象。
    ```javascript
      function foo() {
      console.log( this.bar );
      }
      var bar = "global";
      var obj1 = {
      bar: "obj1",
      foo: foo
      };
      var obj2 = {
      bar: "obj2"
      };
      foo(); // "global"
      obj1.foo(); // "obj1"
      foo.call( obj2 ); // "obj2"
      new foo(); // undefined
    ```
21. 如何向 Array 对象添加自定义方法，让下面的代码可以运行？🐕
    ```javascript
      var arr = [1, 2, 3, 4, 5];
      var avg = arr.average();
      console.log(avg);
    ```
    JavaScript 不是基于类的，但它是基于原型的语言。这意味着每个对象都链接到另一个对象（也就是对象的原型），并继承原型对象的方法。你可以跟踪每个对象的原型链，直到到达没有原型的 null 对象。我们需要通过修改 Array 原型来向全局 Array 对象添加方法。
    ```javascript
      Array.prototype.average = function() {
      // 计算 sum 的值
      var sum = this.reduce(function(prev, cur) { return prev + cur; });
      // 将 sum 除以元素个数并返回
      return sum / this.length;
      }
      var arr = [1, 2, 3, 4, 5];
      var avg = arr.average();
      console.log(avg); // => 3
     ```
22. 什么是 JavaScript 中的提升操作？ 🐕
    提升（hoisting）是 JavaScript 解释器将所有变量和函数声明移动到当前作用域顶部的操作。有两种类型的提升：
    变量提升——非常少见
    函数提升——常见
    无论 var（或函数声明）出现在作用域的什么地方，它都属于整个作用域，并且可以在该作用域内的任何地方访问它。    
     ```javascript
        var a = 2;
        foo(); // 因为`foo()`声明被"提升"，所以可调用
        function foo() {
        a = 3;
        console.log( a ); // 3
        var a; // 声明被"提升"到 foo() 的顶部
        }
        console.log( a ); // 2
    ```
23. 以下代码输出的结果是什么？🐕
    0.1 + 0.2 === 0.3
    这段代码的输出是 false，这是由浮点数内部表示导致的。0.1 + 0.2 并不刚好等于 0.3，实际结果是 0.30000000000000004。解决这个问题的一个办法是在对小数进行算术运算时对结果进行舍入。
24. 请描述一下 Revealing Module Pattern 设计模式。 🐕
    暴露模块模式（Revealing Module Pattern）是模块模式的一个变体，目的是维护封装性并暴露在对象中返回的某些变量和方法。如下所示：
    ```javascript
      var Exposer = (function() {
      var privateVariable = 10;
      var privateMethod = function() {
      console.log('Inside a private method!');
      privateVariable++;
      }
      var methodToExpose = function() {
      console.log('This is a method I want to expose!');
      }
      var otherMethodIWantToExpose = function() {
      privateMethod();
      }
      return {
      first: methodToExpose,
      second: otherMethodIWantToExpose
      };
      })();
      Exposer.first(); // 输出: This is a method I want to expose!
      Exposer.second(); // 输出: Inside a private method!
      Exposer.methodToExpose; // undefined
    ```
    它的一个明显的缺点是无法引用私有方法。
    
**1、JavaScript 中如何检测一个变量是一个 String 类型？请写出函数实现 🐕**  

```
typeof(obj) === "string"
typeof obj === "string"
obj.constructor === String

```

**2、请用 js 去除字符串空格？ 🐕**

**方法一：使用 replace 正则匹配的方法**

去除所有空格: `str = str.replace (/s*/g,"");`

去除两头空格: `str = str.replace (/^s|s$/g,"");`

去除左空格： `str = str.replace (/^s*/, "");`

去除右空格： `str = str.replace (/(s*$)/g, "");`

str 为要去除空格的字符串，实例如下：

```
var str = " 23 23 ";
var str2 = str.replace(/s\*/g,"");
console.log(str2); // 2323

```

**方法二：使用 str.trim () 方法**

str.trim () 局限性：无法去除中间的空格，实例如下：

```
var str = " xiao ming ";
var str2 = str.trim();
console.log(str2); //xiao ming

```

同理，`str.trimLeft ()`，`str.trimRight ()` 分别用于去除字符串左右空格。

**方法三：使用 jquery,$.trim (str) 方法**

`$.trim (str)` 局限性：无法去除中间的空格，实例如下：

```
var str = " xiao ming ";
var str2 = $.trim(str)
console.log(str2); // xiao ming

```

**3、你如何获取浏览器 URL 中查询字符串中的参数？🐕**

实例如下：

```
function showWindowHref(){
 var sHref = window.location.href;
 var args = sHref.split('?');
 if(args[0] == sHref){
 return "";
 }
 var arr = args[1].split('&');
 var obj = {};
 for(var i = 0;i< arr.length;i++){
 var arg = arr[i].split('=');
 obj[arg[0]] = arg[1];
 }
 return obj;
}
var href = showWindowHref(); // obj
console.log(href['name']); // xiaoming

```

**4、js 字符串操作函数 🐕**

我这里只是列举了常用的字符串函数，具体使用方法，请参考网址。

concat () – 将两个或多个字符的文本组合起来，返回一个新的字符串。

indexOf () – 返回字符串中一个子串第一处出现的索引。如果没有匹配项，返回 -1 。

charAt () – 返回指定位置的字符。

lastIndexOf () – 返回字符串中一个子串最后一处出现的索引，如果没有匹配项，返回 -1 。

match () – 检查一个字符串是否匹配一个正则表达式。

substr () 函数 -- 返回从 string 的 startPos 位置，长度为 length 的字符串

substring () – 返回字符串的一个子串。传入参数是起始位置和结束位置。

slice () – 提取字符串的一部分，并返回一个新字符串。

replace () – 用来查找匹配一个正则表达式的字符串，然后使用新字符串代替匹配的字符串。

search () – 执行一个正则表达式匹配查找。如果查找成功，返回字符串中匹配的索引值。否则返回 -1 。

split () – 通过将字符串划分成子串，将一个字符串做成一个字符串数组。

length – 返回字符串的长度，所谓字符串的长度是指其包含的字符的个数。

toLowerCase () – 将整个字符串转成小写字母。

toUpperCase () – 将整个字符串转成大写字母。

**5、怎样添加、移除、移动、复制、创建和查找节点？🐕**

**1）创建新节点**

createDocumentFragment () // 创建一个 DOM 片段

createElement () // 创建一个具体的元素

createTextNode () // 创建一个文本节点

**2）添加、移除、替换、插入**

appendChild () // 添加

removeChild () // 移除

replaceChild () // 替换

insertBefore () // 插入

**3）查找**

getElementsByTagName () // 通过标签名称

getElementsByName () // 通过元素的 Name 属性的值

getElementById () // 通过元素 Id，唯一性

**6、写出 3 个使用 this 的典型应用 🐕**

**（1）、在 html 元素事件属性中使用，如：**

  ```html
  <input type=”button” onclick=”showInfo (this);” value=” 点击一下”/>
  ```

**（2）、构造函数**

```javascript
  function Animal(name, color) {
  　　this.name = name;
  　　this.color = color;
  }
```

**（3）、input 点击，获取值**

```javascript
  <input type="button" id="text" value="点击一下" />
  <script type="text/javascript">
  var btn = document.getElementById("text");
  btn.onclick = function() {
  alert(this.value); //此处的this是按钮元素
  }
  </script>
```

**(4)、apply ()/call () 求数组最值**

```javascript
  var numbers = [5, 458 , 120 , -215];
  var maxInNumbers = Math.max.apply(this, numbers); 
  console.log(maxInNumbers); // 458
  var maxInNumbers = Math.max.call(this,5, 458 , 120 , -215);
  console.log(maxInNumbers); // 458
```

**7、比较 typeof 与 instanceof？🐕**

相同点：JavaScript 中 typeof 和 instanceof 常用来判断一个变量是否为空，或者是什么类型的。

typeof 的定义和用法：返回值是一个字符串，用来说明变量的数据类型。

细节：

(1)、typeof 一般只能返回如下几个结果：number,boolean,string,function,object,undefined。

(2)、typeof 来获取一个变量是否存在，如 if (typeof a!="undefined"){alert ("ok")}，而不要去使用 if (a) 因为如果 a 不存在（未声明）则会出错。

(3)、对于 Array,Null 等特殊对象使用 typeof 一律返回 object，这正是 typeof 的局限性。

Instanceof 定义和用法：instanceof 用于判断一个变量是否属于某个对象的实例。

实例演示：

```javascript
a instanceof b?alert ("true"):alert ("false"); //a 是 b 的实例？真：假
```

```javascript
var a = new Array();
alert(a instanceof Array); // true
alert(a instanceof Object) // true
```
如上，会返回 true，同时 alert (a instanceof Object) 也会返回 true; 这是因为 Array 是 object 的子类。

```javascript
function test(){};
var a = new test();
alert(a instanceof test) // true
```

细节：

(1)、如下，得到的结果为‘N’, 这里的 instanceof 测试的 object 是指 js 语法中的 object，不是指 dom 模型对象。

```javascript
if (window instanceof Object){ alert('Y')} else { alert('N');} //'N'
```

**如何理解闭包？🐕**

1、定义和用法：当一个函数的返回值是另外一个函数，而返回的那个函数如果调用了其父函数内部的其它变量，如果返回的这个函数在外部被执行，就产生了闭包。

2、表现形式：使函数外部能够调用函数内部定义的变量。

3、实例如下：

(1)、根据作用域链的规则，底层作用域没有声明的变量，会向上一级找，找到就返回，没找到就一直找，直到 window 的变量，没有就返回 undefined。这里明显 count 是函数内部的 flag2 的那个 count 。

```
var count=10; //全局作用域 标记为flag1
function add(){
 var count=0; //函数全局作用域 标记为flag2
 return function(){
 count+=1; //函数的内部作用域
 alert(count);
 }
}
var s = add()
s();//输出1
s();//输出2

```

**变量的作用域 🐕**

要理解闭包，首先必须理解 Javascript 特殊的变量作用域。

变量的作用域分类：全局变量和局部变量。

特点：

1、函数内部可以读取函数外部的全局变量；在函数外部无法读取函数内的局部变量。

2、函数内部声明变量的时候，一定要使用 var 命令。如果不用的话，你实际上声明了一个全局变量！(es5)

3、在es6中 let 声明
```javascript
      function Say(){
				let content = "hello world"
				
				return content
			}
			
			console.log(content)  //content not define
```

**使用闭包的注意点 🐕**

1）滥用闭包，会造成内存泄漏：由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在 IE 中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。

2）会改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

**什么是跨域？跨域请求资源的方法有哪些？**

**1、什么是跨域？🐕**

由于浏览器同源策略，凡是发送请求 url 的协议、域名、端口三者之间任意一与当前页面地址不同即为跨域。存在跨域的情况：

 * 网络协议不同，如 http 协议访问 https 协议。

 * 端口不同，如 80 端口访问 8080 端口。

 * 域名不同，如 http://qianduanblog.com 访问 http://baidu.com。

 * 子域名不同，如 http://abc.qianduanblog.com 访问 http://def.qianduanblog.com。

 * 域名和域名对应 ip, 如 http://www.a.com 访问 20.205.28.90.

**2、跨域请求资源的方法：🐕**

  (1)、porxy 代理

  定义和用法：proxy 代理用于将请求发送给后台服务器，通过服务器来发送请求，然后将请求的结果传递给前端。

  实现方法：通过 nginx 代理；

  注意点：1、如果你代理的是 https 协议的请求，那么你的 proxy 首先需要信任该证书（尤其是自定义证书）或者忽略证书检查，否则你的请求无法成功。

  (2)、CORS 【Cross-Origin Resource Sharing】

  定义和用法：是现代浏览器支持跨域资源请求的一种最常用的方式。

  使用方法：一般需要后端人员在处理请求数据的时候，添加允许跨域的相关操作。如下：

  ```
  res.writeHead(200, {
  "Content-Type": "text/html; charset=UTF-8",
  "Access-Control-Allow-Origin":'http://localhost',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type'
  });

  ```

  (3)、jsonp

  定义和用法：通过动态插入一个 script 标签。浏览器对 script 的资源引用没有同源限制，同时资源加载到页面后会立即执行（没有阻塞的情况下）。

  特点：通过情况下，通过动态创建 script 来读取他域的动态资源，获取的数据一般为 json 格式。实例如下：
  ```javascript
    <script>
    function testjsonp(data) {
    console.log(data.name); // 获取返回的结果
    }
    </script>
    <script>
    var \_script = document.createElement('script');
    \_script.type = "text/javascript";
    \_script.src = "http://localhost:8888/jsonp?callback=testjsonp";
    document.head.appendChild(\_script);
    </script>

   ```

缺点：

　　1、这种方式无法发送 post 请求（这里）

　　2、另外要确定 jsonp 的请求是否失败并不容易，大多数框架的实现都是结合超时时间来判定。

**谈谈垃圾回收机制方式及内存管理**

**回收机制方式 🐕**

1、定义和用法：垃圾回收机制 (GC:Garbage Collection), 执行环境负责管理代码执行过程中使用的内存。

2、原理：垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存。但是这个过程不是实时的，因为其开销比较大，所以垃圾回收器会按照固定的时间间隔周期性的执行。

3、实例如下：

```javascript
function fn1() {
 var obj = {name: 'hanzichi', age: 10};
}
function fn2() {
 var obj = {name:'hanzichi', age: 10};
 return obj;
}
var a = fn1();
var b = fn2();

```

fn1 中定义的 obj 为局部变量，而当调用结束后，出了 fn1 的环境，那么该块内存会被 js 引擎中的垃圾回收器自动释放；在 fn2 被调用的过程中，返回的对象被全局变量 b 所指向，所以该块内存并不会被释放。

4、垃圾回收策略：标记清除 (较为常用) 和引用计数。

标记清除：

　　定义和用法：当变量进入环境时，将变量标记 "进入环境"，当变量离开环境时，标记为："离开环境"。某一个时刻，垃圾回收器会过滤掉环境中的变量，以及被环境变量引用的变量，剩下的就是被视为准备回收的变量。

　　到目前为止，IE、Firefox、Opera、Chrome、Safari 的 js 实现使用的都是标记清除的垃圾回收策略或类似的策略，只不过垃圾收集的时间间隔互不相同。

引用计数：

　　定义和用法：引用计数是跟踪记录每个值被引用的次数。

　　基本原理：就是变量的引用次数，被引用一次则加 1，当这个引用计数为 0 时，被视为准备回收的对象。

**内存管理 🐕**

1、什么时候触发垃圾回收？

垃圾回收器周期性运行，如果分配的内存非常多，那么回收工作也会很艰巨，确定垃圾回收时间间隔就变成了一个值得思考的问题。

IE6 的垃圾回收是根据内存分配量运行的，当环境中的变量，对象，字符串达到一定数量时触发垃圾回收。垃圾回收器一直处于工作状态，严重影响浏览器性能。

IE7 中，垃圾回收器会根据内存分配量与程序占用内存的比例进行动态调整，开始回收工作。

2、合理的 GC 方案：(1)、遍历所有可访问的对象；(2)、回收已不可访问的对象。

3、GC 缺陷：(1)、停止响应其他操作；

4、GC 优化策略：(1)、分代回收（Generation GC）;(2)、增量 GC

**开发过程中遇到的内存泄露情况，如何解决的？**

**1、定义和用法：**

内存泄露是指一块被分配的内存既不能使用，又不能回收，直到浏览器进程结束。C# 和 Java 等语言采用了自动垃圾回收方法管理内存，几乎不会发生内存泄露。我们知道，浏览器中也是采用自动垃圾回收方法管理内存，但由于浏览器垃圾回收方法有 bug，会产生内存泄露。

**2、内存泄露的几种情况：**

(1)、当页面中元素被移除或替换时，若元素绑定的事件仍没被移除，在 IE 中不会作出恰当处理，此时要先手工移除事件，不然会存在内存泄露。

实例如下:

```html
<div id="myDiv">
 <input type="button" value="Click me" id="myBtn">
</div>
<script type="text/javascript">
 var btn = document.getElementById("myBtn");
 btn.onclick = function(){
 document.getElementById("myDiv").innerHTML = "Processing...";
 }
</script>

```

解决方法如下：

```html
<div id="myDiv">
 <input type="button" value="Click me" id="myBtn">
</div>
<script type="text/javascript">
 var btn = document.getElementById("myBtn");
 btn.onclick = function(){
 btn.onclick = null;
 document.getElementById("myDiv").innerHTML = "Processing...";
 }
</script>

```

(2)、由于是函数内定义函数，并且内部函数 -- 事件回调的引用外暴了，形成了闭包。闭包可以维持函数内局部变量，使其得不到释放。

实例如下：

```javascript
  function bindEvent(){
  var obj=document.createElement("XXX");
  obj.onclick=function(){
  //Even if it's a empty function
  }
  }
```

解决方法如下：

```javascript
function bindEvent(){
 var obj=document.createElement("XXX");
 obj.onclick=function(){
 //Even if it's a empty function
 }
 obj=null;
}

```

**javascript 面向对象中继承实现？**

面向对象的基本特征有：封闭、继承、多态。

**在 JavaScript 中实现继承的方法：**

1.  原型链（prototype chaining）

2.  call()/apply()

3.  混合方式 (prototype 和 call ()/apply () 结合)

4.  对象冒充

继承的方法如下：

**1、prototype 原型链方式：**

```javascript
function teacher(name){
 this.name = name;
}
teacher.prototype.sayName = function(){
 console.log("name is "+this.name);
}
var teacher1 = new teacher("xiaoming");
teacher1.sayName();
 
function student(name){
 this.name = name;
}
student.prototype = new teacher()
var student1 = new student("xiaolan");
student1.sayName();
// name is xiaoming
// name is xiaolan

```

**2、call ()/apply () 方法**

```javascript
function teacher(name,age){
this.name = name;
this.age = age;
this.sayhi = function(){
alert('name:'+name+", age:"+age);
}
}
function student(){
var args = arguments;
teacher.call(this,args[0],args[1]);
// teacher.apply(this,arguments);
}
var teacher1 = new teacher('xiaoming',23);
teacher1.sayhi();
 
var student1 = new student('xiaolan',12);
student1.sayhi();
 
// alert: name:xiaoming, age:23
// alert: name:xiaolan, age:12

```

**3、混合方法【prototype,call/apply】**

```javascript
  function teacher(name,age){
    this.name = name;
    this.age = age;
  }
  teacher.prototype.sayName = function(){
    console.log('name:'+this.name);
  }
  teacher.prototype.sayAge = function(){
    console.log('age:'+this.age);
  }
  function student(){
    var args = arguments;
    teacher.call(this,args[0],args[1]);
  }
  student.prototype = new teacher();
  var student1 = new student('xiaolin',23);
  student1.sayName();
  student1.sayAge();
  // name:xiaolin
  // age:23

```

**4、对象冒充**

```javascript
function Person(name,age){
  this.name = name;
  this.age = age;
  this.show = function(){
  console.log(this.name+", "+this.age);
}
}
function Student(name,age){
  this.student = Person; // 将 Person 类的构造函数赋值给 this.student
  this.student (name,age); //js 中实际上是通过对象冒充来实现继承的
  delete this.student; // 移除对 Person 的引用
}
var s = new Student ("小明",17);
s.show();
var p = new Person ("小花",18);
p.show();
// 小明，17
// 小花，18

```

**判断一个字符串中出现次数最多的字符，统计这个次数 🐕**  

```javascript
var str = 'asdfssaaasasasasaa';
var json = {};
for (var i = 0; i < str.length; i++) {
 if(!json[str.charAt(i)]){
 json[str.charAt(i)] = 1;
 }else{
 json[str.charAt(i)]++;
}
};
var iMax = 0;
var iIndex = '';
for(var i in json){
 if(json[i]>iMax){
 iMax = json[i];
 iIndex = i;
 }
} 
console.log (' 出现次数最多的是:'+iIndex+' 出现 '+iMax+' 次 ');

```

结果如下：  

```
出现次数最多的是:a 出现 9 次

```

**Array 相关的属性和方法**

这里只是做了相关的列举，具体的使用方法，请参考网址。

**Array 对象属性**

  constructor 返回对创建此对象的数组函数的引用。

  length 设置或返回数组中元素的数目。

  prototype 使您有能力向对象添加属性和方法。

**Array 对象方法**

* concat () 连接两个或更多的数组，并返回结果。

* join () 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。

* pop () 删除并返回数组的最后一个元素。

* shift () 删除并返回数组的第一个元素

* push () 向数组的末尾添加一个或更多元素，并返回新的长度。

* unshift () 向数组的开头添加一个或更多元素，并返回新的长度。

* reverse () 颠倒数组中元素的顺序。

* slice () 从某个已有的数组返回选定的元素

* sort () 对数组的元素进行排序

* splice () 删除元素，并向数组添加新元素。

* toSource () 返回该对象的源代码。

* toString () 把数组转换为字符串，并返回结果。

* toLocaleString () 把数组转换为本地数组，并返回结果。

* valueOf () 返回数组对象的原始值

**编写一个方法 去掉一个数组的重复元素**

方法一：

```javascript
  var arr = [0,2,3,4,4,0,2];
  var obj = {};
  var tmp = [];
  for(var i = 0 ;i< arr.length;i++){
    if( !obj[arr[i]] ){
      obj[arr[i]] = 1;
      tmp.push(arr[i]);
    }
  }
  console.log(tmp);

```

结果如下：

```
[0, 2, 3, 4]

```

方法二：

```javascript
var arr = [2,3,4,4,5,2,3,6],arr2 = [];
for(var i = 0;i< arr.length;i++){
 if(arr2.indexOf(arr[i]) < 0){
 arr2.push(arr[i]);
 }
}
console.log(arr2);

```

结果为：  

```
[2, 3, 4, 5, 6]

```

方法三：

```javascript
  var arr = [2,3,4,4,5,2,3,6];
  var arr2 = arr.filter(function(element,index,self){
  return self.indexOf(element) === index;
  });
  console.log(arr2);

```

结果为：

```
[2, 3, 4, 5, 6]

```
方法四：
  ```javascript
      let arr = [1,1,22,22,3,4,5]			
        const set = new Set(arr)			
        arr = Array.from(set)			
        console.log(arr)
  ```

**jQuery 库中的 $() 是什么？**

$() 函数是 jQuery () 函数的别称。$() 函数用于将任何对象包裹成 jQuery 对象，接着你就被允许调用定义在 jQuery 对象上的多个不同方法。你可以将一个选择器字符串传入 $() 函数，它会返回一个包含所有匹配的 DOM 元素数组的 jQuery 对象。

**如何找到所有 HTML select 标签的选中项？**  

```javascript
$('[name=selectname] :selected')

```

**$(this) 和 this 关键字在 jQuery 中有何不同？**

$(this) 返回一个 jQuery 对象，你可以对它调用多个 jQuery 方法，比如用 text () 获取文本，用 val () 获取值等等。

而 this 代表当前元素，它是 JavaScript 关键词中的一个，表示上下文中的当前 DOM 元素。你不能对它调用 jQuery 方法，直到它被 $() 函数包裹，例如 $(this)。

**jquery 怎么移除标签 onclick 属性？**

获得 a 标签的 onclick 属性: `$("a").attr ("onclick")`

删除 onclick 属性：`$("a").removeAttr ("onclick");`

设置 onclick 属性：`$("a").attr ("onclick","test ();");`

**jquery 中 addClass,removeClass,toggleClass 的使用。**

`$(selector).addClass (class)`：为每个匹配的元素添加指定的类名

`$(selector).removeClass (class)`：从所有匹配的元素中删除全部或者指定的类，删除 class 中某个值；

`$(selector).toggleClass (class)`：如果存在（不存在）就删除（添加）一个类

`$(selector).removeAttr (class);` 删除 class 这个属性；

**JQuery 有几种选择器？**

(1)、基本选择器：#id，class,element,\*;

(2)、层次选择器：parent > child，prev + next ，prev ~ siblings

(3)、基本过滤器选择器：:first，:last ，:not ，:even ，:odd ，:eq ，:gt ，:lt

(4)、内容过滤器选择器： :contains ，:empty ，:has ，:parent

(5)、可见性过滤器选择器：:hidden ，:visible

(6)、属性过滤器选择器：[attribute] ，[attribute=value] ，[attribute!=valu\] ，[attribute^=value] ，[attribute$=value] ，[attribute\*=value]

(7)、子元素过滤器选择器：:nth-child ，:first-child ，:last-child ，:only-child

(8)、表单选择器： :input ，:text ，:password ，:radio ，:checkbox ，:submit 等；

(9)、表单过滤器选择器：:enabled ，:disabled ，:checked ，:selected

**jQuery 中的 Delegate () 函数有什么作用？**

delegate () 会在以下两个情况下使用到：

1、如果你有一个父元素，需要给其下的子元素添加事件，这时你可以使用 delegate () 了，代码如下：
  ```javascript
   $("ul").delegate("li", "click", function(){ $(this).hide(); });
  ```
2、当元素在当前页面中不可用时，可以使用 delegate ()

**$(document).ready () 方法和 window.onload 有什么区别？**

(1)、window.onload 方法是在网页中所有的元素 (包括元素的所有关联文件) 完全加载到浏览器后才执行的。

(2)、$(document).ready () 方法可以在 DOM 载入就绪时就对其进行操纵，并调用执行绑定的函数。

**如何用 jQuery 禁用浏览器的前进后退按钮？**

实现代码如下：

```javascript
<script type="text/javascript" language="javascript">
　　$(document).ready(function() {
　　　　window.history.forward(1);
 　　　　//OR window.history.forward(-1);
　　});
</script>

```

**jquery 中 $.get () 提交和 $.post () 提交有区别吗？**

**相同点：**都是异步请求的方式来获取服务端的数据；

**异同点：**

1、请求方式不同：$.get () 方法使用 GET 方法来进行异步请求的。$.post () 方法使用 POST 方法来进行异步请求的。

2、参数传递方式不同：get 请求会将参数跟在 URL 后进行传递，而 POST 请求则是作为 HTTP 消息的实体内容发送给 Web 服务器的，这种传递是对用户不可见的。

3、数据传输大小不同：get 方式传输的数据大小不能超过 2KB 而 POST 要大的多

4、安全问题： GET 方式请求的数据会被浏览器缓存起来，因此有安全问题。

**写出一个简单的 $.ajax () 的请求方式？**

```javascript
$.ajax({
 url:'http://www.baidu.com',
 type:'POST',
 data:data,
 cache:true,
 headers:{},
 beforeSend：function(){},
 success:function(){},
 error:function(){},
 complete:function(){}
});

```

**jQuery 的事件委托方法 bind 、live、delegate、on 之间有什么区别？**

**1、bind 【jQuery 1.3 之前】**

定义和用法：主要用于给选择到的元素上绑定特定事件类型的监听函数；

语法：`bind (type,[data],function (eventObject))；`

特点：

　　(1)、适用于页面元素静态绑定。只能给调用它的时候已经存在的元素绑定事件，不能给未来新增的元素绑定事件。

　　(2)、当页面加载完的时候，你才可以进行 bind ()，所以可能产生效率问题。

实例如下：$("#members li a").bind ( "click", function ( e ) {} );

**2、live 【jQuery 1.3 之后】**

定义和用法：主要用于给选择到的元素上绑定特定事件类型的监听函数；

语法：`live (type, [data], fn);`

特点：

　　(1)、live 方法并没有将监听器绑定到自己 (this) 身上，而是绑定到了 this.context 上了。

　　(2)、live 正是利用了事件委托机制来完成事件的监听处理，把节点的处理委托给了 document，新添加的元素不必再绑定一次监听器。

　　(3)、使用 live（）方法但却只能放在直接选择的元素后面，不能在层级比较深，连缀的 DOM 遍历方法后面使用，即 $(“ul”").live... 可以，但 $("body").find ("ul").live... 不行；

实例如下：$(document).on ( "click", "#members li a", function ( e ) {} );

**3、delegate 【jQuery 1.4.2 中引入】**

定义和用法：将监听事件绑定在就近的父级元素上

语法：`delegate (selector,type,[data],fn)`

特点：

　　(1)、选择就近的父级元素，因为事件可以更快的冒泡上去，能够在第一时间进行处理。

　　(2)、更精确的小范围使用事件代理，性能优于. live ()。可以用在动态添加的元素上。

实例如下：

```
$("#info\_table").delegate("td","click",function(){/ 显示更多信息 /});
$("table").find("#info").delegate("td","click",function(){/ 显示更多信息 /});

```

**4、on 【1.7 版本整合了之前的三种方式的新事件绑定机制】**

定义和用法：将监听事件绑定到指定元素上。

语法：`on (type,[selector],[data],fn)`

实例如下：

```
$("#info\_table").on ("click","td",function (){/ 显示更多信息 /});

```

参数的位置写法与 delegate 不一样。

说明：on 方法是当前 JQuery 推荐使用的事件绑定方法，附加只运行一次就删除函数的方法是 one ()。

**总结：**`.bind ()`, `.live ()`, `.delegate ()`,`.on ()` 分别对应的相反事件为：`.unbind ()`,`.die ()`, `.undelegate ()`,`.off ()`

**什么是盒子模型？🐕**

在网页中，一个元素占有空间的大小由几个部分构成，其中包括元素的内容（content），元素的内边距（padding），元素的边框（border），元素的外边距（margin）四个部分。这四个部分占有的空间中，有的部分可以显示相应的内容，而有的部分只用来分隔相邻的区域或区域。4 个部分一起构成了 css 中元素的盒模型。

**行内元素有哪些？块级元素有哪些？ 空 (void) 元素有那些？**

**行内元素：**a、b、span、img、input、strong、select、label、em、button、textarea

**块级元素：**div、ul、li、dl、dt、dd、p、h1-h6、blockquote

**空元素：**即系没有内容的 HTML 元素，例如：br、meta、hr、link、input、img

**CSS 实现垂直水平居中**

一道经典的问题，实现方法有很多种，以下是其中一种实现：

**HTML 结构：**

```html
<div class="wrapper">
 <div class="content"></div>
</div>

```

**CSS：**

```css
.wrapper {
 position: relative;
 width: 500px;
 height: 500px;
 border: 1px solid red;
}
.content{
 position: absolute;
 width: 200px;
 height: 200px;
 /top、bottom、left 和 right 均设置为 0/
 top: 0;
 bottom: 0;
 left: 0;
 right: 0;
 /margin 设置为 auto/
 margin:auto;
 border: 1px solid green; 
}

```

**简述一下 src 与 href 的区别 🐕**

href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。

src 是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求 src 资源时会将其指向的资源下载并应用到文档内，例如 js 脚本，img 图片和 frame 等元素。

当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将 js 脚本放在底部而不是头部。

**简述同步和异步的区别**

同步是阻塞模式，异步是非阻塞模式。

同步就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么这个进程将会一直等待下去，直到收到返回信息才继续执行下去；

异步是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。当有消息返回时系统会通知进程进行处理，这样可以提高执行的效率。

**px 和 em 的区别**

相同点：px 和 em 都是长度单位；

异同点：px 的值是固定的，指定是多少就是多少，计算比较容易。em 得值不是固定的，并且 em 会继承父级元素的字体大小。

浏览器的默认字体高都是 16px。所以未经调整的浏览器都符合: 1em=16px。那么 12px=0.75em, 10px=0.625em。

**浏览器的内核分别是什么？**

IE: trident 内核

Firefox：gecko 内核

Safari：webkit 内核

Opera：以前是 presto 内核，Opera 现已改用 Google Chrome 的 Blink 内核

Chrome：Blink (基于 webkit，Google 与 Opera Software 共同开发)

**什么叫优雅降级和渐进增强？**

**渐进增强 progressive enhancement：**

针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

**优雅降级 graceful degradation：**

一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

**区别：**

1.  优雅降级是从复杂的现状开始，并试图减少用户体验的供给

2.  渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要

3.  降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带

**sessionStorage 、localStorage 和 cookie 之间的区别**

**共同点：**用于浏览器端存储的缓存数据

**不同点：**

(1)、存储内容是否发送到服务器端：当设置了 Cookie 后，数据会发送到服务器端，造成一定的宽带浪费；

web storage, 会将数据保存到本地，不会造成宽带浪费；

(2)、数据存储大小不同：Cookie 数据不能超过 4K, 适用于会话标识；web storage 数据存储可以达到 5M;

(3)、数据存储的有效期限不同：cookie 只在设置了 Cookid 过期时间之前一直有效，即使关闭窗口或者浏览器；

sessionStorage, 仅在关闭浏览器之前有效；localStorage, 数据存储永久有效；

(4)、作用域不同：cookie 和 localStorage 是在同源同窗口中都是共享的；sessionStorage 不在不同的浏览器窗口中共享，即使是同一个页面；

**Web Storage 与 Cookie 相比存在的优势：**

(1)、存储空间更大：IE8 下每个独立的存储空间为 10M，其他浏览器实现略有不同，但都比 Cookie 要大很多。

(2)、存储内容不会发送到服务器：当设置了 Cookie 后，Cookie 的内容会随着请求一并发送的服务器，这对于本地存储的数据是一种带宽浪费。而 Web Storage 中的数据则仅仅是存在本地，不会与服务器发生任何交互。

(3)、更多丰富易用的接口：Web Storage 提供了一套更为丰富的接口，如 setItem,getItem,removeItem,clear 等，使得数据操作更为简便。cookie 需要自己封装。

(4)、独立的存储空间：每个域（包括子域）有独立的存储空间，各个存储空间是完全独立的，因此不会造成数据混乱。

**Ajax 的优缺点及工作原理？**

**定义和用法:**

AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。Ajax 是一种用于创建快速动态网页的技术。Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。

传统的网页（不使用 Ajax）如果需要更新内容，必须重载整个网页页面。

**优点：**

1\. 减轻服务器的负担，按需取数据，最大程度的减少冗余请求

2\. 局部刷新页面，减少用户心理和实际的等待时间，带来更好的用户体验

3\. 基于 xml 标准化，并被广泛支持，不需安装插件等，进一步促进页面和数据的分离

**缺点：**

1.AJAX 大量的使用了 javascript 和 ajax 引擎，这些取决于浏览器的支持。在编写的时候考虑对浏览器的兼容性.

2.AJAX 只是局部刷新，所以页面的后退按钮是没有用的.

3\. 对流媒体还有移动设备的支持不是太好等

**AJAX 的工作原理：**

1\. 创建 ajax 对象（XMLHttpRequest/ActiveXObject (Microsoft.XMLHttp)）

2\. 判断数据传输方式 (GET/POST)

3\. 打开链接 open ()

4\. 发送 send ()

5\. 当 ajax 对象完成第四步（onreadystatechange）数据接收完成，判断 http 响应状态（status）200-300 之间或者 304（缓存）执行回调函数

**请指出 document load 和 document ready 的区别？**

**共同点：**这两种事件都代表的是页面文档加载时触发。

**异同点：**

ready 事件的触发，表示文档结构已经加载完成（不包含图片等非文字媒体文件）。

onload 事件的触发，表示页面包含图片等文件在内的所有元素都加载完成。

**写一个 function，清除字符串前后的空格。（兼容所有浏览器）**

```javascript
function trim(str) {
 if (str && typeof str === "string") {
 return str.replace(/(^s)|(s)$/g,""); // 去除前后空白符
 }
}

```

**使用正则表达式验证邮箱格式**  

```javascript
var reg = /^(w)+(.w+)\*@(w)+((.w{2,3}){1,3})$/;
var email = "example@qq.com";
console.log(reg.test(email)); // true
```

规避 javascript 多人开发函数重名问题

命名空间

封闭空间

js 模块化 mvc（数据层、表现层、控制层）

seajs

变量转换成对象的属性

对象化

**请说出三种减低页面加载时间的方法**

压缩 css、js 文件

合并 js、css 文件，减少 http 请求

外部 js、css 文件放在最底下

减少 dom 操作，尽可能用变量替代不必要的 dom 操作

**你所了解到的 Web 攻击技术**

（1）XSS（Cross-Site Scripting，跨站脚本攻击）：指通过存在安全漏洞的 Web 网站注册用户的浏览器内运行非法的 HTML 标签或者 JavaScript 进行的一种攻击。

（2）SQL 注入攻击

（3）CSRF（Cross-Site Request Forgeries，跨站点请求伪造）：指攻击者通过设置好的陷阱，强制对已完成的认证用户进行非预期的个人信息或设定信息等某些状态更新。

**web 前端开发，如何提高页面性能优化？**

**内容方面：**

1\. 减少 HTTP 请求 (Make Fewer HTTP Requests)

2\. 减少 DOM 元素数量 (Reduce the Number of DOM Elements)

3\. 使得 Ajax 可缓存 (Make Ajax Cacheable)

**针对 CSS：**

1\. 把 CSS 放到代码页上端 (Put Stylesheets at the Top)

2\. 从页面中剥离 JavaScript 与 CSS (Make JavaScript and CSS External)

3\. 精简 JavaScript 与 CSS (Minify JavaScript and CSS)

4\. 避免 CSS 表达式 (Avoid CSS Expressions)

**针对 JavaScript ：**

脚本放到 HTML 代码页底部 (Put Scripts at the Bottom) 从页面中剥离 JavaScript 与 CSS (Make JavaScript and CSS External) 精简 JavaScript 与 CSS (Minify JavaScript and CSS) 移除重复脚本 (Remove Duplicate Scripts)

**面向图片 (Image)：**

1\. 优化图片

2 不要在 HTML 中使用缩放图片

3 使用恰当的图片格式

4 使用 CSS Sprites 技巧对图片优化

5、前端开发中，如何优化图像？图像格式的区别？

**优化图像：**

1、不用图片，尽量用 css3 代替。 比如说要实现修饰效果，如半透明、边框、圆角、阴影、渐变等，在当前主流浏览器中都可以用 CSS 达成。

2、 使用矢量图 SVG 替代位图。对于绝大多数图案、图标等，矢量图更小，且可缩放而无需生成多套图。现在主流浏览器都支持 SVG 了，所以可放心使用！

3.、使用恰当的图片格式。我们常见的图片格式有 JPEG、GIF、PNG。

基本上，内容图片多为照片之类的，适用于 JPEG。

而修饰图片通常更适合用无损压缩的 PNG。

GIF 基本上除了 GIF 动画外不要使用。且动画的话，也更建议用 video 元素和视频格式，或用 SVG 动画取代。

4、按照 HTTP 协议设置合理的缓存。

5、使用字体图标 webfont、CSS Sprites 等。

6、用 CSS 或 JavaScript 实现预加载。

7、WebP 图片格式能给前端带来的优化。WebP 支持无损、有损压缩，动态、静态图片，压缩比率优于 GIF、JPEG、JPEG2000、PG 等格式，非常适合用于网络等图片传输。

**图像格式的区别：**

矢量图：图标字体，如 font-awesome；svg

位图：gif,jpg (jpeg),png

**区别：**

　　1、gif: 是是一种无损，8 位图片格式。具有支持动画，索引透明，压缩等特性。适用于做色彩简单 (色调少) 的图片，如 logo, 各种小图标 icons 等。

　　2、JPEG 格式是一种大小与质量相平衡的压缩图片格式。适用于允许轻微失真的色彩丰富的照片，不适合做色彩简单 (色调少) 的图片，如 logo, 各种小图标 icons 等。

　　3、png:PNG 可以细分为三种格式：PNG8，PNG24，PNG32。后面的数字代表这种 PNG 格式最多可以索引和存储的颜色值。

**关于透明：**PNG8 支持索引透明和 alpha 透明；PNG24 不支持透明；而 PNG32 在 24 位的 PNG 基础上增加了 8 位（256 阶）的 alpha 通道透明；

优缺点：

　　1、能在保证最不失真的情况下尽可能压缩图像文件的大小。

　　2、对于需要高保真的较复杂的图像，PNG 虽然能无损压缩，但图片文件较大，不适合应用在 Web 页面上。

**浏览器是如何渲染页面的？**

渲染的流程如下：

1\. 解析 HTML 文件，创建 DOM 树。

自上而下，遇到任何样式（link、style）与脚本（script）都会阻塞（外部样式不阻塞后续外部脚本的加载）。

2\. 解析 CSS。优先级：浏览器默认设置 < 用户设置 < 外部样式 < 内联样式 < HTML 中的 style 样式；

3\. 将 CSS 与 DOM 合并，构建渲染树（Render Tree）

4\. 布局和绘制，重绘（repaint）和重排（reflow）


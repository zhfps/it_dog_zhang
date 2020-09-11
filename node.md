# Node学习

1. Node.js
   - `安装环境`
   
   - 运行文件 node    文件名
   
   - 模块间的引用
   
     - require
   
       1. A.js
   
          ```js
          console.log("A---begin")
          require('./B')
          console.log("A----end")
          ```
   
       2. B.js
   
          ```js
          console.log("B---begin")
          require('./C')
          console.log("B----end")
          ```
   
       3. C.js
   
          ```js
          console.log("C")
          ```
   
       4. node A.js
   
          //输出：
   
          ​	A---begin
          ​	B---begin
          ​	C
          ​	B----end
          ​	A----end
   
       5. A.js
   
          ```js
          const B = require('./B')
          console.log(B)
          ```
   
       6. B.js
   
          ```
          module.exports={
              name: 'B'
          }
          ```
   
       7. node A.js
   
          //结果： { name: 'B' }


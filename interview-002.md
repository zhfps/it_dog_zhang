## 面试《前端程序员面试宝典》
  
* DOCTYPE有什么作用？
  指定文档解析规范

* 语义化
  语义化是指用合理HTML标记以及其特有的属性去格式化文档内容

* 简述一下src与href的区别。
  src表示来源地址，用在img、script、i企ame等元素上。href表示超文本引用（hypertextreference ），用在link和a等元素上。src的内容是页面必不可少的一部分，表示引入。href的内容与该页面有关联，表示引用。简单来说，它们的区别就是引入和引用

**2020/9/28**

* 如何让超出宽度的文字显示为省略号？
  overflow:hidden; width:xxx; white-space:nowrap; text-overflow:ellipsis。
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title></title>
      <style>
        #test {
          width: 40px;
          overflow-x: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      </style>
    </head>
    <body>
      <div id="test">xxxxxxxxxxxxxxxxxxxxcccxxxxxxxxx</div>		
    </body>
  </html>

  ```
  **2020/9/30**

  **2020/10/8** 第3章看完

  **2020/10/9** 第4章看完 css3

  **2020/10/9** 第5章看完 Bootstrap
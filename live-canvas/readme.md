# Canvas学习记录

- 画线
  
  ```javascript
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <canvas id="canvas"></canvas>
        <script>
            /** @type {HTMLCanvasElement} */
            let canv = document.querySelector("#canvas")
            const ctx = canv.getContext('2d')
            ctx.beginPath()
            ctx.moveTo(10,10)
            ctx.lineTo(150,150)       
            ctx.stroke()
            
        </script>
    </body>
    </html>
  ```
- 画圆
  
  ```javascript
   <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <canvas id="canvas"></canvas>
        <script>
            /** @type {HTMLCanvasElement} */
            let canv = document.querySelector("#canvas")
            const ctx = canv.getContext('2d')
            ctx.arc(20,20,20,Math.PI*0.5,Math.PI*2)
            ctx.stroke()
            
        </script>
    </body>
    </html>

  ```

- 绘制文字
  ```javascript
    /** @type {HTMLCanvasElement} */
        let canv = document.querySelector("#canvas")
        const ctx = canv.getContext('2d')
        ctx.fillText("hello world",20,20,40)
        ctx.strokeText("hello world",60,60,40)
```
# Ts 再次学习

- 环境准备
- 类型注解 类型推断

```javascript
let count: number

let num = 123 //num:number
```

- 函数相关类型

  - 函数的返回值

```javascript
function add(x: number, y: number): number {
  return x + y
}
```

- never 和 void 关键字

* 基础类型
  - boolean
  - number
  - string
  - void
  - undefinde
  - symbol
  - null
* 数组

```typescript
//
let arr: (number | string)[]
//
let arr: string[]
//
let arr: { x: number; y: string }[]
```

- 元组

```typescript
let obj: [string, string, number] = ['A', 'B', 12]
```

- interface 接口

```typescript
interface Person {
  name: string
  age?: number
  [propName: string]: any
  say(): string
}
//函数定义
interface functionName {
  (argment: string): string
}
```

- class 类 (super)

  ```typescript
  class person {
    name: string
    constructor(name: string) {
      this.name = name
    }
    getName() {
      return this.name
    }
  }
  ```

- 访问类型 public protected private

- class 类属性的两种写法

```typescript
class obj {
  public name: string
  constructor(name: string) {
    this.name = name
  }
}
//等价于
class obj {
  constructor(public name: string) {}
}
```

- getter 和 setter
- static
  ```typescript
  class Dog {
    constructor(public name: string) {
      this.name = name
    }
    static tack(): string {
      return '咬你哦'
    }
  }
  console.log(Dog.tack())
  ```
- 抽象类

```typescript
abstract class Dog {
  constructor(public name: string) {
    this.name = name
  }
  abstract tack(): string
}

class Tidi extends Dog {
  constructor(name: string) {
    super(name)
  }

  tack(): string {
    return 'wa wa'
  }
}

const obj = new Tidi('tidi')
```

- 爬虫
  - superagent

```typescript
import superAgent from 'superagent'
class Reptiles {
  private url = 'https://www.jdlingyu.com/'
  private content: string = ''
  constructor() {
    this.getHtml()
  }
  async getHtml() {
    const res = await superAgent.get(this.url)
    console.log(res.text)
    this.content = res.text
  }
}
new Reptiles()
```

- cherrio

```typescript
import superAgent from 'superagent'
import cheerio from 'cheerio'
class Reptiles {
  private url = 'https://www.jdlingyu.com/'
  private content: string = ''
  constructor() {
    this.getHtml()
  }
  async getHtml() {
    const res = await superAgent.get(this.url)
    const $ = cheerio.load(res.text)
    const imgs = $('img')
    const urls = []
    imgs.map((item) => {
      console.log(imgs[item].attribs.src)
      urls.push(imgs[item].attribs.src)
    })
    this.content = res.text
  }
}

new Reptiles()
```

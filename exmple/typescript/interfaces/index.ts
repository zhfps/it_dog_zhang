//接口

//自定义属性
interface _interface {
  [key: string]: string
}

const _interface1: _interface = {
  properties1: '1',
  properties2: '1'
}

console.log(_interface1.properties1)
//可选属性
interface _interface3 {
  name?: string
}

const _interface4: _interface3 = {

}
console.log(_interface4.name)//undefine

_interface4.name = 'LiSan'
console.log(_interface4.name)//LiSan

//只读属性
interface _readonly_interface {
  readonly name: string
}

const interface6: _readonly_interface = {
  name: 'KangKang'
}

//interface6.name = 'Mariyar'//报错 无法赋值 name是只读属性
console.log(interface6.name)
function enumerable(value: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
     propertyKey = value
  };
}
class Obj {
  name: string;
  constructor(name: string) {
      this.name = name;
  }
  @enumerable('say')
  Say(){
    return "hello";
  }
}

console.log(new Obj("world").Say());
class Dog {
  // public _name: string
  constructor(public _name: string) {
    console.log('constructor')
    this._name = _name
  }
  get name() {
    console.log('get')
    return this._name
  }
  set name(name: string) {
    console.log('set')
    this._name = name
  }
}

const taidi = new Dog('泰迪')
console.log(taidi._name)

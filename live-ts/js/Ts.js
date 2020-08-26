"use strict";
class Dog {
    // public _name: string
    constructor(_name) {
        this._name = _name;
        console.log('constructor');
        this._name = _name;
    }
    get name() {
        console.log('get');
        return this._name;
    }
    set name(name) {
        console.log('set');
        this._name = name;
    }
}
const taidi = new Dog('泰迪');
console.log(taidi._name);

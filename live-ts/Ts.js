function Says(name,age){
    console.log(name,age)
}

const name = "bind"
const age = 23

const _says = Says.bind(this,name)

const says = _says(age,20)
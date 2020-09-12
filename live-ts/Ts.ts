function Say(content:number):string;
function Say(content:string):string;
function Say(content:number|string):string{
    if(typeof content === 'number'){
      return content.toString()
    }else if(typeof content === 'string'){
      return content
    }else{
      return ""
    }
}

console.log(Say(345))
console.log(Say('hello'))
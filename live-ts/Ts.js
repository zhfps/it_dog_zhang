function Say(content) {
    if (typeof content === 'number') {
        return content.toString();
    }
    else if (typeof content === 'string') {
        return content;
    }
    else {
        return "";
    }
}
console.log(Say(345));
console.log(Say('hello'));

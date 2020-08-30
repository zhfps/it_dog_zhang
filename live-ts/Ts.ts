type STIRNG = string

function* Say(content: STIRNG) {
  yield console.log(content)
  yield console.log(content)
  yield console.log(content)
}

Say('hello type').next()
Say('hello type').next()
Say('hello type').next()

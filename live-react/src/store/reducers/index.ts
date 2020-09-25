//reducers
interface IAction{
  type:string,
}

export default (state = 1, action:IAction) => {
  switch (action.type) {
      case 'INCREMENT':
          return state + 1
      case 'DECREMENT':
          return state - 1
      default:
          return state
  }
}

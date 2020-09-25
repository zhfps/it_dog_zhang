import React from 'react'
import classNames from 'classnames'
import store from '../store'
interface State {
  className: string
}

interface Prop {

}

export default class ReButton extends React.Component<Prop, State> {
  myRef: any
  constructor(props: any) {
    super(props)
    this.add = this.add.bind(this)

    this.state = {
      className: ''
    }
  }

  add(e: any) {
    e.preventDefault()

    let className = classNames({
      "re-button": store.getState() % 2 === 1
    })
    this.setState({
      className: className
    })
    store.dispatch({ type: 'INCREMENT' })
  }




  render() {

    return (
      <div>
        <button ref={this.myRef} className={this.state.className} onClick={this.add}>测试</button>
        <div>
          {store.getState()}
        </div>
      </div>

    )
  }
}
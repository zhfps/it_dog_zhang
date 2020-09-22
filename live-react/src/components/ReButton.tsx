import React from 'react'
import classNames from 'classnames'
interface State {
  count: number,
  className: string
}

interface Prop {

}

export default class ReButton extends React.Component<Prop, State> {
  myRef: any
  constructor(props: any) {
    super(props)
    this.add = this.add.bind(this)
    this.myRef = React.createRef<any>()
    this.state = {
      count: 0,
      className: ''
    }
  }

  add(e: any) {
    e.preventDefault()

    let className = classNames({
      "re-button": this.state.count % 2 === 1
    })
    this.setState({
      count: this.state.count + 1,
      className: className
    })
    console.log(this.myRef)
  }




  render() {

    return (
      <div>
        <button ref={this.myRef} className={this.state.className} onClick={this.add}>测试</button>
        <div>
          {this.state.count}
        </div>
      </div>

    )
  }
}
import React from 'react'

interface State{
  count:number
}

interface Prop{

}

export default class ReButton extends React.Component<Prop,State> {
  constructor(props: any) {
    super(props)
    this.add = this.add.bind(this)
    this.state = {
      count: 0
    }
  }
  
  add(e:any){
    e.preventDefault()
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <button className="re-button" onClick={this.add}>测试</button>
        <div>
          { this.state.count}
        </div>
      </div>

    )
  }
}
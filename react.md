# React

###### 虚拟节点

###### jsx语法

```jsx
ReactDOM.render(
		  <h1>Hello, world!</h1>,
		  document.getElementById('root')
		);
```

###### 模块

   有特定功能的js文件

###### 组件

  实现特定功能的代码集合

1. ​     工厂函数组件

​			function FunctionElement(){
​				return <h1>工厂函数组件</h1>;
​			}
​			ReactDOM.render(<FunctionElement/>,document.getElementById("root"));  

1. ES6 类组件

   ```jsx
   class Welcome extends React.Component {
     render() {
       return <h1>Hello, {this.props.name}</h1>;
     }
   }
   ```

2. 组件的三大属性

   - state

     ```jsx
     		class Clock extends React.Component {
     		  constructor(props) {
     		    super(props);
     		    this.state = {date: new Date()};
     		  }
     		
     		  render() {
     		    return (
     		      <div>
     		        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
     		      </div>
     		    );
     		  }
     		}
     		ReactDOM.render(<Clock/>,document.getElementById("root"));
     ```

   - props

   - refs
   
3. 受控组件和非受控组件

4. 生命周期

5. diff算法

6. 脚手架

7. 组件中通信

   - 父组件向子组件通信

     ```js
     import React,{Component} from 'react';
     import './App.css';
     import Children from "../child/Children";
     export default class App extends Component{
       render() {
         return <Children name={"123"}/>
       }
     }
     import React,{Component} from 'react';
     import PropTypes from 'prop-types';
     export default class Children extends Component{
         constructor(props) {
             super();
         }
         render() {
             return <h1>{this.props.name}</h1>
         }
     }
     Children.propTypes = {
         name: PropTypes.number
     }
     
     ```

   - 子组件向父组件通信

     ```jsx
     import React,{Component} from 'react';
     import './App.css';
     import Children from "../child/Children";
     export default class App extends Component{
       constructor(props) {
         super();
         this.state={
           name: 123
         }
       }
       increment =(val)=>{
        this.setState({
          name: val
        })
       }
       render() {
         return <Children name={this.state.name} increment={this.increment}/>
       }
     }
     import React,{Component} from 'react';
     import PropTypes from 'prop-types';
     export default class Children extends Component{
         constructor(props) {
             super();
         }
         increment =()=>{
             let name =this.props.name;
             name--;
             return this.props.increment(name)
         }
         render() {
             return <h1 onClick={this.increment}>{this.props.name}</h1>
         }
     }
     Children.propTypes = {
         name: PropTypes.number
     }
     
     ```

   - 跨级组件通信

     - 中间组件层层传递 props
  - 使用 context 对象
   
- 没有嵌套关系组件之间的通信
  
   ###### 全家桶
   
   1. react-router
   
      单页应用
   
   2. redux
   
      Counter示例
   
      ```jsx
      
      //index.js
      import React from 'react';
      import ReactDOM from 'react-dom';
      import './index.css';
      import * as serviceWorker from './serviceWorker';
      import App from "./components/App/App";
      import {Provider} from "react-redux";
      import store from "./store";
      
      ReactDOM.render(
        <React.StrictMode>
             <Provider store={store}>
                 <App/>
             </Provider>
        </React.StrictMode>,
        document.getElementById('root')
      );
      
      serviceWorker.unregister();
      
      ```
   
      ```jsx
      //store/index.js
      import { createStore } from 'redux'
      import reducer from './reducers/index'
      const store = createStore(reducer)
      export default store
      ```
   
      ```jsx
      //reducers
      export default (state = 1, action) => {
          switch (action.type) {
              case 'INCREMENT':
                  return state + 1
              case 'DECREMENT':
                  return state - 1
              default:
                  return state
          }
      }
      ```
   
      ```jsx
      //app.jsx
      import React,{Component} from 'react';
      import './App.css';
      import Counter from "../Counter/Counter";
      import store from "../../store";
      import { connect } from 'react-redux'
      class App extends Component{
        constructor(props) {
          super()
        }
        onIncrement=() =>{
          console.log("INCREMENT")
          store.dispatch({ type: 'INCREMENT' })
          console.log(store.getState())
        }
        onDecrement=() =>{
          console.log("DECREMENT")
          store.dispatch({ type: 'DECREMENT' })
          console.log(store.getState())
        }
        render() {
          return <Counter value={store.getState()}
                             onIncrement={this.onIncrement}
                             onDecrement={this.onDecrement}/>
      
        }
      }
      export default connect(state => state)(App)
      ```
   
      ```jsx
      //counter.jsx
      import React, { Component } from 'react'
      import PropTypes from 'prop-types'
      
      class Counter extends Component {
          constructor(props) {
              super();
          }
      
          incrementIfOdd=() =>{
              if (this.props.value % 2 !== 0) {
                  this.props.onIncrement()
              }
          }
      
          incrementAsync=() =>{
              setTimeout(this.props.onIncrement, 1000)
          }
      
          render() {
              const { value, onIncrement, onDecrement } = this.props
              return (
                  <p>
                      Clicked: {value} times
                      {' '}
                      <button onClick={onIncrement}>
                          +
                      </button>
                      {' '}
                      <button onClick={onDecrement}>
                          -
                      </button>
                      {' '}
                      <button onClick={this.incrementIfOdd}>
                          Increment if odd
                      </button>
                      {' '}
                      <button onClick={this.incrementAsync}>
                          Increment async
                      </button>
                  </p>
              )
          }
      }
      
      Counter.propTypes = {
          value: PropTypes.number.isRequired,
          onIncrement: PropTypes.func.isRequired,
          onDecrement: PropTypes.func.isRequired
      }
      
      export default Counter
      ```


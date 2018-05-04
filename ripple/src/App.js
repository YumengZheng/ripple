import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      circleClass: '',
      x: 0,
      y: 0
    }
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
    this.handleDrag = this.handleDrag.bind(this)
    this.handleTouchMove = this.handleTouchMove.bind(this)
  }
  handleTouchStart(e){
    this.setState({
      circleClass: 'circle',
      x: e.touches[0].pageX-30,
      y: e.touches[0].pageY-40
    })
  }
  handleMouseDown(e){
    this.setState({
      circleClass: 'circle',
      x: e.pageX-30,
      y: e.pageY-30
    })
  }
  handleTouchMove(e){
    this.setState({
      circleClass: 'circle circle-drag',
      x: e.touches[0].pageX-30,
      y: e.touches[0].pageY-40
    })
  }
  handleDrag(e){
    this.setState({
      circleClass: 'circle circle-drag',
      x: e.pageX-30,
      y: e.pageY-30
    })
  }
  handleLeave(){
    this.setState({
      circleClass: ''
    })
  }
  render() {
    return (
      <div className="App">
        <div className="screen"                
             onTouchStart={this.handleTouchStart} 
             onTouchEnd={this.handleLeave}
             onTouchMove={this.handleTouchMove}
             onMouseDown={this.handleMouseDown}
             onMouseUp={this.handleLeave}>
          <div className='dragging-box' 
               draggable="true" 
               onDrag={this.handleDrag}
               onDragEnd={this.handleLeave}></div>
          <div id="circle" 
               className={this.state.circleClass} 
               style = {{marginLeft: this.state.x, marginTop: this.state.y}}></div>
        </div>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import './SketchPad.css';
import {Button} from '../../UIComponents/Button';
import DrawingStroke from './DrawingStroke';

class Test extends Component {
  constructor(){
    super();
    this.state = {
      marker : "rgb(0,0,0)",
      markerWidth: 1,
      lastEvent: null,
      isDrawing: false,
    }
    // this.canvas = React.createRef();
    this.canvas = document.createElement('canvas')
    // this.context = this.refs.canvas.getContext('2d')
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleLineStroke = this.handleLineStroke.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);

  }

componentDidMount(){
  document.addEventListener("mouseup", this.handleMouseUp);
}

componentWillUnmount(){
  document.removeEventListener("mouseup", this.handleMouseUp);
}

handleMouseUp(mouseEvent){
  this.setState({isDrawing: false})
}

handleMouseDown(mouseEvent){
  const {lastEvent, marker, markerWidth} = this.state
  this.setState({ isDrawing: true, lastEvent:mouseEvent })
  console.log(mouseEvent, "Event", this.state.lastEvent);
  const context = this.refs.canvas.getContext('2d')
  const boundingRect = this.refs.canvas.getBoundingClientRect();
  let x = mouseEvent.clientX - boundingRect.left
  let y = mouseEvent.clientY - boundingRect.top
    context.save()
    context.beginPath()
    context.moveTo(x, y);
    context.lineJoin = 'round';
    context.lineWidth= markerWidth;
    context.strokeStyle = marker;
    context.lineCap='round';
    context.shadowBlur = 10;
    context.closePath()

}

handleMouseMove(mouseEvent){

   const context = this.refs.canvas.getContext('2d')
   const boundingRect = this.refs.canvas.getBoundingClientRect();

   const {lastEvent, marker, markerWidth} = this.state
  if(!this.state.isDrawing){
    return
  }
  let x = mouseEvent.clientX - boundingRect.left
  let y = mouseEvent.clientY - boundingRect.top


  context.lineTo(x, y);
  context.stroke();
  console.log(context.canvas.width,  context.canvas.height );
}

handleClear(){
  const context = this.refs.canvas.getContext('2d')
  context.clearRect(0, 0, context.canvas.clientWidth , context.canvas.clientHeight )
}

handleLineStroke(){
  this.setState({ markerWidth: this.state.markerWidth + 1 })
}

handleColorChange(e){
  this.setState({ marker:e.target.value })
}

  render(){
    console.log(this.state.context);
    return(
      <div>
        <canvas ref="canvas" width='900' height='450' className='canvas'
        onMouseDown= {this.handleMouseDown}
        onMouseMove={ this.handleMouseMove}
        onMouseUp={this.handleMouseUp}>
        </canvas>
        <div>
          <DrawingStroke
          markerWidth={this.state.markerWidth}
          handleLineStroke={this.handleLineStroke}
          marker={this.state.marker}
          handleColorChange={this.handleColorChange}/>
          <Button text='Clear' className='emoji' onClick={this.handleClear}/>
        </div>
      </div>
    )
  }

}
// Test.contextType = CanvasContext
export default Test;

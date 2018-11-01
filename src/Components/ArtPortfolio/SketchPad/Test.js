import React, {Component} from 'react';
import './SketchPad.css';
import {Button} from '../../UIComponents/Button';

class Test extends Component {
  constructor(){
    super();
    this.state = {
      marker : "rgb(0,0,0)",
      markerWidth: '1px',
      lastEvent: null,
      isDrawing: false,
    }
    // this.canvas = React.createRef();
    this.canvas = document.createElement('canvas')
    this.context = this.canvas.getContext('2d')
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);

  }
// componentDidMount(){
// const ctx = this.refs.canvas.getContext('2d')
//
//
// // console.log("context",context, "canvas",this.canvas,  );
//
// }

// componentDidUpdate(){
//   // this.setState({ context : this.canvas.getContext('2d') })
// }
componentDidMount(){
  this.handleMouseDown()
  this.handleMouseMove()
}

componentWillUnmount(){
  this.handleMouseUp()
}

handleMouseUp(mouseEvent){
  this.setState({isDrawing: false})
}

handleMouseDown(mouseEvent){
  this.setState({ isDrawing: true, lastEvent:mouseEvent })
  console.log(mouseEvent, "Event", this.state.lastEvent);

}

handleMouseMove(mouseEvent){
  // const canvas = document.createElement('canvas')
   // const context =  this.canvas[0].getContext('2d')
   const context = this.refs.canvas.getContext('2d')
   const boundingRect = this.refs.canvas.getBoundingClientRect();

   // let x = mouseEvent.clientX - boundingRect.left
   // let y = mouseEvent.clientY - boundingRect.top
   // const context = this.context
   const {lastEvent, marker, markerWidth} = this.state
  if(!this.state.isDrawing){
    return
  }

  // context.rect(20,20,150,100);
  // context.stroke();
  // context.lineTo(mouseEvent.offsetX, mouseEvent.offsetY)
  context.save()
  context.moveTo(mouseEvent.clientX, mouseEvent.clientY);
  context.lineTo(mouseEvent.clientX, mouseEvent.clientY);
  context.lineWidth= 15;
  context.strokeStyle = "rgb(0,0,0)";
  context.lineCap='round';
  context.stroke();



  console.log(mouseEvent.clientX, this.state.isDrawing);
}



  render(){
    console.log(this.state.context);
    return(
      <div>
        <canvas ref="canvas"  className='canvas'
        onMouseDown= {this.handleMouseDown}
        onMouseMove={ this.handleMouseMove}
        onMouseUp={this.handleMouseUp}>
        </canvas>
          <Button text='Clear' className='emoji'/>
      </div>
    )
  }

}
// Test.contextType = CanvasContext
export default Test;

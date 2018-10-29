import React,  { Component } from 'react';
import Immutable, { updateIn, List, Map } from 'immutable';
import Drawing from './Drawing';
import './SketchPad.css';
import {Button} from '../../SmallOnes/Button';

// const rect=(props)=>{
//   const {ctx, x, y, width, height} = props;
//   ctx.fillRect(x, y,width, height);
// }



class Canvas extends Component{
  constructor(){
    super();
    this.state={
      isDrawing: false,
      lines: new Immutable.List(),
    }
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
  }


    // this.updateCanvas();
    // const markerWidth = 1;
    // const onMouseDown = false;
    // let lastEvent;


  // canvas.onMouseDown(e => {
  //   lastEvent = e;
  //   onMouseDown = true;
  //   console.log(lastEvent, onMouseDown);
  // }).onMouseMove(e => {
  //   if(onMouseDown){
  //
  //   }
  // })



// componentDidUpdate(){
//   // this.updateCanvas();
// }
componentDidMount() {
   document.addEventListener("mouseup", this.handleMouseUp);
 }
componentWillUnmount() {
   document.removeEventListener("mouseup", this.handleMouseUp);
 }

handleMouseUp() {
  this.setState({ isDrawing: false })
}

handleMouseDown(mouseEvent) {
  // const marker = "rgb(0,0,0)";
  // let lastEvent = mouseEvent
  if(mouseEvent.button != 0){
    return;
  }

  const point = this.coordinatesEvent(mouseEvent);
  console.log(point);
  this.setState(prevState => ({
       lines: prevState.lines.push(new Immutable.List([point])),
       isDrawing: true
     }));
}

handleMouseMove(mouseEvent){
  if(!this.state.isDrawing){
    return;
  }

  const point = this.coordinatesEvent(mouseEvent);

  this.setState(prevState =>  ({
      lines: prevState.lines.updateIn([prevState.lines.size - 1], line => line.push(point))
    }));
  // const line = [...this.state.line]
  // line.push(point)
  // console.log(line);
  // this.setState(prevState => {
  //  return {
  //    line: prevState.line.updateIn([prevState.line.size - 1], line)
  //  }
  // })
}

coordinatesEvent(mouseEvent){

const boundingRect = this.refs.canvas.getBoundingClientRect();
  // const bR = {x: mouseEvent.clientX - boundingRect.left, y: mouseEvent.clientY - boundingRect.top}
  // return bR
  // console.log(boundingRect);
  return new Immutable.Map({
    x: mouseEvent.clientX - boundingRect.left,
    y: mouseEvent.clientY - boundingRect.top
  })

  // console.log("boundingRect",mouseEvent.clientX, "br", bR);
}



//
// updateCanvas() {
//   // Declare- canvas element
//   const canvas = this.refs.canvas;
//   // Declare varible- create a drawing object
//   const ctx = canvas.getContext('2d');
//    ctx.clearRect(0,0, 300, 300);
//    ctx.lineTo(200, 100);
// ctx.stroke();
//    rect({ctx, x: 10, y:10, width: 50, height: 50})
//  rect({ctx, x: 310, y: 310, width: 50, height: 50});
//
//    // console.log(ctx, rect);
// }

  render() {

    return (
      <div>
      <div className='head'>Canvas</div>
        <div ref='canvas' className='canvas'
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}>
        <Drawing lines={this.state.lines}/>
        </div>
      <div>
        <Button text='Clear'/>
      </div>
      </div>
    )
  }
}

export default Canvas;

import React,  { Component } from 'react';

const rect=(props)=>{
  const {ctx, x, y, width, height} = props;
  ctx.fillRect(x, y,width, height);
}

class Canvas extends Component{
  constructor(){
    super();
    this.state={
      isDrawing: false,
      line: []
    }
    this.handleMouseDown = this.handleMouseDown.bind(this)
  }

  componentDidMount() {
    this.updateCanvas();
    const marker = '#000';
    const markerWidth = 1;
    const onMouseDown = false;
    let lastEvent;


  // canvas.onMouseDown(e => {
  //   lastEvent = e;
  //   onMouseDown = true;
  //   console.log(lastEvent, onMouseDown);
  // }).onMouseMove(e => {
  //   if(onMouseDown){
  //
  //   }
  // })

}

componentDidUpdate(){
  this.updateCanvas();
}


handleMouseDown(mouseEvent) {
  if(mouseEvent.button != 0){
    return;
  }

  const point = this.coordinatesEvent(mouseEvent);

  this.setState(prevState => ({
    line: [point, ...prevState.line],
    isDrawing: true
  }))
}

coordinatesEvent(mouseEvent){

  const boundingRect = this.refs.canvas.getBoundingClientRect()

  console.log("boundingRect",boundingRect.x); 
}




updateCanvas() {
  // Declare- canvas element
  const canvas = this.refs.canvas;
  // Declare varible- create a drawing object
  const ctx = canvas.getContext('2d');
   ctx.clearRect(0,0, 300, 300);
   ctx.lineTo(200, 100);
ctx.stroke();
   rect({ctx, x: 10, y:10, width: 50, height: 50})
 rect({ctx, x: 310, y: 310, width: 50, height: 50});

   console.log(ctx, rect);
}

  render() {

    return (
      <div>
      <div>Canvas</div>
        <canvas ref='canvas' width={640} height={425} onMouseDown={this.handleMouseDown} />
        <svg>
    <path stroke="black" d="M 0 0 L 200 100" />
  </svg>
      </div>
    )
  }
}

export default Canvas;

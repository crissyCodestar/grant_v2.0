import React, {Component} from 'react';
import './SketchPad.css';
import {Button} from '../../UIComponents/Button';
import DrawingStroke from './DrawingStroke';

class Test extends Component {
  constructor(){
    super();
    this.state = {
      color : "#00000",
      markerWidth: 50,
      lastEvent: null,
      isDrawing: false,
      shadow: '',
      toggle: false,
      points: [],
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
    this.toggleShadow = this.toggleShadow.bind(this);
  }

componentDidMount(){
  document.addEventListener("mouseup", this.handleMouseUp);
}

componentWillUnmount(){
  document.removeEventListener("mouseup", this.handleMouseUp);
}

handleMouseUp(mouseEvent){
  this.setState({isDrawing: false, points: this.state.points =[]})
}

handleMouseDown(mouseEvent){
  const {lastEvent, color, markerWidth, shadow, toggle, points} = this.state

  console.log(mouseEvent, "Event", this.state.lastEvent);
  const context = this.refs.canvas.getContext('2d')
  const boundingRect = this.refs.canvas.getBoundingClientRect();
  let x = mouseEvent.clientX - boundingRect.left
  let y = mouseEvent.clientY - boundingRect.top
  this.setState(state => ({ isDrawing: true,
    points: this.state.points.concat({x:x, y:y}),
    shadow: !!this.state.toggle ? state.shadow = this.state.color : state.shadow = ''
  }))
    // context.save();
    // context.beginPath();
    // context.moveTo(x, y);
    // context.lineJoin = 'round';
    // context.lineWidth= markerWidth;
    // context.strokeStyle = color;
    // context.lineCap='round';
    // context.shadowBlur = markerWidth;
    // context.shadowColor = shadow ;
    // context.closePath();


}

handleMouseMove(mouseEvent){

   const context = this.refs.canvas.getContext('2d')
   const boundingRect = this.refs.canvas.getBoundingClientRect();

   const {lastEvent, color, markerWidth, points, shadow, toggle} = this.state
  if(!this.state.isDrawing){
    return
  }
  let x = mouseEvent.clientX - boundingRect.left
  let y = mouseEvent.clientY - boundingRect.top

  this.setState({ points: points.concat({x:x, y:y}) })

  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  for(let i = 1 ; i < points.length; i++){
    context.lineTo(points[i].x, points[i].y)
  }
  context.stroke();
  context.lineJoin = 'round';
  context.lineWidth= markerWidth;
  context.strokeStyle = color;
  context.lineCap='round';
  context.shadowBlur = markerWidth +4;
  context.shadowColor = shadow;
  context.closePath();

  // context.lineTo(x, y);
  // context.stroke();
  console.log(context.canvas.width,  context.canvas.height );
}

handleClear(){
  const context = this.refs.canvas.getContext('2d')
  context.clearRect(0, 0, context.canvas.clientWidth , context.canvas.clientHeight )
}

handleLineStroke(e){
  this.setState({ markerWidth: e.target.value })
}

handleColorChange(e){
  this.setState({ color:e.target.value })
}

toggleShadow(){
  this.setState(state => ({ toggle: !state.toggle,
  }))

}



  render(){
    const {color, markerWidth } = this.state;

    console.log(color);
    return(
      <div>
        <div>
          <canvas ref="canvas" width='900' height='450'
          className='canvas'
          onMouseDown= {this.handleMouseDown}
          onMouseMove={ this.handleMouseMove}
          onMouseUp={this.handleMouseUp}/>
        </div>
        <div  className="slider_container">
          <Button text='Clear' size='small' className='emoji' onClick={this.handleClear}/>

          <div>
            <DrawingStroke
            markerWidth={markerWidth}
            handleLineStroke={this.handleLineStroke}
            color={color}
            handleColorChange={this.handleColorChange}/>
          </div>
          {/*<label className="switch">
            <input type='checkbox' onChange={this.toggleShadow} />
            <span className="slide round">

            </span>
          </label>*/}
          <div className="switch">
            <input type='checkbox' className="switch_input" onChange={this.toggleShadow} />
            <label className="switch_label" data-off='OFF' data-on='ON'>
            </label>
          </div>

        </div>
      </div>
    )
  }

}
// Test.contextType = CanvasContext
export default Test;

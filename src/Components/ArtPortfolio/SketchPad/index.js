import React, {Component} from 'react';
import Canvas from './Canvas';
import './SketchPad.css';

class SketchPad extends Component{

  render(){
    return(
      <section>
        <Canvas />
      </section>
    )
  }
}

export default SketchPad;

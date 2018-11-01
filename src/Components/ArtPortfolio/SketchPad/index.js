import React, {Component} from 'react';
import Canvas from './Canvas';
import './SketchPad.css';
import {Button} from '../../UIComponents/Button';
import Test from './Test';


class SketchPad extends Component{

  render(){
    return(
      <section>
        <div>
          {/*<Canvas />*/}
          <Test/>
        </div>
        <div>
        {/*  <Button text='Clear'/>*/}
        </div>
      </section>
    )
  }
}

export default SketchPad;

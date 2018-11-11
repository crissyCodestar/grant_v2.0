import React from 'react';

const DrawingStroke = ({markerWidth, handleLineStroke, color, handleColorChange}) => (
  <div>

    <div>
      <p>Brush Size: {markerWidth}</p>
      <input type="range" name="marker_size" className="slider" min="1" max="100" onChange={handleLineStroke} value={markerWidth} />
      <output htmlFor="marker_size" onFormInput={markerWidth}></output>

    </div>
    <form onInput={handleLineStroke}>
    <input type="range" id="foo" min="0" max="100" onChange={handleLineStroke} value={markerWidth}/>
    <output htmlFor="foo"  name="x" ></output>
    </form>

    <div>
      <p>Hex: {color}</p>
      <input type="color" value={color} onChange={handleColorChange}/>
    </div>
  </div>
)

export default DrawingStroke;

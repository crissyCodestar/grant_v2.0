import React from 'react';

const DrawingStroke = ({markerWidth, handleLineStroke, color, handleColorChange}) => (
  <div>

    <div>
      <p>Brush Size: {markerWidth}</p>
      <input type="range" className="slider" min="1" max="100" onChange={handleLineStroke} value={markerWidth} />
    </div>
    <div>
      <p>Hex: {color}</p>
      <input type="color" value={color} onChange={handleColorChange}/>
    </div>
  </div>
)

export default DrawingStroke;

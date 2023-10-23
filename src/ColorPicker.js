import React, { useState } from 'react';

function ColorPicker({ colors, onColorsChange }) {
    const handleColorChange = (index, newColor) => {
        const updatedColors = [...colors];
        updatedColors[index] = newColor;
        onColorsChange(updatedColors);
      };

  return (
    <div>
      {colors.map((color, index) => (
        <div key={index}>
          Color {index + 1}:
          <input
            type="color"
            value={color}
            onChange={(event) => handleColorChange(index, event.target.value)}
          />
        </div>
      ))}
    </div>
  );
}

export default ColorPicker;
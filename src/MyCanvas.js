import React, { Component } from 'react';

class MyCanvas extends Component {
  componentDidMount() {
    this.drawCanvas();
  }
  drawSaltire(ctx, depth, x, y, size) {
    if (depth === 0) {
      ctx.fillStyle = 'black';
      ctx.fillRect(x, y, size, size);
    } else {
      const newSize = size / 3;

      // Draw the central square
      ctx.fillStyle = 'black';
      ctx.fillRect(x + newSize, y + newSize, newSize, newSize);

      // Recursively draw the four smaller saltires
      this.drawSaltire(ctx, depth - 1, x, y, newSize); // Top-left
      this.drawSaltire(ctx, depth - 1, x + 2 * newSize, y, newSize); // Top-right
      this.drawSaltire(ctx, depth - 1, x, y + 2 * newSize, newSize); // Bottom-left
      this.drawSaltire(ctx, depth - 1, x + 2 * newSize, y + 2 * newSize, newSize); // Bottom-right
    }
  }

  drawCanvas() {
    const canvas = this.refs.myCanvas;
    const ctx = canvas.getContext('2d');
    const size = Math.min(canvas.width, canvas.height);
    const x = (canvas.width - size) / 2;
    const y = (canvas.height - size) / 2;
    const depth = 6; // Set the depth you want

    this.drawSaltire(ctx, depth, x, y, size);
  }

  render() {
    return (
      <canvas
        ref="myCanvas"
        width="500"
        height="500"
        style={{ border: '1px solid #000000' }}
      />
    );
  }
}

export default MyCanvas;
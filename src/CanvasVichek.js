import React, { Component } from 'react';

class CanvasVichek extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef(); // Create a ref for the canvas
  }

  componentDidMount() {
    this.drawCanvas(this.props.depth); // Draw the initial canvas
  }

  componentDidUpdate(prevProps) {
    if (prevProps.depth !== this.props.depth) {
      // If the depth prop has changed, redraw the canvas
      this.drawCanvas(this.props.depth);
    }
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

  drawCanvas(depth) {
    const canvas = this.canvasRef.current; // Access the canvas element using the ref
    const ctx = canvas.getContext('2d');
    const size = Math.min(canvas.width, canvas.height);
    const x = (canvas.width - size) / 2;
    const y = (canvas.height - size) / 2;

    this.clearCanvas(ctx); // Clear the canvas
    this.drawSaltire(ctx, depth, x, y, size);
  }

  clearCanvas(ctx) {
    const canvas = this.canvasRef.current; // Access the canvas element using the ref
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  handleSaveImage = () => {
    const canvas = this.canvasRef.current; // Access the canvas element using the ref

    if (canvas) {
      const dataURL = canvas.toDataURL('image/png');

      const a = document.createElement('a');
      a.href = dataURL;
      a.download = 'fractal.png'; // You can change the filename here

      a.click();
    }
  };

  render() {
    return (
      <div>
        <canvas
          ref={this.canvasRef} // Attach the ref to the canvas
          width="500"
          height="500"
          style={{ border: '1px solid #000000' }}
        />
        <button onClick={this.handleSaveImage}>Save Image</button>
      </div>
    );
  }
}

export default CanvasVichek;
import React, { Component } from 'react';

class CanvasVichek extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.drawCanvas(this.props.depth); 
  }

  componentDidUpdate(prevProps) {
    if (prevProps.depth !== this.props.depth) {
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
      a.download = 'VicsekFractal.png';

      a.click();
    }
  };

  render() {
    return (
      <div>
        <canvas
          ref={this.canvasRef}
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
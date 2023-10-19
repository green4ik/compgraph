import React, { Component } from 'react';

class MyCanvas extends Component {
    constructor(props) {
      super(props);
      this.state = {
        zoom: 1.0,
        panX: 0,
        panY: 0,
      };
    }
  
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
      const size = 500;
      const depth = 4; // Set the depth you want
  
      // Clear the canvas with a white background
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      // Calculate the initial translation to center the fractal
      const translateX = (canvas.width - size * this.state.zoom) / 2 + this.state.panX;
      const translateY = (canvas.height - size * this.state.zoom) / 2 + this.state.panY;
  
      // Apply zoom and translation transformations
      ctx.setTransform(this.state.zoom, 0, 0, this.state.zoom, translateX, translateY);
  
      this.drawSaltire(ctx, depth, -size / 2, -size / 2, size);
    }
  
    handleZoomIn = () => {
      this.setState((prevState) => ({ zoom: prevState.zoom * 1.2 }), () => this.drawCanvas());
    };
  
    handleZoomOut = () => {
      if (this.state.zoom > 1) {
        this.setState((prevState) => ({ zoom: prevState.zoom / 1.2 }), () => this.drawCanvas());
      }
    };
  
    handlePan = (dx, dy) => {
      this.setState(
        (prevState) => ({ panX: prevState.panX + dx, panY: prevState.panY + dy }),
        () => this.drawCanvas()
      );
    };
  
    render() {
      const canZoomOut = this.state.zoom > 1;
  
      return (
        <div>
          <canvas
            ref="myCanvas"
            width="500"
            height="500"
            style={{ border: '1px solid #000000', cursor: 'grab' }}
            onMouseDown={(e) => {
              if (e.button === 1) {
                this.setState({ isDragging: true, dragStartX: e.clientX, dragStartY: e.clientY });
                e.target.style.cursor = 'grabbing';
              }
            }}
            onMouseUp={(e) => {
              if (this.state.isDragging) {
                this.setState({ isDragging: false });
                e.target.style.cursor = 'grab';
              }
            }}
            onMouseMove={(e) => {
              if (this.state.isDragging) {
                const dx = e.clientX - this.state.dragStartX;
                const dy = e.clientY - this.state.dragStartY;
                this.handlePan(dx, dy);
                this.setState({ dragStartX: e.clientX, dragStartY: e.clientY });
              }
            }}
          ></canvas>
          <div>
            <button onClick={this.handleZoomIn}>Zoom In</button>
            <button onClick={this.handleZoomOut} disabled={!canZoomOut}>
              Zoom Out
            </button>
          </div>
        </div>
      );
    }
  }
  

export default MyCanvas;
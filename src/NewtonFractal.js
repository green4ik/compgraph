import React, { Component } from 'react';

class NewtonFractal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 1.0,
      constant: 0, // Initialize the constant with 0
    };
  }

  componentDidMount() {
    this.drawFractal();
  }

  complexAdd(a, b) {
    return [a[0] + b[0], a[1] + b[1]];
  }

  complexSubtract(a, b) {
    return [a[0] - b[0], a[1] - b[1]];
  }

  complexMultiply(a, b) {
    return [
      a[0] * b[0] - a[1] * b[1],
      a[0] * b[1] + a[1] * b[0],
    ];
  }

  complexDivide(a, b) {
    const denominator = b[0] * b[0] + b[1] * b[1];
    return [
      (a[0] * b[0] + a[1] * b[1]) / denominator,
      (a[1] * b[0] - a[0] * b[1]) / denominator,
    ];
  }

  complexMagnitude(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
  }

  drawFractal() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    const width = canvas.width;
    const height = canvas.height;

    const maxIterations = 100;
    const tolerance = 1e-6;

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const zx = ((x / width) * 3 - 1.5) / this.state.zoom; // Apply zoom
        const zy = ((y / height) * 3 - 1.5) / this.state.zoom; // Apply zoom
        let z = [zx, zy];

        let color = 'black';
        for (let i = 0; i < maxIterations; i++) {
          const z4 = this.complexMultiply(z, this.complexMultiply(z, this.complexMultiply(z, z)));
          const f = this.complexAdd(z4, [this.state.constant, 0]); // Include the user-defined constant
          if (this.complexMagnitude(f) < tolerance) {
            color = this.getColorForIteration(i);
            break;
          }
          const df = this.complexMultiply([4, 0], this.complexMultiply(z, this.complexMultiply(z, z)));
          z = this.complexSubtract(z, this.complexDivide(f, df));
        }

        ctx.fillStyle = color;
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }

  handleZoomIn = () => {
    this.setState(
      (prevState) => ({ zoom: prevState.zoom * 1.2 }),
      () => this.clearAndRedraw()
    );
  };

  handleZoomOut = () => {
    this.setState(
      (prevState) => ({ zoom: prevState.zoom / 1.2 }),
      () => this.clearAndRedraw()
    );
  };

  handleConstantChange = (event) => {
    const newConstant = parseFloat(event.target.value);
    this.setState({ constant: newConstant }, () => this.clearAndRedraw());
  };

  getColorForIteration(iteration) {
    const colors = ['green', 'blue', 'red', 'purple'];
    return colors[iteration % colors.length];
  }

  clearAndRedraw() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawFractal();
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={800} height={800} />
        <button onClick={this.handleZoomIn}>Zoom In</button>
        <button onClick={this.handleZoomOut}>Zoom Out</button>
        <div>
          <label>Constant: </label>
          <input type="number" value={this.state.constant} onChange={this.handleConstantChange} />
        </div>
      </div>
    );
  }
}

export default NewtonFractal;
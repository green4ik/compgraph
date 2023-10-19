import React, { Component } from 'react';

class NewtonFractal extends Component {
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
        const zx = (x / width) * 3 - 1.5;
        const zy = (y / height) * 3 - 1.5;
        let z = [zx, zy];

        let color = 'black';
        for (let i = 0; i < maxIterations; i++) {
          const z4 = this.complexMultiply(z, this.complexMultiply(z, this.complexMultiply(z, z)));
          const f = this.complexSubtract(z4, [1, 0]);
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

  getColorForIteration(iteration) {
    const colors = ['red', 'blue', 'purple', 'green'];
    return colors[iteration % colors.length];
  }

  render() {
    return <canvas ref="canvas" width={800} height={800} />;
  }
}

export default NewtonFractal;
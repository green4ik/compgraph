import React, { Component } from 'react';
import Complex from './Complex';

class NewtonFractal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 1,
      rootColors: [],
    };
    this.canvasRef = React.createRef();
  }


  componentDidMount() {
    this.drawFractal();
  }

  pixels(screen, color, pos, thickness) {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    for (let i = -thickness; i < thickness; i++) {
      for (let j = -thickness; j < thickness; j++) {
        ctx.fillStyle = color;
        ctx.fillRect(pos[0] + i, pos[1] + j, 1, 1);
      }
    }
  }

  newtonIter(f, f1, x0) {
    let x = x0;
    if (f1(x) === 0) {
      return;
    }

    const t = (y) => (y - x) * f1(x) + f(x);
    x = x - f(x) / f1(x);
    return x;
  }

  newtonRepeat(n, f, f1, x0) {
    let res = x0;
    for (let i = 0; i < n; i++) {
      res = this.newtonIter(f, f1, res);
    }
    return res;
  }

  runPG(f, f1, x0, resolution) {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');

    const winsize = canvas.width;
    const side = Math.floor(Math.sqrt(resolution));

    const w1 = Math.floor(winsize / 2);
    const axisThickness = 3;

    // Set up root colors
    const rootColors = Array.from({ length: resolution }, () => [
      Math.floor(Math.random() * 100 + 50),
      Math.floor(Math.random() * 100 + 50),
      Math.floor(Math.random() * 100 + 50),
    ]);

    this.setState({ rootColors });

    this.setState(
      (prevState) => ({
        rootColors: prevState.rootColors,
      }),
      () => {
        console.log('Root colors set:', this.state.rootColors);
        this.drawFractal();
      }
    );

    let scale = 1;

    const renderFrame = () => {
      ctx.clearRect(0, 0, winsize, winsize);

      for (let i = -w1; i < w1; i++) {
        for (let j = -w1; j < w1; j++) {
          const x = Math.floor(((i + w1) * side) / winsize);
          const y = Math.floor(((j + w1) * side) / winsize);
          const corrValue = Math.floor((side - side / scale) / 2);
          const [newX, newY] = [
            Math.floor(x / scale) + corrValue,
            Math.floor(y / scale) + corrValue,
          ];
          const index = newX + side * newY;
          const [r, g, b] = rootColors[index];
          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
          ctx.fillRect(i + w1, j + w1, 1, 1);
        }
      }

      requestAnimationFrame(renderFrame);
    };

    renderFrame();
  }

  drawFractal() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');

    const winsize = canvas.width;   
    const side = Math.floor(Math.sqrt(resolution));

    const w1 = Math.floor(winsize / 2);

    this.runPG(
        (x) => x ** 4 + 5,
        (x) => 4 * x ** 3,
        new Complex(-3, 2),
        600
      );
  }

  handleZoomIn = () => {
    this.setState(
      (prevState) => ({ scale: prevState.scale + 0.5 }),
      () => this.drawFractal()
    );
  };

  handleZoomOut = () => {
    this.setState(
      (prevState) => ({ scale: Math.max(1, prevState.scale - 0.5) }),
      () => this.drawFractal()
    );
  };

  handleColorChange = () => {
    const resolution = 600;
    const rootColors = Array.from({ length: resolution }, () => [
      Math.floor(Math.random() * 100 + 50),
      Math.floor(Math.random() * 100 + 50),
      Math.floor(Math.random() * 100 + 50),
    ]);

    this.setState({ rootColors }, () => this.drawFractal());
  };

  render() {
    return (
      <div>
        <canvas ref={this.canvasRef} width={500} height={500} />
        <button onClick={this.handleZoomIn}>Zoom In</button>
        <button onClick={this.handleZoomOut}>Zoom Out</button>
        <button onClick={this.handleColorChange}>Change Colors</button>
      </div>
    );
  }
}

export default NewtonFractal;

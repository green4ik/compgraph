import React, { Component } from 'react';

class CanvasNewton extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      zoom: 1.0,
      constant: 0,
      selectedColors: ['green', 'blue', 'red', 'purple'],
      colorUpdateFlag: false,
    };
  }

  componentDidMount() {
    this.drawFractal();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.zoom !== prevProps.zoom ||
      this.props.selectedColors !== prevProps.selectedColors ||
      this.state.colorUpdateFlag
    ) {
      this.clearAndRedraw();
    }
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

    const zoom = this.props.zoom;
    const selectedColors = this.props.selectedColors;

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const zx = ((x / width) * 3 - 1.5) / zoom;
        const zy = ((y / height) * 3 - 1.5) / zoom;
        let z = [zx, zy];

        let color = 'black';
        for (let i = 0; i < maxIterations; i++) {
          const z4 = this.complexMultiply(z, this.complexMultiply(z, this.complexMultiply(z, z)));
          const f = this.complexAdd(z4, [this.state.constant, 0]);
          if (this.complexMagnitude(f) < tolerance) {
            color = this.props.selectedColors[i % this.props.selectedColors.length];
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
    const { selectedColors } = this.state;
    return selectedColors[iteration % selectedColors.length];
  }

  clearAndRedraw() {
    this.setState({ colorUpdateFlag: false });
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawFractal();
  }


  handleSaveImage = () => {
    const canvas = this.refs.canvas;;

    if (canvas) {
      const dataURL = canvas.toDataURL('image/png');

      const a = document.createElement('a');
      a.href = dataURL;
      a.download = 'NewtonFractal.png';

      a.click();
    }
  };

  handleColorsChange(event, index) {
    const { value } = event.target;
    this.setState((prevState) => {
      const newColors = [...prevState.selectedColors];
      newColors[index] = value;
      return { selectedColors: newColors, colorUpdateFlag: true };
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.constant !== this.props.constant) {
      this.setState({ constant: nextProps.constant }, () => this.clearAndRedraw());
    }
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={500} height={500} style={{ border: '1px solid #000000' }}/>
        <button className='save-image-fractal' onClick={this.handleSaveImage}>Save Image</button>
      </div>
    );
  }
}

export default CanvasNewton;
import React, { Component } from 'react';

class Parallelogram extends Component {
    render() {
      const { vertices } = this.props;
      const path = `M${vertices[0].x},${-vertices[0].y} L${vertices[1].x},${-vertices[1].y} L${vertices[2].x},${-vertices[2].y} L${vertices[3].x},${-vertices[3].y} Z`;
  
      return (
        <svg width="495" height="500" viewBox="-16 -16 32 32" style={{ position: 'absolute', left: 0, top: 0, zIndex: 2 }}>
          <path d={path} fill="none" stroke="blue" strokeWidth="0.1" />
  
          {/* Labels for vertices */}
          {vertices.map((vertex, index) => (
            <text key={index} x={vertex.x -0.4} y={-vertex.y - 0.2} fill="black" fontSize="0.5" textAnchor="middle" alignmentBaseline="middle">
            {String.fromCharCode(65 + index)}
            </text>
          ))}
        </svg>
      );
    }
  }
  
  class Line extends Component {
    render() {
      const { vertices, a, b } = this.props;
      const x1 = -16;
      const y1 = a * x1 + (-b);
      const x2 = 16;
      const y2 = a * x2 + (-b);
  
      return (
        <svg width="500" height="500" viewBox="-16 -16 32 32" style={{ position: 'absolute', left: 0, top: 0, zIndex: 1 }}>
          {/* Adjust viewBox to match your desired range */}
          <line x1={-x1} y1={y1} x2={-x2} y2={y2} stroke="red" strokeWidth="0.1" />
        </svg>
      );
    }
  }

class MovingFigure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 3,
      b: 5,
      vertices: [
        { x: 2, y: 3 },
        { x: 6, y: 3 },
        { x: 7, y: 0 },
        { x: 3, y: 0 },
      ],
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: parseFloat(value) || 0 });
  };

  handleVertexChange = (index, axis, event) => {
    const { vertices } = this.state;
    const value = parseFloat(event.target.value) || 0;
    const updatedVertices = vertices.map((vertex, i) =>
      i === index ? { ...vertex, [axis]: value } : vertex
    );
    this.setState({ vertices: updatedVertices });
  };

  validateParallelogram = (vertices) => {
    const [A, B, C, D] = vertices;
  
    // Rule: Opposite sides are equal
    const sideAB = Math.sqrt((B.x - A.x) ** 2 + (B.y - A.y) ** 2);
    const sideCD = Math.sqrt((D.x - C.x) ** 2 + (D.y - C.y) ** 2);
    const sideBC = Math.sqrt((C.x - B.x) ** 2 + (C.y - B.y) ** 2);
    const sideDA = Math.sqrt((A.x - D.x) ** 2 + (A.y - D.y) ** 2);
    console.log(sideAB + "=" + sideCD);
    console.log(sideBC + "=" + sideDA);
  
    const sidesEqual = Math.ceil(sideAB) === Math.ceil(sideCD) && Math.ceil(sideBC) === Math.ceil(sideDA);
  
    console.log("sides equal: " + sidesEqual);
  
    // Rule: Opposite angles are equal
    const angleABCD = Math.atan2(B.y - A.y, B.x - A.x) - Math.atan2(D.y - C.y, D.x - C.x);
    const angleBCDA = Math.atan2(C.y - B.y, C.x - B.x) - Math.atan2(A.y - D.y, A.x - D.x);
    console.log(angleABCD + "=" + angleBCDA);
  
    const anglesEqual = Math.ceil(Math.abs(angleABCD)) === Math.ceil(Math.abs(angleBCDA));
  
    console.log("angles equal: " + anglesEqual);
  
    return sidesEqual && anglesEqual;
  };
  
  
  moveFigure = () => {
    const { a, b, vertices } = this.state;
  
    // Function to mirror a point across the line y = ax + b
    const mirrorPoint = (point, a, b) => {
      const x0 = point.x;
      const y0 = point.y;
    
      // Step 1: Find the slope (a) of the line y = ax + b
      // No need to pass 'a' and 'b' as parameters since they are already available in the component state
      const m = a;
    
      // Step 2: Calculate the negative reciprocal of the slope (mp)
      const mp = -1 / m;
    
      // Step 3: Find the equation of the line perpendicular to y = ax + b
      // and passing through the given point (x0, y0)
      const mirroredLine = (x) => mp * (x - x0) + y0;
    
      // Step 4: Find the intersection point of the line and its perpendicular
      const xIntersection = (b - y0 + mp * x0) / (mp - m);
      const yIntersection = mirroredLine(xIntersection);
    
      // Step 5: Calculate the distance between the given point and the intersection point
      const distance = Math.sqrt((xIntersection - x0) ** 2 + (yIntersection - y0) ** 2);
    
      // Step 6: Move the same distance on the other side of the line
      const xMirror = 2 * xIntersection - x0;
      const yMirror = 2 * yIntersection - y0;
    
      // Round the results to two decimal places
      const roundedX = parseFloat(xMirror.toFixed(2));
      const roundedY = parseFloat(yMirror.toFixed(2));
    
      // Check for NaN values and return the mirrored point
      if (!isNaN(roundedX) && !isNaN(roundedY)) {
        return { x: roundedX, y: roundedY };
      } else {
        // Handle NaN values, for example, by returning the original point
        console.warn('NaN values encountered. Returning the original point.');
        return point;
      }
    };

    // const originalPoint = { x: 2, y: 3 };
    // const f = 3; // Replace with your desired 'a' value
    // const k = 5; // Replace with your desired 'b' value

    // const mirroredPoint = mirrorPoint(originalPoint, f, k);
    // console.log(mirroredPoint);
  
    // Mirror all vertices
    const mirroredVertices = vertices.map((vertex) => mirrorPoint(vertex, a, b));
  
    // Validate the new parallelogram
    const isValidParallelogram = this.validateParallelogram(vertices);
  
    if (isValidParallelogram) {
      this.setState({ vertices: mirroredVertices });
    } else {
      // Handle invalid parallelogram, e.g., show an error message
      alert('Figure is not a valid parallelogram! Please adjust the coordinates.');
    }
  };
  
  
  
  
  render() {
    const { a, b, vertices } = this.state;

    const backgroundStyle = {
      backgroundImage: `url('https://fs03.vseosvita.ua/0300noga-2d9b-477x477.png')`,
      backgroundSize: '100% 100%',
      width: '500px',
      height: '500px',
      position: 'relative',
      margin: '100px',
    };

    return (
      <div>
        <div>
          <label>
            Коефіцієнт a:
            <input type="number" name="a" value={a} onChange={this.handleInputChange} />
          </label>
          <label>
            Коефіцієнт b:
            <input type="number" name="b" value={b} onChange={this.handleInputChange} />
          </label>
          <button onClick={this.moveFigure}>Змінити фігуру</button>
        </div>
        <div style={{ position: 'absolute', zIndex: 1, marginLeft: '100px' }}>
          {vertices.map((vertex, index) => (
            <div key={index}>
              <label>
                {String.fromCharCode(65 + index)}x:
                <input
                  type="number"
                  value={vertex.x}
                  onChange={(event) => this.handleVertexChange(index, 'x', event)}
                />
              </label>
              <label>
                {String.fromCharCode(65 + index)}y:
                <input
                  type="number"
                  value={vertex.y}
                  onChange={(event) => this.handleVertexChange(index, 'y', event)}
                />
              </label>
            </div>
          ))}
        </div>
        <div style={backgroundStyle}>
          <Line vertices={vertices} a={a} b={b} />
          <Parallelogram vertices={vertices} />
        </div>
      </div>
    );
  }
}

export default MovingFigure;

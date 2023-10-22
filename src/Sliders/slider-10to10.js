import React, { useState } from 'react';
import ReactSlider from 'react-slider';
function CustomThumb(props) {
  return (
    <div {...props} className="thumb">
      <div className="thumb-value">{props['aria-valuenow']}</div>
    </div>
  );
}
export function SliderNewton({ onConstantChange }) {

  const handleConstantSliderChange = (newConstant) => {
    // Calculate the constant value based on the slider value (-10 to 10)
    const constantValue = newConstant;
    onConstantChange(constantValue);
  };
  
  return (
    <div className='slider-b'>
      <div className='slider-name'>Значення константи</div>
    <ReactSlider
    className="slider"
    min={-10}
    max={10}
    thumbClassName="thumb"
    trackClassName="track"
    renderThumb={CustomThumb}
    onChange={handleConstantSliderChange}
/>
<div className='lines'>
    <div className='thick-line'>&nbsp;</div>
    <div className='thin-line'>&nbsp;</div>
    <div className='thin-line'>&nbsp;</div>
    <div className='thin-line'>&nbsp;</div>
    <div className='thin-line'>&nbsp;</div>
    <div className='thick-line'>&nbsp;</div>
    <div className='thin-line'>&nbsp;</div>
    <div className='thin-line'>&nbsp;</div>
    <div className='thin-line'>&nbsp;</div>
    <div className='thin-line'>&nbsp;</div>
    <div className='thick-line'>&nbsp;</div>
</div>
<div className='numbers'>
    <div className='newton-thick-number'>-10</div>
    <div className='newton-thin-number'>-8</div>
    <div className='newton-thin-number'>-6</div>
    <div className='newton-thin-number'>-4</div>
    <div className='newton-thin-number'>-2</div>
    <div className='newton-thick-number'>0</div>
    <div className='newton-thin-number'>2</div>
    <div className='newton-thin-number'>4</div>
    <div className='newton-thin-number'>6</div>
    <div className='newton-thin-number'>8</div>
    <div className='newton-thick-number'>10</div>
</div>
</div>
  );
}



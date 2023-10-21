import React, { useState } from 'react';
import ReactSlider from 'react-slider';
function CustomThumb(props) {
  return (
    <div {...props} className="thumb">
      <div className="thumb-value">{props['aria-valuenow']}</div>
    </div>
  );
}
export function Slider({ depth, onDepthChange }) {
    const handleDepthChange = (newDepth) => {
      onDepthChange(newDepth);
    };
  
    return (
      <div className="slider-b">
        <div className="slider-name">Кількість ітерацій</div>
        <ReactSlider
          className="slider"
          min={0}
          max={10}
          thumbClassName="thumb"
          trackClassName="track"
          renderThumb={CustomThumb}
          value={depth} // Pass the depth value
          onChange={handleDepthChange} // Call the handler to update depth
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
    <div className='thick-number'>0</div>
    <div className='thin-number'>1</div>
    <div className='thin-number'>2</div>
    <div className='thin-number'>3</div>
    <div className='thin-number'>4</div>
    <div className='thick-number'>5</div>
    <div className='thin-number'>6</div>
    <div className='thin-number'>7</div>
    <div className='thin-number'>8</div>
    <div className='thin-number'>9</div>
    <div className='thick-number'>10</div>
</div>
</div>
  );
}



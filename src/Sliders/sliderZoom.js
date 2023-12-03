import React, { useState } from 'react';
import ReactSlider from 'react-slider';
function CustomThumb(props) {
  return (
    <div {...props} className="thumb">
      <div className="thumb-value">{props['aria-valuenow']}</div>
    </div>
  );
}
export function SliderZoom({onZoomChange}) {
    const handleZoomSliderChange = (newZoom) => {
        onZoomChange(newZoom);
      };

  return (
    <div className='slider-b'>
      <div className='slider-name'>Масштаб</div>
    <ReactSlider
    className="slider"
    min={1}
    max={100}
    thumbClassName="thumb"
    trackClassName="track"
    renderThumb={CustomThumb}
    onChange={handleZoomSliderChange}
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
<div className='numbers2'>
    <div className='newton-thick-number'>1</div>
    <div className='newton-thin-number'>10</div>
    <div className='newton-thin-number'>20</div>
    <div className='newton-thin-number'>30</div>
    <div className='newton-thin-number'>40</div>
    <div className='newton-thick-number'>50</div>
    <div className='newton-thin-number'>60</div>
    <div className='newton-thin-number'>70</div>
    <div className='newton-thin-number'>80</div>
    <div className='newton-thin-number'>90</div>
    <div className='newton-thick-number'>100</div>
</div>
</div>
  );
}

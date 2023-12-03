import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import convert from 'color-convert';
import EmptyImage from './images/empty.png';
import { Button } from './Button';
function CustomThumb(props) {
  return (
    <div {...props} className="thumb">
      <div className="thumb-value">{props['aria-valuenow']}</div>
    </div>
  );
}
const ImageProcessing2 = () => {
  const [image, setImage] = useState(null);
  const [points, setPoints] = useState([]);
  const [previewImage, setPreviewImage] = useState(EmptyImage);
  const [cyan,setCyan] = useState(0);
  const [magenta,setMagenta] = useState(0);
  const [yellow,setYellow] = useState(0);
  const [black,setBlack] = useState(0);

  

  const onDrop = (acceptedFiles) => {
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;

      img.onload = () => {
        setImage(img);
        setPoints([]); // Clear previous points when a new image is loaded
        setPreviewImage(img); // Set the preview image initially
      };
    };

    reader.readAsDataURL(acceptedFiles[0]);
  };
  const setDefault = () => {
    const img = new Image();
    img.src = EmptyImage;
    setPreviewImage(img);
  } 
  const isYellow = (r, g, b) => {
    
    const cmyk = convert.rgb.cmyk(r, g, b);
    // console.log(cmyk[0],cmyk[1],cmyk[2],cmyk[3]);
    return cmyk[0] <=15 && cmyk[2] >= 40 && cmyk[1] <=40 && cmyk[3] <= 20;
    
  };

  const handleColorTransformation = () => {
    if (image) {
    
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      canvas.width = image.width;
      canvas.height = image.height;

      ctx.drawImage(image, 0, 0, image.width, image.height);

      const imageData = ctx.getImageData(0, 0, image.width, image.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const isYellowPixel = isYellow(data[i], data[i + 1], data[i + 2]);

        if (isYellowPixel) {
        //alert("1");
          const cmyk = convert.rgb.cmyk(data[i], data[i + 1], data[i + 2]);

          // Adjust lightness, intensity, and hue
          cmyk[3] = black   ; // Adjust black (K) for intensity
          cmyk[0] = cyan; // Adjust cyan
          cmyk[1] = magenta; // Adjust magenta
          cmyk[2] = yellow; // Adjust yellow
         
          const rgb = convert.cmyk.rgb(cmyk);

          data[i] = rgb[0];
          data[i + 1] = rgb[1];
          data[i + 2] = rgb[2];
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Create a new Image object for the preview
      const newPreviewImage = new Image();
      newPreviewImage.src = canvas.toDataURL();
      setPreviewImage(newPreviewImage); // Update the preview image
    }
  };

  const handleSaveImage = () => {
    if (previewImage) {
      // Create a temporary link element
      const downloadLink = document.createElement('a');
      downloadLink.href = previewImage.src;
      downloadLink.download = 'transformed_image.png'; // Set the desired file name
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  useEffect(() => {
    handleColorTransformation(); // Trigger transformation when lightness, intensity, or hue changes
  }, [cyan,magenta,yellow,black]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const [gradientValue, setGradientValue] = useState(50);

  const handleSliderChange = (event) => {
    setGradientValue(event.target.value);
  };

  const getGradient = () => {
    return `linear-gradient(to right, #ff0000 0%, #ffff00 ${gradientValue}%, #ffffff ${gradientValue}%, #ffffff 100%)`;
  };
  return (
    
    <div className='color-body'>
       <div>
         
         {/* Display image */}
         <img src={previewImage ? previewImage.src : image.src} alt="Uploaded" className='color-image' />

         {/* Display points */}
         <ul>
           {points.map((point, index) => (
             <li key={index}>{`Point ${index + 1}: (${point.x}, ${point.y})`}</li>
           ))}
         </ul>

         {/* Hue, Lightness, and Intensity input fields */}
         

         {/* Buttons for color transformation and saving */}
         </div>
      <div className="slider-container12">
      <input
       type="range"
       min="0"
       max="100"
       step={5}
       value={cyan}
       onChange={(e) => setCyan(Number(e.target.value))}
       renderThumb={CustomThumb}
        className="slider1 s2"
      />
       <input
       type="range"
       min="0"
       max="100"
       step={5}
       value={magenta}
       onChange={(e) => setMagenta(Number(e.target.value))}
        className="slider1 s3"
      />
       <input
       type="range"
       min="0"
       max="100"
       step={5}
       value={yellow}
       onChange={(e) => setYellow(Number(e.target.value))}
        className="slider1 s4"
      />
       <input
       type="range"
       min="0"
       max="100"
       step={5}
       value={black}
       onChange={(e) => setBlack(Number(e.target.value))}
        className="slider1 s5"
      />
    </div>
      
       
        
        <div className='color-container'>
          <Button link = "/color1"text="HSL" className= "vichek-button upload-save" />
          <Button  text="CMYK" className= "active-newton-button upload-save" />
          <button {...getRootProps()} className='upload-save ml'>
        <input {...getInputProps()} />
        Upload Image
      </button>
          <button onClick={handleSaveImage} className='upload-save'>Save Image</button>
          </div>
    </div>
  );
};

const uploadButtonStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '10px',
  textAlign: 'center',
  cursor: 'pointer',
  fontSize: '16px',
};

const imageStyles = {
  maxWidth: '100%',
  marginTop: '20px',
};

export default ImageProcessing2;

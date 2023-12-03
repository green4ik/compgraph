import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import convert from 'color-convert';

const ImageProcessing = () => {
  const [image, setImage] = useState(null);
  const [points, setPoints] = useState([]);
  const [lightness, setLightness] = useState(0);
  const [intensity, setIntensity] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);
  const [hue, setHue] = useState(0);
  const handleHueChange = (event) => {
    setHue(event.target.value);
  };
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

  const isYellow = (r, g, b) => {
    const hsl = convert.rgb.hsl(r, g, b);
    return hsl[0] >= 40 && hsl[0] <= 80; // Adjust these values based on your yellow color range
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
          const hsl = convert.rgb.hsl(data[i], data[i + 1], data[i + 2]);
  
          // Adjust lightness, intensity, and hue
          hsl[2] += lightness;
          hsl[1] += intensity;
          hsl[0] = hue; // Adjust hue
          
          hsl[0] = Math.min(360, Math.max(0, hsl[0]));
    
         
          // Ensure hue is within the valid range [0, 360]
          hsl[0] = (hsl[0] + 360) % 360;
  
          const rgb = convert.hsl.rgb(hsl);
  
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
    handleColorTransformation(); // Trigger transformation when lightness or intensity changes
  }, [lightness, intensity, hue]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <button {...getRootProps()} className='upload-save'>
        <input {...getInputProps()} />
        Upload Image
      </button>

      {image && (
        <div>
          {/* Display image */}
          <img src={previewImage ? previewImage.src : image.src} alt="Uploaded" style={imageStyles} />

          {/* Display points */}
          <ul>
            {points.map((point, index) => (
              <li key={index}>{`Point ${index + 1}: (${point.x}, ${point.y})`}</li>
            ))}
          </ul>

          {/* Lightness and Intensity input fields */}
          <label>
            Hue:
          <input
          type="range"
          min="0"
          max="360"
          value={hue}
          onChange={handleHueChange}
          />
   </label>
          <label>
            Lightness:
            <input
               type="range"
               min="-20"
               max="20"
              value={lightness}
              onChange={(e) => setLightness(Number(e.target.value))}
            />
          </label>
          <label>
            Intensity:
            <input
              type="range"
              min="-20"
              max="20"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
            />
          </label>

          {/* Buttons for color transformation and saving */}
          <button onClick={handleColorTransformation}>Transform Color</button>
          <button onClick={handleSaveImage}>Save Image</button>
        </div>
      )}
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

export default ImageProcessing;

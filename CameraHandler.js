import React, { useEffect } from 'react';
function CameraHandler() {
    useEffect(() => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
          .then(function(stream) {
            // Camera access granted, handle the stream
            // You can perform actions like displaying the camera stream, capturing frames, or implementing object detection logic here
          })
          .catch(function(error) {
            // Handle the error, camera access denied or not available
            console.log('Error accessing camera:', error);
          });
      }
    }, []);
  
    return null; // This component doesn't render any UI, so we return null
  }
  export default CameraHandler;
  
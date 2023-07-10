import React, { useEffect, useRef } from 'react';
function CameraComponent() {
    const videoRef = useRef(null);
  
    useEffect(() => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
          .then(function(stream) {
            videoRef.current.srcObject = stream;
          })
          .catch(function(error) {
            console.log('Error accessing camera:', error);
          });
      }
    }, []);
  
    return <video ref={videoRef} autoPlay />;
  }
  export default CameraComponent;
  
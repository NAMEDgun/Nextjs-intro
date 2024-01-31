import React, { useRef, useState, useEffect } from 'react';
import { S3 } from "aws-sdk";

const s3 = new S3({
  accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_S3_REGION,
});

function SignatureCanvas() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawnImageURL, setDrawnImageURL] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvasResize(canvas);

    const handleResize = () => canvasResize(canvas);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const canvasResize = (canvas) => {
    const div = canvas.parentNode;

    const dpr = window.devicePixelRatio;
    canvas.width = div.clientWidth;
    canvas.height = div.clientHeight;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
  };

  const crispPixel = (pixel, thickness = 1) => {
    const halfThickness = thickness / 2;
    
    return thickness % 2
      ? (Number.isInteger(pixel) ? pixel : Math.round(pixel - halfThickness)) + halfThickness
      : Math.round(pixel);
  };

  const getPosition = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
  
    const rect = canvas.getBoundingClientRect();
    let ClientX, ClientY;

    if ('touches' in e) {
      ClientX = e.touches[0].clientX;
      ClientY = e.touches[0].clientY;
    } else {
      ClientX = e.clientX;
      ClientY = e.clientY;
    }

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = crispPixel((ClientX - rect.left) * scaleX);
    const y = crispPixel((ClientY - rect.top) * scaleY);
    return { x, y };
  };

  const draw = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log("!canvas");
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.log("!ctx");
      return;
    }

    const { x, y } = getPosition(e);
    const dpr = window.devicePixelRatio;

    switch (e.type) {
      case 'mousedown':
      case 'touchstart':
        setIsDrawing(true);
        ctx.beginPath();
        ctx.moveTo(x/dpr, y/dpr);
        break;
      case 'mousemove':
      case 'touchmove':
        if (isDrawing) {
          ctx.lineTo(x/dpr, y/dpr);
          ctx.stroke();
        }
        break;
      case 'mouseup':
      case 'mouseout':
      case 'touchend':
      case 'touchcancel':
        if (isDrawing) {
          setIsDrawing(false);
          ctx.closePath();
        }
        break;
      default:
        break;
    }
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    setDrawnImageURL(canvas.toDataURL('image/png'));
    setShowConfirmation(true);

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const handleConfirmSave = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const response = await fetch(drawnImageURL);
    const blob = await response.blob();

    const params = {
      Bucket: "nudge.wooriya.sign", 
      Key: `signature_${Date.now()}.png`, 
      Body: blob,
    };

    try {
      const upload = s3.upload(params);
      await upload.promise();
      console.log("Image uploaded successfully");

      const imageUrl = s3.getSignedUrl("getObject", {
        Bucket: params.Bucket,
        Key: params.Key,
      });

      setDrawnImageURL(imageUrl);
    } catch (err) {
      console.error(err);
    }

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    setShowConfirmation(false);
  };

  const handleCancelSave = () => {
    setShowConfirmation(false);
    setDrawnImageURL('');
  };

  return (
    <div>
      <div style={{ width: '300px', height: '300px' }}>
        <canvas
          ref={canvasRef}
          style={{ border: '1px solid black' }}
          onMouseDown={draw}
          onMouseMove={draw}
          onMouseUp={draw}
          onMouseOut={draw}
          onTouchStart={draw}
          onTouchMove={draw}
          onTouchEnd={draw}
          onTouchCancel={draw}
        ></canvas>
      </div>
      <div>
        <button onClick={handleSave}>저장</button>
      </div>
      {showConfirmation && (
        <div>
          <p>그림을 저장하시겠습니까?</p>
          <button onClick={handleConfirmSave}>예</button>
          <button onClick={handleCancelSave}>아니요</button>
        </div>
      )}
      {drawnImageURL && (
        <div>
          <img src={drawnImageURL} alt="Drawn Signature" />
        </div>
      )}
    </div>
  );
}

export default SignatureCanvas;

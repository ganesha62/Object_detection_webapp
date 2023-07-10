export function drawReact(bbox, label, ctx, text) {
    // Retrieve bounding box coordinates
    const [x, y, width, height] = bbox;
  
    // Set styling options
    ctx.strokeStyle = "#2fff00";
    ctx.lineWidth = 2;
    ctx.fillStyle = "#2fff00";
    ctx.font = "14px Arial";
  
    // Draw rectangle
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.stroke();
    ctx.fillText(`${label} ${text}`, x, y > 10 ? y - 5 : 10);
  }
  
function getHeight() {
  return window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
}
function drawLines() {
  const oldLines = document.querySelectorAll('.line');
  oldLines.forEach(line => line.remove());
  for (let i = 0; i < getHeight() / 20; i++) {
    const line = document.createElement("div");
    line.className = "line";
    line.style.top = `${i * 20}px`;
    line.style.animationDuration = `${Math.random() * 3 + 1}s`;
    document.body.appendChild(line);
  }
}
drawLines();
window.onresize = drawLines;

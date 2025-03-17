<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const canvasRef = ref(null);
let ctx, width, height;
let points = [];
let pointsColor = [];
let blinkIntervals = [];
const pointSize = 15; // Increased point size to make the grid spacier
const circleRadius = 2; // Smaller circle radius
let intervalId;

const initCanvas = () => {
  const canvas = canvasRef.value;
  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;
  ctx = canvas.getContext("2d");

  const cols = Math.floor(width / pointSize);
  const rows = Math.floor(height / pointSize);

  points = [];
  pointsColor = [];
  blinkIntervals = [];
  for (let y = 0; y < rows; y++) {
    let row = [];
    let colorRow = [];
    let intervalRow = [];
    for (let x = 0; x < cols; x++) {
      row.push(" ");
      colorRow.push([0, 0, 0]);
      intervalRow.push(null);
    }
    points.push(row);
    pointsColor.push(colorRow);
    blinkIntervals.push(intervalRow);
  }
};

const blinkDown = (x, y) => {
  if (blinkIntervals[y][x]) {
    clearInterval(blinkIntervals[y][x]);
  }
  blinkIntervals[y][x] = setInterval(() => {
    if (pointsColor[y][x][0] > 0) {
      let r = pointsColor[y][x][0];
      let g = 0;
      let b = 0;
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      pointsColor[y][x][0] = r - 0.5;
      ctx.beginPath();
      ctx.arc(x * pointSize + pointSize / 2, y * pointSize + pointSize / 2, circleRadius, 0, Math.PI * 2);
      ctx.fill();
    } else {
      clearInterval(blinkIntervals[y][x]);
      blinkIntervals[y][x] = null;
    }
  }, 1);
};

const draw = () => {
  ctx.clearRect(0, 0, width, height);

  for (let y = 0; y < points.length; y++) {
    for (let x = 0; x < points[y].length; x++) {
      if (Math.random() < 0.001) {
        let r = 255;
        pointsColor[y][x][0] = r;
        let g = 0;
        let b = 0;
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.beginPath();
        ctx.arc(x * pointSize + pointSize / 2, y * pointSize + pointSize / 2, circleRadius, 0, Math.PI * 2);
        ctx.fill();
        blinkDown(x, y);
      } else {
        let r = pointsColor[y][x][0];
        let g = 0;
        let b = 0;
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.beginPath();
        ctx.arc(x * pointSize + pointSize / 2, y * pointSize + pointSize / 2, circleRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
};

onMounted(() => {
  initCanvas();
  intervalId = setInterval(draw, 1000);
  window.addEventListener('resize', initCanvas);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
  for (let y = 0; y < blinkIntervals.length; y++) {
    for (let x = 0; x < blinkIntervals[y].length; x++) {
      if (blinkIntervals[y][x]) {
        clearInterval(blinkIntervals[y][x]);
      }
    }
  }
  window.removeEventListener('resize', initCanvas);
});
</script>

<template>
  <canvas ref="canvasRef"></canvas>
</template>

<style scoped>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: black;
  pointer-events: none;
}
</style>
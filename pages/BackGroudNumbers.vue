<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const canvasRef = ref(null);
let ctx, width, height;
let numbers = [];
const numSize = 15; // Base font size
const zoomRadius = 100; // Size of zoom effect

const initCanvas = () => {
  const canvas = canvasRef.value;
  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;
  ctx = canvas.getContext("2d");

  const cols = Math.floor(width / numSize);
  const rows = Math.floor(height / numSize);

  numbers = [];
  for (let y = 0; y < rows; y++) {
    let row = [];
    for (let x = 0; x < cols; x++) {
      row.push(Math.random() > 0.5 ? "0" : "1");
    }
    numbers.push(row);
  }
};

// Function to draw the binary effect
const draw = (mouseX = -1, mouseY = -1) => {
  ctx.clearRect(0, 0, width, height);

  for (let y = 0; y < numbers.length; y++) {
    for (let x = 0; x < numbers[y].length; x++) {
      let px = x * numSize;
      let py = y * numSize;

      // Calculate distance from the mouse
      let dist = Math.sqrt((px - mouseX) ** 2 + (py - mouseY) ** 2);

      // Adjust size based on zoom effect
      let size = numSize;
      if (dist < zoomRadius) {
        let zoomFactor = 1 + (zoomRadius - dist) / 200;
        size *= zoomFactor;
        let factor = dist / zoomRadius;
        // Change Color
        let r = Math.round(170 * (1 - factor) + 83 * (factor));
        let g = Math.round(170 * (1 - factor) + 45 * (factor));
        let b = Math.round(170 * (1 - factor) + 45 * (factor));
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        
        // Change randomly number
        if (Math.random() < 0.01) {
          numbers[y][x] = numbers[y][x] === "0" ? "1" : "0";
        }
      } else {
        ctx.fillStyle = "#532D2D";
      }

      ctx.font = `${size}px monospace`;
      ctx.fillText(numbers[y][x], px, py + size);
    }
  }
};

// Mouse move handler
const onMouseMove = (event) => {
  draw(event.clientX, event.clientY);
};

// Lifecycle hooks
onMounted(() => {
  initCanvas();
  draw();
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("resize", initCanvas);
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", onMouseMove);
  window.removeEventListener("resize", initCanvas);
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
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: black;
  pointer-events: none;
}
</style>

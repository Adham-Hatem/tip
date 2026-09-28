import { PixelRenderer } from "./core/PixelRenderer.js";
import { PixelAnimator } from "./core/PixelAnimator.js";
import { tipIdleFrame } from "./character/tip.js";

const app = document.querySelector("#app");

const tip = document.createElement("div");

tip.classList.add("tip");

app.appendChild(tip);

const renderer = new PixelRenderer(tip, {
  pixelSize: 16,
});

renderer.render(tipIdleFrame);

const animator = new PixelAnimator(renderer);

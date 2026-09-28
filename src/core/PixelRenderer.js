export class PixelRenderer {
  constructor(container, options = {}) {
    this.container = container;
    this.pixelSize = options.pixelSize ?? 8;
  }

  render(frame) {
    this.container.innerHTML = "";

    const data = frame.data;

    this.container.style.width = `${frame.width * this.pixelSize}px`;
    this.container.style.height = `${frame.height * this.pixelSize}px`;

    for (let y = 0; y < data.length; y++) {
      const row = data[y];

      for (let x = 0; x < row.length; x++) {
        const symbol = row[x];

        if (symbol === " ") {
          continue;
        }

        const pixel = document.createElement("div");

        pixel.classList.add("pixel", `pixel-${symbol}`);

        pixel.style.left = `${x * this.pixelSize}px`;
        pixel.style.top = `${y * this.pixelSize}px`;

        this.container.appendChild(pixel);
      }
    }
  }
}

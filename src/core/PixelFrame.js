export class PixelFrame {
  constructor(data) {
    const validSymbols = new Set([" ", "l", "d", "w", "b"]);

    if (!Array.isArray(data)) {
      throw new Error("PixelFrame data must be an array.");
    }

    if (data.length === 0) {
      throw new Error("PixelFrame cannot be empty.");
    }

    for (let y = 0; y < data.length; y++) {
      const row = data[y];

      if (typeof row !== "string") {
        throw new Error("Each PixelFrame row must be a string.");
      }

      for (let x = 0; x < row.length; x++) {
        const symbol = row[x];

        if (!validSymbols.has(symbol)) {
          throw new Error(
            `Invalid pixel symbol "${symbol}" at row ${y}, column ${x}.`,
          );
        }
      }
    }

    const width = Math.max(...data.map((row) => row.length));
    const height = data.length;

    this.width = width;
    this.height = height;

    this.data = data.map((row) => row.padEnd(width, " "));
  }
}

# Tip Renderer

A code-based pixel renderer and animation system for recreating Tip from Endacopia.

The character is built entirely from code - no image assets are used.

## Concept

Pixel art is represented as text-based frame data:

```js
const frame = [
  "      rrrr      ",
  "    rrbbbbrr    ",
  "   rrbbbbbbrr   ",
  "  rrbbwwwwbbrr  ",
  "  rrbbwwwwbbrr  ",
  "   rrbbbbbbrr   ",
  "    rrbbbbrr    ",
  "      rrrr      ",
];
```

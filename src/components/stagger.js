// Delay (ms) for the i-th child of a revealed group: 0, 80, 160, ... capped.
export const stagger = (index, step = 80, max = 6) => Math.min(index, max) * step

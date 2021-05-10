import type { HSL } from '../types';

export const getColourStringFromHSL = (hsl: HSL, alpha = 1): string => {
  const a = alpha < 0 ? 0 : alpha > 1 ? 1 : alpha;
  return `hsla(${hsl.h} ${hsl.s}% ${hsl.l}% ${a})`;
};

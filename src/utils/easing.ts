export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}

export function easeOutElastic(t: number): number {
  const c5 = (2 * Math.PI) / 4.5
  return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c5) + 1
}

export function easeOutBounce(t: number): number {
  const n1 = 7.5625
  const d1 = 2.75

  if (t < 1 / d1) {
    return n1 * t * t
  } else if (t < 2 / d1) {
    return n1 * (t -= 1.5 / d1) * t + 0.75
  } else if (t < 2.5 / d1) {
    return n1 * (t -= 2.25 / d1) * t + 0.9375
  } else {
    return n1 * (t -= 2.625 / d1) * t + 0.984375
  }
}

export function easeInBack(t: number, c1 = 1.70158): number {
  const c3 = c1 + 1
  return c3 * t * t * t - c1 * t * t
}

export function easeOutBack(t: number, c1 = 1.70158): number {
  const c3 = c1 + 1
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2)
}

export const easing = {
  easeInOutCubic,
  easeOutElastic,
  easeOutBounce,
  easeInBack,
  easeOutBack,
}

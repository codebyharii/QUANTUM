import gsap from 'gsap'

export function createScrollAnimation(target: HTMLElement) {
  gsap.registerPlugin(require('gsap/ScrollTrigger').default)
  
  gsap.to(target, {
    scrollTrigger: {
      trigger: target,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false,
    },
    opacity: 1,
    duration: 1,
  })
}

export function floatAnimation(target: any, duration = 3) {
  gsap.to(target, {
    y: 20,
    duration,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })
}

export function rotateAnimation(target: any, duration = 4) {
  gsap.to(target.rotation, {
    y: Math.PI * 2,
    duration,
    repeat: -1,
    ease: 'none',
  })
}

export class PerformanceMonitor {
  private startTime: number = 0
  private metrics: Map<string, number> = new Map()

  start(label: string) {
    this.startTime = performance.now()
  }

  end(label: string) {
    const endTime = performance.now()
    const duration = endTime - this.startTime
    this.metrics.set(label, duration)
    console.log(`⏱️ ${label}: ${duration.toFixed(2)}ms`)
  }

  getMetrics() {
    return Object.fromEntries(this.metrics)
  }

  clearMetrics() {
    this.metrics.clear()
  }

  // Web Vitals tracking
  trackCoreWebVitals() {
    if ('web-vital' in window) {
      console.log('Core Web Vitals tracking enabled')
    }
  }

  // FPS counter
  startFPSCounter() {
    let lastTime = performance.now()
    let frames = 0

    const count = () => {
      const currentTime = performance.now()
      frames++

      if (currentTime - lastTime >= 1000) {
        console.log(`📊 FPS: ${frames}`)
        frames = 0
        lastTime = currentTime
      }

      requestAnimationFrame(count)
    }

    requestAnimationFrame(count)
  }
}

export const monitor = new PerformanceMonitor()

export const measurePerformance = (componentName: string) => {
  const startTime = performance.now();
  
  return () => {
    const endTime = performance.now();
    const duration = endTime - startTime;
    console.log(`[Performance] ${componentName} rendered in ${duration.toFixed(2)}ms`);
  };
};

export const trackFPS = () => {
  let frameCount = 0;
  let lastTime = performance.now();
  
  return () => {
    frameCount++;
    const currentTime = performance.now();
    const elapsed = currentTime - lastTime;
    
    if (elapsed >= 1000) {
      const fps = (frameCount * 1000) / elapsed;
      console.log(`[Performance] Current FPS: ${fps.toFixed(1)}`);
      frameCount = 0;
      lastTime = currentTime;
    }
  };
};

export const measureResourceLoading = () => {
  if (window.performance && performance.getEntriesByType) {
    const resources = performance.getEntriesByType('resource');
    resources.forEach(resource => {
      console.log(`[Resource] ${resource.name} loaded in ${resource.duration.toFixed(2)}ms`);
    });
  }
};
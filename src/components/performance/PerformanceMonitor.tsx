import { useEffect, useState } from 'react';

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    cls: 0,
  });

  useEffect(() => {
    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const firstPaint = entries[0];
      setMetrics(prev => ({ ...prev, fcp: firstPaint.startTime }));
      console.log(`[Core Web Vital] FCP: ${firstPaint.startTime}ms`);
    });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const largestPaint = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: largestPaint.startTime }));
      console.log(`[Core Web Vital] LCP: ${largestPaint.startTime}ms`);
    });

    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      let clsScore = 0;
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsScore += (entry as any).value;
        }
      });
      setMetrics(prev => ({ ...prev, cls: clsScore }));
      console.log(`[Core Web Vital] CLS: ${clsScore}`);
    });

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('[Performance] Browser does not support PerformanceObserver', error);
    }

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  return null; // This is a monitoring-only component
};

export default PerformanceMonitor;
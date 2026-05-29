'use client';

import { useCallback, useEffect, useState } from 'react';

/** Shortest viewport edge — stable across orientation changes. */
export const getDeviceTier = (width, height) => {
  const minSide = Math.min(width, height);
  if (minSide <= 480) return 'mobile';
  if (minSide <= 768) return 'tablet';
  return 'desktop';
};

/**
 * Layout profile for spacing, grids, and parallax.
 * Landscape on phones/tablets uses dedicated profiles.
 */
export const getLayoutProfile = (width, height) => {
  const tier = getDeviceTier(width, height);
  const isLandscape = width > height;

  if (!isLandscape) {
    return tier;
  }

  if (tier === 'mobile') return 'mobileLandscape';
  if (tier === 'tablet') return 'tabletLandscape';
  return 'desktop';
};

export const isCompactLandscape = (width, height) =>
  width > height && height <= 520;

export const getViewportState = () => {
  if (typeof window === 'undefined') {
    return {
      width: 1024,
      height: 768,
      tier: 'desktop',
      layout: 'desktop',
      isLandscape: false,
      isCompact: false,
      isNarrow: false,
    };
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const tier = getDeviceTier(width, height);
  const layout = getLayoutProfile(width, height);
  const isLandscape = width > height;
  const isCompact = isCompactLandscape(width, height);

  return {
    width,
    height,
    tier,
    layout,
    isLandscape,
    isCompact,
    isNarrow: tier !== 'desktop',
  };
};

export function useViewport() {
  const [viewport, setViewport] = useState(getViewportState);

  const update = useCallback(() => {
    setViewport(getViewportState());
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
    };
  }, [update]);

  return viewport;
}

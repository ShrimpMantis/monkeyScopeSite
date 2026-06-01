'use client';

import { useCallback, useEffect, useState } from 'react';

/** Width at which desktop layout profile and wide CSS tokens apply. */
export const DESKTOP_MIN_WIDTH = 1440;

/** Shortest viewport edge — stable across orientation changes. */
export const getDeviceTier = (width, height) => {
  const minSide = Math.min(width, height);
  if (minSide <= 480) return 'mobile';
  if (width >= DESKTOP_MIN_WIDTH) return 'desktop';
  if (minSide <= 768) return 'tablet';
  return 'tablet';
};

/** True for monitors and large desktops; laptops stay on the tablet profile. */
export const isWideViewport = (width, height) =>
  getDeviceTier(width, height) === 'desktop';

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
      tier: 'tablet',
      layout: 'tabletLandscape',
      isLandscape: true,
      isCompact: false,
      isNarrow: true,
      isWide: false,
    };
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const tier = getDeviceTier(width, height);
  const layout = getLayoutProfile(width, height);
  const isLandscape = width > height;
  const isCompact = isCompactLandscape(width, height);
  const isWide = isWideViewport(width, height);

  return {
    width,
    height,
    tier,
    layout,
    isLandscape,
    isCompact,
    isNarrow: !isWide,
    isWide,
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

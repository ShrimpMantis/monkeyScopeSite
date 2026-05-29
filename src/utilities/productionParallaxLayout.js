const FOOTER_GAP = 0.08;
const PAGES_BUFFER = 0.1;

const FOOTER_FACTOR = {
  mobile: 0.5,
  mobileLandscape: 0.42,
  tablet: 0.45,
  tabletLandscape: 0.4,
  desktop: 0.32,
};

const ROW_VH = {
  mobile: 0.28,
  mobileLandscape: 0.2,
  tablet: 0.3,
  tabletLandscape: 0.22,
  desktop: 0.32,
};

const HEADER_VH = {
  mobile: 0.14,
  mobileLandscape: 0.1,
  tablet: 0.12,
  tabletLandscape: 0.1,
  desktop: 0.12,
};

/** Matches productions grid ParallaxLayer offset (after 0.5 hero). */
const CONTENT_OFFSET = 0.6;
const HERO_BG_OFFSET = 0.85;

export const getGridColumns = (layout) => {
  if (layout === 'desktop' || layout === 'tabletLandscape' || layout === 'mobileLandscape') {
    return 3;
  }
  return 2;
};

/** Initial factor before DOM measurement; scales with tile count. */
export const estimateContentFactor = (tileCount, layout) => {
  const columns = getGridColumns(layout);
  const rows = Math.ceil(Math.max(tileCount, 1) / columns);
  const rowVh = ROW_VH[layout] ?? ROW_VH.desktop;
  const headerVh = HEADER_VH[layout] ?? HEADER_VH.desktop;
  const gridVh = rows * rowVh + Math.max(0, rows - 1) * 0.012;
  return Math.max(1.05, headerVh + gridVh + 0.08);
};

export const buildProductionLayout = (contentFactor, layout) => {
  const footerFactor = FOOTER_FACTOR[layout] ?? FOOTER_FACTOR.desktop;
  const footerOffset = CONTENT_OFFSET + contentFactor + FOOTER_GAP;
  const pagesCount = footerOffset + footerFactor + PAGES_BUFFER;
  const backgroundFactor = footerOffset + footerFactor - HERO_BG_OFFSET;

  return {
    contentOffset: CONTENT_OFFSET,
    contentFactor,
    footerOffset,
    footerFactor,
    pagesCount,
    backgroundFactor,
    heroBgOffset: HERO_BG_OFFSET,
  };
};

export const contentHeightToFactor = (scrollHeightPx, viewportHeightPx) => {
  if (!viewportHeightPx) return 1.05;
  return Math.max(1.05, scrollHeightPx / viewportHeightPx + 0.04);
};

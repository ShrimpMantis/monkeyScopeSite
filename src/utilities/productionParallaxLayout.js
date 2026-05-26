const FOOTER_GAP = 0.1;
const PAGES_BUFFER = 0.12;

const FOOTER_FACTOR = {
  mobile: 0.5,
  tablet: 0.45,
  desktop: 0.32,
};

const CONTENT_OFFSET = 1;
const HERO_BG_OFFSET = 0.85;

export const getGridColumns = (viewport) => (viewport === 'desktop' ? 3 : 2);

/** Initial factor before DOM measurement; scales with tile count. */
export const estimateContentFactor = (tileCount, viewport) => {
  const columns = getGridColumns(viewport);
  const rows = Math.ceil(Math.max(tileCount, 1) / columns);
  const rowVh =
    viewport === 'mobile' ? 0.28 : viewport === 'tablet' ? 0.3 : 0.32;
  const headerVh = viewport === 'mobile' ? 0.14 : 0.12;
  const gridVh = rows * rowVh + Math.max(0, rows - 1) * 0.015;
  return Math.max(1.05, headerVh + gridVh + 0.1);
};

export const buildProductionLayout = (contentFactor, viewport) => {
  const footerFactor = FOOTER_FACTOR[viewport] ?? FOOTER_FACTOR.desktop;
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
  return Math.max(1.05, scrollHeightPx / viewportHeightPx + 0.12);
};

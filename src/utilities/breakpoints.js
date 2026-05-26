/**
 * Viewport tiers:
 * - mobile:           <= 480px
 * - tabletPortrait:   481px–768px, portrait
 * - tabletLandscape:  481px–1024px, landscape (also tablets held horizontally)
 * - tablet:           <= 768px (legacy helper)
 * - laptop:           1025px–1280px
 * - desktop:          1281px–1920px
 * - ultraWide:        >= 1921px
 */
export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
  wide: '1440px',
  ultraWide: '1920px',
};

export const media = {
  /** Legacy: max-width 480px */
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  /** Legacy: max-width 768px */
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  /** Legacy: min-width 1024px */
  desktop: `@media (min-width: ${breakpoints.laptop})`,

  mobileOnly: `@media (max-width: ${breakpoints.mobile})`,
  tabletPortrait: `@media (min-width: 481px) and (max-width: ${breakpoints.tablet}) and (orientation: portrait)`,
  tabletLandscape: `@media (min-width: 481px) and (max-width: ${breakpoints.laptop}) and (orientation: landscape)`,
  tabletOnly: `@media (min-width: 481px) and (max-width: ${breakpoints.tablet})`,
  laptop: `@media (min-width: ${breakpoints.laptop}) and (max-width: ${breakpoints.desktop})`,
  desktopScreen: `@media (min-width: ${breakpoints.desktop}) and (max-width: ${breakpoints.ultraWide})`,
  ultraWide: `@media (min-width: ${breakpoints.ultraWide})`,
  laptopUp: `@media (min-width: ${breakpoints.laptop})`,
  notMobile: `@media (min-width: 481px)`,
};

export const containers = {
  content: 'var(--content-max-width)',
  prose: 'var(--prose-max-width)',
  pageGutter: 'var(--page-gutter)',
};

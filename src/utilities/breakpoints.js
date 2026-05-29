/**
 * Viewport tiers:
 * - mobile:           shortest edge <= 480px
 * - tabletPortrait:   481px–768px, portrait
 * - tabletLandscape:  481px–1024px, landscape
 * - compactLandscape: landscape with height <= 520px (phones held sideways)
 * - tablet:           max-width 768px (legacy)
 * - laptop:           1025px–1280px
 * - desktop:          1281px–1920px
 * - ultraWide:        >= 1921px
 *
 * JS layout profiles: use `useViewport()` from viewport.js (orientation-aware).
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
  /** Phone/tablet held sideways — limited vertical space */
  compactLandscape: `@media (orientation: landscape) and (max-height: 520px)`,
  /** Phone landscape (broader width, short height) */
  mobileLandscape: `@media (orientation: landscape) and (max-height: 520px) and (max-width: ${breakpoints.laptop})`,
  tabletPortrait: `@media (min-width: 481px) and (max-width: ${breakpoints.tablet}) and (orientation: portrait)`,
  tabletLandscape: `@media (min-width: 481px) and (max-width: ${breakpoints.laptop}) and (orientation: landscape)`,
  /** Portrait phones and tablets — stacked layouts */
  narrowPortrait: `@media (orientation: portrait) and (max-width: ${breakpoints.tablet})`,
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

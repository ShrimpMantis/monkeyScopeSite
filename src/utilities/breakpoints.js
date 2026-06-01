/**
 * Viewport tiers:
 * - mobile:           shortest edge <= 480px
 * - tabletPortrait:   481px–768px, portrait
 * - tabletLandscape:  481px–1439px, landscape (includes laptop widths)
 * - portraitBelowDesktop: 769px–1439px portrait (tablets + laptops)
 * - compactLandscape: landscape with height <= 520px (phones held sideways)
 * - tablet:           max-width 768px (legacy)
 * - laptop:           1024px–1439px — uses tablet/mobile layout (legacy CSS range label)
 * - desktop:          >= 1440px
 * - ultraWide:        >= 1921px
 *
 * JS layout profiles: use `useViewport()` from viewport.js (orientation-aware).
 * Desktop JS/CSS behavior starts at `wide` (1440px), not `laptop` (1024px).
 */
export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
  wide: '1440px',
  ultraWide: '1920px',
};

/** Last px width that uses tablet/mobile layout tokens (laptop band included). */
export const belowWide = '1439px';

export const media = {
  /** Legacy: max-width 480px */
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  /** Legacy: max-width 768px */
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  /** Legacy: min-width 1440px — prefer `wideUp` */
  desktop: `@media (min-width: ${breakpoints.wide})`,

  mobileOnly: `@media (max-width: ${breakpoints.mobile})`,
  /** Phone/tablet held sideways — limited vertical space */
  compactLandscape: `@media (orientation: landscape) and (max-height: 520px)`,
  /** Phone landscape (broader width, short height) */
  mobileLandscape: `@media (orientation: landscape) and (max-height: 520px) and (max-width: ${breakpoints.laptop})`,
  tabletPortrait: `@media (min-width: 481px) and (max-width: ${breakpoints.tablet}) and (orientation: portrait)`,
  /** Portrait phones and tablets — stacked layouts */
  narrowPortrait: `@media (orientation: portrait) and (max-width: ${breakpoints.tablet})`,
  tabletOnly: `@media (min-width: 481px) and (max-width: ${breakpoints.tablet})`,
  /** Landscape tablets and laptops below desktop width */
  tabletLandscape: `@media (min-width: 481px) and (max-width: ${belowWide}) and (orientation: landscape)`,
  /** Portrait tablets and laptops below desktop width */
  portraitBelowDesktop: `@media (orientation: portrait) and (min-width: 769px) and (max-width: ${belowWide})`,
  /** Laptop band — same layout tokens as tablet; kept for targeted overrides */
  laptop: `@media (min-width: ${breakpoints.laptop}) and (max-width: ${belowWide})`,
  desktopScreen: `@media (min-width: ${breakpoints.wide}) and (max-width: ${breakpoints.ultraWide})`,
  ultraWide: `@media (min-width: ${breakpoints.ultraWide})`,
  /** Wide desktop and ultra-wide — not laptop */
  wideUp: `@media (min-width: ${breakpoints.wide})`,
  /** @deprecated Use `wideUp` — desktop styles start at 1440px, not 1024px */
  laptopUp: `@media (min-width: ${breakpoints.wide})`,
  notMobile: `@media (min-width: 481px)`,
};

export const containers = {
  content: 'var(--content-max-width)',
  prose: 'var(--prose-max-width)',
  pageGutter: 'var(--page-gutter)',
};

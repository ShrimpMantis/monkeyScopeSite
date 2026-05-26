/** JS mirrors of CSS custom properties in responsive.css / globals.css */
export const touchTarget = {
  min: '44px',
};

export const typography = {
  body: 'var(--font-size-body)',
  bodyMin: 'var(--font-size-body-min)',
  bodyLineHeight: 'var(--line-height-body)',
  headingLineHeight: 'var(--line-height-heading)',
  input: 'max(1rem, var(--font-size-body-min))',
};

export const spacing = {
  gutter: 'var(--page-gutter)',
  section: 'var(--section-gap)',
  sm: 'var(--space-sm)',
  md: 'var(--space-md)',
  lg: 'var(--space-lg)',
};

export const layout = {
  contentMaxWidth: 'var(--content-max-width)',
  proseMaxWidth: 'var(--prose-max-width)',
  gridMaxWidth: 'var(--grid-max-width)',
};

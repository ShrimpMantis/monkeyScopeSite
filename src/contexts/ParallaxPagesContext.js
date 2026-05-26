'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const ParallaxPagesContext = createContext(null);

export function ParallaxPagesProvider({ children }) {
  const [pagesOverride, setPagesOverrideState] = useState(null);

  const setPagesOverride = useCallback((pages) => {
    setPagesOverrideState(pages);
  }, []);

  const clearPagesOverride = useCallback(() => {
    setPagesOverrideState(null);
  }, []);

  const value = useMemo(
    () => ({ pagesOverride, setPagesOverride, clearPagesOverride }),
    [pagesOverride, setPagesOverride, clearPagesOverride],
  );

  return (
    <ParallaxPagesContext.Provider value={value}>
      {children}
    </ParallaxPagesContext.Provider>
  );
}

export function useParallaxPages() {
  const context = useContext(ParallaxPagesContext);
  if (!context) {
    throw new Error('useParallaxPages must be used within ParallaxPagesProvider');
  }
  return context;
}

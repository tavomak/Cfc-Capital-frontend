import { useState, useEffect } from 'react';

const useViewport = () => {
  const [viewportWidth, setViewportWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    if (viewportWidth === 0) handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [viewportWidth]);

  return viewportWidth || 0;
};

export default useViewport;

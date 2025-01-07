import { useEffect } from 'react';

export const useDetectOs = () => {
  useEffect(() => {
    const detectOS = () => {
      const userAgent = navigator.userAgent;
      let os = 'unknown';

      if (userAgent.indexOf('Win') !== -1) {
        os = 'windows';
      } else if (userAgent.indexOf('Mac') !== -1) {
        os = 'macos';
      } else if (userAgent.indexOf('X11') !== -1) {
        os = 'unix';
      } else if (userAgent.indexOf('Linux') !== -1) {
        os = 'linux';
      }

      document.body.classList.add(os);
    };

    detectOS();
  }, []);
};

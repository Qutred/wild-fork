import { useEffect, useRef } from 'react';

const useOutsideClick = (callback, listenCapturing = true) => {
  const Ref = useRef(null);
  useEffect(() => {
    const handleClick = (e) => {
      if (Ref.current && !Ref.current.contains(e.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, listenCapturing);

    return () =>
      document.removeEventListener('click', handleClick, listenCapturing);
  }, [callback, listenCapturing]);

  return { Ref };
};

export default useOutsideClick;

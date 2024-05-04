import { useState, useEffect } from 'react';

const useScreenWidth = () => {
    
 const [calendarHeight] = useState({
        height: 785,
    });
    
  const [screenWidth, setScreenWidth] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth({
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if(screenWidth.width <= 1024){
    calendarHeight.height = 620
  }else{
    calendarHeight.height = 785
  }

  return calendarHeight;
};

export default useScreenWidth;
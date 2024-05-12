import { useState, useEffect } from 'react';

const useScreenWidth = () => {
    
 const [calendarHeight] = useState({
        heightHome: 785,
        heightDetail: 1018,
        gridModeDetail: "timeGridWeek",
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
    calendarHeight.heightHome = 450
    calendarHeight.heightDetail = 700    
    calendarHeight.gridModeDetail = "timeGridDay"

  }else{
    calendarHeight.heightHome = 780
    calendarHeight.heightDetail = 1018
    calendarHeight.gridModeDetail = "timeGridWeek"
  }

  return calendarHeight;
};

export default useScreenWidth;
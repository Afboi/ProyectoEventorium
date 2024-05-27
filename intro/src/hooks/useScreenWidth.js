import { useState, useEffect } from 'react';

//Hook in charge of reading the screen resolution and returning the data necessary for the calendars to adjust to the screen size.
const useScreenWidth = () => {

  //this const will store the base data used for the calendars. 
  const [calendarHeight] = useState({
    heightHome: 785,
    heightDetail: 1018,
    gridModeDetail: "timeGridWeek",
  });

  // This const stores the data of the screen resolution
  const [screenWidth, setScreenWidth] = useState({
    width: window.innerWidth,
  });

  // it is in charge of modifying the screen resolution value in case the user modifies the screen size in the browser
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


  // Modifies the base data of the calendars depending on the resolution of the screen.
  if (screenWidth.width <= 1024) {
    calendarHeight.heightHome = 450
    calendarHeight.heightDetail = 700
    calendarHeight.gridModeDetail = "timeGridDay"

  } else {
    calendarHeight.heightHome = 780
    calendarHeight.heightDetail = 1018
    calendarHeight.gridModeDetail = "timeGridWeek"
  }
  return calendarHeight;
};

export default useScreenWidth;
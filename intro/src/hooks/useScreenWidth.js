import { useState, useEffect } from 'react';

//Hook encargado de leer la resolucion de la pantalla y de devolver los datos necesarios para que los calendarios se ajusten dependiendo del tamano de la pantalla
const useScreenWidth = () => {   

  //esta const almacenara los datos bases que se usan para los calendarios 
 const [calendarHeight] = useState({
        heightHome: 785,
        heightDetail: 1018,
        gridModeDetail: "timeGridWeek",
    });

  //esta const almacena los datos de la resolucion de la pantalla
  const [screenWidth, setScreenWidth] = useState({
    width: window.innerWidth,
  });

  //se encarga de modificar el valor de la resolucion de la pantalla en caso de que el usuario modifique el tamano de la pantalla en el navegador
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


  //se encarga de modificar los datos bases de los calendarios dependiendo de la resolucion de la pantalla
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
import "../../index.css";


// Date Vars
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let ampm = hours >= 12 ? 'p.m.' : 'a.m.';
let monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let month = monthNames[now.getMonth()];
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0' + minutes : minutes;
let strTime = hours + ':' + minutes + ' ' + ampm;
let strDate = now.getDate() + '/' + month + '/' + now.getFullYear();
let strLongDate = now.getDate() + ' de ' + month + ' del ' + now.getFullYear()   ;
// Date Vars
// DailyTasks Vars
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';
import * as React from 'react';
// DailyTasks Vars
// WeeklyTasks Vars

import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/joy/LinearProgress'; 
// WeeklyTasks Vars
// Event Vars

// Event Vars

export function Summary() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 15));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (

    <div className="flex w-auto gap-3 m-6 justify-between">
      {/* Barra de Fecha */}
      <div className="flex flex-col h-36 w-full bg-component-light rounded-3xl justify-center items-center">
        <div className="text-main-ty-light text-lg justify-center text-center">
          <p className="">{strLongDate}</p>
        </div>
        <div className="w-[90%] m-2 h-[4.1%] bg-main-ty-light rounded-full"></div>
        <p className=" text-main-ty-light text-lg">{strTime}</p>
      </div>

      {/* Barra de tareas del día */}
      <div className="h-36 w-full  bg-component-light rounded-3xl flex items-center justify-center">
        <div>
          <p className="text-lg text-main-ty-light">Tareas del Día</p>
          <div className="flex flex-wrap text-main-ty-light items-end">
            <p className="text-lg">50%</p>
            <p className="text-md pb-1">Completadas</p>
          </div>

        </div>
        <div></div>
        <CircularProgress size="lg" determinate value={50} />
      </div>
      {/* Barra de tareas de la semana */}
      <div className=" h-36  w-full bg-component-light rounded-3xl justify-center">
        <div className="ml-6">
          <p className="mt-6  text-lg text-main-ty-light">Tareas Semanales</p>
          <Stack spacing={1} sx={{ flex: 1 }}>
            <LinearProgress determinate value={75} />
          </Stack>
          <p className="text-md text-main-ty-light">15/20 Realizadas</p>
        </div>
        
      </div>
      {/*   Barra de eventos */}
      <div className="h-36 w-full bg-component-light rounded-3xl relative">
        <img className="w-full h-full object-cover rounded-3xl" src="./src/assets/imgs/dia-internacional-trabajadores-2022-celebra-domingo-1-mayo_98.webp" alt="" />
        <div className="absolute bottom-2 left-2 text-white">
          <p className="text-sm">01 de mayo</p>
          <p className="text-md">Día del Trabajador</p>
        </div>
      </div>
    </div>

  )
}
import "../../index.css";
import { PieChart } from '@mui/x-charts/PieChart';

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
let strLongDate = now.getDate() + ' de ' + month;


export function Summary() {
  return (

    <div className="flex w-auto gap-3 m-6 justify-between">
      {/* Barra de Fecha */}
      <div className="flex h-24 w-full bg-component-light rounded-3xl justify-center items-center">
        <div className="text-main-ty-light text-lg justify-center text-center">
          <p className="text">{now.getDate()}</p>
          <p className="">{month}</p>
        </div>
        <div className="w-[0.19rem] m-2 h-[85%] bg-main-ty-light"></div>
        <p className=" text-main-ty-light text-lg">{strTime}</p>
      </div>

      {/* Barra de tareas del día */}
      <div className="h-24 w-full  bg-component-light rounded-3xl ">

      </div>
      {/* Barra de tareas de la semana */}
      <div className="h-36 w-full bg-component-light rounded-3xl">
        <div className="w-full bg-neutral-200 dark:bg-neutral-600">
          <div
            className="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100"
            style={{width: '25%'}}>
          </div>
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
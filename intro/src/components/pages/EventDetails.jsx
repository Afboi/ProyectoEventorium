import { Nav } from '../ui/Nav.jsx';
import { Tasks } from '../homepage_components/Tasks.jsx';
import { Details } from '../event_detail_components/Details.jsx';
import { Calendar } from '../event_detail_components/Calendar.jsx';
import useScreenWidth from './screenWidth.js';
import "../../index.css";


export function EventDetails() {
  const getHeight = useScreenWidth();
  /*<p>Width: {getHeight.gridModeDetail}</p>*/

  const info = [
    { id: 1, course: "TM-5100", priority: "High", progress: "Incomplete", time: "8:00a.m.-9:00a.m." }
  ];

  const data = [
    { id: 1, description: "Take the quiz on sequence diagrams for the course interactive application engineering.", }

  ]

  return (
    <div className=''>
      <Nav />
      <Tasks />
      <div className='flex flex-col-reverse mb-4 sm:flex-row justify-center gap-6 mx-4 sm:mx-0'>
        <Details items={info} objects={data} />
        <div className='order-1 sm:order-2 w-full sm:w-[57%]'>
        <Calendar calendarHeight={getHeight.heightDetail} calendarMode={getHeight.gridModeDetail} />
        </div>
      </div>
    </div>
  );
}
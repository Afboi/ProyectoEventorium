import {Nav} from '../ui/Nav.jsx';
import {Summary} from '../homepage_components/Summary.jsx';
import {Evaluations} from '../homepage_components/Evaluations.jsx';
import {Tasks} from '../homepage_components/Tasks.jsx';
import {Calendar} from '../homepage_components/Calendar.jsx';
import useScreenWidth from './screenWidth.js';
import "../../index.css";

export function Homepage() {
  const getHeight = useScreenWidth();
  /*<p>Width: {screenWidth.height}</p>*/

  return (
    <div className="">
      <Nav />
      <Summary />
      <Tasks />

      <div className='iPadPro:flex iPadPro:gap-10 ml-10 mr-10 iPadPro:ml-16 iPadPro:mr-0'>
        <div className="iPadPro:w-[70%] w-[100%] mb-7 iPadPro:mb-0">
          <Calendar calendarHeight={getHeight.height}/>
        </div>
        <div  className="iPadPro:w-[30%] ml-20 iPadPro:ml-0">
          <Evaluations />  
        </div>
      </div>
    </div>
  );
}
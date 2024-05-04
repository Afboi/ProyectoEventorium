import {Nav} from '../ui/Nav.jsx';
import {Summary} from '../homepage_components/Summary.jsx';
import {Evaluations} from '../homepage_components/Evaluations.jsx';
import {Tasks} from '../homepage_components/Tasks.jsx';
import {Calendar} from '../homepage_components/Calendar.jsx';
import "../../index.css";

export function Homepage() {
  return (
    <div className="">
      <Nav />
      <Summary />
      <Tasks />

      <div className='flex gap-10 ml-16 '>
        <div className="w-[70%]">
          <Calendar />
        </div>
        <div  className="w-[30%]">
          <Evaluations />  
        </div>
      </div>
    </div>
  );
}
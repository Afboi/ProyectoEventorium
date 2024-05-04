import {Calendar} from '../event_detail_components/Calendar.jsx';
import useScreenWidth from './screenWidth.js';
import "../../index.css";

export function EventDetail() {
const getHeight = useScreenWidth();
/*<p>Width: {getHeight.gridModeDetail}</p>*/
  
    return (  
        <div className='mx-10 iPadPro:mr-10'>
          <div className="iPadPro:float-right w-[100%] iPadPro:w-[60%]">
            <Calendar calendarHeight={getHeight.heightDetail} calendarMode={getHeight.gridModeDetail}/>
            <p>Width: {getHeight.gridModeDetail}</p>
          </div>
        </div>
    );
}
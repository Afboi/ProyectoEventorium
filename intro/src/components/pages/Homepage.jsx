import { Nav } from '../ui/Nav.jsx';
import { Summary } from '../homepage_components/Summary.jsx';
import { Evaluations } from '../homepage_components/Evaluations.jsx';
import { Tasks } from '../homepage_components/Tasks.jsx';
import { Calendar } from '../homepage_components/Calendar.jsx';
import { Search } from '../homepage_components/SearchBar.jsx';
import useScreenWidth from './screenWidth.js';
import { SwiperTasks } from '../homepage_components/Swiper.jsx';
import { SummaryBar } from '../homepage_components/SummaryBar.jsx';
// import "../../index.css";

export function Homepage() {
  const getHeight = useScreenWidth();
  /*<p>Width: {screenWidth.height}</p>*/

  return (
    <div>
      <Nav />
      <Search />

      {/* <Summary /> */}
      {/* <Tasks />  */}
      <div>

        <div className='mt-4 mx-4'>
          <SummaryBar />
        </div>
        <div className='mt-4 mx-4'>
          <SwiperTasks />
        </div>


        <div className='lg:flex lg:w-full lg:gap-3 mx-4'>
          <div className='lg:w-[70%] sm:w-[100%] mt-4'>
            <Calendar calendarHeight={getHeight.heightHome} />
          </div>
          <div className='lg:w-[30%] sm:w-[100%]'>
            <Evaluations />
          </div>
        </div>
      </div>




      {/* <div className='iPadPro:flex iPadPro:gap-10 ml-10 mr-10 iPadPro:ml-16 iPadPro:mr-0'> */}
      {/* <div className="iPadPro:w-[70%] w-[100%] mb-7 iPadPro:mb-0">
          <Calendar calendarHeight={getHeight.height}/>
        </div> */}
      {/* <div  className="iPadPro:w-[30%] ml-20 iPadPro:ml-0">
          <Evaluations />  
        </div> */}
      {/* </div> */}
    </div>
  );
}
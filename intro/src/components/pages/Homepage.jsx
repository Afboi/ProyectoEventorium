import { Nav } from '../ui/Nav.jsx';
import { Evaluations } from '../homepage_components/Evaluations.jsx';
import { Calendar } from '../homepage_components/Calendar.jsx';
import { Search } from '../ui/SearchBar.jsx';
import useScreenWidth from '../hooks/screenWidth.js';
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
    </div>
  );
}
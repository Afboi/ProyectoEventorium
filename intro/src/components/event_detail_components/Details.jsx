// Importing page components
import { InfoDetails } from "./InfoDetails";
import { DetailDescription } from "./DetailDescription";

import { useFetchEventDetail, useFetchUserEventDetail } from "../../hooks/useFetchEventDetail";
import { useParams } from 'react-router-dom';

// The main Details component
export function Details({userID}) {

  const { id } = useParams();
  const { data } = useFetchEventDetail(id);
  const { eventDataDetail } = useFetchUserEventDetail(id, userID);
  
  //console.log('Holiwi', eventDataDetail);

  const createEventDetail = (items) => {
    return items.map( item =>
      <>
        {/* Date and Progress */}
        <div className="my-8 flex justify-between mx-4 border-b-4 border-blue dark:border-orange">
          <h1>{item.event_date_start_short}</h1>
        </div>

        {/* Event/Task Cards */}
        <div className="border-2 border-bg-main mb-4 w-[95%] ms:w-full sm:w-[95%] mx-auto p-4 rounded-[1.5rem] flex justify-between dark:bg-not-so-dark-blue">
          <div>
            <h2>{item.event_name}</h2>
            <p>{item.event_time_start} - {item.event_time_end}</p>
          </div>
          <h3>{item.course_initial}</h3>
        </div>
        <div className="border-2 border-bg-main  mb-4 w-[95%] ms:w-full sm:w-[95%] mx-auto p-4 rounded-[1.5rem] flex justify-between dark:bg-not-so-dark-blue">
          <h2>Fecha: {item.event_date_start}</h2>
          <h3>{item.course_initial}</h3>
        </div>
      </>
    )
}

  return (
    <div className="flex flex-col bg-white w-full h-[63.5rem] rounded-3xl mt-4 sm:w-[35.5%] dark:bg-dark-blue dark:text-white">
      {createEventDetail(data)}
      <div>
        <div>
          {data.map((item) => (
            <InfoDetails
              event_time_start={item.event_time_start}
              event_time_end={item.event_time_end}
            />
          ))}

          {/* Additional Details */}
        </div>
        <div className="flex justify-center">
          {data.map((object) => (
            <DetailDescription description={object.event_description} />
          ))}
        </div>
      </div>
      {/* Edit Button */}
      <div className="justify-center items-center flex">
      <button className="border-2 border-bg-main my-4 rounded-full hover:bg-blue hover:text-white w-[24rem] md:w-[14rem] py-3">Editar</button>
      </div>
    </div>
  );
}

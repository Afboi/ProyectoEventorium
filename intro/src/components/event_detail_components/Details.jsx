// Importing page components
import { InfoDetails } from "./InfoDetails";
import { DetailDescription } from "./DetailDescription";

import { useFetchEventDetail, useFetchUserEventDetail } from "../../hooks/useFetchEventDetail";
import { useParams } from 'react-router-dom';

// The main Details component
export function Details({userID}) {

  const { id } = useParams();
  const { data } = useFetchEventDetail(id);
  const { eventData, isLoading } = useFetchUserEventDetail(id, userID);

  const createEventDetail = (items) => {

    if (items.length === 0) {
      return <>
      <div className="flex justify-center pt-20 text-lg">
      <h1>No event selected</h1>
      </div>
      </>
    } else{
      return items.map( item =>
        <>
          {/* Date and Progress */}
          <div className="my-8 flex justify-between mx-4 border-b-4 border-blue dark:border-orange">
            <h1>{item.event_date_start_short} - {item.event_date_end_short}</h1>
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
            <h2>Fecha: {item.event_date_start} - {item.event_date_end}</h2>
            <h3>{item.course_initial}</h3>
          </div>
        </>
      )      
    }
}

  return (
    <div className="flex flex-col bg-white w-full h-[63.5rem] rounded-3xl mt-4 sm:w-[35.5%] dark:bg-dark-blue dark:text-white">
    { isLoading ? <h1 className="text-center text-9xl">Cargando...</h1> : <div>
      {createEventDetail(data)}
      <div>
        <div>
          {eventData.map((item) => (
            <InfoDetails
              event_time_start={item.event_time_start}
              event_time_end={item.event_time_end}
              course_initial={item.course_initial}
              state={item.state}
              user_id={item.user_id}
              event_id={item.event_id}
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
      </div>}      
    </div>
  );
}

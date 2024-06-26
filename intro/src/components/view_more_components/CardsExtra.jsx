// Importing necessary libraries, components, and utilities
import { useEffect } from "react";
import "../homepage_components/styles.css";
import { DefaultActivityCard } from "../homepage_components/DefaultActivityCard";
import { useParams } from 'react-router-dom';
import { useFetchSearchUserEvents, useFetchSearchUserEvents_Event, useFetchSearchUserEvents_Course,
  useFetchSearchUserEvents_Event_Course, useFetchSearchUserEvents_Search, useFetchSearchUserEvents_Search_Event,
  useFetchSearchUserEvents_Search_Course, useFetchSearchUserEvents_Search_Event_Course } from "../../hooks/useFetchSearchResults";

// CardsExtra component displays a section of result cards.
export function CardsExtra({id}) {
  
  const {search, event, course} = useParams();

  //console.log(search, event, course);

  let eventData = null;

  if (search === undefined && event === undefined && course === undefined) {
    const {data} = useFetchSearchUserEvents(id);
    //console.log('No hay nada',data);
    eventData = data;
  } 

  if (search === undefined && event !== undefined && course === undefined) {
    const {data} = useFetchSearchUserEvents_Event(id, event);
    //console.log('Solo hay evento',data);
    eventData = data;
  }

  if (search === undefined && event === undefined && course !== undefined) {
    const {data} = useFetchSearchUserEvents_Course(id, course);
    //console.log('Solo hay curso',data);
    eventData = data;
  }

  if (search === undefined && event !== undefined && course !== undefined) {
    const {data} = useFetchSearchUserEvents_Event_Course(id, event, course);
    //console.log('Hay evento y curso',data);
    eventData = data;
  }

  if (search !== undefined && event === undefined && course === undefined) {
    const {data} = useFetchSearchUserEvents_Search(id, search);
    //console.log('Solo hay busqueda',data);
    eventData = data;
  }

  if (search !== undefined && event !== undefined && course === undefined) {
    const {data} = useFetchSearchUserEvents_Search_Event(id, search, event);
    //console.log('Busqueda y evento',data);
    eventData = data;
  }

  if (search !== undefined && event === undefined && course !== undefined) {
    const {data} = useFetchSearchUserEvents_Search_Course(id, search, course);
    //console.log('Busqueda y curso',data);
    eventData = data;
  }

  if (search !== undefined && event !== undefined && course !== undefined) {
    const {data} = useFetchSearchUserEvents_Search_Event_Course(id, search, event, course);
    //console.log('Busqueda, evento y curso',data);
    eventData = data;
  }

  const createEvents = (items) => {
    return items.map( item =>
      <div className="border-2 border-bg-main  justify-between bg-white flex items-center rounded-lg p-3">
        <DefaultActivityCard 
        key={item.id}
        event_id={item.id}
        user_id={item.user_id}
        event_name={item.event_name}
        event_date_start={item.event_date_start_short}
        event_date_end={item.event_date_end_short}
        course_initials={item.course_initial}
        />
      </div>
    )
}  

  return (
    <div className="flex flex-col rounded-xl bg-white w-full">
      {/* Section Title */}
      <section className="m-4">
        <h5 className="text-lg font-medium text-blue">Resultados</h5>
      </section>
      {/* Result Cards */}
      <div className="flex flex-col w-full gap-4 p-4">
        {createEvents(eventData)}
      </div>
      
    </div>
  );
}

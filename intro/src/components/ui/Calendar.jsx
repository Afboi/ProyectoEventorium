// Importing necessary libraries and components
import React from "react";
import PropTypes from "prop-types";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { createEventId } from "../../utils/eventUtils";
import "../../index.css";

import { useFetchEventCalendar } from "../../hooks/useFetchEventCalendar";

export function Calendar({ calendarHeight, calendarMode, calendarLanguage, id}){
  
  const { data } = useFetchEventCalendar(id);

  //console.log('Soy el Calendario',data);
  
  //Proptypes to specify the type of data the component accepts
  Calendar.propTypes = {
    calendarHeight: PropTypes.number.isRequired,
    calendarMode: PropTypes.string.isRequired,
    calendarLanguage: PropTypes.string.isRequired,
  };

  // This function is in charge of handling the event creation when clicking on the calendar date.
  function handleDateSelect(selectInfo) {
    let title = prompt("Como se llama el evento?");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // Remove the day selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  // This function is in charge of handling the event creation when clicking on the calendar date.
  function handleEventSelect(event) {
    //alert(`Event ID: ${event.event.id}\nEvent Title: ${event.event.title}\nDescription: ${event.event.extendedProps.description}\nState: ${event.event.extendedProps.state}`);
  
    event.jsEvent.preventDefault(); // don't let the browser navigate

    if (event.event.url) {
      window.location.href = "/" + event.event.url;
    }
  }

  // Render the calendar with each assigned parameter, such as calendar type, height, language, events and so on.
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView={calendarMode}
      headerToolbar={{
        start: "title",
        center: "",
        end: "today,prev,next",
      }}
      height={calendarHeight}
      firstDay={1}
      locale={calendarLanguage}
      eventClick={handleEventSelect}
      //selectable={true}
      //select={handleDateSelect}
      events={data}
    />
  );
}

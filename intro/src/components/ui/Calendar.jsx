// Importing necessary libraries and components
import React from "react";
import PropTypes from "prop-types";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { createEventId } from "../../utils/eventUtils";
import "../../index.css";

export function Calendar({ calendarHeight, calendarMode, calendarLanguage }) {
  
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

  // Render the calendar with each assigned parameter, such as calendar type, height, language, events and so on.
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView={calendarMode}
      headerToolbar={{
        start: "title",
        center: "",
        end: "today prev,next",
      }}
      height={calendarHeight}
      firstDay={1}
      locale={calendarLanguage}
      selectable={true}
      select={handleDateSelect}
      editable={true}
      events={[
        {
          start: "2024-04-24",
          end: "2024-04-24",
          display: "auto",
          backgroundColor: "rgb(150 240 138 / 0.2)",
        },
        {
          start: "2024-10-24",
          end: "2024-10-26",
          display: "auto", 
        },
      ]}
    />
  );
}

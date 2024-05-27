import React from "react";
import PropTypes from 'prop-types';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { createEventId } from '../../utils/eventUtils';

import '../../index.css'

export function Calendar({ calendarHeight, calendarMode, calendarLanguage }) {
  //Proptypes para especificar el tipo de datos que acepta el componente
  Calendar.propTypes = {
    calendarHeight: PropTypes.number.isRequired,
    calendarMode: PropTypes.string.isRequired,
    calendarLanguage: PropTypes.string.isRequired
  }

  //Esta funcion se encarga de manejar la creacion de evento al hacer un click en la fecha del calendario.
  function handleDateSelect(selectInfo) {
    let title = prompt('Como se llama el evento?')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() //Quita el la seleccion del dia

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  //Renderiza el calendario con cada parametro asignado, como el tipo de calendario, el alto, el lenguaje, los eventos y demas.
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView={calendarMode}
      headerToolbar={{
        start: 'title',
        center: '',
        end: 'today prev,next'
      }}
      height={calendarHeight}
      firstDay={1}
      locale={calendarLanguage}
      selectable={true}
      select={handleDateSelect}
      editable={true}

      events={[
        {
          start: '2024-04-24',
          end: '2024-04-24',
          display: 'auto',
          backgroundColor: 'rgb(150 240 138 / 0.2)',
        },
        {
          start: '2024-10-24',
          end: '2024-10-26',
          display: 'auto'
        }
      ]}
    />
  );
}
import React from "react";

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

import { createEventId } from '../hooks/eventUtils';

import '../../index.css'
import allLocales from "@fullcalendar/core/locales-all";

export function Calendar({ calendarHeight }) {

  function handleDateSelect(selectInfo) {
    let title = prompt('Como se llama el evento?')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

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

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        start: 'title',
        center: '',
        end: 'today,prev,next'
      }}
      height={calendarHeight}
      contentHeight={80}
      firstDay={1}
      locales={allLocales}
      locale={esLocale}
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
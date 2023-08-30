import React, { Fragment } from 'react';
import { Card, CardBody } from 'reactstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import BootstrapTheme from '@fullcalendar/bootstrap';
// import '@fullcalendar/bootstrap/main.css';

function Calendar() {
  // const events = [{ title: 'Meeting', start: new Date() }];
  return (
    <Fragment>
      <Card>
        <CardBody>
          <FullCalendar
            plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin]}
            // initialView="dayGridMonth"
            slotDuration={'00:15:00'}
            handleWindowResize={true}
            themeSystem="bootstrap"
            headerToolbar={{
              start: 'prev',
              center: 'title',
              end: 'next',
            }}
            // events={events}
            aspectRatio={1.5}
            height="413.5px"
            // editable={true}
            // droppable={true}
            // selectable={true}
            // dateClick={handleDateClick}
            // eventClick={handleEventClick}
            // drop={onDrop}
            contentHeight="auto"
          />
        </CardBody>
      </Card>
    </Fragment>
  );
}

export default Calendar;

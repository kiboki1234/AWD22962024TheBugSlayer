import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);


const CalendarComponent = ({ practices }) => {
    const events = practices.map(practice => ({
        title: practice.title,
        start: new Date(practice.date + 'T' + practice.startTime),
        end: new Date(practice.date + 'T' + practice.endTime)
    }));
    return (
        <div className="card mb-4">
            <div className="card-header bg-primary text-white">Calendario de Prácticas</div>
            <div className="card-body">
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    view={['week']}
                />
            </div>
        </div>
    );
};

export default CalendarComponent;
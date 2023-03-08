import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar() {

    const handleEventClick = (event) =>{
        alert(event.dateStr)
    }

  return (
        <FullCalendar
            plugins={[dayGridPlugin,interactionPlugin, timeGridPlugin]}
            headerToolbar={{
                start:"today prev,next",
                center: "title",
                end: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            locale='es'
            nowIndicator= {true}
            editable={true}
            dayMaxEventRows={2}
            dateClick={handleEventClick}
        />
  )
}
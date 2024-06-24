// InfoDetails component displays detailed information about an event or task
export function InfoDetails({event_time_start, event_time_end}) {
  return (
    <div className="flex flex-wrap justify-center gap-5 mb-6">
      {/* Course */}
      <div className="flex justify-center items-center border-2 border-bg-main  w-[45%] h-10 rounded-3xl dark:bg-not-so-dark-blue">
        Course: Abreviacion
      </div>
      {/* Time */}
      <div className="flex justify-center items-center border-2 border-bg-main  w-[45%] h-10 rounded-3xl dark:bg-not-so-dark-blue">
        {event_time_start} - {event_time_end}
      </div>
      {/* Priority */}
      <div className="flex justify-center items-center border-2 border-[#FD8390] w-[45%] h-10 rounded-3xl dark:bg-orange">
        Priority: High
      </div>
      {/* Progress */}
      <div className="flex justify-center items-center border-2 border-bg-main  w-[45%] h-10 rounded-3xl dark:bg-not-so-dark-blue">
        Progreso
      </div>
    </div>
  );
}

// InfoDetails component displays detailed information about an event or task
export function InfoDetails({event_time_start, event_time_end, course_initial, state}) {

  const stateColor = (state) => {

    if (state === "No_Aplica") {
      return<>
      </>    
    }

    if (state === "Completado") {
      return<>
      <div className="flex justify-center items-center border-2 border-bg-main  w-[92%] h-10 rounded-3xl dark:bg-not-so-dark-blue">
      Progress: Completed
      </div>    
      </> 
    }

    if (state === "No_Completado") {
      return<>
      <div className="flex justify-center items-center border-2 border-bg-main  w-[92%] h-10 rounded-3xl dark:bg-not-so-dark-blue">
      Progress: Incomplete
      </div>    
      </> 
    }

  }
  return (
    <div className="flex flex-wrap justify-center gap-5 mb-6">
      {/* Course */}
      <div className="flex justify-center items-center border-2 border-bg-main  w-[45%] h-10 rounded-3xl dark:bg-not-so-dark-blue">
        Course: {course_initial}
      </div>
      {/* Time */}
      <div className="flex justify-center items-center border-2 border-bg-main  w-[45%] h-10 rounded-3xl dark:bg-not-so-dark-blue">
        {event_time_start} - {event_time_end}
      </div>
{/*      { Priority }
      <div className="flex justify-center items-center border-2 border-[#FD8390] w-[45%] h-10 rounded-3xl dark:bg-orange">
        Priority: High
      </div>*/}
      {/* Progress */}
        {stateColor(state)}
    </div>
  );
}

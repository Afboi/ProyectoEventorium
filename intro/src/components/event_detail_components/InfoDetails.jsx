// InfoDetails component displays detailed information about an event or task
export function InfoDetails({event_time_start, event_time_end, course_initial, state, user_id, event_id}) {

  const baseUrl = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`;
  const path = window.location.pathname;
  const redirectUrl = `${baseUrl}${path}`;

  const stateColor = (state) => {

    if (state === "No_Aplica") {
      return<>
      </>    
    }

    if (state === "Completado") {
      return<>
      <div className="flex justify-center items-center border-2 border-bg-main  w-[45%] h-10 rounded-3xl">
        <p>Progress:  Complete</p>
      </div>
      <div className="flex justify-center items-center border-2 border-[#CB3234] hover:bg-[#CB3234] hover:text-white transition hover:scale-110 w-[45%] h-10 rounded-3xl">
      <form className="space-y-4 md:space-y-2" action="http://eventoriumbackend.test/api/updateEvent" method="POST">     
          <button type="submit">Mark as Incomplete</button>
          <input type="hidden" name="state" value="2"></input>   
          <input type="hidden" name="url" value={redirectUrl}></input>
          <input type="hidden" name="user_id" value={user_id}></input>
          <input type="hidden" name="event_id" value={event_id}></input>
      </form>  
      </div>
      </> 
    }

    if (state === "No_Completado") {
      return<>
      <div className="flex justify-center items-center border-2 border-bg-main  w-[45%] h-10 rounded-3xl">
        <p>Progress: Incomplete</p>
      </div>
      <div className="flex justify-center items-center border-2 border-green hover:bg-green hover:text-white transition hover:scale-110 w-[45%] h-10 rounded-3xl">
      <form className="space-y-4 md:space-y-2" action="http://eventoriumbackend.test/api/updateEvent" method="POST">     
          <button type="submit">Mark as Complete</button>
          <input type="hidden" name="state" value="1"></input>   
          <input type="hidden" name="url" value={redirectUrl}></input>
          <input type="hidden" name="user_id" value={user_id}></input>
          <input type="hidden" name="event_id" value={event_id}></input>
      </form>  
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

      {/* Progress */}
        {stateColor(state)}
    </div>
  );
}

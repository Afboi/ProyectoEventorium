// InfoDetails component displays detailed information about an event or task
export function InfoDetails({ course, priority, progress, time }) {
  return (
    <div className="flex flex-wrap justify-center gap-5 mb-6">
      {/* Course */}
      <div className="flex justify-center items-center border-2 border-bg-main  w-[45%] h-10 rounded-3xl dark:bg-not-so-dark-blue">
        {" "}
        Courses: {course}{" "}
      </div>
      {/* Time */}
      <div className="flex justify-center items-center border-2 border-bg-main  w-[45%] h-10 rounded-3xl dark:bg-not-so-dark-blue">
        {" "}
        {time}{" "}
      </div>
      {/* Priority */}
      <div className="flex justify-center items-center border-2 border-[#FD8390] w-[45%] h-10 rounded-3xl dark:bg-orange">
        {" "}
        Priority: {priority}{" "}
      </div>
      {/* Progress */}
      <div className="flex justify-center items-center border-2 border-bg-main  w-[45%] h-10 rounded-3xl dark:bg-not-so-dark-blue">
        {" "}
        {progress}{" "}
      </div>
    </div>
  );
}

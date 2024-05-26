export function Info_Details({ course, priority, progress, time }) {
    return (
        <div className="flex flex-wrap justify-center gap-5 mb-6">
            <div className="flex justify-center items-center border-2 border-bg-main  w-[45%] h-10 rounded-3xl dark:bg-not-so-dark-blue"> Courses: {course} </div>
            <div className="flex justify-center items-center border-2 border-bg-main ] w-[45%] h-10 rounded-3xl dark:bg-not-so-dark-blue"> {time} </div>
            <div className="flex justify-center items-center border-2 border-[#FD8390] w-[45%] h-10 rounded-3xl dark:bg-orange"> Priority: {priority} </div>
            <div className="flex justify-center items-center border-2 border-bg-main  w-[45%] h-10 rounded-3xl dark:bg-not-so-dark-blue"> {progress} </div>
        </div>
    );
}
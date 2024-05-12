export function Info_Details({ course, priority, progress, time }) {
    return (
        <div className="flex flex-wrap justify-center gap-5 mb-6">
            <div className="flex justify-center items-center bg-[#F3F7FB] w-[45%] h-10 rounded-3xl"> Courses: {course} </div>
            <div className="flex justify-center items-center bg-[#F3F7FB] w-[45%] h-10 rounded-3xl "> {time} </div>
            <div className="flex justify-center items-center bg-[#FD8390] w-[45%] h-10 rounded-3xl "> Priority: {priority} </div>
            <div className="flex justify-center items-center bg-[#F3F7FB] w-[45%] h-10 rounded-3xl "> {progress} </div>
        </div>
    );
}
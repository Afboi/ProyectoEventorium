export function Detail_Description({ description }) {
    return (
        <div className="flex flex-col items-start gap-5 bg-[#F3F7FB] w-[95%] h-[38.3rem] rounded-3xl p-4">
            <h1 className="border-b-4 border-[#018B8A]">Description</h1>
            <p> {description} </p>
        </div>
    );
}
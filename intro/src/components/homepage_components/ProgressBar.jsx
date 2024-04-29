import "../../index.css";
export function ProgressBar() {
    return (
        <div className="bg-[#F3F7FB] p-6 rounded-3xl mb-4">
            <h2 className="text-[#6E6E6E] text-sm">3/5 completed</h2>
            <div className="flex">
                <div className="w-full h-[30px] rounded-[10px] bg-red-btn-light mb-[10px]"></div>
                <p className="ml-2 text-[#018B8A]">60%</p>
            </div>
        </div>
    );
}
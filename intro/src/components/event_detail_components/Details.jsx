import { Info_Details } from "./InfoDetails";
import { Detail_Description } from "./DetailDescription";

export function Details({ items, objects }) {
    return (
        <div className="bg-[#E9F1F8] w-full h-[63.5rem] rounded-3xl sm:w-[35%]">
            <div className="my-8 flex justify-between mx-4 border-b-4 border-[#018B8A]">
                <h1>Today - April 03</h1>
                <p>10%</p>
            </div>

            <div className="bg-[#F3F7FB] mb-4 w-[95%] ms:w-full sm:w-[95%] mx-auto p-4 rounded-[1.5rem] flex justify-between">
                <div>
                    <h2>Quiz I </h2>
                    <p>8:00a.m.-9:00a.m.</p>
                </div>
                <h3>TM-5300</h3>
            </div>
            <div className="bg-[#F3F7FB] mb-4 w-[95%] ms:w-full sm:w-[95%] mx-auto p-4 rounded-[1.5rem] flex justify-between">
                <h2>Date: April 03st, 2024</h2>
                <h3>TM-5300</h3>
            </div>
            <div>
                <div>
                    {items.map(item => (
                        <Info_Details
                            course={item.course}
                            priority={item.priority}
                            progress={item.progress}
                            time={item.time}
                        />
                    ))
                    }
                </div>
                <div className="flex justify-center h-[25rem]">
                    {objects.map(object => (
                        <Detail_Description
                            description={object.description}
                        />
                    ))
                    }
                </div>
            </div>
        </div>

    );
}
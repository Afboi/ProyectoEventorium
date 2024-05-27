// Importing page components
import { InfoDetails } from "./InfoDetails";
import { DetailDescription } from "./DetailDescription";

// The main Details component
export function Details({ items, objects }) {
  return (
    <div className="flex flex-col bg-white w-full h-[63.5rem] rounded-3xl mt-4 sm:w-[35.5%] dark:bg-dark-blue dark:text-white">
      {/* Date and Progress */}
      <div className="my-8 flex justify-between mx-4 border-b-4 border-blue dark:border-orange">
        <h1>Today - April 03</h1>
        <p>10%</p>
      </div>

      {/* Event/Task Cards */}
      <div className="border-2 border-bg-main mb-4 w-[95%] ms:w-full sm:w-[95%] mx-auto p-4 rounded-[1.5rem] flex justify-between dark:bg-not-so-dark-blue">
        <div>
          <h2>Quiz I </h2>
          <p>8:00a.m.-9:00a.m.</p>
        </div>
        <h3>TM-5300</h3>
      </div>
      <div className="border-2 border-bg-main  mb-4 w-[95%] ms:w-full sm:w-[95%] mx-auto p-4 rounded-[1.5rem] flex justify-between dark:bg-not-so-dark-blue">
        <h2>Date: April 03st, 2024</h2>
        <h3>TM-5300</h3>
      </div>
      <div>
        <div>
          {items.map((item) => (
            <InfoDetails
              course={item.course}
              priority={item.priority}
              progress={item.progress}
              time={item.time}
            />
          ))}

          {/* Additional Details */}
        </div>
        <div className="flex justify-center">
          {objects.map((object) => (
            <DetailDescription description={object.description} />
          ))}
        </div>
      </div>
      {/* Edit Button */}
      <div className="justify-center items-center flex">
      <button className="border-2 border-bg-main my-4 rounded-full hover:bg-blue hover:text-white w-[24rem] md:w-[14rem] py-3">Editar</button>
      </div>
    </div>
  );
}

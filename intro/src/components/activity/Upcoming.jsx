import { Events } from "./Events.jsx";
import { CreateEvent } from "./CreateEvent.jsx";

import "../../index.css";

export function Upcoming() {
  
  return (
    <>
        <h2 className="font-bold text-2xl">UPCOMING</h2>
        <div className="grid gap-4 my-5">
            <Events />
        </div>
        <CreateEvent />
    </>
  );
}

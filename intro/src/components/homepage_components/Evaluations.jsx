import { Evaluation_List } from "../activity/EvaluationList";
import "../../index.css";
export function Evaluations() {

  const information = [
    { id: 1, title: "Sprint 03", initials: "TM-5150", porcent: "10%", hour: "Today/10:00-11:00" },
    { id: 2, title: "Quiz 05", initials: "TM-5250", porcent: "4%", hour: "Tomorrow/8:00-10:00" },
    { id: 3, title: "Challenge 02", initials: "TM-5150", porcent: "15%", hour: "Today/12:00-2:00" },
    { id: 4, title: "Homework 04", initials: "TM-5450", porcent: "5%", hour: "In 2 days/8:00-11:50" },
    { id: 5, title: "Lab 06", initials: "TM-5550", porcent: "25%", hour: "Today/3:45-5:00" },
  ];

  return (
    <div className="">
      <div className="grid gap-4 p-2 rounded-xl bg-[#E9F1F8] w-[100%] h-auto mt-4 ">
        <h2 className="flex justify-center text-lg text-[#018b8a]">Assignments</h2>
        <Evaluation_List items={information} />
      </div>
    </div>
  );
}

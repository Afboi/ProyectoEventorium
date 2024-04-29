import "../../index.css";

import { ProfileInfo } from "../profile_user_components/ProfileInfo.jsx";
import { ProfileHeader } from "../profile_user_components/ProfileHeader.jsx";
import { InputsProfile } from "../profile_user_components/InputsProfile.jsx";

export function ProfileUser() {

  const inputs = [
    {
      id: 2, title: "Favorite Sport: ", type: "select", placeholder: "Select your favorite sport", options: [
        { value: "Soccer", label: "Soccer " },
        { value: "Basketball", label: "Basketball" },
        { value: "American Football", label: "American Football" },
        { value: "Baseball", label: "Baseball" },
        { value: "Tennis", label: "Tennis" },
        { value: "Swimming", label: "Swimming" },
        { value: "Volleyball", label: "Volleyball" },
        { value: "Karate", label: "Karate" },
        { value: "Boxing", label: "Boxing" },
        { value: "Golf", label: "Golf" },
      ]
    },
    { id: 3, title: "Birth date: ", type: "date", placeholder: "Select when is your birthday" },
    {
      id: 4, title: "Diseases: ", type: "select", placeholder: "Select the disease suffered", options: [
        { value: "Cancer", label: "Cancer" },
        { value: "Diabetes", label: "Diabetes" },
        { value: "Hypertension", label: "Hypertension" },
        { value: "Asthma", label: "Asthma" },
        { value: "Other", label: "Other" },
      ]
    },
    { id: 5, title: "Sleep hours average: ", type: "number", placeholder: "How long do you sleep?" },
    {
      id: 6, title: "Marital Status: ", type: "select", placeholder: "Select your marital status", options: [
        { value: "Married", label: "Married" },
        { value: "Single", label: "Single" },
        { value: "Widowed", label: "Widowed" },
        { value: "Separated", label: "Separated" },
        { value: "Divorced", label: "Divorced" },
      ]
    }];


  const radioButtons = [
  ]
  
  const courses = [
    { id: 1, initial: "TM-5150" },
    { id: 2, initial: "TM-5250" },
    { id: 3, initial: "TM-5350" },
    { id: 4, initial: "TM-5450" },
    { id: 5, initial: "TM-5550" },
  ];


  console.log(inputs);

  return (
    <div className="flex justify-center items-center bg-[#CDDAED]">
      <div className="grid gap-4 p-4 rounded-3xl bg-[#E6ECEC] w-[60%]">
        <ProfileHeader />
        <ProfileInfo items={courses} />
        <InputsProfile items={inputs} />
      </div>
    </div>
  );
}

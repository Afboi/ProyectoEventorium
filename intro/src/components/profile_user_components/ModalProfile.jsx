import { ProfileInfo } from "../profile_user_components/ProfileInfo.jsx";
import { ProfileHeader } from "../profile_user_components/ProfileHeader.jsx";
import { InputsProfile } from "../profile_user_components/InputsProfile.jsx";


export function ModalProfile({isOpen, onClose}) {
    
    const courses = [
        { id: 1, initial: "TM-5150" },
        { id: 2, initial: "TM-5250" },
        { id: 3, initial: "TM-5350" },
        { id: 4, initial: "TM-5450" },
        { id: 5, initial: "TM-5550" },
      ];

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

        
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-[#1d1d1d] opacity-50" onClick={onClose} />
        
          {/* <button onClick={onClose}>Close</button> */}
          <div className="z-10 grid gap-4 p-4 rounded-3xl bg-[#E6ECEC] h-full md:h-auto w-[25rem] md:w-[60%] lg:w-[55%]">
            <ProfileHeader close={onClose}  />
            <ProfileInfo items={courses} />
            <InputsProfile objects={inputs} />
          </div>
        </div>
      
    );
  }
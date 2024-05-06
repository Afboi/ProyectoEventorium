import "../../index.css";
import Img from "../../assets/imgs/profile_img.png";

export function ProfileInfo({ items }) {
  return (
    <div className="flex flex-col md:gap-28 md:flex-row items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <img className="w-[15rem] md:w-[17rem] rounded-[50%]" src={Img} alt="Profile img" />
        <h3 className="font-outfit font-light text-md-xl mt-4 text-[#6E6E6E]">Emilia Mernes</h3>
      </div>
      <div className="flex flex-col mt-4 md:mt-0">
        <h2 className="font-bold text-sm text-[#6E6E6E] mb-5 ">Cursos matriculados</h2>
        <ul className="grid grid-cols-2 md:grid-cols-2 gap-x-16 list-disc text-[#6E6E6E]">
          {items.map((item) => (
            <li className="mb-2" key={item.id}> {item.initial} </li>
          ))}
        </ul>
      </div>
    </div> 
  );
}


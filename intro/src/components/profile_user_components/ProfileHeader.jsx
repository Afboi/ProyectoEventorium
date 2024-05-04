import pencilIcon from '../../assets/imgs/pencil-svgrepo-com.png';
import "../../index.css";

export function ProfileHeader() {
  return (
    <div className="flex flex-row md:flex-row justify-between">
      <div className='p-4 bg-[#DAE1D5] rounded-full'>
        <img className="w-6 md:size-8" src={pencilIcon} alt="Edit Icon" />
      </div>
      <div className="flex gap-4 items-center">
        <div className='p-4 bg-[#DAE1D5] rounded-full'>
          <img className="w-6 md:size-8" src={pencilIcon} alt="Edit Icon" />
        </div>
        <div className='p-4 bg-[#DAE1D5] rounded-full'>
          <img className="w-6 md:size-8" src={pencilIcon} alt="Edit Icon" />
        </div>
      </div>
    </div>

  )
}

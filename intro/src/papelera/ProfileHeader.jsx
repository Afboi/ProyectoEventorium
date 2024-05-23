import pencilIcon from '../assets/imgs/pencil-svgrepo-com.svg';
import xmark from '../assets/imgs/xmark-svgrepo-com.svg'
import settings from '../assets/imgs/settings-svgrepo-com.svg'
import "../index.css";

export function ProfileHeader(close) {
  return (
    <div className="flex flex-row md:flex-row justify-between">
      <div className='p-4 bg-[#DAE1D5] rounded-full'>
        <a href="" onClick={close}>
          <img className="w-6 md:size-8" src={xmark} alt="Edit Icon" />
          </a>
      </div>
      <div className="flex gap-4 items-center">
        <div className='p-4 bg-[#DAE1D5] rounded-full'>
          <img className="w-6 md:size-8" src={pencilIcon} alt="Edit Icon" />
        </div>
        <div className='p-4 bg-[#DAE1D5] rounded-full'>
          <img className="w-6 md:size-8" src={settings} alt="Edit Icon" />
        </div>
      </div>
    </div>

  )
}
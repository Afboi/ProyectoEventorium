import myImage from '../../assets/imgs/logo.png';
import "../../index.css";

export function Header() {
  return(
    <div className="grid grid-cols-[auto_auto] gap-2 justify-between my-6">
        
        <h1 className="font-logo grid grid-flow-col content-center text-3xl font-bold text-gr"><img src={myImage} alt="logo" />visis</h1>
        <img className="block rounded-[6vh] w-16" src="https://randomuser.me/api/portraits/women/31.jpg" alt="User Profile" />
    </div>
    
  )
}

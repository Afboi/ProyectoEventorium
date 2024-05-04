import "../../index.css";

export function TaskCards({ fecha, curso, tarea }){

    return(
        <div className="bg-white/70 rounded-[28px] lg:rounded-[25px] h-[200px] lg:h-[195px] mx-4 my-2 p-1">

            <div className="pl-2 pt-5 text-[#757a86] font-light text-[1rem] iPadPro:text-[0.9rem] iphone12:text-[0.9rem]">
                <p>{fecha}</p>

                <p className="-my-1.5 mb-[0.4rem]">{curso}</p>

                <div className="h-8 lg:h-6 2xl:-mt-3 desktopx3:w-[214px]">
                    <p className="desktopx2:text-sm desktopx1:text-[1.1rem] font-bold text-left desktopx2:w-[270px]">{tarea}</p>
                </div>                
                <div className="float-end"> 
                <button className="bg-[#FD8390] text-white font-light text-2xl rounded-[28px] desktopx3:rounded-[60px] px-8 py-1 mr-2 desktopx3:mr-8 mt-5
                iPadPro:mt-8 iphone12:mt-7 desktopx3:mt-10">
                    Ver más
                </button>

                </div>
            </div>             
        </div>
    )    
}
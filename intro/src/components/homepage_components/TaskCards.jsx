import "../../index.css";

export function TaskCards({ fecha, curso, tarea }){

    return(
        <div className="bg-white/70 rounded-[28px] lg:rounded-[25px] p-2 h-[170px]  lg:h-[195px]">

            <div className="pl-3.5 pt-7 text-gray-500 font-light text-base">
                <p>{fecha}</p>

                <p className="-my-1.5 mb-[0.4rem] invisible lg:visible">{curso}</p>

                <div className="grid lg:w-[214px] lg:h-[24px]">
                    <p className="text-2xl text-left -mt-6 lg:-mt-0 lg:w-[230px]">{tarea}</p>

                    <p className="-mb-14 mt-2 w-[283px] lg:invisible lg:float-left">{curso}</p>
                </div>                
                <div className="float-end"> 
                <button className="bg-[#FD8390] text-white font-light text-2xl rounded-[28px] lg:rounded-[60px] px-8 py-1 mr-2 lg:mr-8 mt-8 lg:mt-10">
                    Ver más
                </button>

                </div>
            </div>             
        </div>
    )    
}

export function Evaluation_Card({title, initials, porcent, hour}){
    return(
        <div>
            <div className=" rounded-3xl p-6 flex flex-cols justify-between bg-[#F3F7FB] mb-4">
                <div className="">
                    <h2 className="text-[#262E45] text-5xl">{title}</h2>
                    <p className="text-[#BBBCBD]">{hour}</p>
                </div>
                <div>
                    <h2 className="text-[#018B8A] text-5xl">{porcent}</h2>
                    <p className="text-[#BBBCBD]">{initials}</p>
                </div>
            </div>
        </div>
    );
}
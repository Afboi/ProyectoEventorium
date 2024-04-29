import "../../index.css";
import { TaskCards } from "./TaskCards.jsx";

export function TasksLists({items}){

    return (
        <>
            <div className="clr-1 rounded-[28px] lg:rounded-[60px] grid lg:grid-cols-4 mx-4 lg:mx-12 my-6 py-3.5 px-2.5 gap-4 lg:gap-8 h-auto lg:h-auto">
                { items.map( item => <TaskCards
                    key={item.id}
                    fecha={item.fecha}
                    curso={item.curso}
                    tarea={item.tarea} />)}
            </div>
        </>
    );    
}
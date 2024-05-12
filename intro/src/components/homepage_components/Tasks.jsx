import "../../index.css";
import { TasksLists } from "./TasksLists.jsx";

export function Tasks(){

    const tareas = [
        { "id":1, "fecha":"24 Oct", "curso": "TM-5100 Desarrollo de Aplicaciones Interactivas II", "tarea": "Investigación de Interactivas II"},
        { "id":2, "fecha":"28 Oct", "curso": "TM-5500 Desarrollo de Aplicaciones Interactivas II", "tarea": "Investigación de Interactivas II"},
        { "id":3, "fecha":"30 Oct", "curso": "TM-5500 Desarrollo de Aplicaciones Interactivas II", "tarea": "Investigación de Interactivas II"},
        { "id":4, "fecha":"12 Oct", "curso": "TM-5500 Desarrollo de Aplicaciones Interactivas II", "tarea": "Exposición final"},
        { "id":5, "fecha":"05 Oct", "curso": "TM-5500 Desarrollo de Aplicaciones Interactivas II", "tarea": "Exposición final"}
    ]

    return (
        <div>
        <TasksLists items={tareas}/>
        </div>
    );
}
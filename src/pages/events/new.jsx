import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function EventFormPage() {
    const {query, push} = useRouter();

    const [newEvent, setNewEvent] = useState({
        title: "",
        start: "",
        end: ""
    });

    const validate = () => {
        const errors = {};
        if(!newEvent.title) errors.title = "Tittle is required";
        if(!newEvent.start) errors.start = "Start date is required";
        if(!newEvent.end) errors.end = "End date is required";
        return errors;
    }

    const [errors, setErrors]= useState({
        title: "",
        start: "",
        end: ""
    });

    

  return (
    <div className="">
        <div className="flex flex-col justify-center items-center w-screen h-screen ">
            <h1 className="text-3xl mb-4">{query.id ? 'Update Task' : 'Create Task'}</h1>
            <form className="flex flex-col justify-center items-center w-screen" onSubmit={handleSubmit}>
                <label htmlFor="" className="flex w-1/2 p-3">Titulo</label>
                <input type="text" className="p-3 drop-shadow w-1/2 rounded transition-all m-2"
                name="title" 
                onChange={handleChange} 
                error={
                    errors.title 
                    ? {content: "Pls enter a title", pointing: "bellow"}
                    : null
                }
                value={newEvent.title}
                />
                <label htmlFor="" className="flex w-1/2 p-3">Fecha de Inicio</label>
                <input type="date" className="p-3 drop-shadow w-1/2 rounded transition-all m-2"
                name="start"
                onChange={handleChange} 
                error={
                    errors.start 
                    ? {content: "Pls enter a date", pointing: "bellow"}
                    : null
                }
                value={newEvent.start}
                />
                <label htmlFor="" className="flex w-1/2 p-3">Fecha de Fin</label>
                <input type="date" className="p-3 drop-shadow w-1/2 rounded transition-all m-2"
                name="end"
                onChange={handleChange} 
                error={
                    errors.end 
                    ? {content: "Pls enter a date", pointing: "bellow"}
                    : null
                }
                value={newEvent.end}
                />

                <button className="text-white bg-slate-500 w-52 h-12 rounded hover:bg-slate-800 transition-all">
                    {query.id ? 'Actualizar': 'Crear'}
                    </button>
            </form>
        </div>
    </div>
  )
}

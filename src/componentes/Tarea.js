import React from "react";
import "../hojas-de-estilo/Tarea.css";
import { BsXOctagonFill } from "react-icons/bs";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}
      >
        <BsXOctagonFill className="tarea-icono"></BsXOctagonFill>
      </div>
    </div>
  );
}

export default Tarea;

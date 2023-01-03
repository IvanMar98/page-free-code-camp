import React from "react";
import '../css/testimonio.css'

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../img/testimonio-${props.imagen}.png`)}
        alt="foto de emma"
      />
      <div className="contenedor-texto-testimonio">
        <p className="name"><strong>{props.name}</strong> en {props.pais}</p>
        <p className="cargo"> {props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">"{props.testimonio}".</p>
      </div>
    </div>
  );
}

export default Testimonio;

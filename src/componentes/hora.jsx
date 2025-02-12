import React, { useState, useEffect } from "react";

const Hora = () => {
  const [fechaHora, setFechaHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFechaHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div style={styles.contenedor}>
      <p style={styles.hora}>{fechaHora.toLocaleTimeString("es-CO")}</p>
      <p style={styles.fecha}>
        {fechaHora.toLocaleDateString("es-CO", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
};

const styles = {
  contenedor: {
    width: "100vw", // Ocupar todo el ancho de la pantalla
    background: "black",
    color: "#ffffff",
    padding: "10px",
    textAlign: "center",
    borderRadius: "0", // Sin bordes redondeados
    margin: "0", // Eliminar márgenes
  },
  hora: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  fecha: {
    fontSize: "16px",
    fontStyle: "italic",
  },
};

export default Hora;

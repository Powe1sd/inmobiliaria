import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const tramitesData = [
  [
    { titulo: "Certificado de Deudores Alimentarios Morosos - REDAM" },
    { titulo: "Impuesto sobre vehículos automotores" },
    { titulo: "Consulta Registro Único Tributario (RUT)" },
  ],
  [
    { titulo: "Inscripción en el Registro Único Tributario (RUT)" },
    {
      titulo:
        "Consulta de formularios por Número de Identificación Tributaria (NIT)",
    },
    { titulo: "Impuesto sobre vehículos automotores" },
  ],
  [
    {
      titulo:
        "Convalidación de títulos de estudios de posgrado obtenidos en el exterior",
    },
    { titulo: "Impuesto predial unificado" },
    { titulo: "Cédula de ciudadanía digital" },
  ],
];

const Tramites = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % tramitesData.length);
  };

  const prevSlide = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + tramitesData.length) % tramitesData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.contenedor}>
      <h2 style={styles.titulo}>Trámites más consultados.</h2>

      <div style={styles.slider}>
        <FaChevronLeft style={styles.flecha} onClick={prevSlide} />

        <div style={styles.tramites}>
          {tramitesData[index].map((tramite, i) => (
            <div key={i} style={styles.tarjeta}>
              <p style={styles.texto}>{tramite.titulo}</p>
            </div>
          ))}
        </div>

        <FaChevronRight style={styles.flecha} onClick={nextSlide} />
      </div>
    </div>
  );
};

const styles = {
  contenedor: {
    textAlign: "center",
    padding: "20px",
    background: "#f8f9fa",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "800px", // Limitar el ancho máximo para pantallas grandes
    margin: "0 auto", // Centrar el contenedor
  },
  titulo: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  slider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%",
    overflow: "hidden", // Evitar que el contenido se desborde
  },
  tramites: {
    display: "flex",
    gap: "15px",
    transition: "transform 0.5s ease-in-out",
    justifyContent: "center", // Alinear los elementos al centro
    width: "100%", // Asegurarse que el contenedor de los trámites ocupe todo el ancho
  },
  tarjeta: {
    background: "#ffffff",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    width: "250px", // Ancho fijo para cada tarjeta
    textAlign: "left", // Alinear el texto a la izquierda
  },
  texto: {
    fontSize: "16px",
    fontWeight: "500",
  },
  flecha: {
    fontSize: "30px",
    cursor: "pointer",
    color: "#007bff",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)", // Centrar las flechas verticalmente
    zIndex: 1, // Asegurar que las flechas estén por encima de los trámites
    background: "rgba(255, 255, 255, 0.6)", // Fondo semitransparente para mejorar la visibilidad
    borderRadius: "50%",
    padding: "10px",
  },
  flechaIzquierda: {
    left: "10px",
  },
  flechaDerecha: {
    right: "10px",
  },

  // Media queries para hacer el diseño más responsivo
  "@media (max-width: 768px)": {
    contenedor: {
      padding: "15px",
    },
    titulo: {
      fontSize: "20px",
    },
    slider: {
      flexDirection: "column",
    },
    tramites: {
      flexDirection: "column",
      gap: "10px",
    },
    tarjeta: {
      width: "200px",
    },
    flecha: {
      fontSize: "25px",
      padding: "8px",
    },
  },

  "@media (max-width: 480px)": {
    contenedor: {
      padding: "10px",
    },
    titulo: {
      fontSize: "18px",
    },
    slider: {
      flexDirection: "column",
    },
    tramites: {
      flexDirection: "column",
      gap: "8px",
    },
    tarjeta: {
      width: "160px",
    },
    flecha: {
      fontSize: "20px",
      padding: "5px",
    },
  },
};

export default Tramites;

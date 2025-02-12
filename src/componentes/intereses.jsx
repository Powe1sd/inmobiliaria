import React from "react";
import { FaHome, FaBuilding, FaMapMarkedAlt, FaMoneyBillWave, FaKey, FaChartLine, FaGlobe, FaWarehouse } from "react-icons/fa";

const interesesData = [
  { titulo: "Compra de vivienda", icono: <FaHome /> },
  { titulo: "Alquiler de propiedades", icono: <FaBuilding /> },
  { titulo: "Ubicación y zonificación", icono: <FaMapMarkedAlt /> },
  { titulo: "Hipotecas y financiamiento", icono: <FaMoneyBillWave /> },
  { titulo: "Seguros inmobiliarios", icono: <FaKey /> },
  { titulo: "Tendencias del mercado", icono: <FaChartLine /> },
  { titulo: "Inversión inmobiliaria", icono: <FaGlobe /> },
  { titulo: "Bodegas y espacios comerciales", icono: <FaWarehouse /> },
];

const Intereses = () => {
  return (
    <div style={styles.contenedor}>
      <h2 style={styles.titulo}>También te puede interesar</h2>
      <div style={styles.grid}>
        {interesesData.map((item, index) => (
          <div key={index} style={styles.tarjeta}>
            <span style={styles.icono}>{item.icono}</span>
            <p style={styles.texto}>{item.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 🎨 ESTILOS
const styles = {
  contenedor: {
    background: "#f4f7f9",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  },
  titulo: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px",
    justifyContent: "center",
  },
  tarjeta: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  icono: {
    fontSize: "24px",
    color: "#007bff",
  },
  texto: {
    fontSize: "16px",
    fontWeight: "500",
  },
};

export default Intereses;

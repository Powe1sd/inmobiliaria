import React, { useState } from "react";

function Filter({ onSearch }) {
  const [city, setCity] = useState("Todos");
  const [neighborhood, setNeighborhood] = useState("0 Opciones");
  const [propertyType, setPropertyType] = useState("Todos");
  const [propertyState, setPropertyState] = useState("Todos");
  const [businessType, setBusinessType] = useState("Todos");
  const [bedrooms, setBedrooms] = useState("Todos");
  const [bathrooms, setBathrooms] = useState("Todos");
  const [priceFrom, setPriceFrom] = useState(""); // Initialize as empty strings
  const [priceTo, setPriceTo] = useState(""); // Initialize as empty strings

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch({
      city,
      neighborhood,
      propertyType,
      propertyState,
      businessType,
      bedrooms,
      bathrooms,
      priceFrom,
      priceTo,
    });
  };

  return (
    <div className="filter-module">
      <form onSubmit={handleSearch} className="container">
        <div className="row">
          <div className="col-md-3">
            <label htmlFor="city">Ciudad:</label>
            <select
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="form-control"
            >
              <option value="Todos">Todos</option>
              <option value="Caudete, Albacete">Caudete, Albacete</option>
              <option value="El Peñol, Antioquia">El Peñol, Antioquia</option>
              {/* ... (All your city options) ... */}
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="neighborhood">Zona/Barrio:</label>
            <select
              id="neighborhood"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              className="form-control"
            >
              <option value="0 Opciones">0 Opciones</option>
              {/* ... (All your neighborhood options) ... */}
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="propertyType">Tipo de inmueble:</label>
            <select
              id="propertyType"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="form-control"
            >
              <option value="Todos">Todos</option>
              <option value="Apartaestudio">Apartaestudio</option>
              <option value="Apartamento">Apartamento</option>
              {/* ... (All your property type options) ... */}
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="propertyState">Estado Propiedad:</label>
            <select
              id="propertyState"
              value={propertyState}
              onChange={(e) => setPropertyState(e.target.value)}
              className="form-control"
            >
              <option value="Todos">Todos</option>
              <option value="Nuevo">Nuevo</option>
              <option value="Usado">Usado</option>
              <option value="Proyecto">Proyecto</option>
              <option value="En construcción">En construcción</option>
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="businessType">Tipo de negocio:</label>
            <select
              id="businessType"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="form-control"
            >
              <option value="Todos">Todos</option>
              <option value="Venta">Venta</option>
              <option value="Alquiler">Alquiler</option>
              <option value="Permutar">Permutar</option>
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="bedrooms">Alcobas:</label>
            <select
              id="bedrooms"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="form-control"
            >
              <option value="Todos">Todos</option>
              <option value="1 o más">1 o más</option>
              <option value="2 o más">2 o más</option>
              {/* ... (All your bedrooms options) ... */}
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="bathrooms">Baños:</label>
            <select
              id="bathrooms"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              className="form-control"
            >
              <option value="Todos">Todos</option>
              <option value="1 o más">1 o más</option>
              <option value="2 o más">2 o más</option>
              {/* ... (All your bathrooms options) ... */}
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="priceFrom">Precio desde:</label>
            <input
              type="text"
              id="priceFrom"
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="priceTo">Precio hasta:</label>
            <input
              type="text"
              id="priceTo"
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="col-md-2 align-self-end">
            <button type="submit" className="btn btn-primary">
              BUSCAR
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filter;

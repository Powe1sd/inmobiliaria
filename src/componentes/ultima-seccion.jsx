import React from "react";

const UltimaSeccion = () => {
  const propiedades = [
    {
      titulo: "Apartamento de lujo en venta",
      descripcion: "Hermoso apartamento de 3 habitaciones con vista al mar.",
      imagen: "./public/inmobiliaria1.jpeg", // Reemplaza con la URL de la imagen
      precio: "$500,000",
    },
    {
      titulo: "Casa en alquiler en zona residencial",
      descripcion: "Amplia casa de 4 habitaciones con jardín y piscina.",
      imagen: "./public/inobiliarias13.jpeg", // Reemplaza con la URL de la imagen
      precio: "$3,000/mes",
    },
    {
      titulo: "Local comercial en alquiler",
      descripcion: "Excelente local comercial en zona de alta afluencia.",
      imagen: "/public/inobiliarias13.jpeg", // Reemplaza con la URL de la imagen
      precio: "$2,000/mes",
    },
    // Agrega más propiedades aquí

    {
      titulo: "Local comercial en alquiler",
      descripcion: "Excelente local comercial en zona de alta afluencia.",
      imagen: "/public/inobiliarias13.jpeg", // Reemplaza con la URL de la imagen
      precio: "$2,000/mes",
    },
    // Agrega más propiedades aquí

    {
      titulo: "Local comercial en alquiler",
      descripcion: "Excelente local comercial en zona de alta afluencia.",
      imagen: "/public/inobiliarias13.jpeg", // Reemplaza con la URL de la imagen
      precio: "$2,000/mes",
    },
    // Agrega más propiedades aquí

    {
      titulo: "Local comercial en alquiler",
      descripcion: "Excelente local comercial en zona de alta afluencia.",
      imagen: "/public/inobiliarias13.jpeg", // Reemplaza con la URL de la imagen
      precio: "$2,000/mes",
    },
    // Agrega más propiedades aquí
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Últimas Propiedades</h2>
        <div className="row">
          {propiedades.map((propiedad, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <img
                  src={propiedad.imagen}
                  className="card-img-top"
                  alt={propiedad.titulo}
                />
                <div className="card-body">
                  <h5 className="card-title">{propiedad.titulo}</h5>
                  <p className="card-text">{propiedad.descripcion}</p>
                  <p className="card-text">
                    <strong>Precio:</strong> {propiedad.precio}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Ver detalles
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-4">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default UltimaSeccion;

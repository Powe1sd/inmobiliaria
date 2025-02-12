import React, { useState } from "react"; // Importamos React y el hook useState para manejar el estado
import "./App.css"; // Importamos los estilos generales de la aplicación
import Nav from "./componentes/nav"; // Importamos el componente de navegación
import ImageModule from "./componentes/img"; // Importamos el módulo de imagen
import Filter from "./componentes/modulo3"; // Importamos el módulo de filtrado
import RegistrationForm from "./componentes/registro"; // Importamos el formulario de registro
import ContactModule from "./componentes/contacto"; // Importamos el módulo de contacto
import Hora from "./componentes/hora"; // Importa el módulo de hora
import Tramites from "./componentes/tramites";
import Intereses from "./componentes/intereses";
import UltimaSeccion from "./componentes/ultima-seccion";
function App() {
  // Estado para almacenar los resultados de la búsqueda, inicialmente es un array vacío
  const [searchResults, setSearchResults] = useState([]);

  // Función que maneja la búsqueda basada en los valores del filtro
  const handleSearch = (filterValues) => {
    // Imprime en consola los valores usados para la búsqueda

    // Datos de ejemplo (dummyResults), se deben reemplazar con la lógica real de búsqueda
    const dummyResults = [
      { id: 1, title: "Property 1", city: filterValues.city },
      { id: 2, title: "Property 2", city: filterValues.city },
      // ... más resultados
    ];
  };

  return (
    <div className="App">
      <Nav /> {/* Renderiza el componente de navegación */}
      <ImageModule
        src="/img1.jpg" // Ruta de la imagen (ubicada en la carpeta "public")
        alt="Inmobiliaria sas" // Texto alternativo para accesibilidad
        width="1350px" // Ancho de la imagen
        height="600px" // Alto de la imagen
      />
      <Filter onSearch={handleSearch} />{" "}
      {/* Pasa la función handleSearch al módulo de filtro */}
      {/* Muestra los resultados de búsqueda debajo del filtro */}
      <div className="search-results">
        {/* Verifica si hay resultados en searchResults */}
        {searchResults.length > 0 ? (
          <ul>
            {/* Mapea los resultados y los muestra en una lista */}
            {searchResults.map((result) => (
              <li key={result.id}>
                {result.title} ({result.city})
              </li>
            ))}
          </ul>
        ) : (
          <p></p> // Muestra un mensaje si no hay resultados
        )}
      </div>
      <RegistrationForm /> {/* Renderiza el formulario de registro */}
      <ContactModule /> {/* Renderiza el módulo de contacto */}
      <Tramites />
      <Intereses />
      <UltimaSeccion />
      <Hora />
    </div>
  );
}

export default App; // Exporta el componente App para que pueda ser utilizado en otros archivos

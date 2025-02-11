import React, { useState } from "react";
import "./App.css"; // Import your CSS for general app styles
import Nav from "./componentes/nav";
import ImageModule from "./componentes/img";
import Filter from "./componentes/modulo3"; // Import the Filter
import RegistrationForm from "./componentes/registro"; // Import the registration form
import ContactModule from "./componentes/contacto"; // Adjust the path as needed

function App() {
  const [searchResults, setSearchResults] = useState([]); // Initialize as an empty array!

  const handleSearch = (filterValues) => {
    // *** IMPORTANT: This is where you implement your search logic ***
    // Use the filterValues object to make API calls, filter local data, etc.
    console.log("Searching with filters:", filterValues);

    // Placeholder: Replace with your actual search logic
    const dummyResults = [
      { id: 1, title: "Property 1", city: filterValues.city },
      { id: 2, title: "Property 2", city: filterValues.city },
      // ... more results
    ];
    setSearchResults(dummyResults);
  };

  return (
    <div className="App">
      <Nav />
      <ImageModule
        src="/img1.jpg" // Correct path if image is in public
        alt="Descripción de la imagen"
        width="1350px"
        height="600px"
      />
      <Filter onSearch={handleSearch} />{" "}
      {/* Pass the handleSearch function to Filter */}
      {/* Display search results below the filter module */}
      <div className="search-results">
        {/* Example: Display searchResults in a list */}
        {searchResults.length > 0 ? ( // Check if there are results
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                {result.title} ({result.city})
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p> // Display a message if no results
        )}
      </div>
      <RegistrationForm /> {/* Add the registration form */}
      <ContactModule />
    </div>
  );
}

export default App;

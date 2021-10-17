import { useEffect, useState } from "react";
import Card from "./Card";
import "./Gallery.css";

function Gallery() {
  let [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setPersonajes(data.results));
  }, []);

  return (
    <div className="Gallery">
      <header className="Gallery-header"></header>
      <body>
        <div className="lista">
          {personajes &&
            personajes.map((personaje) => (
              <Card
                key={personaje.id}
                name={personaje.name}
                gender={personaje.gender}
                img={personaje.image}
                status={personaje.status}
              />
            ))}
        </div>
      </body>
    </div>
  );
}

export default Gallery;

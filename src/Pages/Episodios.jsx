import { useEffect, useState } from "react";
import "../Styles/Episodios.css"; // Estilos CSS para el componente
import { episodesApi } from "../Services/Api";


const Episodios = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [mostrarBoton, setBoton] = useState (false);

  useEffect(() => {
    const obtenerEpisodes = async () => {
      try {
        const data = await episodesApi(currentPage);
        setEpisodes((prevEpisodes) => [...prevEpisodes, ...data]);
        setBoton(true);
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    };

    obtenerEpisodes();
  }, [currentPage]);

  const loadMoreEpisodes = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="main">
      <div className="episodios-container">
        <h1>Episodios de Rick and Morty</h1>
        <div className="episodios-list">
          {episodes.map((episode,index) => (
            <div key={index} className="episodio">
              <div className="episodio-details">
                <h2>{episode.name}</h2>
                <p>
                  <strong>Episodio:</strong> {episode.episode}
                </p>
                <p>
                  <strong>Fecha de emisión:</strong> {episode.air_date}
                </p>
                <p>
                  <strong>Personajes:</strong>{" "}
                  {episode.characters.length > 0
                    ? episode.characters.slice(0, 3).join(", ") + (episode.characters.length > 3 ? "..." : "")
                    : "No se especifican personajes"}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="botonClass">
        {(mostrarBoton &&
           <button className="ver-mas-button" onClick={loadMoreEpisodes}>Cargar más episodios</button>
        )}
        
        </div>
        
      </div>
    </div>
  );
};

export default Episodios;

import { useEffect, useState } from "react";
import { obtenerInfoRick } from "../Services/Api";
import "../Styles/Personajes.css";

export default function Personajes() {
  const [rickInfo, setRickInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasMorePages, setHasMorePages] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respuestaApi = await obtenerInfoRick(currentPage);
        if (currentPage === 1) {
          setRickInfo(respuestaApi.results);
        } else {
          setRickInfo((prevInfo) => [...prevInfo, ...respuestaApi.results]);
        }
        if (!respuestaApi.info.next) {
          setHasMorePages(false);
        } else {
          setHasMorePages(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, [currentPage]); 

  useEffect(() => {

  const buscar = async () => {
    if (!hasMorePages) return;


    //primera pagina con su data
    const filtered = rickInfo.filter((personaje) =>
      personaje.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log("DATA FILTRADA",filtered)

    //SINO SE ENCONTRO UN PERSONAJE EN EL FILTRO PERO HAY MAS PAGINAS//
    // Añade una pagina mas y la busca.
    if (filtered.length === 0 && hasMorePages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  buscar();
}, [rickInfo, searchTerm, hasMorePages]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const loadMoreData = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };


  const filteredRickInfo = rickInfo.filter((personaje) =>
    personaje.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contain">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar personaje"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className="cards-container">
        {filteredRickInfo.map((personaje, index) => (
          <div className="card" key={index}>
            <img
              src={personaje.image}
              alt={personaje.name}
              className="card-img"
            />
            <div className="card-content">
              <h3 className="card-title">{personaje.name}</h3>
              <p className="card-description">Especie: {personaje.species}</p>
              <p className="card-description">Estado: {personaje.status}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="botonClass">
        {hasMorePages && (
          <button onClick={loadMoreData} className="ver-mas-button">
            Ver Más
          </button>
        )}
      </div>
    </div>
  );
}

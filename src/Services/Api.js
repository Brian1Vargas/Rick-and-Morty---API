import axios from "axios";

let urlBase = "https://rickandmortyapi.com/api/character?page="

const obtenerInfoRick = async (pages) =>{

    try {
        const response = await axios.get(`${urlBase}${pages}`)
        return response.data;
        
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        throw error;
    }


};


const episodesApi = async (numEpisode) =>{


    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${numEpisode}`);
        return response.data.results;

    } catch (error) {

        return error;
    }

};







export {obtenerInfoRick , episodesApi};


import movieApi from "../../common/api/movieApi";
import {apiKey} from "../../common/api/MovieApiKey";
export async function homeLoader () {
    // il faut mettre cette vérification au moment du fetch pour englober les erreurs du fetch aussi
    // if(!response.ok) {throw Error('Could not find that movie')}
    const response = await movieApi.get(`?apiKey=${apiKey}&s=Harry`).catch((error: Error)=>{
        console.log("Error : ", error)
        return error;
    })    
    return response;
};
import {useContext, useEffect} from "react";
import { Appcontext } from "../../../context";
import Selectgenre from "./Selectgenre";
import { getToken } from "../../../utils";

const Setup = () => {
    const {stage, setGenres, genres, setStage} = useContext(Appcontext)
    useEffect(() => {
        (async () => {
            setStage(1)
            let token = await getToken()
            let credentials = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type' : 'application/json',
                'Authorization' : `Bearer ${token}` 
            }
            }
            const result = await fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', credentials)
            const data = await result.json()
            setGenres(data.genres)
        })()
    }, [])
    return (
        <>
            {stage === 1 && <Selectgenre genres={genres}/>}
        </>
    )
}

export default Setup
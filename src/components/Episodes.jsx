import React from "react";
import { useEffect, useState } from "react";

const Episodes = () => {
    const [episodes, setepisodes] = useState([]);
    useEffect(() => {
        async function fecthdata() {
            const response = await fetch("https://rickandmortyapi.com/api/episode")
            const data = await response.json();
            setepisodes(data.info)
        }
        fecthdata()
    }, [])
    return (
        <h2>La cantidad de episodios son: {episodes.count}</h2>
    )
}
export default Episodes
import React from "react";
import GifList from "./GifList";

function GifListContainer({gifs}){
    return (
        <>
        <GifList gifs={gifs}/>
        </>
    )
}

export default GifListContainer
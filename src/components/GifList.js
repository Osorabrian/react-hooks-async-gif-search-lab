import React from "react";

export default function GifList({gifs}){

    const images = gifs.map((gif,index) => {return(<><img key={index} src={gif.url}  alt="gif"/><br></br></>)})

    return(
        <>
        < ul>
        {images}
        </ul>
        </>
    )
}
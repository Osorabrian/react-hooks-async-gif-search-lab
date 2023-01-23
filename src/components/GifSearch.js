import React, { useState } from "react"

export default function GifSearch({giphySearch}){

    const [search, setSearch] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        giphySearch(search)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Enter slug to search" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <input type="submit"/>
        </form>
    )
}
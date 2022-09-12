
import React from "react";
import MovieCard from "./MovieCard";
import { useState, useEffect, useRef } from 'react';

function SearchMovies() {
    const [movies, setMovies] = useState([]);
    const [keyword, setKeyword] = useState("");
    const apiKey = "d4e35e92"; // Intenta poner cualquier cosa antes para probar
    
    useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`)
	.then(response => response.json())
	.then(data => { if(!data.Search) { setMovies([]) }
                    else {setMovies(data.Search)}
	               console.log(data.Search);
                   })
	.catch (error => console.error(error))
	
  }, [keyword]);
    

    // const movies = [
    //     {
    //         Id: 55,
    //         Title: "Parchís",
    //         Year: "1983",
    //         Poster: "https://m.media-amazon.com/images/M/MV5BYTgxNjg2MTAtYjhmYS00NjQwLTk1YTMtNmZmOTMyNTAwZWUwXkEyXkFqcGdeQXVyMTY5MDE5NA@@._V1_SX300.jpg",
    //     },
    //     {
    //         Id: 9583,
    //         Title: "Brigada en acción",
    //         Year: "1977",
    //         Poster: "N/A",
    //     },
    // ];
    let elInput = useRef();

   
    const buscar = e => {
        e.preventDefault();
        let busqueda = e.target.busqueda.value;
        setKeyword(busqueda);
        // setKeyword(elInput.value)
       // console.log(this.elInput.value)
        e.target.busqueda.value = "";
    };
    console.log(keyword);

    return (
        <div className="container-fluid">
            <div className="row my-4">
                <div className="col-12 col-md-6">
                    {/* Buscador */}
                    <form onSubmit={buscar} method="GET">
                        <div className="form-group">
                            <label htmlFor="">Buscar por título:</label>
                            <input ref={elInput} type="text" className="form-control" name="busqueda"/>
                        </div>
                        <button className="btn btn-info">Search</button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2>Películas para la búsqueda: {keyword}</h2>
                </div>
                {movies.length !== 0 && movies.map((movie) => {
                    return <MovieCard movie={movie} key={movie.imdbID} />;
                })}
            </div>
            {movies.length === 0 && (
                <div className="alert alert-warning text-center">
                    No se encontraron películas
                </div>
            )}
        </div>
    );
}

export default SearchMovies;

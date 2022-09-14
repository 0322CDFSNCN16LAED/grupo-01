import React from "react";
import { Component } from "react";
import { Route } from "react-router-dom";
import MensajeSecreto from "../MensajeSecreto";
import Movie from "./Movie";

const EXPRESS_HOST = "http://localhost:3001";

export default class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
    }

    async componentDidMount() {
        const result = await fetch("http://localhost:3000/apis/productos");
        const moviesResult = await result.json();
        const newMovies = moviesResult.data;
        this.setState({
            movies: newMovies,
        });
    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- PRODUCTS LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800">
                    Todos los productos en la base de datos
                </h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table
                                className="table table-bordered"
                                id="dataTable"
                                width="100%"
                                cellSpacing="0"
                            >
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        
                                        <th>Descripcion</th>
                                        <th>Precio</th>
                                        <th>Descuento</th>
                                      
                                    </tr>
                                </thead>
                              
                                <tbody>
                                    {this.state.movies.map((movie) => {
                                        return (
                                            <Movie {...movie} key={movie.id} />
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <Route path="/movies/gatitos" component={MensajeSecreto} />
            </React.Fragment>
        );
    }
}

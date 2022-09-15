import React from "react";
import { Component } from "react";
import { Route } from "react-router-dom";
import MensajeSecreto from "../MensajeSecreto";
import Product from "./Product";


export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    async componentDidMount() {
        const result = await fetch("http://localhost:3000/apis/productos");
        const productsResult = await result.json();
        const newProducts = productsResult.data;
        this.setState({
            products: newProducts,
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
                                    {this.state.products.map((product) => {
                                        return (
                                            <Product {...product} key={product.id} />
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

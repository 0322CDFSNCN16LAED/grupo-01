import BigCard from "./BigCard";
import { useEffect, useState } from "react";


export default function LastProduct() {
    const [product , setProductLast] = useState([]);
    async function fetchLastProduct(){
        const respuesta = await fetch("http://localhost:3000/apis/productos")
        const resultado = await respuesta.json();
        const productList = resultado.data
        const product = productList.pop()
        
        setProductLast(product)
    }

    useEffect(()=> {
        fetchLastProduct();
    }, [])
    
    return (
        <BigCard title=" Ultimo producto creado">
            <div className="text-center">
                <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: "40rem" }}
                    src={`http://localhost:3000/images/${product.imagen}`}
                    alt=" Star Wars - Mandalorian "
                />
                </div>
            <p>
                Nombre : {product.nombre}
            </p>
            <p>
                Precio : {product.precio}
            </p>
            <p>
                Descripción : {product.descripcion}
            </p>

           
            <a
                className="btn btn-danger"
                target="_blank"
                rel="nofollow"
                href="/"
            >
                Ver detalle de producto
            </a>
        </BigCard>
    );
}

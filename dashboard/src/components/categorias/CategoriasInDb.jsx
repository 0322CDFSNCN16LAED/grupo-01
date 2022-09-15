import BigCard from "../BigCard";
import { useEffect, useState } from "react";

export default function Categorias() {
    const [categorias , setCategorias] = useState([]);

    async function fetchCategorias(){
        const respuesta = await fetch("http://localhost:3000/apis/categorias")
        const resultado = await respuesta.json();
        const categorias = resultado.data
        setCategorias(categorias)  
    } ;
   

    useEffect(()=> {
        fetchCategorias();
    }, [])
    
    return (
        <BigCard title="Categorias de productos en la base de datos">

        <div className="col-lg-6 mb-4 width-100">
            <div className="card text-black width-100 border-categorias">
                <div className="card-body width-100 border-categorias">
                <ul className="width-100">
                {categorias.map((categoria) => {
                
             
                
                
                
                return (
               <li className="width-100">
                La categoría {categoria.nombre} posee {categoria.productos.length} productos
                </li>
                )
            })}
                </ul>
                </div>
            </div>
        </div>
    </BigCard>
    );
}
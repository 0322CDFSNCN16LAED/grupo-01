import BigCard from "../BigCard";
import { useEffect, useState } from "react";

export default function Categorias() {
    const [categorias , setCategorias] = useState([]);
    async function fetchCategorias(){
        const respuesta = await fetch("http://localhost:3000/apis/categorias")
        const resultado = await respuesta.json();
        const categorias = resultado.data
        setCategorias(categorias)  
    }

    useEffect(()=> {
        fetchCategorias();  
    }, [])
    
    return (
        <BigCard title="Categorias de productos en la base de datos">

        <div className="col-lg-6 mb-4">
            <div className="card text-black ">
                <div className="card-body">
                {categorias.map((categoria) => {
                return (
               <p>
                {categoria.nombre} :
                </p>
                )
            })}
                </div>
            </div>
        </div>
    </BigCard>
    );
}
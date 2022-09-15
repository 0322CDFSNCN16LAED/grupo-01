import GenresInDb from "./categorias/CategoriasInDb";
import LastProduct from "./LastProduct";
import MiniCard from "./MiniCard";

import { useEffect, useState } from "react";
import ProductList from "./products/ProductList";

export default function Dashboard() {
  const [productsCount, setProductsCount] = useState([]);
  async function fecthProductosCount() {
    const respuesta = await fetch("http://localhost:3000/apis/productos");
    const resultado = await respuesta.json();

    const productsCount = resultado.meta.total;
    setProductsCount(productsCount);
  }

  const [usuariosCount, setUsuariosCount] = useState([]);
  async function fecthUsuariosCount() {
    const respuesta = await fetch("http://localhost:3000/apis/usuarios");
    const resultado = await respuesta.json();

    const usuariosCount = resultado.meta.total;
    setUsuariosCount(usuariosCount);
  }

  const [categoriasCount, setCategoriasCount] = useState([]);

  async function fecthCategoriasCount() {
    const respuesta = await fetch("http://localhost:3000/apis/categorias");
    const resultado = await respuesta.json();
    const categoriasCount = resultado.meta.total;
    setCategoriasCount(categoriasCount);
  }

  useEffect(() => {
    fecthProductosCount();
    fecthUsuariosCount();
    fecthCategoriasCount();
  }, []);

  const miniCards = [
    {
      id: "5",
      title: "Productos en la base de datos",
      value: productsCount,
      icon: "fa-heart",
    },

    {
      id: "24",
      title: "Total usuarios",
      color: "success",
      value: usuariosCount,
      icon: "fa-user",
    },

    {
      id: "32",
      title: "Cantidad de categorias",
      color: "warning",
      value: categoriasCount,
      icon: "fa-paw",
    },
  ];

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      {/* <!-- Content Row Movies--> */}
      <div className="row">
        {/* <!-- Movies in Data Base --> */}
        {miniCards.map((data) => {
          return <MiniCard {...data} key={data.id} />;
        })}
      </div>
      {/* <!-- End movies in Data Base --> */}

      {/* <!-- Content Row Last Movie in Data Base --> */}
      <div className="row">
        {/* <!-- Last Movie in DB --> */}
        <LastProduct />
        {/* <!-- End content row last movie in Data Base --> */}

        {/* <!-- Genres in DB --> */}
        <GenresInDb />
      </div>
      <div>
        {/* <!-- Last Movie in DB --> */}
        <ProductList />
      </div>
    </>
  );
}

export default function Movie({ nombre, precio , descripcion, descuento}) {
    return (
        <tr>
            <td>{nombre}</td>
            <td>{descripcion}</td>
            <td>{precio}</td>
            
            
            <td>{descuento}</td>
           
        </tr>
    );
}

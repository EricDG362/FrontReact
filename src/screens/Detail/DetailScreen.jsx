import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoDetailId } from "../../fetching/products.fetching";


const DetailScreen = () =>{

    const {pid} = useParams() // es un hook que nod devuelveel parametro de busqueda (pid) desestructuracion
 
    const [loading,setLoading] = useState (true)
    const [product,setProduct] = useState (null)


    useEffect(() => {

    getProductoDetailId (pid) //una vez pobtenido el pid lllamamos al fetch get de producto
        .then(producto => {
            setLoading(false)
            setProduct(producto)
        })

    }, []) //para q sew ejecute una sola vez
    
    return (
        <div>
            <h1>Detalle del producto</h1>
            {
                loading ?
                <h2>Cargando</h2>:
                <div>
                    <h2>{product.titulo}</h2>
                    <p>{product.descripcion}</p>
                    <button>Comprar</button>
                </div>

            }
        </div>
    )

}

export default DetailScreen
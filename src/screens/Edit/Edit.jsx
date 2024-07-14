import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductoDetailId } from "../../fetching/products.fetching";
import {editarProducto} from "../../fetching/products.fetching"


import '../Tienda/Tienda.css'


const Edit = () => {

    const { pid } = useParams() // es un hook que nos devuelvel parametro de busqueda (pid) desestructuracion

    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)


    useEffect(() => {

        getProductoDetailId(pid) //una vez pobtenido el pid lllamamos al fetch get de producto
            .then(producto => {
                setLoading(false)
                setProduct(producto)
            })

    }, []) //para q se ejecute una sola vez

    const [errorText, setErrorText] = useState('')
    // const navigate = useNavigate()
    const handleSubmit = async (event) => { //FUNCION HANDLETSUBMIT /RECIBE UN EVENTO
        try {
            event.preventDefault()  //PREVIENE EL ENVIO DEL FORMULARIO O SEA Q PREVIENE Q LA PAGINA SE RECARGE
            const pid = product._id;
            console.log('Product ID controlando q llege:', pid);
            const editProduct = {
                titulo: event.target.titulo.value, // (PROPIEDAD NAME es el value)
                descripcion: event.target.descripcion.value,  
                precio: event.target.precio.value,
                stock: event.target.stock.value,
                codigo: event.target.codigo.value
            }
            console.log("consol en el edit product",editProduct)
            await editarProducto(pid,editProduct) //ESTE ES EL EXPORTADO DE AUTH.FETCHING
            setErrorText('')
            // navigate('/tienda')  //QUE NAVEGE A tienda
        }
        catch (error) {

            setErrorText(error.message)
        }
    }





    return (
        <>

            <header className="site-header">
                {/* <!-- y este contenedor el texto --> */}
                <div className="contenedor">
                    {/* <!-- creamos una tipo barra para aplicar flexbox a barra y a navegacion --> */}
                    <div className="barra">
                        {/* <!-- EL enlaces a la pagina principal --> */}
                        <a href="#">
                            <h1 className="no-margin">VALENCIA.<span>Moda</span></h1>
                        </a>


                        {/* <Router> */}
                        <nav className="navegacion">

                            <Link to="/tienda" className="boton boton-rosa" >  ir a Tienda</Link>


                        </nav>
                    </div>
                    {/* <!--cierra barra--> */}

                    <div className="texto-header">
                        <h2 className="no-margin">Indumentaria y Accesorios Importados</h2>
                        <p className="no-margin">Lorem ipsum dolor sit amet clitatem aspernatur quas sunt nulla dolorum.</p>
                    </div>
                </div>
                {/* <!--cierra contenedor--> */}
            </header>




            {
                loading ?
                    <h2>Cargando</h2> :
                    <div>


                        <form onSubmit={handleSubmit}>   {/* etiqueta formulario  ACTIVA LA FUNCION HANDLET*/}

                            <div className="input-box anima">
                                <label htmlFor="titulo" ></label><h2>Titulo</h2>
                                <input id='titulo' name='titulo' placeholder={product.titulo}  />
                            </div>


                            <div className="input-box anima">
                                <label htmlFor="descripcion"></label><h2>Descripcion</h2>
                                <input type="text" id='descripcion' name='descripcion' placeholder={product.descripcion} />
                            </div>


                            <div className="input-box anima">
                                <label htmlFor="precio"></label><h2>Precio</h2>
                                <input type="text" id='precio' name='precio' placeholder={product.precio}/>
                            </div>


                            <div className="input-box anima">
                                <label htmlFor="stock"></label><h2>Stock</h2>
                                <input type="number" id='stock' name='stock' placeholder={product.stock} />
                            </div>


                            <div className="input-box anima">
                                <label htmlFor="codigo"></label><h2>Codigo</h2>
                                <input type="text" id='codigo' name='codigo' placeholder={product.codigo} />
                            </div>

                            {
                                errorText
                                &&
                                <span style={{ color: 'red' }}>{errorText}</span>
                            }

                            {/* boton */}
                            <button type='submit' className="btn anima">Actualizar</button>



                        </form>
                    </div>

            }




        </>
    )

}

export default Edit
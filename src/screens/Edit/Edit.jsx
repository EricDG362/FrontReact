import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductoDetailId } from "../../fetching/products.fetching";
import { editarProducto } from "../../fetching/products.fetching"


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
            console.log("consol en el edit product", editProduct)
            await editarProducto(pid, editProduct) //ESTE ES EL EXPORTADO DE AUTH.FETCHING
            setErrorText('')
            // navigate('/tienda')  //QUE NAVEGE A tienda
        }
        catch (error) {

            setErrorText(error.message)
        }
    }





    return (

        <div>

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
                        <h2 className="no-margin  h2-titulo" >Indumentaria y Accesorios Importados</h2>
                        <p className="no-margin">Todo lo que buscas en nuestra casa central y mucho mas.</p>
                    </div>
                </div>
                {/* <!--cierra contenedor--> */}
            </header>




            {
                loading ?
                    <h2>Cargando</h2> :
                    <div>
                        <div className="seccion contenedor contenido-centrado">
                            <h2 className="centrar-texto fw-300">ACTUALIZAR UN PRODUCTO</h2>

                            {/* <!--creamos la etiqueta form para el formulario a llenar--> */}
                            <form onSubmit={handleSubmit} className="contactosss">

                                {/* <!--agrupa los camppos--> */}
                                <fieldset>
                                    <legend>LLENE TODOS LOS CAMPOS</legend>

                                    <label htmlFor="titulo" >TITULO: </label>
                                    <input type="text" id='titulo' name='titulo' placeholder={product.titulo} />




                                    <label htmlFor="descripcion">DESCRIPCION</label>
                                    <input type="text" id='descripcion' name='descripcion' placeholder={product.descripcion} />




                                    <label htmlFor="precio">PRECIO</label>
                                    <input type="text" id='precio' name='precio' placeholder={product.precio} />




                                    <label htmlFor="stock">STOCK</label>
                                    <input type="number" id='stock' name='stock' placeholder={product.stock} />




                                    <label htmlFor="codigo">CODIGO</label>
                                    <input type="text" id='codigo' name='codigo' placeholder={product.codigo} />
                                </fieldset>

                                {
                                    errorText
                                    &&
                                    <span style={{ color: 'red' }}>{errorText}</span>
                                }

                                {/* boton */}
                                <button type='submit' className="boton boton-rosa">ACTUALIZAR</button>

                            </form>
                        </div>
                    </div>
            }


<footer>
                <p>Siguenos en redes sociales</p>
                {/* <!--estas logos se ven gracias a fontawesome--> */}
                <div className="redesSociales">
                    {/* <!--es texto plano no una imagen x ende para agrandarlo se usa fontsize--> */}
                    <i className='bx bxl-facebook-circle'></i>
                    <i className='bx bxl-twitter' ></i>
                    <i className='bx bxl-instagram-alt' ></i>
                    <i className='bx bxl-linkedin-square' ></i>
                    <i className='bx bxl-whatsapp-square' ></i>
                </div>
                {/* <!--se le agrega el signo de copyright--> */}
                <p>&copy; 2023 Valencia Moda</p>

            </footer>



        </div>
    )

}

export default Edit
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from "react-router-dom";

import { getProducts } from '../../fetching/products.fetching'
import { eliminaProducto } from '../../fetching/products.fetching'

import imag0 from "../../screens/Home/img/valencia_moda3_1702758271498.jpeg"
import imag1 from "../../screens/Home/img/valencia_moda3_1702758271498.jpeg"
import imag2 from "../../screens/Home/img/valencia_moda3_1702758271498.jpeg"

import video from "../video/video-fondo.mp4"

// import logo from "../../screens/Home/img/fondo.logo.png"

import "./../Tienda/Tienda.css"
// import Contacto from "./Contacto";
// import Home from './Home';




const Tienda = () => {

    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(
        () => {
            getProducts()
                .then((productos) => {
                    console.log(productos)
                    setLoading(false)
                    setProducts(productos)
                })
                .catch((error) => {
                    console.error("Error al cargar productos")
                })
        },
        []
    )

    const handleDelete = async (productId) => {
        console.log("CONSOL DE HANDLEDELETE,", productId);
        try {
           
            await eliminaProducto(productId);
            navigate('/tienda')  //QUE NAVEGE A tienda
        } catch (error) {
            console.error("Error al eliminar el producto:", error.message);
        }
    };

    return (

        <div>
           


            {/* // <!-- en este contenedor aplicamos la imagen q se expande --> */}
            <header className="site-header">

            <video autoPlay muted>
               
                <source src={video} />
               
                </video>
            

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


                            <Link to="/Contacto" className="boton boton-rosa" > Contacto</Link>
                            <Link to="/" className="boton boton-rosa" >Salir</Link>



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
                    <h2>Cargando...</h2>
                    :
                    <div className='boton-agregaree'>
                        <Link to={'/add'} className="boton boton-rosa boton-agregar">Agregar + productos</Link>
                    <div className="contenedor-anuncioss">


                        {products.map(product => {
                            return (
                                <div className="anuuncios">
                                    <div key={product._id}>
                                        <img src={imag0} alt="error anuncio 2" />
                                        <div className="contenido-anuncio">
                                            <h2 className='titu-tienda'>{product.titulo}</h2>
                                            <p className='descrip-tienda'>{product.descripcion}</p>
                                            <span className='precio-tienda'>${product.precio}</span>
                                            <Link to={'/detail/' + product._id} className="boton boton-rosa d-block">Ver Detalle</Link>
                                            <button onClick={() => handleDelete(product._id)} type="button" className="boton boton-rojo d-block">Eliminar</button>

                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>

                    </div>
            }
            {/* agregado */}



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


export default Tienda
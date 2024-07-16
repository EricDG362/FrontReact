import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoDetailId } from "../../fetching/products.fetching";
import { Link } from 'react-router-dom'
import "./../Tienda/Tienda.css"


// imagenes
import imag1 from "../../screens/Home/img/valencia_moda3_1702758271498.jpeg"
import imag2 from "../../screens/Home/img/valencia_moda3_1702758271498.jpeg"
import imag3 from "../../screens/Home/img/valencia_moda3_1702758271498.jpeg"

// bootstrap
import Carousel from 'react-bootstrap/Carousel';











const DetailScreen = () => {

    const { pid } = useParams() // es un hook que nos devuelvel parametro de busqueda (pid) desestructuracion

    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)


    useEffect(() => {

        getProductoDetailId(pid) //una vez pobtenido el pid lllamamos al fetch get de producto
            .then(producto => {
                setLoading(false)
                setProduct(producto)
            })

    }, []) //para q sew ejecute una sola vez





    return (
        <div>

            {/* // <!-- en este contenedor aplicamos la imagen q se expande --> */}
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
                    <div className="seccion contenedor contenido-centrado">

                        <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <img
                                    className=" w-100 ancho" src={imag1} alt="First slide" />
                                <Carousel.Caption>
                                    <h2 className="h2-titu">{product.titulo}</h2>
                                    <p  className="p-descrip">{product.descripcion}</p>
                                    <h2 className='precio'>${product.precio}</h2>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className=" w-100" src={imag2} alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h2 className="h2-titu">{product.titulo}</h2>
                                    <p className="p-descrip">{product.descripcion}</p>
                                    <h2 className='precio'>${product.precio}</h2>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="w-100 ancho" src={imag3} alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h2 className="h2-titu">{product.titulo}</h2>
                                    <p  className="p-descrip">{product.descripcion}</p>
                                    <h2 className='precio'>${product.precio}</h2>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                        <Link to={'/edit/' + product._id} className="boton boton-rosa d-block">Editar</Link>
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

export default DetailScreen
import imag0 from "../../screens/Home/img/valencia_moda3_1702758271498.jpeg"
import imag1 from "../../screens/Home/img/valencia_moda3_1702758271498.jpeg"
import imag2 from "../../screens/Home/img/valencia_moda3_1702758271498.jpeg"
import imag3 from "../../screens/Home/img/valencia_moda3_1702758271498.jpeg"
import imag4 from "../../screens/Home/img/valencia_moda3_1702758271498.jpeg"
import imag5 from "../../screens/Home/img/valencia_moda3_1702758271498.jpeg"

import logo from "../../screens/Home/img/fondo.logo.png"

import "./../Tienda/tienda.css"




function Tienda() {

    return (

        <div>

             {/* // <!-- en este contenedor aplicamos la imagen q se expande --> */}
             <header className="site-header">
                {/* <!-- y este contenedor el texto --> */}
                <div className="contenedor">
                    {/* <!-- creamos una tipo barra para aplicar flexbox a barra y a navegacion --> */}
                    <div className="barra">
                        {/* <!-- EL enlaces a la pagina principal --> */}
                        <a href="index.html">
                            <h1 className="no-margin">VALENCIA.<span>Moda</span></h1>    
                             </a> 

{/* 
                        <Router>
                        <nav className="navegacion">

                        <Link to= "/Home"  className="boton boton-rosa" >Home</Link>


                            <Link to= "/Contacto"  className="boton boton-rosa" > Contacto</Link>

                           
                        </nav>

                        <Routes>
                            <Route path='/Contacto' element={<Contacto />}/>     
                            <Route path='/Home' element={<Home />}/> 
                        </Routes>

                        </Router> */}

                    </div>
                    {/* <!--cierra barra--> */}

                    <div className="texto-header">
                        <h2 className="no-margin">Indumentaria y Accesorios Importados</h2>
                        <p className="no-margin">Lorem ipsum dolor sit amet clitatem aspernatur quas sunt nulla dolorum.</p>
                    </div>
                </div>
                {/* <!--cierra contenedor--> */}
            </header>


            <div className="contenedor-imagen">

                {/* <img src={logo} alt="fondo" /> */}

                <h2>DESTACADOS</h2>
            </div>

            {/* ##############Tienda */}

            <main className="seccion contenedor">

                <h2 className="fw-300 centrar-texto">Nuestra Tienda</h2>
                <div className="contenedor-anuncioss">
                    <div className="anuuncios">
                        <img src={imag3} alt="Error de carga anuncio" />
                            <div className="contenido-anuncio">
                                <h3>Remera Unlimited</h3>
                                <p>100% algodon, inmejorable calidad</p>
                                <p className="precio">$8000</p>
                                <a href="#" className="boton boton-rosa d-block">Comprar</a>
                            </div>
                    </div>



                    <div className="anuuncios">
                        <img src={imag0} alt="error anuncio 2" />
                            <div className="contenido-anuncio">
                                <h3>Remera Ungry</h3>
                                <p>100% algodon, inmejorable calidad</p>

                                <p className="precio">$9000</p>
                                <a href="#" className="boton boton-rosa d-block">Comprar</a>
                            </div>
                    </div>


                    <div className="anuuncios">
                        <img src={imag1} alt="error anuncio 3" />
                            <div className="contenido-anuncio">
                                <h3>Remera Nike</h3>
                                <p>100% algodon, inmejorable calidad</p>

                                <p className="precio">$8000</p>
                                <a href="#" className="boton boton-rosa d-block">Comprar</a>
                            </div>
                    </div>

                    <div className="anuuncios">
                        <img src={imag2} alt="Error de carga anuncio" />
                            <div className="contenido-anuncio">
                                <h3>Remera Smock</h3>
                                <p>100% algodon, inmejorable calidad</p>
                                <p className="precio">$7000</p>
                                <a href="#" className="boton boton-rosa d-block">Comprar</a>
                            </div>
                    </div>



                    <div className="anuuncios">
                        <img src={imag4} alt="error anuncio 2" />
                            <div className="contenido-anuncio">
                                <h3>Remera Vint</h3>
                                <p>100% algodon, inmejorable calidad</p>

                                <p className="precio">$4000</p>
                                <a href="#" className="boton boton-rosa d-block">Comprar</a>
                            </div>
                    </div>


                    <div className="anuuncios">
                        <img src={imag5} alt="error anuncio 3" />
                            <div className="contenido-anuncio">
                                <h3>Remera Nike s</h3>
                                <p>100% algodon, inmejorable calidad</p>

                                <p className="precio">$5000</p>
                                <a href="#" className="boton boton-rosa d-block">Comprar</a>
                            </div>
                    </div>
                </div>

            </main>
               {/* ##############Tienda */}



               <footer>
    <p>Siguenos en redes sociales</p>
    {/* <!--estas logos se ven gracias a fontawesome--> */}
    <div className="redesSociales"> 
    {/* <!--es texto plano no una imagen x ende para agrandarlo se usa fontsize--> */}
        <i className="fab fa-facebook"></i> 
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-whatsapp"></i>
    </div>
    {/* <!--se le agrega el signo de copyright--> */}
    <p>&copy; 2023 Valencia Moda</p> 

</footer>




        </div>

    )

}

export default Tienda
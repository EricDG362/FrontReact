// import logo from "../../screens/Home/img/fondo.logo.png"
import '../Tienda/Tienda.css'
import { Link } from 'react-router-dom'


function Contacto() {
    return (

        <div>


            {/* <!-- en este contenedor aplicamos la imagen q se expande --> */}
            <header className="site-header">
                {/* <!-- y este contenedor el texto --> */}
                <div className="contenedor">
                    {/* <!-- creamos una tipo barra para aplicar flexbox a barra y a navegacion --> */}
                    <div className="barra">
                        {/* <!-- EL enlaces a la pagina principal --> */}
                        <a href="#">
                            <h1 className="no-margin">VALENCIA.<span>Moda</span></h1>
                        </a>
                        <nav className="navegacion">

                        <Link to= "/tienda"  className="boton boton-rosa" >Home</Link>


                            <Link to= "/tienda"  className="boton boton-rosa" >Tienda</Link>
                        </nav>

                    </div>
                    {/* <!--cierra barra--> */}

                    <div className="texto-header">
                        <h2 className="no-margin">Quieres ser re-vendedora de Valencia-Moda ?</h2>
                        <p className="no-margin">Contactate con nosotros</p>
                    </div>
                </div>
                {/* <!--cierra contenedor--> */}
            </header>





            {/*empieza Contacto */}
            <main className="seccion contenedor contenido-centrado" />
            <h2 className="centrar-texto fw-300">Llena el Formulario</h2>

            {/* <!--creamos la etiqueta form para el formulario a llenar--> */}
            <form action="" className="contactosss" />

            {/* <!--agrupa los camppos--> */}
            <fieldset>
                <legend>Informacion Personal</legend>
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" id="nombre" placeholder="Tu Nombre" />

                <label htmlFor="email">E-mail: </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Tu correo electronico"
                    required
                />

                <label htmlFor="telefono">Telefono: </label>
                <input
                    type="tel"
                    id="telefono"
                    placeholder="Tu telefono"
                    required
                />

                <label htmlFor="mensaje">Mensaje: </label>
                <textarea id="mensaje"></textarea>
            </fieldset>

            <fieldset>
                <legend>Contacto</legend>

                <p>Como Desea Ser Contactado:</p>
                <div className="forma">
                    <label htmlFor="telefonoRadio">Telefono</label>
                    <input
                        type="radio"
                        id="telefonoRadio"
                        value="Telefono"
                        name="contactos"
                    />
                    <label htmlFor="correo">Correo</label>
                    <input type="radio" id="correo" value="correo" name="contactos" />
                </div>

                <p>Si elijio telefono, indique fecha y hora</p>

                <label htmlFor="fecha">Fecha: </label>
                <input type="date" id="fecha" />
                <label htmlFor="hora">Hora:</label>
                <input type="time" id="hora" min="09:00" max="06:00" />
            </fieldset>

            <input type="submit" value="Enviar" className="boton boton-rosa" />

            {/* termina contacto */}


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

export default Contacto
import { useNavigate, Link } from 'react-router-dom'
import React, { useState } from 'react'
import { adddproduct } from '../../fetching/products.fetching'



import "../Tienda/Tienda.css"







const AgregarProducto = () => {


    const [errorText, setErrorText] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (event) => { //FUNCION HANDLETSUBMIT /RECIBE UN EVENTO
        try {
            event.preventDefault()  //PREVIENE EL ENVIO DEL FORMULARIO O SEA Q PREVIENE Q LA PAGINA SE RECARGE
            const sumarProducto = {
                titulo: event.target.titulo.value, // (PROPIEDAD NAME es el value)
                descripcion: event.target.descripcion.value,
                precio: event.target.precio.value,
                stock: event.target.stock.value,
                codigo: event.target.codigo.value
            }
            await adddproduct(sumarProducto) //ESTE ES EL EXPORTADO DE AUTH.FETCHING
            setErrorText('')
            navigate('/tienda')  //QUE NAVEGE A tienda
        }
        catch (error) {

            setErrorText(error.message)
        }
    }





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

                            <Link to="/tienda" className="boton boton-rosa" >Tienda</Link>
                            <Link to="/" className="boton boton-rosa" >salir</Link>

                        </nav>

                    </div>
                    {/* <!--cierra barra--> */}

                    <div className="texto-header">
                        <h2 className="no-margin">lo mejor de Valencia-Moda esta por venir, no te lo pierdas</h2>
                        <p className="no-margin">Contactate con nosotros</p>
                    </div>
                </div>
                {/* <!--cierra contenedor--> */}
            </header>



            {/*empieza formulario */}
            <div className="seccion contenedor contenido-centrado">
                <h2 className="centrar-texto fw-300">AGREGAR PRODUCTO</h2>

                {/* <!--creamos la etiqueta form para el formulario a llenar--> */}
                <form onSubmit={handleSubmit} className="contactosss">

                    {/* <!--agrupa los camppos--> */}
                    <fieldset>
                        <legend>LLENE TODOS LOS CAMPOS</legend>

                        <label htmlFor="titulo">TITULO: </label>
                        <input type="text" id="titulo" name='titulo' placeholder="INGRESE TITULO MAYOR A 3 CARACTERES" />

                        <label htmlFor="descripcion">DESCRIPCION: </label>
                        <input
                            type="descripcion"
                            id="descripcion"
                            name='descripcion'
                            placeholder="DESCRPCION MAYOR A 20 CARACTERES"
                            required
                        />

                        <label htmlFor="precio">PRECIO: </label>
                        <input
                            type="text"
                            id="precio"
                            name='precio'
                            placeholder="COLOQUE PRECIO MAYOR A $1"
                            required
                        />

                        <label htmlFor="stock">STOCK: </label>
                        <input type="text" id="stock" name='stock' placeholder="COLOQUE UN STOCK MAYOR A 1" />

                        <label htmlFor="codigo">CODIGO: </label>
                        <input type="text" id="codigo" name='codigo' placeholder="COLOQUE UN CODIGO MAYOR A 3 CARACTERES" />
                    </fieldset>

                    {
                        errorText
                        &&
                        <span style={{ color: 'red' }}>{errorText}</span>
                    }



                    {/* boton */}
                    <button type='submit' className="boton boton-rosa">AGREGAR</button>

                </form>

            </div>

        </div>
    )

}

export default AgregarProducto
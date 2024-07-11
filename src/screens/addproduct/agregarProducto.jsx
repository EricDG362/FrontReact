import {useNavigate} from 'react-router-dom'
import React, { useState } from 'react'
import { adddproduct } from '../../fetching/products.fetching'



import "./../Tienda/Tienda.css"







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





    return(

        <div>

<form onSubmit={handleSubmit}>   {/* etiqueta formulario  ACTIVA LA FUNCION HANDLET*/}

<div className="input-box anima">
    <label htmlFor="titulo" ></label>
   
    <input id='titulo' name='titulo' placeholder='ingrese nombre del producto:' />
</div>

<div className="input-box anima">
    <label htmlFor="descripcion"></label>
   
    <input type="text" id='descripcion' name='descripcion' placeholder="descripcion:" />
</div>

<div className="input-box anima">
    <label htmlFor="precio"></label>
   
    <input type="text" id='precio' name='precio' placeholder="precio" />
</div>

<div className="input-box anima">
    <label htmlFor="stock"></label>
   
    <input type="number" id='stock' name='stock' placeholder="stock:" />
</div>

<div className="input-box anima">
    <label htmlFor="codigo"></label>
   
    <input type="text" id='codigo' name='codigo' placeholder="codigo:" />
</div>

{
    errorText
    &&
    <span style={{ color: 'red' }}>{errorText}</span>
}

{/* boton */}
<button type='submit' className="btn anima">Agregar</button>



</form>


        </div>

    )

}

export default AgregarProducto
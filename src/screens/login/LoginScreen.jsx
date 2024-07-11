import React, { useState } from 'react'
import { login } from '../../fetching/auth.fetching'
import { Link, useNavigate } from 'react-router-dom'

import "./../login/Login.css"



const LoginScreen = () => {
    const [errorText, setErrorText] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (event) => { //FUNCION HANDLETSUBMIT /RECIBE UN EVENTO
        try {
            event.preventDefault()  //PREVIENE EL ENVIO DEL FORMULARIO O SEA Q PREVIENE Q LA PAGINA SE RECARGE
            const usuario = {
                email: event.target.email.value, //ACA RECIBE DEL INPUT EMAIL (PROPIEDAD NAME)
                password: event.target.password.value  //Y ACA DEL PASS (DELA PROPIEDAD NAME)
            }
            
            await login(usuario) //ESTE ES EL EXPORTADO DE AUTH.FETCHING
            setErrorText('')
            navigate('/tienda')  //QUE NAVEGE A HOME
        }
        catch (error) {

            setErrorText(error.message)
        }
    }
    return (

        <div className="wrapper">

            <span className="animacion"></span>
            <span className="animacion2"></span>

            <div className="form-box login ">

                <h2 className="anima" style={{ '--i': 1, '--j': 22 }}>Ingrese Login</h2>

                <form onSubmit={handleSubmit}>   {/* etiqueta formulario  ACTIVA LA FUNCION HANDLET*/}

                    <div className="input-box anima" style={{ "--i": 1, "--j": 22 }}>
                        <label htmlFor="email" ></label>
                        <i className='bx bxs-user'></i> {/* <!--sacado de boxicons --> */}
                        <input id='email' name='email' placeholder='Ingrese su email:' />
                    </div>

                    <div className="input-box anima" style={{ '--i': 2, '--j': 23 }}>
                        <label htmlFor="password"></label>
                        <i className='bx bxs-lock-alt'></i>
                        <input type="text" id='password' name='password' placeholder="Ingrese su contraseña:" />
                    </div>

                    {
                        errorText
                        &&
                        <span style={{ color: 'red' }}>{errorText}</span>
                    }

                    {/* boton */}
                    <button type='submit' className="btn anima" style={{ '--i': 3, '--j': 24 }}>Iniciar sesion</button>

                    {/* enlace a registro */}
                    <div className="logreg-link anima" style={{ '--i': 4, '--j': 25 }}>
                        <p>Si aun no posees cuenta, <Link to={'/register'} className="register-link" >Registrate</Link></p>
                    </div>

                </form>
            </div>

            {/* mensaje de bienvenida */}
            <div className="info-text login">   
                <h2 className="anima" style={{ '--i': 0, '--j': 20 }}>Bienvenido</h2>
                <p className="anima" style={{ '--i': 1, '--j': 21 }}>
                    "Encuentre las mejores marcas, precios y calidad en toda la imdumentaria que usted necesita"
                </p>
            </div>

            {/* ###################################################################### */}

           


            {/* aca finaliza el wrapper */}
    </div>
    )
}

export default LoginScreen
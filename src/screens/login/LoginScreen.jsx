import React, { useState } from 'react'
import { login } from '../../fetching/auth.fetching'
import { Link, useNavigate } from 'react-router-dom'
import imagen from "../Home/img/logo.pagina.png"

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
        <>



            <div className="body">
                <section className='Imagen-formu'>

                </section>

                <section className='formulario'>
                    <form onSubmit={handleSubmit}>
                        <h2>Acceso a Login</h2>

                        <label htmlFor="email">Email :</label>
                        <input type="text" name="email" id="email" placeholder='  Ingrese su email:' />

                        <label htmlFor="password">Password :</label>
                        <input type="text" name="password" id="password" placeholder="  Ingrese su contraseña:" />
                        <br />

                        {
                            errorText
                            &&
                            <span style={{ color: 'red' }}>{errorText}</span>
                        }

                        {/* boton */}
                        <button type='submit' className="btn anima">Iniciar sesion</button>


                        {/* enlace a registro */}
                        <div className="enlace">
                            <p>Si aun no posees una cuenta, <Link to={'/register'} className="register-link" >Registrate</Link></p>
                        </div>

                    </form>
                </section>

            </div>

        </>

    )
}

export default LoginScreen
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registrar } from '../../fetching/auth.fetching'
import imagBienv from "../Home/img/bienvenido.png"

import "./../login/Login.css"

const RegisterScreen = () => {
    const [errorText, setErrorText] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        try {
            event.preventDefault()
            const usuario = {
                email: event.target.email.value,
                password: event.target.password.value
            }
            console.log(usuario)
            await registrar(usuario)
            setErrorText('')
            navigate('/login')
        }
        catch (error) {
            setErrorText(error.message)
        }
    }
    return (


        <>



        <div className="body">
            <section className='Imagen-formu'>
            <img src={imagBienv} alt="" />
            </section>

            <section className='formulario'>
                <form onSubmit={handleSubmit}>
                    <h2>Registrate</h2>

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
                    <button type='submit' className="btn anima">Registrarse</button>


                    {/* enlace a registro */}
                    <div className="enlace">
                        <p>Si posees una cuenta vuelve al login, <Link to={'/login'} className="register-link" >Login</Link></p>
                    </div>

                </form>
            </section>

        </div>

    </>

    )
}

export default RegisterScreen
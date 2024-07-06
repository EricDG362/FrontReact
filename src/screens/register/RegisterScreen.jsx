import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registrar } from '../../fetching/auth.fetching'

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


        <div className="wrapper">

            <div className="form-box register">

                <h2 className="anima" style={{ "--i": 17, "--j": 1 }}>Registrarse</h2>

                <form onSubmit={handleSubmit}>

                    <div className="input-box anima" style={{ "--i": 18, "--j": 2 }}>
                        <label htmlFor="email"></label>
                        <i className='bx bxs-user'></i>
                        <input placeholder='Ingrese su email:' id='email' name='email' />
                    </div>

                    <div className="input-box anima" style={{ "--i": 19, "--j": 3 }}>
                        <label htmlFor="password"></label>
                        <i className='bx bxs-lock-alt'></i>
                        <input type="text" placeholder='Ingrese su contraseña:' id='password' name='password' />
                    </div>

                    {
                        errorText
                        &&
                        <span style={{ color: 'red' }}>{errorText}</span>
                    }

                    <button type='submit' className="btn anima" style={{ "--i": 21, "--j": 5 }} >Registrar</button>

                    <div className="logreg-link anima" style={{ "--i": 22, "--j": 6 }}>
                        <p>Si posees una cuenta regrese al login, <Link to={'/login'} className="login-link">Volver</Link></p>
                    </div>

                </form>
            </div>

            <div className="info-text register">
                <h2 className="anima" style={{ "--i": 17, "--j": 0 }}>Crea una cuenta</h2>
                <p className="anima" style={{ "--i": 18, "--j": 1 }}> Accede a nuestros beneficios para acceder a tus compras y guardar tus favoritos  </p>
            </div>

        </div>

    )
}

export default RegisterScreen
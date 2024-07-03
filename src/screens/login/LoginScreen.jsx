import React, { useState } from 'react'
import { login } from '../../fetching/auth.fetching'
import { Link, useNavigate } from 'react-router-dom'


const LoginScreen = () => {

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
            await login(usuario)
            setErrorText('')
            navigate('/login')
        }
        catch (error) {

            setErrorText(error.message)
        }
    }

    const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };



    return (


        
         <div className="wrapper">
      <span className="animacion"></span>
      <span className="animacion2"></span>

      <div className="form-box login">
        <h2 className="anima" style={{ '--i': 0, '--j': 21 }}>Ingreso</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-box anima" style={{ '--i': 1, '--j': 22 }}>
            <input type="text" required />
            <label htmlFor="">Usuario</label> {/* Cambiado for a htmlFor */}
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box anima" style={{ '--i': 2, '--j': 23 }}>
            <input type="password" required />
            <label htmlFor="">Contraseña</label> {/* Cambiado for a htmlFor */}
            <i className="bx bxs-lock-alt"></i>
          </div>

          <button type="submit" className="btn anima" style={{ '--i': 3, '--j': 24 }}>Acceder</button>

          <div className="logreg-link anima" style={{ '--i': 4, '--j': 25 }}>
            <p>No posees una cuenta? <a href="#" className="register-link">Registrate</a></p>
            <button type='submit' className="register-link">Registrate</button>
          </div>
        </form>
      </div>

      <div className="info-text login">
        <h2 className="anima" style={{ '--i': 0, '--j': 20 }}>Bienvenido</h2>
        <p className="anima" style={{ '--i': 1, '--j': 21 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ea tenetur aliquid tempore, minus, quas dolores esse recusandae et neque ut debitis similique natus soluta odio explicabo perspiciatis fugiat? Cupiditate.
        </p>
      </div>

      {/* ############################################################################################################# */}

      <div className="form-box register">
        <h2 className="anima" style={{ '--i': 17, '--j': 1 }}>Registro</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-box anima" style={{ '--i': 18, '--j': 2 }}>
            <input type="text" required />
            <label htmlFor="">Usuario</label> {/* Cambiado for a htmlFor */}
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box anima" style={{ '--i': 19, '--j': 3 }}>
            <input type="text" required />
            <label htmlFor="">Email</label> {/* Cambiado for a htmlFor */}
            <i className="bx bxs-envelope"></i>
          </div>

          <div className="input-box anima" style={{ '--i': 20, '--j': 4 }}>
            <input type="password" required />
            <label htmlFor="">Contraseña</label> {/* Cambiado for a htmlFor */}
            <i className="bx bxs-lock-alt"></i>
          </div>
            {/* BOTON CAMBIAR A REGISTRO */}
          <button type="submit" className="btn anima" style={{ '--i': 21, '--j': 5 }}>Registrarme</button>

          <div className="logreg-link anima" style={{ '--i': 22, '--j': 6 }}>
            {/* BOTON ACCEDER */}
            <p>Ya tienes una cuenta? <button type='submit' className="login-link">Acceder</button></p>
          

          </div>
        </form>
      </div>

      <div className="info-text register">
        <h2 className="anima" style={{ '--i': 17, '--j': 0 }}>Bienvenido</h2>
        <p className="anima" style={{ '--i': 18, '--j': 1 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ea tenetur aliquid tempore, minus, quas dolores esse recusandae et neque ut debitis similique natus soluta odio explicabo perspiciatis fugiat? Cupiditate.
        </p>
      </div>
    </div>



    )




}

export default LoginScreen
import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoginScreen from './screens/login/LoginScreen'
import RegisterScreen from './screens/register/RegisterScreen'
import HomeScreen from './screens/Home/HomeScreen'
import Tienda from './screens/Tienda/Tienda'
import Contacto from './screens/Contacto/Contacto'


import { verificarToken } from './fetching/auth.fetching'
import DetailScreen from './screens/Detail/DetailScreen'
import AgregarProducto from './screens/addproduct/agregarProducto'


const RouterList = () => {

    const navigate = useNavigate()
	useEffect(() => {
		verificarToken()
			.then(resultado => {
				if (resultado.status == 200) {
					navigate('/tienda')
				}
				else {
					navigate('/login')
				}
			})
	}
	, []
	)




	return (
		<Routes>
			<Route path='/login' element={<LoginScreen />} />
			<Route path='/register' element={<RegisterScreen />} />
			 <Route path='/' element={<LoginScreen />} />             {/*//LA RUTA PRINCIPAL O DE INICIO */}
			<Route path='/home' element={<HomeScreen />} />
			<Route path='/tienda' element={<Tienda />} />
			<Route path='/contacto' element={<Contacto />} />
			<Route path='/detail/:pid' element={<DetailScreen />} />
			<Route path='/add' element={<AgregarProducto />} />
			+


		</Routes>
	)
}
  
  export default RouterList
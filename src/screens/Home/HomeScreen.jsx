import React, { useEffect,  useState } from 'react'
import { getProducts } from '../../fetching/products.fetching'
import { Link } from 'react-router-dom'

const HomeScreen = () => {

  const [products, setProducts] = useState ([])
  const [loading, setLoading] = useState (true)
 
  useEffect( 
    () => {
      getProducts()
      .then((productos) => { 
       console.log(productos)
        setLoading(false)
        setProducts(productos)
      })
      .catch((error) => {
        console.error("Error al cargar productos")
      })
    },
    []
  )

  return (
    <div>
        <h1>Bienvenido!</h1>
        {
          loading ?
          <h2>Cargando...</h2>
          :
          <div>
            {products.map(product => {
              return (    //esto deberia ser un componente
                <div key={product._id}> 
                <h2>{product.titulo}</h2>
                <p>{product.descripcion}</p>
                <span>{product.precio}</span>
                <Link to={'/detail/' + product._id}>Ver Detalle</Link>
                </div>
              )
            })}
          </div>
        }

     



    </div>

  )
}

export default HomeScreen
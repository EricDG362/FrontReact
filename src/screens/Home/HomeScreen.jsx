import React, { useEffect, useState } from 'react'

import "./../Tienda/Tienda.css"



const HomeScreen = () => {
  const [map, setMap] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadMapScript = () => {
      // Verificar si el script ya está en el documento
      if (document.getElementById('google-maps-script')) {
        initMap();
        return;
      }

      const script = document.createElement('script');
      script.id = 'google-maps-script';
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCtS5WSxS2KUtXC7w44yEbGeNaJZpr9nwI';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (!window.google || !window.google.maps) {
          console.error("Google Maps script failed to load.");
          return;
        }
        initMap();
      };

      script.onerror = () => {
        console.error("Failed to load the Google Maps script.");
      };

      // Callback global para inicializar el mapa
      window.initMap = initMap;
    };

    const initMap = () => {
      if (map) return;

      const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -31.9457883, lng: -65.1911810 },
        zoom: 15,
      });
      setMap(mapInstance);
    };

    // Cargar el script de Google Maps si no está ya cargado
    setLoading(false)
    loadMapScript();

    // Limpiar el mapa al desmontar el componente
    return () => {
      if (map) {
        map.setMap(null);
      }
    };
  }, [map]);

  return (
    // <div>


    //   <header className="site-header">
    //     {/* <!-- y este contenedor el texto --> */}
    //     <div className="contenedor">
    //       {/* <!-- creamos una tipo barra para aplicar flexbox a barra y a navegacion --> */}
    //       <div className="barra">
    //         {/* <!-- EL enlaces a la pagina principal --> */}
    //         <a href="#">
    //           <h1 className="no-margin">VALENCIA.<span>Moda</span></h1>
    //         </a>


    //         {/* <Router> */}
    //         <nav className="navegacion">

    //           <Link to="/home" className="boton boton-rosa" >Home</Link>

    //           <Link to="/Contacto" className="boton boton-rosa" > Contacto</Link>


    //         </nav>
    //       </div>
    //       {/* <!--cierra barra--> */}


    //       <div className="texto-header">
    //         <h2 className="no-margin">Indumentaria y Accesorios Importados</h2>
    //         <p className="no-margin">Lorem ipsum dolor sit amet clitatem aspernatur quas sunt nulla dolorum.</p>
    //       </div>

    //     </div>
    //     {/* <!--cierra contenedor--> */}


    //   </header>


    //   {
    //     loading ?
    //       <h2>Cargando...</h2>
    //       :


    //       <div id="map" style={{ width: '100%', height: '400px' }}></div>
    //   }

    // </div>
    <div></div>

  )
}

export default HomeScreen
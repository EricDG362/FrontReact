// aca trabajamos los fetch q mandemos a nuestro backend



export const HTTP = {
    //GET TRAE INFORMACION DE LA BASE
    GET: async (url, headers) => {   //VA A RECIBIR UNA RUTA
        const response = await fetch(url, { //ES RUTA LA USA EL FETCH
            method: 'GET', //NECESITA RECIBIR UN METODO
            headers: headers  //NECESITA RECIBIR UNA SERIE DE HEADERS

        })
        return response.json()
    },
    //POST ENVIA INFORMACION  A LA BASE
    POST: async (url, body) => {    //VA A RECIBIR UNA RUTA Y UN BODY
        const response = await fetch(url, {
            method: 'POST',
            headers: { //avisa ATRAVES DEL HEADER al backend que el contenido que va a enviar es de tipo json (XQ SINO LE ENVIABA UN OBJETO VACIO AL BODY)
                'Content-Type': 'application/json',
                'Authorization':localStorage.getItem("token")
            },
            body: JSON.stringify(body) //EL BODY PASA DE STRING A JSON XQ EL BACKEND RECIBE JSON
        })
        return response.json() //HACEMOS QUE LA RESPUESTA SE TRANSFORME EN JASON

    },


    PUT: () => {

    },


    DELETE: async (url, headers = { 'Content-Type': 'application/json' }) => {
        try {
          const response = await fetch(url, {
            method: 'DELETE',
            headers: headers
          });
          if (!response.ok) {
            throw new Error(`Error en DELETE: ${response.status} - ${response.statusText}`);
          }
          return await response.json();
        } catch (error) {
          console.error("DELETE request failed:", error);
          throw error;
        }
      }
    };




// URL de vercel donde tengo despegado mi back
export const URL = {
    URL_API: 'https://back-mongo-db.vercel.app'
}
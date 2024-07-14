
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
                'Authorization': localStorage.getItem("token")
            },
            body: JSON.stringify(body) //EL BODY PASA DE STRING A JSON XQ EL BACKEND RECIBE JSON
        })
        return response.json() //HACEMOS QUE LA RESPUESTA SE TRANSFORME EN JASON

    },


    PUT: async (url, body) => {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Error al actualizar el producto');
        }
        return response.json();
    },




DELETE: async (url, headers = { 'Content-Type': 'application/json' }) => {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: headers
    })
    return response.json();
}


};





// URL de vercel donde tengo despegado mi back
export const URL = {
    URL_API: 'https://back-mongo-db.vercel.app'
}
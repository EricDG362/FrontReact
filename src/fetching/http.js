// aca trabajamos los fetch q mandemos a nuestro backend



  export  const HTTP = {

    GET: async (url, headers) =>{
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
  
        })
        return response.json()
    },

        POST: async (url,body) => {
            const response = await fetch(url,{
                method: 'POST', 
                headers: { //avisa al backend que el contenido que va a enviar es de tipo json
                    'Content-Type':'application/json'
                }, 
                body:JSON.stringify(body)
            })
            return response.json()

        },
        PUT: () => {

        },
        DELETE: () => {

        }
    }


    // URL de vercel donde tengo despegado mi back
   export const URL ={
        URL_API: 'https://back-mongo-db.vercel.app'
    }
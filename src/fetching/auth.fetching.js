import { HTTP, URL } from "./http" //IMPORTO EL HTTP QUE ES EL OBJETO Q NECESITO PARA METODO Y EL URL QUE ES EN ESTE CASO VERCEL


const ROUTE = '/api/auth'

export const login = async (usuario) => { //LA EXPORTAMOS AL LOGINSCREEN
    try {
        const result = await HTTP.POST(URL.URL_API + ROUTE + '/login', usuario)//LLAMAMOS A URL Y .URL_API QUE ES LA Q ESTA DE VERCEL

        if (!result.ok) {
            throw result /* El formato {status: 400, message: 'inexistent email'} */
        }
        else {
            //Guardo el token en localstorage 
            localStorage.setItem('token', result.token)
        }

    }
    catch (error) {
        /* console.error('Error en logueo', error) */
        throw { message: error.message }
    }
}


export const registrar = async (usuario) => { //VA A RECIBIR UN USUARIO
    try {
        const result = await HTTP.POST(URL.URL_API + ROUTE + '/register', usuario) //LLAMAMOS AL OBJETO HTTP LE PONEMOS QUE METODO NECESITAMOS (.POST)
        if (!result.ok) {
            throw result
        }
    }
    catch (error) {
        /* console.error('Error en logueo', error) */
        throw { message: error.message }
    }
}



export const verificarToken = async () => {
    try {
        const token = localStorage.getItem('token')
        const headers = new Headers()
        headers.append('Authorization', token)
        const result = await HTTP.GET(URL.URL_API + ROUTE + '/verify-token', headers)
        return result
    }
    catch (error) {
        console.log(error)
    }
}

export const eliminar = async (pid) => {
    try {
        const result = await HTTP.DELETE(`${URL.URL_API}${ROUTE}/${pid}`);
        return result;
    } catch (error) {
        console.error("Error al eliminar el producto:", error.message);
        throw { message: error.message };
    }
};




export const AgergarProduct = async (addproduct) => { //VA A RECIBIR UN producto
    try {
        const result = await HTTP.POST(URL.URL_API + ROUTE + '/add', addproduct) //LLAMAMOS AL OBJETO HTTP LE PONEMOS QUE METODO NECESITAMOS (.POST)
        if (!result.ok) {
            throw result
        }
    }
    catch (error) {
        /* console.error('Error en logueo', error) */
        throw { message: error.message }
    }
}
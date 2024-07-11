
import {HTTP, URL} from "./http"

const   PRODUCTS_ROUTE = "/api/products"


const getProducts = async () => {

    const response = await HTTP.GET(URL.URL_API + PRODUCTS_ROUTE)
    return response.productos

} 

const getProductoDetailId   = async (pid) => {
    const response = await HTTP.GET(URL.URL_API + PRODUCTS_ROUTE + "/" + pid)
    return response.producto
}


const adddproduct =  async (sumarProducto) => {
    try {
        const response = await HTTP.POST(URL.URL_API + PRODUCTS_ROUTE, sumarProducto)
        console.log(response)
        return response.products
        
    } catch (error) {
        console.error('error al crear producto', error.message)
        throw{message: error.message}
    }


} 

const AgergarProduct = async (sumarProducto) => { //VA A RECIBIR UN producto
    try {
        const result = await HTTP.POST(URL.URL_API + PRODUCTS_ROUTE + '/add' ,sumarProducto) //LLAMAMOS AL OBJETO HTTP LE PONEMOS QUE METODO NECESITAMOS (.POST)
        if (!result.ok) {
            throw result
        }
    }
    catch (error) {
        
        throw { message: error.message }
    }
}







export {getProducts, getProductoDetailId, adddproduct, AgergarProduct}
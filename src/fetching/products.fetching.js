
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
       
        return response.products
        
    } catch (error) {
        console.error('error al crear producto', error.message)
        throw{message: error.message}
    }
} 


 const eliminaProducto = async (pid) => {
    console.log("log de pro_fetch", pid)
    try {
        const result = await HTTP.DELETE(URL.URL_API + PRODUCTS_ROUTE + "/" + pid);
        return result;
    } catch (error) {
        console.error("Error al eliminar el producto:", error.message);
        throw { message: error.message };
    }
};







export {getProducts, getProductoDetailId, adddproduct, eliminaProducto}
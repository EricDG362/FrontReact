
import { HTTP, URL } from "./http"

const PRODUCTS_ROUTE = "/api/products"


const getProducts = async () => {

    const response = await HTTP.GET(URL.URL_API + PRODUCTS_ROUTE)
    return response.productos

}

const getProductoDetailId = async (pid) => {
    const response = await HTTP.GET(URL.URL_API + PRODUCTS_ROUTE + "/" + pid)
    return response.producto
}


const adddproduct = async (sumarProducto) => {
    try {
        const response = await HTTP.POST(URL.URL_API + PRODUCTS_ROUTE, sumarProducto)

        return response.products



    } catch (error) {
        console.error('error al crear producto', error.message)
        throw { message: error.message }
    }
}


const eliminaProducto = async (pid) => {

    try {
        const result = await HTTP.DELETE(URL.URL_API + PRODUCTS_ROUTE + "/" + pid);
        return result;
    } catch (error) {

        throw { message: error.message };
    }
};


// const editarProducto = async (pid, editProduct) => {

//     try {
//         const result = await HTTP.PUT(URL.URL_API + PRODUCTS_ROUTE + "/" + pid, editProduct);
//         console.log("🚀 ~ consol de editarproducto:", result.products)

//         return result.products;
//     } catch (error) {

//         throw { message: error.message };
//     }
// };

const editarProducto = async (pid, producto) => {
    console.log("consol de editarproducto en el fetching producto:", producto)
    console.log("consol de pid  editarproducto en el fetching:", pid)

    
    const { titulo, descripcion, precio, stock, codigo} = producto;
    try {
        const resultadoModificar = await Product.findByIdAndUpdate(pid, {
            titulo,
            descripcion,
            precio,
            stock,
            codigo,
            
        }, { new: true });

        if (!resultadoModificar) {
            throw { status: 404, message: 'PRODUCTO CON ID ' + pid + ' NO ENCONTRADO' };
        }
        return resultadoModificar;
    }
    catch (error) {
        if (error.status === 404) {
            throw error;
        } else {
            throw { status: 500, message: 'ERROR INTERNO EN LA BASE DE DATOS.', error };
        }
    }

}


export { getProducts, getProductoDetailId, adddproduct, eliminaProducto, editarProducto }
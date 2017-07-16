'use strict'

const messages = [
    {
        language: 'ES',
        product: {
            productsGetError: 'Ha ocurrido un error obteniendo los productos:',
            productsNotFound: 'No se han encontrado producto',
            productGetError: 'Ha ocurrido un error obteniendo el producto:',
            productNotFound: 'No he ha encontrado el producto',
            productAddError: 'Error al añadir el producto:',
            productUpdateError: 'Error al eliminar el producto:',
            productDeleteError: 'Error al eliminar el producto:',
            productDeleteOk: 'Se ha eliminado el producto correctamente',
            
        },
        app:{
            connectionDbError: 'Error al conectar la base de datos:',
            connectionDbOk: 'conectado a la BD mongoose',
            apiRunOk: 'API REST Corriendo en'
        }
    },
    {
        language: 'EN',
        product: {
            productsGetError: 'an error obtaining the products occurred:',
            productsNotFound: 'Not found product',
            productGetError: 'has occurred an error obtaining the product:',
            productNotFound: 'Have not found you the product',
            productAddError: 'Error adding product:',
            productUpdateError: 'Error to remove the product:',
            productDeleteError: 'Error to remove the product:',
            productDeleteOk: 'It has the product successfully removed',
            
        },
        app:{
            connectionDbError: 'Error when connecting to the database:',
            connectionDbOk: 'connected to the BD mongoose',
            apiRunOk: 'API REST running in'
        }
    }
]

function getMessages(language) {
    return messages.find(m => m.language === language)
}

module.exports = { messages, getMessages }
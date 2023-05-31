module.exports = {
    buscar : function(nombre){
        const producto = this.productos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase())
        return producto
      } 
}
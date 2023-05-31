module.exports = {
    filtrar : function(categoria){
        const productosFiltrados = this.productos.filter(producto => producto.categoria === categoria.toLowerCase());
        return productosFiltrados
      }
}
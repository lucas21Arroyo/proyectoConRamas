module.exports = {
    agregar : function(nombre,marca,precio,descuento){
        let productos = this.productos;
        let ultimoId = productos[productos.length - 1] ? productos[productos.length - 1].id : 0;
        
        let nuevoProducto = new Producto(ultimoId + 1,nombre,marca,precio,descuento);
    
        productos.push(nuevoProducto)
        
        escribirJSON(productos)
    
        return `El producto "${nuevoProducto.nombre} | ${nuevoProducto.marca}"  se registró satisfactoriamente`
      }
}

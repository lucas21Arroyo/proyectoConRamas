module.exports = {
    editar : function(id){

        const productoAModificar = this.productos.find(producto => producto.id === id);
    
        if(!productoAModificar){
          return `Mmmmm, 404 NOT FOUND`
        }
    
        const {nombre, marca} = productoAModificar;
        const productosModificados =  this.productos.map(producto => {
          
          if(producto.id === id){
            producto.stock = !producto.stock
          }
          
          return producto
        })
    
        escribirJSON(productosModificados);
    
        return `El producto "${nombre} | ${marca}" se modificó satisfactoriamente`
      }
}
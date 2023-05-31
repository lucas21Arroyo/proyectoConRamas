module.exports = {
    listar: function (productos = this.productos) {
        console.log("\n***************LISTA DE PRODUCTOS *****************\n".yellow);
        productos.forEach(({id, nombre, marca, precio, stock},i) => {
            console.log(
              `${id} - ${nombre} ${marca} $${precio} | ${stock ? 'OK' : 'SIN STOCK'}`
            );
        });
        console.log("\n***************************************************\n".yellow);
    
        return null
      }
}
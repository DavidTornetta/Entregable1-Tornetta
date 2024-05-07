const stockProductos = []

function cargarDatosProductos(nombre,marca,tipo,valor){
    const producto = {
        nombre:nombre,
        marca:marca,
        tipo:tipo,
        valor:valor
    }
    stockProductos.push(producto)
}

function verStockActual(){
    for (const producto of stockProductos) {
        alert("Nombre: " + producto.nombre + " Marca: " + producto.marca + " Tipo: " + producto.tipo + " Valor: " + producto.valor)
    }
}

function verProductoDeterminado(nombre){
    for (const producto of stockProductos) {
        if(producto.nombre == nombre){
            alert("Nombre: " + producto.nombre + " Marca: " + producto.marca + " Tipo: " + producto.tipo + " Valor: " + producto.valor)
        }
    }
}

function main(){
    let continuar = confirm("Controlar Stock")
    while(continuar){
        const controlarStock = prompt(" Que accion desea realizar (cargarProducto, verStock, verProducto)")
        if(controlarStock == "cargarProducto"){
            const cargarNombre = prompt("ingrese nombre del producto")
            const cargarMarca = prompt("ingrese marca del producto")
            const cargarTipo = prompt("ingrese tipo del producto")
            const cargarValor = prompt("ingrese valor del producto")
            cargarDatosProductos(cargarNombre,cargarMarca,cargarTipo,cargarValor)
        }else if(controlarStock == "verStock"){
            verStockActual()
        }else if(controlarStock == "verProducto"){
            const cargarNombre = prompt("Ingrese nombre del producto que desee ver")
            verProductoDeterminado(cargarNombre)
        }
        else {
            alert("Esa accion no es valida")
        }
        continuar = confirm("¿Desea realizar otra accion?")
    }
}

main()
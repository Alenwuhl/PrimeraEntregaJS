// Defino las constantes
const prendas = [
    {id: 1, nombre: "Teddy", precio: 2990, stock: 20},
    {id: 2, nombre: "Buzo Jogging", precio: 2490, stock: 40},
    {id: 3, nombre: "Remera XL", precio: 1990, stock: 60}
]
const carrito = []

// La clase compra tiene la info de la compra que hace el usuario
class compras {
    constructor(carritoDeCompras){
        this.carrito = carritoDeCompras
        let cantCuotas = 1
        let importeCadaCuota = 0   // esta propiedad contiene el importe de cada cuota
    }
    obtenerSubtotal(){
        if (this.carrito.length > 0) {
            return this. carrito.reduce((acc, prenda)=> acc + prenda.precio, 0)
        }
    }
}

function main() {
    comprar()
}

function comprar() {
    let respuesta = true
    console.log("Productos disponibles:")
    console.table(prendas)
    while (respuesta) {
        let id = prompt("Ingresa el ID de la prenda que deseas comprar:")
        let prendaElegida = buscarPrenda(id)
        console.log(prendaElegida)
        if (prendaElegida !== undefined) {
            carrito.push(prendaElegida)
            alert ("La prenda " + prendaElegida.nombre + " se agregó al carrito.")
            respuesta = confirm("Deseas seguir comprando?")
        } else {
            console.error("No existe el producto con id: " + id)
        }
    }
    if (carrito.length > 0) {
        console.table (carrito)
        let confirmar = confirm("Desea confirmar la compra?")
        if (confirmar ===true) {
            finalizarCompra()
        } else {
            console.log("😪Que lastima! Esperamos verte otra vez por aquí!")
        }       
    } else{
        console.warn("El carrito está vacío")
    }
}

function finalizarCompra() {
    const compra = new compras(carrito)

    mostrarMetodoPago()
    let cantCuotas = prompt("ingrese la cantidad de cuotas deseadas:");
    exito = mostrarCuotas(compra, cantCuotas);
    if (exito){
        let respuestaComprar = confirm ("Confirme si desea realizar la compra")
        if (respuestaComprar === true) {
            alert("El total de tu compras es de $ "+ compra.obtenerSubtotal() + " a pagar en " + compra.cantCuotas + " cuotas de $" + compra.importeCadaCuota + ". Muchas gracias!")
        } else {
            alert("😪Que lastima! Esperamos verte otra vez por aquí!")
        }
    }
    
}

function mostrarMetodoPago() {
    let intereses = "sin intereses"
    console.log ("Puedes realizar la compra con los siguientes métodos de pago en cuotas:")
    for (let i = 1; i <= 6; i++) {
        if (i > 3) {
            intereses= "con intereses."
        }
        console.log (i + " cuotas(s) " + intereses)
    }
}

function mostrarCuotas(compra, cantidadCuotas) {
    let cuota = 0;
    let exito = true;
    if (cantidadCuotas > 0 && cantidadCuotas <= 6){
        cuota = calcularCuota (compra.obtenerSubtotal(), cantidadCuotas)
        compra.importeCadaCuota = cuota
        compra.cantCuotas = cantidadCuotas
        console.log("La compra será pagada en " + cantidadCuotas + " cuotas de $" + cuota)
    }else {
        exito = false
        compra.importeCadaCuota = compra.obtenerSubtotal()
        compra.cantCuotas = 1
        console.error("La cantidad de cuotas debe ser un valor numérico entre 1 y 6")
    }
    return exito;    
}

function calcularCuota(monto, cantidadCuotas) {
    if (cantidadCuotas > 0 && cantidadCuotas <= 3) {
        return (monto / cantidadCuotas)
    } else if (cantidadCuotas <= 6) {
        return (monto / cantidadCuotas * 1.2)
    } else {
        return 0
    }
     
}

function buscarPrenda(id){
    let resultado = prendas.find((prenda)=> prenda.id === parseInt(id))
    return resultado
}



function main() {

    let exito = true
    let codigo = elegirProducto();
    let confirmar = confirm("Confirme si desea realizar la compra");
    if (confirmar ===true) {
        mostrarMetodoPago();
        let cantCuotas = prompt("ingrese la cantidad de cuotas deseadas:");
        if (cantCuotas > 0 && cantCuotas <=6){
            exito = mostrarCuotas(codigo, cantCuotas);
            if (exito){
                let respuestaComprar = confirm ("Confirme si desea realizar la compra")
                if (respuestaComprar === true) {
                    alert ("✔ La prenda ya es tuya!")
                }
            }
        } else {
            console.error("La cantidad de cuotas debe ser un valor numérico entre 1 y 6")
        }
    } else {
        console.console.log("😪Que lastima! Esperamos verte otra vez por aquí!");
    }     
}

function mostrarCuotas(codigo, cantidadCuotas) {
    let cuota = 0;
    let exito = true;
    if (cantidadCuotas > 0 && cantidadCuotas <= 6){
        switch (codigo) {
            case "Teddys":
                cuota = calcularCuota (2990, cantidadCuotas)
                break;
            case "RemerasXL":
                cuota = calcularCuota (1990, cantidadCuotas)
                break;
            case "BuzoJogging":
                cuota = calcularCuota (2490, cantidadCuotas)
                break;
        } 
        console.log("La compra de " + codigo + " sería en " + cantidadCuotas + " cuotas de $" + cuota)
    }else {
        exito = false
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
function elegirProducto() {
    let codigo = prompt("Ingresa la prenda que quieres consultar. Las opciones disponibles por el momento son: Teddys, RemerasXL o BuzoJogging.")
    precios(codigo)
    return codigo
}
function precios(codigo) {
    switch (codigo) {
        case "Teddys":
            console.log("Te felicitamos por tu elección! Amamos nustros buzos Teddys. El precio de cada Teddy es: $2990")
            break;
        case "RemerasXL":
            console.log("Te felicitamos por tu elección! Amamos nuestras Remeras XL. El precio de cada remera es de: $1990")
            break;
        case "BuzoJogging":
            console.log("Te felicitamos por tu elección! Amamos nuestros Buzos de jogging. El precio de cada buzo es de: $2490")
            break;
        default:
            console.warn("😕No has elegido ninguna de nuestras prendas. Te recordamos que las opciones disponibles son: Teddys, RemerasXL o BuzoJogging")
            break;
    }
}
function mostrarMetodoPago() {
    let intereses = "sin intereses"
    console.log ("Puedes realizar la compra con los siguientes metodos de pago en cuotas:")
    for (let i = 1; i <= 6; i++) {
        if (i > 3) {
            intereses= "con intereses."
        }
        console.log (i + " cuotas(s) " + intereses)
    }
}
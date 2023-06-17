let quiereTaller = prompt("Te interesa alguno de nuestros talleres? Si/No")
let precioFinal = 0
let cantidadDeTalleres = 0
if (quiereTaller == "Si") {
    for (let index = 0; index < 4; index++) {

        // EMPIEZA EL CICLO
        let tallerElegido = prompt("Selecciona tu taller:")
        switch (tallerElegido) {
            case "Lenguaje musical":
                alert("Lenguaje musical: $10000")
                precioFinal = precioFinal + 10000
                cantidadDeTalleres++
                break;
            case "Anatomia y la voz":
                alert("Anatomia y la voz: $20000")
                precioFinal = precioFinal + 20000
                cantidadDeTalleres++
                break;
            case "Canto grupal":
                alert("Canto grupal: $15000")
                precioFinal = precioFinal + 15000
                cantidadDeTalleres++
                break;
            case "Dúos":
                alert("Dúos: $24000")
                precioFinal = precioFinal + 24000
                cantidadDeTalleres++
                break;
            default:
                break;
        }

        let quiereOtroTaller = prompt("Te interesaría otro taller? Si/No")
        if (quiereOtroTaller == "Si") {
            continue
        } else {
            if (cantidadDeTalleres > 1){
                precioFinal = precioFinal * 0.9
            }
            alert("Precio final es: " + precioFinal)
            alert("GRACIAS POR TU COMPRA")
            break
        }
        // TERMINA EL CICLO
    }

} else {
    alert("Vuelva pronto!")
}
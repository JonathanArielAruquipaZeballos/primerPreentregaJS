const alimentoA = 3000
const alimentoB = 2000
const alimentoC = 4000

let cantidad; 
let marcaAlimento;
let resultado;


function multiplicar(valor1, valor2)
{
    const resultado = valor1 * valor2;
    return resultado;
}

while (cantidad != 0){
    cantidad = parseInt(prompt("Ingresar kilos de comida para Gato que desee"));
    
    if (cantidad === 0){
        break;
    }

    marcaAlimento = prompt("Ingrese la marca de alimento que desee:\n\ -Si quiere alimento marca A ingrese = A \n\ -Si quiere alimento marca B ingrese = B \n\ -Si quiere alimento marca C ingrese = C");
     
    switch (marcaAlimento){
        case "A":
           resultado = multiplicar(alimentoA, cantidad);
           alert("Debe abonar $ "+ resultado + " por su compra de alimento marca A");
           break;
        case "B":
            resultado = multiplicar(alimentoB, cantidad);
            alert("Debe abonar $ "+ resultado + " por su compra de alimento marca B");
            break;
        case "C":
            resultado = multiplicar(alimentoC, cantidad);
            alert("Debe abonar $ "+ resultado+ " por su compra de alimento marca C");
            break;
        default:
            alert("Operacion Invalida");
            break;
    }

    if (cantidad >= 10 ){
        valorEnvio = 0
        alert("Su costo de envio es $"+ valorEnvio);
    }
    else if (cantidad >=5 ){
        valorEnvio = 100
        alert("Su costo de envio es $"+ valorEnvio);
    }
    else {
        valorEnvio = 200
        alert("Su costo de envio es $"+ valorEnvio);
    }
}
/* Botones Númericos */
const miniContenedor = document.querySelector('.miniContenedor');
const mostrarResultado = document.querySelector('.mostrarResultado');
const btnButtons = document.querySelectorAll('button');
/* Operadores */
const zero = document.querySelector('.zero');
eventListener();
function eventListener() {
    miniContenedor.addEventListener('click', addMostrarPantalla);
}


function addMostrarPantalla(e) {
    let nombreClase = e.target.className;
    switch (nombreClase) {
        case "btnUno":
            let valor = e.target.value;
            mostrarResultado.append(valor);
            console.log(e.target.textContent);
            break;
        case "btnDos":
            let valor2 = e.target.value;
            mostrarResultado.append(valor2);
            break;
        case "btnTres":
            let valor4 = e.target.value;
            mostrarResultado.append(valor4);
            break;
        case "btnCuatro":
            let valor5 = e.target.value;
            mostrarResultado.append(valor5);
            break;
        case "btnCinco":
            let valor6 = e.target.value;
            mostrarResultado.append(valor6);
            break;
        case "btnSeis":
            let valor7 = e.target.value;
            mostrarResultado.append(valor7);
            break;
        case "btnSiete":
            let valor8 = e.target.value;
            mostrarResultado.append(valor8);
            break;
        case "btnOcho":
            let valor9 = e.target.value;
            mostrarResultado.append(valor9);
            break;
        case "btnNueve":
            let valor10 = e.target.value;
            mostrarResultado.append(valor10);
            break;
        case "btnZero":
            let valor11 = e.target.value;
            mostrarResultado.append(valor11);
            break;
        case "btnMulti":
            let valor12 = e.target.value;
            mostrarResultado.append(valor12);
            break;
        case "btnMas":
            let valor3 = e.target.value;
            mostrarResultado.append(valor3);
            break;
        case "btnMenos":
            let valor13 = e.target.value;
            mostrarResultado.append(valor13);
            break;
        case "btnDivision":
            let valor14 = e.target.value;
            mostrarResultado.append(valor14);
            break;
        case "btnBorrar":
            mostrarResultado.textContent = "";
            break;
        default:
            break;
    }
    if (nombreClase === "btnIgual") {
        mostrarResultado.textContent = eval(mostrarResultado.textContent);
        if (mostrarResultado.textContent.length > 8) {
            mostrarResultado.textContent = eval(mostrarResultado.textContent).toFixed(8);
        }
    }
    zero.remove();
}


// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres

let amigoLista = [];
/* console.log(amigo); */


function agregarAmigo() {
    let amigoIngresado = document.getElementById("amigo").value;
    if (amigoIngresado !== "") {
        amigoLista.push(amigoIngresado);
        mostrarListaAmigos();
    } else {
        alert("Por favor, inserte un nombre.");
    }
    limpiarInput();
}

// Muestra los amigos en el html y con el ciclo + el li se agrega al ultimo 
function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < amigoLista.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigoLista[i];
        lista.appendChild(li);
    }

}

function limpiarInput() {
    document.getElementById("amigo").value = '';
}


//valida si la lista esta vacia y si tiene algun dato lo sortea con el math
function sortearAmigo() {
    if (amigoLista.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    } else {
        let amigoSorteado = amigoLista[Math.floor(Math.random() * amigoLista.length)];
        document.getElementById("resultado").innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    }
}

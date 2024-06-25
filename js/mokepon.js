let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')

const sectionReiniciar = document.getElementById('reiniciar')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')


let inputHipodoge
let inputCapipepo
let inputRatigueya
const spanMascotaJugador = document.getElementById('mascota-jugador')





const contenedorTarjetas = document.getElementById("contenedor-tarjetas")

const contenedorTarjetasAtaques = document.getElementById("contenedor-tarjetas-ataques");

let botonesDeAtaque = []


let pokemones = []
class Pokemon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Pokemon("Hipodoge", "/assets/mokepons_mokepon_hipodoge_attack.png", 3)

let capipepo = new Pokemon("Capipepo", "./assets/mokepons_mokepon_capipepo_attack.png", 3)

let ratigueya = new Pokemon("Ratigueya", "./assets/mokepons_mokepon_ratigueya_attack.png", 3)

//pokemones.push(hipodege, capipepo, ratigueya)
pokemones.push(hipodoge)
pokemones.push(capipepo)
pokemones.push(ratigueya)

// Agrega ataques a los pokemones
hipodoge.ataques.push(
    { nombre: "💧", id: "boton-aguaH1" },
    { nombre: "💧", id: "boton-aguaH2" },
    { nombre: "💧", id: "boton-aguaH3" },
    { nombre: "🔥", id: "boton-fuegoH" },
    { nombre: "🌱", id: "boton-tierraH" },
)

capipepo.ataques.push(
    { nombre: "🌱", id: "boton-tierraC1" },
    { nombre: "🌱", id: "boton-tierraC2" },
    { nombre: "🌱", id: "boton-tierraC3" },
    { nombre: "💧", id: "boton-aguaC" },
    { nombre: "🔥", id: "boton-fuegoC" },
)

ratigueya.ataques.push(
    { nombre: "🔥", id: "boton-fuegoR1" },
    { nombre: "🔥", id: "boton-fuegoR2" },
    { nombre: "🔥", id: "boton-fuegoR3" },
    { nombre: "💧", id: "boton-aguaR" },
    { nombre: "🌱", id: "boton-tierraR" },
)
console.log(pokemones)



function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'

    pokemones.forEach(pokemon => {
        let pokemonHTML = `
        
        <input type="radio" name="mascota" id=${pokemon.nombre} />
                <label class="tarjeta-de-mokepon" for=${pokemon.nombre}>
                    <p>${pokemon.nombre}</p>
                    <img src=${pokemon.foto} alt=${pokemon.nombre}>
                </label>
        `
        contenedorTarjetas.innerHTML += pokemonHTML;
    })

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')


    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

}


function seleccionarMascotaJugador() {

    if (inputHipodoge.checked) {

        spanMascotaJugador.innerHTML = inputHipodoge.id
        empezarCombate();
        seleccionarMascotaEnemigo()
        construirBotones()

    } else if (inputCapipepo.checked) {

        spanMascotaJugador.innerHTML = inputCapipepo.id
        empezarCombate();
        seleccionarMascotaEnemigo()
        construirBotones()

    } else if (inputRatigueya.checked) {

        spanMascotaJugador.innerHTML = inputRatigueya.id
        empezarCombate();
        seleccionarMascotaEnemigo()
        construirBotones()

    } else {
        alert('Selecciona una mascota')
    }

}


function empezarCombate() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
}


function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, pokemones.length - 1)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    spanMascotaEnemigo.innerHTML = pokemones[mascotaAleatoria].nombre
}


function construirBotones() {

    let pokemonSeleccionado = pokemones.find(pokemon =>{
        if(spanMascotaJugador.textContent === pokemon.nombre){
            return pokemon;
        }
    })

    if (pokemonSeleccionado) {
        crearBotonesDeAtaque(pokemonSeleccionado);
    } else {
        console.log("Error al seleccionar pokemon");
    }
}



function crearBotonesDeAtaque(pokemon) {
    pokemon.ataques.forEach(ataque => {

        let botonTemporal =
            `
        <button id="${ataque.id}" class="boton-de-ataque">${ataque.nombre}</button>
        `
        contenedorTarjetasAtaques.innerHTML += botonTemporal
    })

    botonesDeAtaque = document.querySelectorAll(".boton-de-ataque")

    botonesDeAtaque.forEach(botonI => {

        if (botonI.id.includes("agua")) {
            botonI.addEventListener("click", ataqueAgua)

        } else if (botonI.id.includes("fuego")) {
            botonI.addEventListener("click", ataqueFuego)

        } else if (botonI.id.includes("tierra")) {
            botonI.addEventListener("click", ataqueTierra)

        }
    })
}





function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')


    if (ataqueEnemigo == ataqueJugador) {

        crearMensaje("EMPATE")

    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {

        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {

        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {

        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else {

        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador

    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')

    sectionMensajes.innerHTML = resultadoFinal


    botonesDeAtaque.forEach(botonI => {
        botonI.disabled = true
    })

    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)

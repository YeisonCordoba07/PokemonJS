const express = require("express")
const cors = require("cors")

const app = express()
const jugadores = []

app.use(cors())
app.use(express.json())

class Jugador{
    constructor(id){
        this.id = id
    }
    asignarPokemon(pokemon){
        this.pokemon = pokemon
    }
}

class Pokemon{
    constructor(nombre){
        this.nombre = nombre
    }
}

app.get("/unirse", (req, res)=>{
    const id = `${Math.random()}`

    const jugador = new Jugador(id)
    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(id)
})

app.post("/pokemon/:jugadorId", (req, res)=>{
    const jugadorId = req.params.jugadorId || ""
    const nombreP = req.body.pokemon || ""
    const pokemon = new Pokemon(nombreP)

    const jugadorIndex = jugadores.findIndex((jugador) =>jugadorId === jugador.id)

    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarPokemon(pokemon)
    }

    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.listen(8080, () =>{
    console.log("Corriendo")
})
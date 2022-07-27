class Excursiones {
    constructor(id, nombre, duracion, precio, lugares) {
        this.id = id
        this.nombre = nombre
        this.duracion = duracion
        this.precio = precio
        this.lugares = lugares
    }
}

const excursion1 = new Excursiones(1, "Washington DC", "1 día", "189 dolares", "20 lugares disponibles")
const excursion2 = new Excursiones(1, "Philadelphia", "1 día", "165 dolares", "10 lugares disponibles")
const excursion3 = new Excursiones(1, "Niagara Falls", "2 días", "350 dolares", "5 lugares disponibles")
const excursion4 = new Excursiones(1, "Chicago", "2 día", "220 dolares", "12 lugares disponibles")

const excursiones = [excursion1, excursion2, excursion3, excursion4]

const divExcursiones = document.getElementById('Excursiones')

excursiones.forEach(Excursiones => {
    divExcursiones.innerHTML += `
    <div class="card Excursiones" id="Excursion ${Excursiones.id}" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title"> ${Excursiones.nombre} </h5>
    <p class="card-title"> ${Excursiones.duracion} </p>
    <p class="card-title"> ${Excursiones.precio} </p>
    <p class="card-title"> ${Excursiones.lugares} </p>
</div>
</div>
`
})
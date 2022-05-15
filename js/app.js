// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // Muestra los automoviles al cardar

    // Llena las opciones de anios
    llenarSelect();
});

// Funciones
function mostrarAutos(){
    autos.forEach( auto => {
        const { color, marca, modelo, precio, puertas, transmision, year } = auto;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = ` ${marca} - ${modelo} - ${year} - ${puertas} Puertas - Transmision ${transmision} - Precio: $${precio} - Color: ${color}`;

        resultado.appendChild(autoHTML);

    })
}

function llenarSelect(){
    console.log('llenando el select');
    for( let i = max; i >= min; i--){
        const opcion = document.createElement('OPTION');
        opcion.value = i;
        opcion.textContent = i;
        if(i == max) opcion.setAttribute('selected', '');

        year.appendChild(opcion);
    }
}
// Variables
const resultado = document.querySelector('#resultado');
// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
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
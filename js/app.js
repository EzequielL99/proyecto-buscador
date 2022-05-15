// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // Muestra los automoviles al cardar

    // Llena las opciones de anios
    llenarSelect();
});

// Event Listener para los select de busquedas
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});



// Funciones
function mostrarAutos(autos) {
    limpiarHTML();

    autos.forEach(auto => {
        const {
            color,
            marca,
            modelo,
            precio,
            puertas,
            transmision,
            year
        } = auto;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = ` ${marca} - ${modelo} - ${year} - ${puertas} Puertas - Transmision ${transmision} - Precio: $${precio} - Color: ${color}`;

        resultado.appendChild(autoHTML);

    })
}

function llenarSelect() {
    console.log('llenando el select');
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('OPTION');
        opcion.value = i;
        opcion.textContent = i;
        if (i == max) opcion.setAttribute('selected', '');

        year.appendChild(opcion);
    }
}

// Funcion que filtra en base a la busqueda 
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca)
        .filter(filtrarAnio)
        .filter(filtrarMinimo)
        .filter(filtrarMaximo)
        .filter(filtrarPuertas)
        .filter(filtrarTransmision)
        .filter(filtrarColor);

    if (resultado.length > 0) {
        mostrarAutos(resultado);
    }else{
        noResultado();
    }

}

function noResultado(){
    limpiarHTML();
    
    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados disponibles';

    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    const {
        marca
    } = datosBusqueda;

    if (marca) {
        return auto.marca === marca;
    }

    return auto;
}

function filtrarAnio(auto) {
    const {
        year
    } = datosBusqueda;

    if (year) {
        return auto.year === parseInt(year);
    }

    return auto;
}

function filtrarMinimo(auto) {
    const {
        minimo
    } = datosBusqueda;

    if (minimo) {
        return parseFloat(auto.precio) >= parseFloat(minimo);
    }

    return auto;
}

function filtrarMaximo(auto) {
    const {
        maximo
    } = datosBusqueda;

    if (maximo) {
        return parseFloat(auto.precio) <= parseFloat(maximo);
    }

    return auto;
}

function filtrarPuertas(auto) {
    const {
        puertas
    } = datosBusqueda;

    if (puertas) {
        return auto.puertas === parseInt(puertas);
    }

    return auto;
}

function filtrarTransmision(auto) {
    const {
        transmision
    } = datosBusqueda;

    if (transmision) {
        return auto.transmision === transmision;
    }

    return auto;
}

function filtrarColor(auto) {
    const {
        color
    } = datosBusqueda;

    if (color) {
        return auto.color === color;
    }

    return auto;
}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}
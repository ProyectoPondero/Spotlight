const apis = document.getElementById('contenedorApis');

const url = "https://www.cultura.gob.ar/api/v2.0/convocatorias/?format=json"

const nuevoFetch = async () => {
    try {
        const response = await fetch(url);
        const informacion = await response.json();
        console.log(informacion);
    } catch (err) {
        console.error('Error al obtener los datos:', err);
    }
};

nuevoFetch();
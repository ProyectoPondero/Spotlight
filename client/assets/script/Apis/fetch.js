const container = document.getElementById('convocatorias-container');

fetch('api.json')
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      const container = document.getElementById('convocatorias-container'); // Selecciona el div por su id

      if (data.results) {
          data.results.forEach(convocatoria => {
              const convocatoriaElement = document.createElement('div');
              convocatoriaElement.innerHTML =`
              <article>
              <h2 class="tituloConvocatoria">${convocatoria.titulo}</h2>
              <p class="parrafoConvocatoria">${convocatoria.bajada}</p>
              <img class="imagenConvocatoria container" src="${convocatoria.imagen}">
              <a class="linkConvocatoria container" href="${convocatoria.link}" target="_blank"><button class="botonConv" >Más información</button></a>
              </article>
                  `;
              container.appendChild(convocatoriaElement);
          });
      } else {
          console.error('Data does not contain a "results" property:', data);
      }
  })
  .catch(error => {
      console.error('Error fetching data:', error);
  });
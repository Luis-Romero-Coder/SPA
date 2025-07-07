const API_URL = 'https://west.albion-online-data.com/api/v2/stats/prices/T4_BAG,T5_BAG?locations=Caerleon,Bridgewatch&qualities=2';

export default function ApiUi(){
    obtenerDatos();
    return `
    <h1>Página de la api</h1>
    <p>Bienvenido a la página de la api</p>
    <div id="resultado"></div>
    `;
}

const uiBuilder = {
    buildHtml: function(data){
        const html = `<div class="items">   
        <h2 class="title-item">${data.item_id}</h2>
        <ul class="data-item">
            <li class="data-city">De la ciudad ${data.city}</li>
            <li class="data-quality">Calidad ${data.quality}</li>
            <li class="data-sell-min">Precio de venta mínimo ${data.sell_price_min}</li>
            <li class="data-sell-max">Precio de venta máximo ${data.sell_price_max}</li>
        </ul>
        </div>`;
        // Insertar el HTML generado en el contenedor resultado
        const resultado = document.getElementById('resultado');
        if(resultado) resultado.innerHTML += html;
    }
};

async function obtenerDatos() {
    try{
        const respuesta = await axios.get(API_URL)
        const data = respuesta.data;
        // Si la respuesta es un array, iterar sobre ella
        (Array.isArray(data) ? data : [data]).forEach(function(element){
            uiBuilder.buildHtml(element);
        });
    } catch (error){
        const resultado = document.getElementById('resultado');
        if(resultado) resultado.textContent = 'Error: '+ error.message;
    }
}
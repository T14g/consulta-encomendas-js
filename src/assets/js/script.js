// DOM Elements 
const resultado         = document.querySelector('#resultado');
const buscar            = document.querySelector('#buscar');
const codigo            = document.querySelector('#codigo');

const dateFormat = (date) => {
    const part  = date.split("T")[0];
    const parts = part.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

const itemFound = (item) => {
    const { id, valor, cliente, data, entregue } = item;
    
    const price = new Intl.NumberFormat('PT', {
        style: 'currency', currency: 'BRL'
    }).format(valor); 

    const formatedDate = dateFormat(data);

    return(`<div class="info">
            <div class="row">
                <div class="col cliente">
                    <p class="title">${id} - ${cliente.nome}</p>
                    <p class="label">Número de ordem e nome do cliente</p>
                </div>
                <div class="col valor">
                    <p class="title">${price}</p>
                    <p class="label">Valor do pedido</p>
                </div>
            </div>
            <div class="row">
                <div class="col data">
                    <p class="title">${formatedDate}</p>
                    <p class="label">Data do pedido</p>
                </div>
                <div class="col status">
                    <p class="title">${entregue ?  'Entregue' : 'Entregar'}</p>
                    <p class="label">Situação da encomenda</p>
                </div>
            </div>
        </div>`)
};

const notFound = () => (
    `<div class="error-message">
        <p class="text">Encomenda <br>não encontrada!</p>
        <p class="text">Procure novamente</p>
    </div>`
);

const getData = (codigo) => {
    fetch('./dados.json')
        .then(response => {
            return response.json();
        }).then(data => {
        const found = data.encomendas.find(a => a.numero.toLowerCase() == codigo.toLowerCase());
        found ? resultado.innerHTML = itemFound(found) : resultado.innerHTML = notFound();    
    })
};

buscar.addEventListener('click', (e) =>{
    e.preventDefault();
    const { value } = codigo;
    
    getData(value);

})
    

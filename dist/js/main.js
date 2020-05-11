"use strict";var resultado=document.querySelector("#resultado"),buscar=document.querySelector("#buscar"),codigo=document.querySelector("#codigo"),dateFormat=function(n){var e=n.split("T")[0].split("-");return"".concat(e[2],"/").concat(e[1],"/").concat(e[0])},itemFound=function(n){var e=n.id,t=n.valor,a=n.cliente,o=n.data,c=n.entregue,r=new Intl.NumberFormat("PT",{style:"currency",currency:"BRL"}).format(t),s=dateFormat(o);return'<div class="info">\n            <div class="row">\n                <div class="col cliente">\n                    <p class="title">'.concat(e," - ").concat(a.nome,'</p>\n                    <p class="label">Número de ordem e nome do cliente</p>\n                </div>\n                <div class="col valor">\n                    <p class="title">').concat(r,'</p>\n                    <p class="label">Valor do pedido</p>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col data">\n                    <p class="title">').concat(s,'</p>\n                    <p class="label">Data do pedido</p>\n                </div>\n                <div class="col status">\n                    <p class="title">').concat(c?"Entregue":"Entregar",'</p>\n                    <p class="label">Situação da encomenda</p>\n                </div>\n            </div>\n        </div>')},notFound=function(){return'<div class="error-message">\n        <p class="text">Encomenda <br>não encontrada!</p>\n        <p class="text">Procure novamente</p>\n    </div>'},getData=function(t){fetch("./dados.json").then(function(n){return n.json()}).then(function(n){var e=n.encomendas.find(function(n){return n.numero.toLowerCase()==t.toLowerCase()});resultado.innerHTML=e?itemFound(e):notFound()})};buscar.addEventListener("click",function(n){n.preventDefault();var e=codigo.value;getData(e)});
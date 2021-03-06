//app.js

//************************************************* DESAFIO N°1 *****************************************************//
//*** File: app.js																							      ***//
//*** 																				  							  ***//
//*** Date:16/05/2019																							  ***//
//*** Author: Vincent Queimado																					  ***//
//*******************************************************************************************************************//


//********************************* IMPORTAÇÃO DE ALGORITMO DE TRI TOPOLOGIQUE***************************************//

const { solve } = require('./lib/algorithm');

var graph = {
    '0': ['3'],
    '1': ['2'],
    '2': ['6'],
    '3': ['5'],
    '4': ['6'],
    '5': ['6', '7'],
    '6': ['7'],
}

console.log("Ordem correta de carregamento de todos os módulos do sistema: " + solve(graph));
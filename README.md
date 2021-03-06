![version](https://img.shields.io/badge/version-1.0.0-blue.svg?longCache=true&style=flat-square)

# Ordenação Topológica

## Sobre a Ordenação Topológica

Agoritmo em NodeJS que retorne a ordem correta de carregamento de todos os módulos do sistema.

Contexto: Ordenação Topológica utilizada num grafo de dependência entre módulos de um sistema. A aresta indica a relação de dependência entre dois módulos indicada pelo sentido, por exemplo: 1 2, indica que o módulo 1 é uma dependência do modulo 2 (ou o modulo 2 depende de 1), ou seja, para carregar o modulo 2 precisamos primeiro carregar o modulo 1.

### Requisitos

* [NodeJs](https://nodejs.org/en/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

### Instalação

1. Realizar o download ou clone do projeto;
2. Descompactar o projeto;
3. Abrir um terminal de comando a partir da pasta do projeto;
4. Executar o arquivos App.js do projeto a partir do comando:

```
$ node app.js
```

### Tabela de representação dos módulos do sistema:

```
var graph = {
    '0': ['3'],
    '1': ['2'],
    '2': ['6'],
    '3': ['5'],
    '4': ['6'],
    '5': ['6', '7'],
    '6': ['7'],
}
```

### Resultado

Resultado de ordem correta de carregamento de todos os módulos do sistema. O calculo foi realizado com base na técnica de ordenação topológica.

```
Ordem correta de carregamento de todos os módulos do sistema: 7,6,4,2,1,5,3,0
```





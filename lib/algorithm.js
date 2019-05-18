module.exports.solve = solve;

function solve(g) {
    let graph = addMissingKeys(g);
    let edges = getEdges(graph);
    let inDegree = getInDegree(graph);

    let queue = [];

    for (let key in graph) {
        if (inDegree[key] == 0) {
            queue.push(key);
        }
    }

    let count = 0;
    let topOrder = [];

    while (queue.length > 0) {
        let u = queue.shift();
        topOrder.unshift(u);

        for (let [index, value] of graph[u].entries()) {
            inDegree[value]--;

            if (inDegree[value] == 0) {
                queue.unshift(value);
            }
        }
        count++;
    }

    if (count !== Object.keys(graph).length) {
        throw new Error('There is a circular dependency in the graph');
    } else {
        return topOrder;
    }
}

function addMissingKeys(graph) {
    for (let key in graph) {
        for (let [index, value] of graph[key].entries()) {
            if (graph[value] === undefined) {
                graph[value] = [];
            }
        }
    }
    return graph;
}

function getEdges(graph) {
    let edges = [];
    for (let key in graph) {
        let edge = [];
        for (let item of graph[key]) {
            if (graph[key].length > 0) {
                edges.push([key, item]);
            }
        }
    }
    return edges;
}

function getInDegree(graph) {
    let inDegree = {};

    for (let key in graph) {
        for (let indeg of graph[key]) {
            inDegree[indeg] = inDegree[indeg] === undefined ? 1 : ++inDegree[indeg];
            inDegree[key] = inDegree[key] || 0;
        }
    }
    return inDegree;
}
export function Dijkstra(grid, startNode, finishNode) {
    const visitedNodeInOrder = [];
    startNode.distance = 0;
    const unvisitedNodes = getAllNodes(grid);
    while(!!unvisitedNodes.length) {
        sortNodesByDistance(unvisitedNodes);
        const closestNode = unvisitedNodes.shift();
        // console.log("x: " + closestNode.row + " y: " + closestNode.col + "\n");
        // Handle Walls
        if (closestNode.isWall) continue;
        // handle impossible
        if (closestNode.distance === Infinity) return visitedNodeInOrder;
        closestNode.isVisited = true;
        visitedNodeInOrder.push(closestNode);
        if(closestNode === finishNode) return visitedNodeInOrder;
        updateNeighbors(grid, closestNode);
    }
}

function sortNodesByDistance(unvisitedNodes) {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateNeighbors(grid, node) {
    const neighbors = getUnvisitedNeighbors(grid, node);
    // console.log("neighbor: ",neighbors);
    for(const neighbor of neighbors) {
        neighbor.distance = node.distance + 1;
        neighbor.previousNode = node;
    }
}

function getUnvisitedNeighbors(table, node) {
    const neighbors = [];
    const {row, col} = node;

    if(row > 0) neighbors.push(table[row-1][col]);
    if(row < table.length-1) neighbors.push(table[row+1][col]);
    if(col > 0) neighbors.push(table[row][col-1]);
    if(col < table[0].length-1) neighbors.push(table[row][col+1]);

    return neighbors.filter(neighbor => !neighbor.isVisited);
}

function getAllNodes(grid) {
    const nodes = [];
    for(const row of grid) {
        for(const node of row) {
            nodes.push(node);
        }
    }
    return nodes;
}

export function getNodeInShortestPathOrder(finishNode) {
    const nodesInShortestPathOrder = [];
    let currNode = finishNode;
    while(currNode !== null) {
        nodesInShortestPathOrder.unshift(currNode);
        currNode = currNode.previousNode;
    }
    return nodesInShortestPathOrder;
};
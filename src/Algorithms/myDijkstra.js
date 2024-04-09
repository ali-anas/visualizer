import MinHeap from './MinHeap';

export function Dijkstra(grid, startNode, finishNode) {
    const visitedNodesSoFar = [];
    startNode.distance = 0;

    const minHeap = new MinHeap();
    minHeap.add(startNode);

    while(!minHeap.empty()) {
        const currentNode = minHeap.extract();

        if(currentNode.isWall) continue;
        if(currentNode.distance === Infinity) return visitedNodesSoFar;
        
        visitedNodesSoFar.push(currentNode);
        if(currentNode === finishNode) return visitedNodesSoFar;

        update_neighbors(grid, currentNode, minHeap);
    }
}

function update_neighbors(grid, node, minHeap) {
    let neighbors = getUnvisitedNeighbors(grid, node);

    for(let neighbor of neighbors) {
        neighbor.distance = node.distance + 1;
        neighbor.previousNode = node;
        neighbor.isVisited = true;
        minHeap.add(neighbor);
    }
}

function getUnvisitedNeighbors(grid, node) {
    let neighbors = [];
    const {row, col} = node;

    if(row > 0 && !grid[row-1][col].isVisited) neighbors.push(grid[row-1][col]);
    if(row < grid.length - 1 && !grid[row+1][col].isVisited) neighbors.push(grid[row+1][col]);
    if(col > 0 && !grid[row][col-1].isVisited) neighbors.push(grid[row][col-1]);
    if(col < grid[0].length-1 && !grid[row][col+1].isVisited) neighbors.push(grid[row][col+1]);

    return neighbors;
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

/*

Dijkstra using min_heap

function() {
    vistedNodesSoFar = [];
    startNode.distance = 0;
    const unvisited_node = getAllNode();


    insert each node in min_heap
    get on the bases of manhattan distances

    while(!min_heap.empty()) {
        const currNode = minHeap.extract();

        if currNode.isWall continue;
        if (currNode.distance === Infinity) return visitedNodesSoFar;
        
        currNode.isVisited = true;
        visitedNodesSoFar.push(currNode)
        if(currNode == finishNode) return visitedNodesSoFar;

        update_neighbors();
    }

}
*/
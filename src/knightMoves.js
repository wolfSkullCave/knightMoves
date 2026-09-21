function addEdge(start, end, graph) {
  graph[start] ??= [];
  graph[start].push(end);
}

const knight = [3, 4];

const graph = {};

const moves = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

for (const move of moves) {
  const newPos = [move[0] + knight[0], move[1] + knight[1]];
  //   console.log(newPos);

  const inBounds =
    newPos[0] >= 0 && newPos[0] < 8 && newPos[1] >= 0 && newPos[1] < 8;
  //   console.log(inBounds);

  if (inBounds) {
    addEdge(knight.join(","), newPos.join(","), graph);
  }
}

console.log(graph);

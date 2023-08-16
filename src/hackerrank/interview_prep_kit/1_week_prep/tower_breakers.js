// tower breakers
// define the winner (P1 or P2)

function optimalMove(num) {
  for (let i = num - 1; i > 1; i--) {
    if (num % i === 0) return i
  }
  return num - 1
}

function towerBreakers(n, m) {
  if (m == 1) return 2;
  return n % 2 == 1 ? 1 : 2;
}

function towerBreakers2(n, m) {

  const towers = Array.from({ length: n }).fill(m)
  let turn = 0
  let latest;

  let idx = towers.findIndex(item => item > 1);

  while (idx > -1) {
    const move = optimalMove(towers[idx])
    towers[idx] -= move
    latest = turn;

    console.log(turn, 'move', move, towers, idx)
    turn = turn == 0 ? 1 : 0

    idx = towers.findIndex(item => item > 1)
  }

  return latest + 1
}

console.log(towerBreakers(2, 2))

// console.log(optimalMove(3))

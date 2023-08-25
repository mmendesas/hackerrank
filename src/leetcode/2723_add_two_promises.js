// add two promises

async function addTwoPromises(promise1, promise2) {
  const a = await promise1;
  const b = await promise2;
  return a + b;
}

const p1 = new Promise(res => setTimeout(() => res(2), 20))
const p2 = new Promise(res => setTimeout(() => res(5), 60))

addTwoPromises(p1, p2).then(console.log) // 7

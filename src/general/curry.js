function add(a, b) {
  return a + b
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    }
    return curried.bind(this, ...args)
  }
}

const curried = curry(add)

console.log('curried', curried(3)(4))

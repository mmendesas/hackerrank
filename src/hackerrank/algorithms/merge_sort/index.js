const mergeSort = (arr = [5, 2, 4, 3, 1]) => {
  // base case
  if(arr.length <=1) return arr

  let mid = Math.floor(arr.length / 2)

  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  // recursive calls
  left = mergeSort(left)
  right = mergeSort(right)

  return merge(left, right)
}

const merge = (a, b) => {
  const sorted = []

  while(a.length && b.length){
    if(a[0] > b[0]){
      sorted.push(b.shift())      
    }else{
      sorted.push(a.shift())
    }
  }

  while(a.length){
    sorted.push(a.shift())
  }

  while(b.length){
    sorted.push(b.shift())
  }

  return sorted;
}

export default mergeSort
export function isPaired(text) {
  if(!text) return true;

  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const isOpen = (char) => Object.keys(pairs).includes(char);
  const isClose = (char) => Object.values(pairs).includes(char);

  let history = '';

  for(const letter of text){
    if(isOpen(letter)){
      history += letter;
    } else if(isClose(letter)){
      const last = history.slice(-1);
      if(pairs[last] !== letter) return false;
      history = history.slice(0, -1);
    }
  }

  if(history.length) return false;
  return true;
}

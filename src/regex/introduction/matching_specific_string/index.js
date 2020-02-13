import processRegex from '../../processRegex';

const countMatch = text => {
  const pattern = "hackerrank";
  return processRegex(pattern, text)
}

export default countMatch;

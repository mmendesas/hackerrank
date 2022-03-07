export default (pattern, test_string) => {
  const regex = new RegExp(pattern, 'g');
  const groups = test_string.match(regex);
  return groups || [];
}

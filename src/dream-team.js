module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let findArr = members.filter(strmember => typeof strmember === 'string');
  let upperWord = findArr.map(word => word.trim()[0].toUpperCase());
  return upperWord.sort().join('');
};
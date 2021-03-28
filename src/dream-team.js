const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) {
    return false;
  } else {
    let team = [];
    members.forEach(member => {
      if (typeof member === 'string') {
        member = member.trimLeft();
        team.push(member[0].toUpperCase());
      }
    })
    return team.sort().join('');
  }
};

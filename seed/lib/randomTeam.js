module.exports = function() {
    const teams = ['terrorists','freedom'];
    return teams[Math.floor(Math.random()*teams.length)];
}
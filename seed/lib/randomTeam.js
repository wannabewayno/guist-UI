module.exports = function() {
    const teams = ['capitalists','terrorists'];
    return teams[Math.floor(Math.random()*teams.length)];
}
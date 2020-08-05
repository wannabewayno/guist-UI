module.exports = function() {
    const teams = ['capitalists','communists'];
    return teams[Math.floor(Math.random()*teams.length)];
}
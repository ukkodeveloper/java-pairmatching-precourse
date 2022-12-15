const MatchingSystem = {
  matchPeers(crews, indexShuffled) {
    const result = [];
    while (indexShuffled.length > 3) {
      result.push([crews[indexShuffled.shift()], crews[indexShuffled.shift()]]); //?
    }
    return [...result, this.getLastPeer(crews, indexShuffled)];
  },

  getLastPeer(crews, indexShuffled) {
    return indexShuffled.map((index) => {
      return crews[index];
    });
  },
};

module.exports = MatchingSystem;

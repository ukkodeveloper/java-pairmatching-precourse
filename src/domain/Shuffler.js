const { Random } = require('@woowacourse/mission-utils');

const Shuffler = {
  shuffle(length) {
    const indexOrdered = Array.from({ length }, (_, index) => index);
    return Random.shuffle(indexOrdered);
  },
};

Shuffler.shuffle(11);

module.exports = Shuffler;

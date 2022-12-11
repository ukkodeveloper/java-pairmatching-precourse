const InputValidator = require('./InputValidator');
const { Console } = require('@woowacourse/mission-utils');
const { FEATURES, REMATCH } = require('../constants');

const MESSAGE = {
  feature: `기능을 선택하세요.\n${FEATURES.match}. 페어 매칭\n${FEATURES.search}. 페어 조회\n${FEATURES.init}. 페어 초기화\n${FEATURES.quit}. 종료\n`,
  selection: '과정, 레벨, 미션을 선택하세요.\nex) 백엔드, 레벨1, 자동차경주\n',
  rematch: `매칭 정보가 있습니다. 다시 매칭하시겠습니까?\n${REMATCH.true} | ${REMATCH.false}\n`,
};

const reRead = (error, callback, input) => {
  Console.print(error);
  return callback(input);
};

const read = (message) => (callback) => {
  Console.readLine(message, (input) => {
    try {
      InputValidator(input);
      callback(input);
    } catch (error) {
      reRead(error, callback, input);
    }
  });
};

const InputView = {
  readFeature: read(MESSAGE.feature),

  readSelection: read(MESSAGE.selection),

  readRematch: read(MESSAGE.rematch),
};

module.exports = InputView;

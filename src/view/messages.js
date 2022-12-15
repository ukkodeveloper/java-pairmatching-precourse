const { FEATURES, COMMANDS } = require('../command.constants');

const INPUT_MESSAGES = Object.freeze({
  feature: `기능을 선택하세요.\n${FEATURES.match}. 페어 매칭\n${FEATURES.search}. 페어 조회\n${FEATURES.init}. 페어 초기화\n${FEATURES.quit}. 종료\n`,
  mission: '\n과정, 레벨, 미션을 선택하세요.\nex) 백엔드, 레벨1, 자동차경주\n',
  rematch: `매칭 정보가 있습니다. 다시 매칭하시겠습니까?\n${COMMANDS.true} | ${COMMANDS.false}\n`,
});

module.exports = { INPUT_MESSAGES };

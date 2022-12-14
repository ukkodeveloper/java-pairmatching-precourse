const { FEATURE_COMMANDS, REMATCH_COMMANDS } = require('../constants');
const { getRegexFromList, deepFreeze } = require('../helper');

const INPUT_FORMAT = deepFreeze({
  feature: {
    message: `기능을 선택하세요.\n${FEATURE_COMMANDS.match}. 페어 매칭\n${FEATURE_COMMANDS.search}. 페어 조회\n${FEATURE_COMMANDS.init}. 페어 초기화\n${FEATURE_COMMANDS.quit}. 종료\n`,
    regex: getRegexFromList(Object.values(FEATURE_COMMANDS)),
    error: `[ERROR] ${Object.values(FEATURE_COMMANDS).join(
      ', '
    )}만 입력해주세요.`,
  },

  mission: {
    message: '과정, 레벨, 미션을 선택하세요.\nex) 백엔드, 레벨1, 자동차경주\n',
    regex: /^[^,]+,[^,]+,[^,]+$/,
    error: `[ERROR] , 쉼표 를 기준으로 과정, 레벨, 미션을 모두 입력해주세요.`,
  },

  rematch: {
    message: `매칭 정보가 있습니다. 다시 매칭하시겠습니까?\n${REMATCH_COMMANDS.true} | ${REMATCH_COMMANDS.false}\n`,
    regex: getRegexFromList(Object.values(REMATCH_COMMANDS)),
    //FIXME: prettier
    error: `[ERROR] ${Object.values(REMATCH_COMMANDS).join(
      ', '
    )}만 입력주세요.`,
  },
});

module.exports = INPUT_FORMAT;

const { FEATURES, REMATCH } = require('../constants');

const MESSAGE = {
  feature: `[ERROR] 선택사항에 있는 기능을 골라야 합니다.`,
  selection: `[ERROR] ,로 구분하여 세 가지 항목을 입력해야 합니다.`,
  rematch: `[ERROR] ${REMATCH.true}와 ${REMATCH.false} 둘 중 하나를 골라야 합니다.`,
};

const getRegexFromList = (options) => new RegExp(`^(?:${options.join('|')})$`);

const REGEX = {
  feature: getRegexFromList(Object.values(FEATURES)),
  selection: new RegExp(`^[^,]+,[^,]+,[^,]+$`),
  rematch: getRegexFromList(Object.values(REMATCH)),
};

const check = (type) => (input) => {
  if (!REGEX[type].test(input)) throw new Error(MESSAGE[type]);
};

const InputValidator = {
  checkFeature: check('feature'),
  checkSelection: check('selection'),
  checkRematch: check('rematch'),
};

module.exports = InputValidator;

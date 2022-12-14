const { FEATURES, COMMANDS } = require('../command.constants'); //?
const { LEVELS, COURSES, MISSIONS } = require('../course.constants');

const InputValidator = Object.freeze({
  checkFeature(input) {
    const featureRegex = new RegExp(`^(?:${Object.values(FEATURES).join('|')})$`);

    //FIXME: 프리티어
    if (!featureRegex.test(input.trim())) {
      throw new Error(
        `[ERROR] 기능 선택 시 ${Object.values(FEATURES).join(', ')}만 입력 가능합니다.`
      );
    }
  },

  checkMatching(input) {
    const [course, level, mission] = input.replace(/ /g, '').split(',');
    this.checkCourse(course);
    this.checkLevel(level);
    this.checkMission(level, mission);
  },

  checkCourse(course) {
    if (!Object.values(COURSES).includes(course)) {
      throw new Error(`[ERROR] 과정은 ${Object.values(COURSES).join(', ')}만 입력 가능합니다.\n`);
    }
  },

  checkLevel(level) {
    if (!Object.values(LEVELS).includes(level)) {
      throw new Error(`[ERROR] 레벨은 ${Object.values(LEVELS).join(', ')}만 입력 가능합니다.\n`);
    }
  },

  checkMission(level, mission) {
    if (!MISSIONS?.[level].includes(mission)) {
      throw new Error(`[ERROR] 레벨에 해당되는 미션만 입력 가능합니다.\n`);
    }
  },

  checkRematching(input) {
    if (!Object.values(COMMANDS).includes(input.trim())) {
      throw new Error(
        `[ERROR] 재시작 여부는 ${Object.values(COMMANDS).join(', ')}만 입력 가능합니다.\n`
      );
    }
  },
});

module.exports = InputValidator;

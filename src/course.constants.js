const COURSES = {
  back: '백엔드',
  front: '프론트엔드',
};

const LEVELS = {
  one: '레벨1',
  two: '레벨2',
  three: '레벨3',
  four: '레벨4',
  five: '레벨5',
};

const MISSIONS = {
  [LEVELS.one]: ['자동차경주', '로또', '숫자야구게임'],
  [LEVELS.two]: ['장바구니', '결제', '지하철노선도'],
  [LEVELS.three]: [],
  [LEVELS.four]: ['성능개선', '배포'],
  [LEVELS.five]: [],
};

module.exports = { COURSES, LEVELS, MISSIONS };

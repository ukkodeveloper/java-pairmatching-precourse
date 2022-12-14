const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  missionBoard: `#############################################
  과정: 백엔드 | 프론트엔드
  미션:
    - 레벨1: 자동차경주 | 로또 | 숫자야구게임
    - 레벨2: 장바구니 | 결제 | 지하철노선도
    - 레벨3: 
    - 레벨4: 성능개선 | 배포
    - 레벨5: 
  ############################################`,

  printMissionBoard() {
    Console.print(this.missionBoard);
  },
};

module.exports = OutputView;

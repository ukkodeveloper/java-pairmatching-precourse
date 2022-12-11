const WoowaTechCourse = require('../domain/WoowaTechCourse');
const PairMatching = require('../domain/WoowaTechCourse');
const InputView = require('../view/inputView');
const OutputView = require('../view/outputView');

class Controller {
  #woowaTechCourse;
  #inputView;
  #outputView;

  constructor() {
    this.#woowaTechCourse = new WoowaTechCourse();
    this.#inputView = InputView;
    this.#outputView = OutputView;
  }

  execute() {
    //TODO: crew 목록을 읽는다.
    //TODO: 페어매칭 시작한다.
  }

  #readCrewFile() {
    //TODO: crew 목록 string을 woowa가 받는다.
    //TODO: 기능 선택을 받는다.
  }

  #proceedFeature() {
    //TODO: 1, 2, 3, q 에 따라 다르게 진행한다.
    //TODO: 1) 페어 매칭
    //TODO: 2) 페어 조회
    //TODO: 3) 페어 초기화
    //TODO: 4) 종료
  }

  #matchPair() {
    //TODO: woowa에서 과정, 미션 에 대한 정보를 가져온다.
    //TODO: outputview가 받아서 출력한다.
    //TODO: 과정, 레벨, 미션 입력을 받는다.
  }

  #proceedMatchingSelection() {
    //TODO: inputView에서 과정, 레벨, 미션 입력을 받는다.
    //TODO: woowa에서 페어매칭된 결과가 있는지 확인한다.
    //TODO: 있을 경우) 재 매치 여부를 묻는다.
    //proceedMatching
  }

  #proceedRematchCommand() {
    //TODO: 리매치 할경우)
    //TODO: woowa에서 해당 페어매칭된 결과를 init해준다.
    //proceedMatching
    //TODO: 리매치 안 할 경우)
    //proceedMatchingSelection
  }

  #proceedMatching() {
    //TODO: woowa에서 패어미칭을 한다.
    //TODO: 매칭된 storage를 outputview에게 넘겨준다.
    //TODO: outputview에서 매칭 결과를 출력한다
    //proceedFeature
  }

  #searchPairs() {
    //TODO: woowa에서 storage를 찾는다.
    //TODO: 없을 경우 error 메세지를 출력한다.
    //TODO: 있을 경우 과거에 매칭된 결과를 출력한다.
    //proceedFeature
  }

  #initPairs() {
    //TODO: woowa에서 storage를 초기화한다.
    //proceedFeature
  }

  #quit() {}
}

module.exports = Controller;

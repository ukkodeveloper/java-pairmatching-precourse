const { FEATURES } = require('../constants');
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
    //TODO: #model -> 크루명 파일 읽고 속성에 저장하기
    //TODO: #input -> feature 입력 받기 --> handleFeature
  }

  #handleFeature(feature) {
    //TODO: Feature 별 분류하기
    if (feature === FEATURES.match) return this.#matchPeers();

    if (feature === FEATURES.search) return this.#searchMatched();

    if (feature === FEATURES.init) return this.#initAllMatched();

    if (feature === FEATURES.quit) return this.#quit();
  }

  #matchPeers() {
    //TODO: #model -> course, mission, level 정보를 가져온다.
    //TODO: #output -> 존재하는 과정과 미션에 대해 출력한다.
    //TODO: #input -> 과정,레벨, 미션을 입력받는다. --> handleMissionSelection
  }

  #handleMissionSelection(course, level, mission) {
    //TODO: #model -> 해당 mission이 있는지 확인한다.
    //TODO: if) 있으면
    if (this.#woowaTechCourse.checkExisting(course, level, mission)) {
      return; //TODO: #input -> 새로운 매치여부를 묻는다 --> handleRematch
    }
    //TODO: if) 기존에 없으면
    //TODO: 기존에 있는지 여부에 따라
    //TODO: #model -> match한다.
    //TODO: #output -> match된 결과를 출력한다
    //TODO: #input -> feature 입력 받기 --> handleFeature

    return; //TODO: #input -> 과정,레벨, 미션을 입력받는다. --> handleMissionSelection
  }

  #handleRematch(command) {
    if (command === COMMAND.false) {
    } //TODO: #input -> 과정, 레벨, 미션 입력 받는다. --> handleMissionSelection

    //TODO: if) 네
    //TODO: #model -> 해당 매칭된 미션을 초기화한다.
    //TODO: #model -> match한다.
    //TODO: #output -> match된 결과를 출력한다
    //TODO: #input -> feature 입력 받기 --> handleFeature
  }

  #searchMatched() {
    //TODO: #input -> 과정,레벨, 미션을 입력받는다. --> handleSearching
  }

  #handleSearching(course, level, mission) {
    //TODO: #model -> 해당 mission이 있는지 확인하고 출력한다.
  }

  #initAllMatched() {
    //TODO: #model -> 모든 매칭된 결과를 초기화한다.
    //TODO: #output -> "초기화되었습니다."
  }

  #quit() {
    //TODO: #output -> console을 닫는다.
  }
}

module.exports = Controller;
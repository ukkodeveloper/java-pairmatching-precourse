const { FEATURES, COMMANDS } = require('../command.constants');
const WoowaTechCourse = require('../domain/WoowaTechCourse');
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
    this.#inputView.readFeature(this.#handleFeature.bind(this));
  }

  #handleFeature(feature) {
    if (feature === FEATURES.match) return this.#matchPeers();

    if (feature === FEATURES.search) return this.#searchMatched();

    if (feature === FEATURES.init) return this.#initAllMatched();

    if (feature === FEATURES.quit) return this.#quit();
  }

  #matchPeers() {
    this.#outputView.printMissionBoard();
    this.#inputView.readMission(this.#handleMissionSelection.bind(this));
  }

  #handleMissionSelection([course, level, mission]) {
    //TODO: 기존에 있는지 여부에 따라
    if (this.#woowaTechCourse.checkExisting(course, level, mission)) {
      return this.#inputView.readRematch(this.#handleRematch(course, level, mission).bind(this));
    }

    this.#proceedMatching(course, level, mission);
  }

  #proceedMatching(course, level, mission) {
    try {
      const matchingResult = this.#woowaTechCourse.peerMatch(course, level, mission);
      this.#outputView.printMatchResult(matchingResult);
      this.#inputView.readFeature(this.#handleFeature.bind(this));
    } catch (error) {
      OutputView.printError(error);
      OutputView.close();
    }
  }

  #handleRematch(course, level, mission) {
    return (command) => {
      if (command === COMMANDS.true) {
        this.#woowaTechCourse.initMatching(course, level, mission);
        return this.#proceedMatching(course, level, mission);
      }

      this.#inputView.readMission(this.#handleMissionSelection.bind(this));
    };
  }

  #searchMatched() {
    this.#inputView.readMission(this.#handleSearching.bind(this));
  }

  #handleSearching([course, level, mission]) {
    try {
      const pairSearched = this.#woowaTechCourse.search(course, level, mission);
      this.#outputView.printMatchResult(pairSearched);
    } catch (error) {
      OutputView.printError(error);
      OutputView.close();
    }
    this.#inputView.readFeature(this.#handleFeature.bind(this));
  }

  #initAllMatched() {
    this.#woowaTechCourse.init();
    this.#outputView.printInit();
    this.#inputView.readFeature(this.#handleFeature.bind(this));
  }

  #quit() {
    this.#outputView.close();
  }
}

module.exports = Controller;

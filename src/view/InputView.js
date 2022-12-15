const { Console } = require('@woowacourse/mission-utils');
const InputValidator = require('./InputValidator');
const { INPUT_MESSAGES } = require('./messages');

const reRead = (error, readFunction, readingHandler) => {
  Console.print(error.message);
  readFunction(readingHandler);
};

const InputView = {
  readFeature(readingHandler) {
    Console.readLine(INPUT_MESSAGES.feature, (input) => {
      try {
        InputValidator.checkFeature(input);
        readingHandler(input);
      } catch (error) {
        reRead(error, this.readFeature.bind(InputView), readingHandler);
      }
    });
  },

  readMission(readingHandler) {
    Console.readLine(INPUT_MESSAGES.mission, (input) => {
      try {
        InputValidator.checkMatching(input);
        readingHandler(this.preprocessMissionInput(input));
      } catch (error) {
        reRead(error, this.readMission.bind(InputView), readingHandler);
      }
    });
  },

  readRematch(readingHandler) {
    Console.readLine(INPUT_MESSAGES.rematch, (input) => {
      try {
        InputValidator.checkRematching(input);
        readingHandler(input);
      } catch (error) {
        reRead(error, this.readRematch.bind(InputView), readingHandler);
      }
    });
  },

  preprocessMissionInput(input) {
    return input.replace(/ /g, '').split(',');
  },
};

module.exports = InputView;

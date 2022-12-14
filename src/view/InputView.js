const { Console } = require('@woowacourse/mission-utils');
const INPUT_FORMAT = require('./inputFormat');

const validateInput = (inputType) => (input) => {
  if (!INPUT_FORMAT[inputType].regex.test(input))
    throw new Error(INPUT_FORMAT[inputType].error);
  return;
};

const reRead = (errorMessage, readingFunction, callback) => {
  Console.print(errorMessage);
  readingFunction(callback);
};

const readFor = (inputType) => (callback) => {
  Console.readLine(INPUT_FORMAT[inputType].message, (input) => {
    try {
      validateInput(inputType)(input);
      callback(input);
    } catch (error) {
      reRead(error.message, read(inputType), callback);
    }
  });
};

const InputView = {
  readFeature: readFor('feature'),
  readMission: readFor('message'),
  readRematch: readFor('rematch'),
};

module.exports = InputView;

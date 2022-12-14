const fs = require('fs');

class WoowaTechCourse {
  #backendCrew;
  #frontendCrew;

  constructor() {
    [this.#backendCrew, this.#frontendCrew] = this.#read();
  }

  #read() {
    return [
      fs.readFileSync('resources/backend-crew.md', 'utf-8').split('\n'),
      fs.readFileSync('resources/frontend-crew.md', 'utf-8').split('\n'),
    ];
  }
}

module.exports = WoowaTechCourse;

const fs = require('fs');

class WoowaTechCourse {
  #backendCrew;
  #frontendCrew;

  constructor() {
    [this.#backendCrew, this.#frontendCrew] = this.#read();
  }

  checkMission(course, level, mission) {
    console.log('course, level, mission', course, level, mission);
  }

  #read() {
    return [
      fs.readFileSync('resources/backend-crew.md', 'utf-8').split('\n'),
      fs.readFileSync('resources/frontend-crew.md', 'utf-8').split('\n'),
    ];
  }
}

module.exports = WoowaTechCourse;

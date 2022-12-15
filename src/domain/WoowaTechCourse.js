const fs = require('fs');
const { COURSES } = require('../course.constants');
const BackendStorage = require('../storage/BackendStorage');
const FrontendStorage = require('../storage/FrontendStorage');
const MatchingSystem = require('./MatchingSystem');

class WoowaTechCourse {
  #backendCrew;
  #frontendCrew;
  #matchingSystem;

  constructor() {
    [this.#backendCrew, this.#frontendCrew] = this.#read();
    this.#matchingSystem = new MatchingSystem();
  }

  #read() {
    return [
      fs.readFileSync('resources/backend-crew.md', 'utf-8').split('\n'),
      fs.readFileSync('resources/frontend-crew.md', 'utf-8').split('\n'),
    ];
  }

  checkExisting(course, level, mission) {
    if (course === COURSES.back) {
      return this.#checkBackendMatching(level, mission);
    }

    if (course === COURSES.front) {
      return this.#checkFrontendMatching(level, mission);
    }
  }

  #checkBackendMatching(level, mission) {
    BackendStorage[level]; //?
    if (BackendStorage?.[level]?.[mission] === undefined) {
      throw new Error(`[개발자] DB에 해당 미션을 접근할 수 없습니다.`);
    }

    if (BackendStorage[level][mission].length === 0) return false;

    return true;
  }

  #checkFrontendMatching(level, mission) {
    if (FrontendStorage?.[level]?.[mission] === undefined) {
      throw new Error(`[개발자] DB에 해당 미션을 접근할 수 없습니다.`);
    }

    if (FrontendStorage[level][mission].length === 0) return false;

    return true;
  }

  peerMatch(course, level, mission) {
    //TODO:
    this.#backendCrew; //?
  }
}

module.exports = WoowaTechCourse;

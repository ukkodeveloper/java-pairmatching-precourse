const fs = require('fs');
const { COURSES } = require('../course.constants');
const BackPairs = require('../storage/BackPairs');
const FrontPairs = require('../storage/FrontPairs');
const Crews = require('./crews');
const MatchingSystem = require('./MatchingSystem');
const Shuffler = require('./Shuffler');

class WoowaTechCourse {
  #backendCrews;
  #frontendCrews;
  #matchingSystem;
  #countCache;
  #initialPairs;

  constructor() {
    const [backendCrews, frontendCrews] = this.#read();
    this.#backendCrews = new Crews(backendCrews);
    this.#frontendCrews = new Crews(frontendCrews);

    this.#matchingSystem = MatchingSystem;

    this.#saveInitialPairs();

    this.#countCache = 0;
  }

  #saveInitialPairs() {
    this.#initialPairs = [{ ...BackPairs }, { ...FrontPairs }];
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
    if (BackPairs?.[level]?.[mission] === undefined) {
      throw new Error(`[개발자] DB에 해당 미션을 접근할 수 없습니다.`);
    }

    if (BackPairs[level][mission].length === 0) return false;

    return true;
  }

  #checkFrontendMatching(level, mission) {
    if (FrontPairs?.[level]?.[mission] === undefined) {
      throw new Error(`[개발자] DB에 해당 미션을 접근할 수 없습니다.`);
    }

    if (FrontPairs[level][mission].length === 0) return false;

    return true;
  }

  peerMatch(course, level, mission) {
    const matchResult = this.#getMatchResult(course);

    if (this.#countCache === 4) throw new Error(`[ERROR] 페어 매칭에 실패했습니다.`);

    if (this.#checkIsRepeated(matchResult, course, level, mission)) {
      this.#countCache += 1;
      return this.peerMatch();
    }

    this.#countCache = 0;
    this.#setMatchResult(matchResult, course, level, mission);
    return matchResult;
  }

  #setMatchResult(matchResult, course, level, mission) {
    if (course === COURSES.back) {
      BackPairs[level][mission] = matchResult;
      return;
    }

    if (course === COURSES.front) {
      FrontPairs[level][mission] = matchResult;
      return;
    }
  }

  #checkIsRepeated(matchResult, course, level, mission) {
    if (course === COURSES.back) {
      return this.#checkRepeatedPairInBackend(matchResult, level, mission);
    }
    if (course === COURSES.front) {
      return his.#checkRepeatedPairInFrontend(matchResult, level, mission);
    }
  }

  #checkRepeatedPairInBackend(matchResult, level, mission) {
    const otherMissions = Object.keys(BackPairs[level]);
    for (const otherMission of otherMissions) {
      if (otherMission === mission && BackPairs[level][otherMission].length === 0) continue;
      if (this.#compareToFindRepeat(matchResult, BackPairs[level][otherMission])) {
        return true;
      }
    }
    return false;
  }

  #checkRepeatedPairInFrontend(matchResult, level, mission) {
    const otherMissions = Object.values(FrontPairs[level]);
    for (const otherMission of otherMissions) {
      if (otherMission === mission && FrontPairs[level][otherMission].length === 0) continue;
      if (this.#compareToFindRepeat(matchResult, FrontPairs[level][otherMission])) {
        return true;
      }
    }
    return false;
  }

  #compareToFindRepeat(onePairs, otherPairs) {
    const isRepeat = false;
    onePairs.forEach(([oneMember, otherMember]) => {
      otherPairs.forEach((pair) => {
        if (pair.includes(oneMember) && pair.includes(otherMember)) isRepeat = true;
      });
    });
    return isRepeat;
  }

  #getMatchResult(course) {
    if (course === COURSES.back) {
      return this.#backPeerMatch();
    }

    if (course === COURSES.front) {
      return this.#frontPeerMatch();
    }
  }

  #backPeerMatch() {
    return this.#matchingSystem.matchPeers(
      this.#backendCrews,
      Shuffler.shuffle(this.#backendCrews.length)
    );
  }

  #frontPeerMatch() {
    return this.#matchingSystem.matchPeers(
      this.#frontendCrews,
      Shuffler.shuffle(this.#frontendCrews.length)
    );
  }

  initMatching(course, level, mission) {
    if (course === COURSES.back) {
      BackPairs[level][mission] = [];
      return;
    }

    if (course === COURSES.front) {
      FrontPairs[level][mission] = [];
      return;
    }
  }

  search(course, level, mission) {
    if (!this.checkExisting(course, level, mission)) {
      throw new Error(`[ERROR] 매칭 이력이 없습니다.\n`);
    }

    if (course === COURSES.back) {
      return BackPairs[level][mission];
    }

    if (course === COURSES.front) {
      return FrontPairs[level][mission];
    }
  }

  init() {
    this.#initPairs(BackPairs);
    this.#initPairs(FrontPairs);
  }

  #initPairs(pairsDB) {
    Object.keys(pairsDB).forEach((level) => {
      if (Object.keys(pairsDB[level]).length !== 0) {
        this.#initMission(pairsDB[level]);
      }
    });
  }

  #initMission(level) {
    Object.keys(level).forEach((mission) => {
      level[mission] = [];
    });
  }
}

module.exports = WoowaTechCourse;

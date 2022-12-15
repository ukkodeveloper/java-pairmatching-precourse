const Crews = require('../src/domain/crews');
const MatchingSystem = require('../src/domain/MatchingSystem');

describe('MatchingSystem 클래스 테스트', () => {
  test('matchPeers 메소드 테스트', () => {
    expect(
      MatchingSystem.matchPeers(
        new Crews(['유권', '유곤', '유건', '유군', '유관']),
        [4, 3, 2, 1, 0]
      )
    ).toEqual([
      ['유관', '유군'],
      ['유건', '유곤', '유권'],
    ]);
  });
});

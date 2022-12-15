const InputValidator = require('../src/view/InputValidator');

describe('InputValidator 클래스 테스트', () => {
  test('checkFeature 메소드 테스트', () => {
    expect(() => {
      InputValidator.checkFeature('0');
    }).toThrow('[ERROR]');
  });

  test('checkMatching 메소드 테스트 (예외처리: 과정)', () => {
    expect(() => {
      InputValidator.checkMatching('안드로이드, 레벨1, 로또');
    }).toThrow('[ERROR]');
  });

  test('checkMatching 메소드 테스트 (예외처리: 입력 부족)', () => {
    expect(() => {
      InputValidator.checkMatching('안드로이드, 레벨1');
    }).toThrow('[ERROR]');
  });

  test('checkMatching 메소드 테스트 (예외처리: 레벨)', () => {
    expect(() => {
      InputValidator.checkMatching('안드로이드, 레벨10, 로또');
    }).toThrow('[ERROR]');
  });

  test('checkMatching 메소드 테스트 (예외처리: 미션)', () => {
    expect(() => {
      InputValidator.checkMatching('안드로이드, 레벨1, 자동차경주게임');
    }).toThrow('[ERROR]');
  });
});

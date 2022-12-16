class Crews extends Array {
  constructor(crews) {
    super(...crews);
    this.validate();
  }

  validate() {
    if (new Set(this).size !== this.length) {
      throw new Error(`[개발자] DB에 동명이인이 있습니다.`);
    }
  }
}

module.exports = Crews;

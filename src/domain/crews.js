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

const crews = new Crews(['백호', '태웅', '치수', '치환', '유권']);

module.exports = Crews;

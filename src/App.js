const Controller = require('./controller/Controller');

class App {
  #controller;

  constructor() {
    this.#controller = new Controller();
  }

  play() {
    this.#controller.execute();
  }
}

const app = new App();
app.play();

module.exports = App;

const Controller = require('./controller/Controller');

class App {
  constructor() {
    const controller = new Controller();
  }

  play() {
    controller.play();
  }
}

const app = new App();
app.play();

module.exports = App;

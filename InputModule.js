class InputModule {
  //Node.js 실행 모듈
  constructor({ Moudule }) {
    this.Moudule = new Moudule();
    this.readline = require("readline");
    this.rl = this.readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.Controller = {
      2: (A, B) => this.Moudule.getDistanceBtwPoints(A, B),
    };
  }

  init() {
    console.log("> 좌표를 입력하세요.");
    this.rl.setPrompt("> ");
    this.rl.prompt();
    this.receiveInput();
    this.closeModule();
  }

  receiveInput() {
    this.rl.on("line", (line) => {
      if (line.toUpperCase() === "Q") {
        this.rl.close();
      }
      const inputText = line.split("-");
      let [A, B, C, D] = [
        inputText[0],
        inputText[1],
        inputText[2],
        inputText[3],
      ];
      let len = inputText.length;
      this.Controller[len](A, B, C, D);
      this.rl.prompt();
    });
  }

  closeModule() {
    this.rl.on("close", () => {
      process.exit();
    });
  }
}

module.exports = InputModule;

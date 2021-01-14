
const VetorCalculator = require("./VetorCalculator.js");
let Veter = new VetorCalculator;
var A_ = "(10,10)";
var B_ = "(10,10)";

function Point(x, y) {
  this.x = x;
  this.y = y;
}
class Moudule {
  changePointXY = function (A) {
    return A.slice(1, -1).split(",").map(Number);
  };

  getDistanceBtwPoints = function (rowA, rowB) {
    let C = this.getVetor(rowA, rowB);


    console.log(
      `두 점 사이의 거리는 ${Math.sqrt(C.x ** 2 + C.y ** 2)} 입니다.`
    );
    return Math.sqrt(C.x ** 2 + C.y ** 2);
  };

  getVetor(rowA, rowB) {
    let tempA = this.changePointXY(rowA);
    let tempB = this.changePointXY(rowB);

    let C = new Point(tempA[0] - tempB[0], tempA[1] - tempB[1]);
    return C;
  }

  getTriArea= function (rowA, rowB, rowC) {
    let tempA = this.changePointXY(rowA);
    let tempB = this.changePointXY(rowB);

    let A = new Point(tempA[0], tempA[1]);
    let B = new Point(tempB[0], tempB[1]);
    console.log(
      `두 점 사이의 거리는 ${Math.sqrt(
        (A.x - B.x) ** 2 + (A.y - B.y) ** 2
      )} 입니다.`
    );
    return Math.sqrt((A.x - B.x) ** 2 + (A.y - B.y) ** 2);
  };
}

module.exports = Moudule;

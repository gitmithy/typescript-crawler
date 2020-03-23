// 勾股定理公式
// function demo(data){
//     return Math.sqrt(data.x**2+data.y**2);
// }
// 几个优势
// 1.更好的提示
// 2.类型的声明直观的看到代码里的语义

function tsdemo(data: { x: number; y: number }) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}
tsdemo({ x: 1, y: 2 });

type Point = { x: number; y: number };
function tsdemo1(data: Point) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}
tsdemo1({ x: 1, y: 2 });

interface Point2 {
  x: number;
  y: number;
}
function tsdemo3(data: Point2) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}
tsdemo3({ x: 1, y: 2 });

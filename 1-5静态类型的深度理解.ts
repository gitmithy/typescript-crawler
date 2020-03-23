// 基本类型定义
const count: number = 2019;
// 定义count为number类型

// 自定义类型
interface Point5 {
  x: number;
  y: number;
}
interface Point6 {
  x: number;
  y: number;
  z: number;
}
const point: Point5 = {
  x: 3,
  y: 4
};

const point2: Point6 = {
  x: 3,
  y: 4,
  z: 5
};

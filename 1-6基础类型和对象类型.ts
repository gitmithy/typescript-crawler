//基础类型  null.undefined,symbol,boolean,void
let count6: number = 123;
const count7: number = 123;
const teacherName: string = "dell";

//对象类型
const teacher: {
  name: string;
  age: number;
} = {
  name: "dell",
  age: 18
};

// 定义数组
const numbers: number[] = [1, 2, 3];
// 定义类
class Person {}

const dell: Person = new Person();

// 定义函数
const getTotal: () => number = () => {
  // 因为有number所以必须返回数字
  return 123;
};

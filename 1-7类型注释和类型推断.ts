//type annotation 类型注解，我们来告诉TS变量是什么类型

let count1_7: number;
count1_7 = 123;

//type inference 类型推断
let countInference = 123;

//如果TS能够自动分析变量类型，我们就什么也不需要做了
//如果TS无法分析变量类型的话，我们就需要使用类型注解

// const FirstNumber = 1;
// const secondNumber = 2;
// const total = FirstNumber + secondNumber;

// 这种情况下推断不出，就必须加类型注解
function getTotal1_7(FirstNumber: number, secondNumber: number) {
  return FirstNumber + secondNumber;
}

const total1_7 = getTotal1_7(1, 2);

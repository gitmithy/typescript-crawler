"use strict";
//基础类型  null.undefined,symbol,boolean,void
var count6 = 123;
var count7 = 123;
var teacherName = "dell";
//对象类型
var teacher = {
    name: "dell",
    age: 18
};
// 定义数组
var numbers = [1, 2, 3];
// 定义类
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var dell = new Person();
// 定义函数
var getTotal = function () {
    // 因为有number所以必须返回数字
    return 123;
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eventNames = ['click', 'touchend'];
function default_1(el, callback) {
    var isTouch = false;
    function handler(ev) {
        // touchend
        if (eventNames[1] === ev.type)
            isTouch = true;
        // 禁止移动端touchend触发后还触发click
        if (eventNames[0] === ev.type && isTouch)
            return;
        // 判断点击元素是否在el外
        // 由于ev.target的类型是EventTarget,
        // 而contains方法标注的参数类型是Node, 
        // 实际上EventTarget也是dom元素,
        // 所以此处使用需要类型断言, 标注为Node类型
        if (!el.contains(ev.target))
            callback(ev);
    }
    eventNames.forEach(function (name) {
        document.addEventListener(name, handler);
    });
    return function () {
        eventNames.forEach(function (name) {
            document.removeEventListener(name, handler);
        });
    };
}
exports.default = default_1;

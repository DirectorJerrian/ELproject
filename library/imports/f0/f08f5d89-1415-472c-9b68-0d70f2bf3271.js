"use strict";
cc._RF.push(module, 'f08f52JFBVHLJtoDXDyvzJx', 'NA被剪开的质粒');
// Scripts/NA被剪开的质粒.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var position = cc.v2(0, 0);
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            position = cc.v2(this.x, this.y);
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            this.opacity = 100;
            var delta = event.touch.getDelta();
            this.x += delta.x;
            this.y += delta.y;
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            this.opacity = 255;
            if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
                var goback = cc.moveTo(1, position).easing(cc.easeCubicActionOut());
                this.runAction(goback);
            };
        }, this.node);
        this.node.active = false;
    },

    start: function start() {},

    update: function update(dt) {}
});

cc._RF.pop();
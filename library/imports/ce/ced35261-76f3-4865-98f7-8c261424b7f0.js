"use strict";
cc._RF.push(module, 'ced35JhdvNIZZj3jCYUJLfw', 'AsDNA连接酶');
// Scripts/AsDNA连接酶.js

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
        bingoAudio: {
            default: null,
            type: cc.AudioClip
        },

        partnerI: {
            default: null,
            type: cc.Node
        },

        partnerII: {
            default: null,
            type: cc.Node
        },

        goal: {
            default: null,
            type: cc.Node
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
        } },

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
    },

    start: function start() {},

    mix: function mix() {
        if (Math.abs(this.node.x - this.partnerI.getPosition().x) < 16 && Math.abs(this.node.y - this.partnerI.getPosition().y) < 16 && Math.abs(this.node.x - this.partnerII.getPosition().x) < 16 && Math.abs(this.node.y - this.partnerII.getPosition().y) < 16) {
            this.goal.active = true;
            this.goal.setPosition(this.node.x, this.node.y);
            cc.audioEngine.playEffect(this.bingoAudio, false, 0.5);
            this.node.active = false;
            this.partnerI.active = false;
            this.partnerII.active = false;
            return;
        }
    },

    update: function update(dt) {
        if (this.node.x <= 240 && this.node.x >= -250 && this.node.y <= 180 && this.node.y >= -220) {
            this.mix();
            return;
        }
    }
});

cc._RF.pop();
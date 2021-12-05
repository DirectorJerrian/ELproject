"use strict";
cc._RF.push(module, '559f8pEykxMCYgidmdYj0wz', 'Europe2');
// Scripts/Europe2.js

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

    toScene: function toScene() {
        this.node.runAction(cc.sequence(cc.fadeOut(0.5), cc.callFunc(function () {
            cc.director.loadScene('欧洲操作室');
        })));
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.AudioPlayer = cc.find("Audio").getComponent("AudioManager");
        this.AudioPlayer.stopBgMusic();
        this.AudioPlayer.playBgMusic();
    },

    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();
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
        judge:1,
        assistants1:{
            type: cc.AudioSource,
            default: null
        },

        assistants2:{
            type: cc.AudioSource,
            default: null
        },

        assistants3:{
            type: cc.AudioSource,
            default: null
        },

        assistants4:{
            type: cc.AudioSource,
            default: null
        },

        assistants5:{
            type: cc.AudioSource,
            default: null
        },

        assistants6:{
            type: cc.AudioSource,
            default: null
        },

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

    onLoad:function () {},

    turn:function(){
        if(this.judge==1){
            this.assistants1.volume=0;
            this.assistants2.volume=0;
            this.assistants3.volume=0;
            this.assistants4.volume=0;
            this.assistants5.volume=0;
            this.assistants6.volume=0;
            this.judge=0;
            cc.log(0)
        }
        else{
            this.assistants1.volume=1;
            this.assistants2.volume=1;
            this.assistants3.volume=1;
            this.assistants4.volume=1;
            this.assistants5.volume=1;
            this.assistants6.volume=1;
            this.judge=1;
            cc.log(1)
        };
    },

    start () {

    },

    // update (dt) {},
});

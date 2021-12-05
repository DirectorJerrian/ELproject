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
        cell:{
            type:cc.Node,
            default:null,
        },

        zhili:{
            type:cc.Node,
            default:null,
        },

        bingoAudio:{
            default:null,
            type:cc.AudioClip
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

    doit: function(){
        if(this.cell.getPosition().x<=240 && this.cell.getPosition().x>=-250 && this.cell.getPosition().y<=180 && this.cell.getPosition().y>=-220){
            this.zhili.active=true;
            this.zhili.setPosition(this.cell.getPosition().x,this.cell.getPosition().y);
            cc.audioEngine.playEffect(this.bingoAudio, false,0.5);
            this.cell.active=false;
            this.node.active=false;
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});

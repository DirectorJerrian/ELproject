window.__require = function t(c, i, e) {
function n(s, u) {
if (!i[s]) {
if (!c[s]) {
var a = s.split("/");
a = a[a.length - 1];
if (!c[a]) {
var h = "function" == typeof __require && __require;
if (!u && h) return h(a, !0);
if (o) return o(a, !0);
throw new Error("Cannot find module '" + s + "'");
}
}
var d = i[s] = {
exports: {}
};
c[s][0].call(d.exports, function(t) {
return n(c[s][1][t] || t);
}, d, d.exports, t, c, i, e);
}
return i[s].exports;
}
for (var o = "function" == typeof __require && __require, s = 0; s < e.length; s++) n(e[s]);
return n;
}({
AfCanvas2: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "043b0k2imdO6I+Il7ucqWt1", "AfCanvas2");
cc.Class({
extends: cc.Component,
properties: {},
next: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("非洲展览厅3");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
AfCanvas3: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "7929dEvwmdNvrgfk2R2Yeon", "AfCanvas3");
cc.Class({
extends: cc.Component,
properties: {},
next: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("非洲展览厅4");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
AfCanvas4: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "2c50f2tSJhLNIsoLyFeXaLS", "AfCanvas4");
cc.Class({
extends: cc.Component,
properties: {},
next: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("非洲展览厅4");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
AfCanvas: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "aba6c5/DZ1F7qfjOcBOWmMV", "AfCanvas");
cc.Class({
extends: cc.Component,
properties: {},
next: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("非洲展览厅2");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Africa2: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "8839bxtq4pNy7nzgLzlYlTj", "Africa2");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("非洲展览厅1");
})));
},
onLoad: function() {
this.AudioPlayer = cc.find("Audio").getComponent("AudioManager");
this.AudioPlayer.stopBgMusic();
this.AudioPlayer.playBgMusic();
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Africa: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "61ecaeRAGxGcrT2kXZWoJ7K", "Africa");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("非洲展览厅导引");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"Af按钮2": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "56827orujpEd708ZdbUumLz", "Af按钮2");
cc.Class({
extends: cc.Component,
properties: {
hiden1: {
default: null,
type: cc.Node
},
hiden2: {
default: null,
type: cc.Node
},
hiden3: {
default: null,
type: cc.Node
},
hiden4: {
default: null,
type: cc.Node
},
shown: {
default: null,
type: cc.Node
}
},
press: function() {
this.hiden1.active = !1;
this.hiden2.active = !1;
this.hiden3.active = !1;
this.hiden4.active = !1;
this.shown.active = !0;
this.shown.opacity = 0;
this.shown.runAction(cc.fadeIn(.5));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"Af按钮3": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "989bcUikbZGjo7ZJ9gG339p", "Af按钮3");
cc.Class({
extends: cc.Component,
properties: {
hiden: {
default: null,
type: cc.Node
},
shown: {
default: null,
type: cc.Node
}
},
press: function() {
this.hiden.active = !1;
this.shown.active = !0;
this.shown.opacity = 0;
this.shown.runAction(cc.fadeIn(.5));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"Af按钮": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "ea9e662BxpGBrQfwg1NOO83", "Af按钮");
cc.Class({
extends: cc.Component,
properties: {
hiden1: {
default: null,
type: cc.Node
},
hiden2: {
default: null,
type: cc.Node
},
hiden3: {
default: null,
type: cc.Node
},
shown: {
default: null,
type: cc.Node
}
},
press: function() {
this.hiden1.active = !1;
this.hiden2.active = !1;
this.hiden3.active = !1;
this.shown.active = !0;
this.shown.opacity = 0;
this.shown.runAction(cc.fadeIn(.5));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"Af简介2": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "5603ahl5LlOAbSATfTmEPdN", "Af简介2");
cc.Class({
extends: cc.Component,
properties: {
next: {
default: null,
type: cc.Node
}
},
hide: function() {
this.opacity = 255;
this.node.runAction(cc.fadeOut(.5));
this.next.active = !0;
this.next.opacity = 0;
this.next.runAction(cc.fadeIn(.5));
this.node.active = !1;
},
onLoad: function() {
this.node.active = !1;
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"Af简介": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "3fe2c08N5FNSqI742JmRcjL", "Af简介");
cc.Class({
extends: cc.Component,
properties: {},
hide: function() {
this.opacity = 255;
this.node.runAction(cc.fadeOut(.5));
this.node.active = !1;
},
onLoad: function() {
this.node.active = !1;
},
start: function() {}
});
cc._RF.pop();
}, {} ],
AsCanvas: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "22d11i4l+FFG7cIKaampB1J", "AsCanvas");
cc.Class({
extends: cc.Component,
properties: {},
vicctory: function() {
cc.audioEngine.stopAll();
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("游戏胜利");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"AsDNA片段": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "ed403X0KDJJ249VFIZ5xPSB", "AsDNA片段");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
this.node.active = !1;
},
start: function() {},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"AsDNA聚合酶": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "5617fSoZj1NjJvORNk5E8L4", "AsDNA聚合酶");
cc.Class({
extends: cc.Component,
properties: {
bingoAudio: {
default: null,
type: cc.AudioClip
},
partner: {
default: null,
type: cc.Node
},
goal: {
default: null,
type: cc.Node
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
mix: function() {
if (Math.abs(this.node.x - this.partner.getPosition().x) < 16 && Math.abs(this.node.y - this.partner.getPosition().y) < 16) {
this.goal.active = !0;
this.goal.setPosition(this.node.x, this.node.y);
cc.audioEngine.playEffect(this.bingoAudio, !1, .5);
this.node.active = !1;
this.partner.active = !1;
} else ;
},
start: function() {},
update: function(t) {
this.node.x <= 240 && this.node.x >= -250 && this.node.y <= 180 && this.node.y >= -220 && this.mix();
}
});
cc._RF.pop();
}, {} ],
"AsDNA连接酶": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "ced35JhdvNIZZj3jCYUJLfw", "AsDNA连接酶");
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
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
start: function() {},
mix: function() {
if (Math.abs(this.node.x - this.partnerI.getPosition().x) < 16 && Math.abs(this.node.y - this.partnerI.getPosition().y) < 16 && Math.abs(this.node.x - this.partnerII.getPosition().x) < 16 && Math.abs(this.node.y - this.partnerII.getPosition().y) < 16) {
this.goal.active = !0;
this.goal.setPosition(this.node.x, this.node.y);
cc.audioEngine.playEffect(this.bingoAudio, !1, .5);
this.node.active = !1;
this.partnerI.active = !1;
this.partnerII.active = !1;
} else ;
},
update: function(t) {
this.node.x <= 240 && this.node.x >= -250 && this.node.y <= 180 && this.node.y >= -220 && this.mix();
}
});
cc._RF.pop();
}, {} ],
Asia2: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "3bb6dXSAQBFxK2qezrs58cP", "Asia2");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("亚洲操作室");
})));
},
onLoad: function() {
this.AudioPlayer = cc.find("Audio").getComponent("AudioManager");
this.AudioPlayer.stopBgMusic();
this.AudioPlayer.playBgMusic();
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Asia3: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "90ea91NuaVGI5ugU64x+s9K", "Asia3");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("亚洲操作室");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Asia: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "0bd3b1MrWBJSL2g5fU+AxZ4", "Asia");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("亚洲剧情");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"As基因表达载体": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "6a91aHKvzpNILsijies8HvF", "As基因表达载体");
cc.Class({
extends: cc.Component,
properties: {
audioSource: {
type: cc.AudioSource,
default: null
},
judge: 1,
otheraudio: {
type: cc.AudioSource,
default: null
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
this.node.active = !1;
},
start: function() {},
onEnable: function() {
if (1 == this.judge) {
this.otheraudio.stop();
this.audioSource.play();
this.judge = this.judge + 1;
}
},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"As棉花细胞": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "8f0f0UAEkJOEaihVRB8MFGV", "As棉花细胞");
cc.Class({
extends: cc.Component,
properties: {
bingoAudio: {
default: null,
type: cc.AudioClip
},
partner: {
default: null,
type: cc.Node
},
goal: {
default: null,
type: cc.Node
},
button: {
default: null,
type: cc.Node
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
mix: function() {
if (Math.abs(this.node.x - this.partner.getPosition().x) < 16 && Math.abs(this.node.y - this.partner.getPosition().y) < 16) {
this.goal.active = !0;
this.goal.setPosition(this.node.x, this.node.y);
cc.audioEngine.playEffect(this.bingoAudio, !1, .5);
this.node.active = !1;
this.partner.active = !1;
this.button.active = !0;
} else ;
},
start: function() {},
update: function(t) {
this.node.x <= 240 && this.node.x >= -250 && this.node.y <= 180 && this.node.y >= -220 && this.mix();
}
});
cc._RF.pop();
}, {} ],
"As真的DNA片段": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "90478U+sO5FF4jY0kMJas6M", "As真的DNA片段");
cc.Class({
extends: cc.Component,
properties: {
audioSource: {
type: cc.AudioSource,
default: null
},
judge: 1,
otheraudio: {
type: cc.AudioSource,
default: null
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
this.node.active = !1;
},
start: function() {},
onEnable: function() {
if (1 == this.judge) {
this.otheraudio.stop();
this.audioSource.play();
this.judge = this.judge + 1;
}
},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"As真的苏云金芽孢杆菌": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "a102cJALSJKy6sEAwvE0ANw", "As真的苏云金芽孢杆菌");
cc.Class({
extends: cc.Component,
properties: {
judge: 1,
audioSource: {
type: cc.AudioSource,
default: null
},
otheraudio: {
type: cc.AudioSource,
default: null
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
start: function() {},
update: function(t) {
if (this.node.x <= 240 && this.node.x >= -250 && this.node.y <= 180 && this.node.y >= -220 && 1 == this.judge) {
this.audioSource.play();
this.otheraudio.stop();
this.judge = this.judge + 1;
} else ;
}
});
cc._RF.pop();
}, {} ],
"As组织培养": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "dcba9roBOdMHp2efEi+NZFG", "As组织培养");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.node.active = !1;
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"As苏云金芽孢杆菌": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "6eccez7foRKZ6k8OqJXS2bA", "As苏云金芽孢杆菌");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
start: function() {},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"As被剪开的质粒": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "1156cOfqSZPoLgPj5Xg046y", "As被剪开的质粒");
cc.Class({
extends: cc.Component,
properties: {
audioSource: {
type: cc.AudioSource,
default: null
},
judge: 1,
otheraudio: {
type: cc.AudioSource,
default: null
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
this.node.active = !1;
},
start: function() {},
onEnable: function() {
if (1 == this.judge) {
this.otheraudio.stop();
this.audioSource.play();
this.judge = this.judge + 1;
}
},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"As质粒": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "32036f0bPdJpZR2YnLXOn4A", "As质粒");
cc.Class({
extends: cc.Component,
properties: {
judge: 1,
audioSource: {
type: cc.AudioSource,
default: null
},
otheraudio: {
type: cc.AudioSource,
default: null
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
start: function() {},
update: function(t) {
if (this.node.x <= 240 && this.node.x >= -250 && this.node.y <= 180 && this.node.y >= -220 && 1 == this.judge) {
this.audioSource.play();
this.otheraudio.stop();
this.judge = this.judge + 1;
} else ;
}
});
cc._RF.pop();
}, {} ],
AudioManager: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "6c39eTV0zBJmIe/iE7eR+K/", "AudioManager");
cc.Class({
extends: cc.Component,
properties: {
bgMusic: {
url: cc.AudioClip,
default: null
}
},
onLoad: function() {
cc.game.addPersistRootNode(this.node);
},
playBgMusic: function() {
this.bgMusicChannel = cc.audioEngine.play(this.bgMusic, !0, .36);
},
stopBgMusic: function() {
if (void 0 !== this.bgMusicChannel) {
cc.audioEngine.stop(this.bgMusicChannel);
this.bgMusicChannel = void 0;
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
BackToMap: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "906e8P7istLObWV8PZRWtKf", "BackToMap");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
cc.audioEngine.stopAll();
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("世界地图界面");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
EndButton: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "aafabheYOhCDatFZ5OcNBrV", "EndButton");
cc.Class({
extends: cc.Component,
properties: {},
EndButton: function() {
cc.game.end();
},
start: function() {}
});
cc._RF.pop();
}, {} ],
EuCanvas: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "cd807QctG9G/YXEQfkbGnaR", "EuCanvas");
cc.Class({
extends: cc.Component,
properties: {},
vicctory: function() {
cc.audioEngine.stopAll();
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("游戏胜利");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"EuDNA连接酶": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "93bc0a5JR5KLJiver0PTsZR", "EuDNA连接酶");
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
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
start: function() {},
mix: function() {
if (Math.abs(this.node.x - this.partnerI.getPosition().x) < 16 && Math.abs(this.node.y - this.partnerI.getPosition().y) < 16 && Math.abs(this.node.x - this.partnerII.getPosition().x) < 16 && Math.abs(this.node.y - this.partnerII.getPosition().y) < 16) {
this.goal.active = !0;
this.goal.setPosition(this.node.x, this.node.y);
cc.audioEngine.playEffect(this.bingoAudio, !1, .5);
this.node.active = !1;
this.partnerI.active = !1;
this.partnerII.active = !1;
} else ;
},
update: function(t) {
this.node.x <= 240 && this.node.x >= -250 && this.node.y <= 180 && this.node.y >= -220 && this.mix();
}
});
cc._RF.pop();
}, {} ],
Europe2: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "559f8pEykxMCYgidmdYj0wz", "Europe2");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("欧洲操作室");
})));
},
onLoad: function() {
this.AudioPlayer = cc.find("Audio").getComponent("AudioManager");
this.AudioPlayer.stopBgMusic();
this.AudioPlayer.playBgMusic();
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Europe3: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "4c8ae2jZo1IiafR9J8EsMkO", "Europe3");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("欧洲操作室");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Europe: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "dad87ItSp1KZ5NV1YvuA5z0", "Europe");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("欧洲剧情");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"Eu人乳铁蛋白": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "d1fb600FxRE3pdzTfAWKTpz", "Eu人乳铁蛋白");
cc.Class({
extends: cc.Component,
properties: {
judge: 1,
audioSource: {
type: cc.AudioSource,
default: null
},
otheraudio: {
type: cc.AudioSource,
default: null
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
start: function() {},
update: function(t) {
if (this.node.x <= 240 && this.node.x >= -250 && this.node.y <= 180 && this.node.y >= -220 && 1 == this.judge) {
this.audioSource.play();
this.otheraudio.stop();
this.judge = this.judge + 1;
} else ;
}
});
cc._RF.pop();
}, {} ],
"Eu代孕牛": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "22bb8CanzhNGaYf/yII3DNu", "Eu代孕牛");
cc.Class({
extends: cc.Component,
properties: {
bingoAudio: {
default: null,
type: cc.AudioClip
},
partner: {
default: null,
type: cc.Node
},
goal: {
default: null,
type: cc.Node
},
button: {
default: null,
type: cc.Node
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
mix: function() {
if (Math.abs(this.node.x - this.partner.getPosition().x) < 16 && Math.abs(this.node.y - this.partner.getPosition().y) < 16) {
this.goal.active = !0;
this.goal.setPosition(this.node.x, this.node.y);
cc.audioEngine.playEffect(this.bingoAudio, !1, .5);
this.node.active = !1;
this.partner.active = !1;
this.button.active = !0;
} else ;
},
start: function() {},
update: function(t) {
this.node.x <= 240 && this.node.x >= -250 && this.node.y <= 180 && this.node.y >= -220 && this.mix();
}
});
cc._RF.pop();
}, {} ],
"Eu启动子+质粒": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "622cfI7NolDR41PX94JAviZ", "Eu启动子+质粒");
cc.Class({
extends: cc.Component,
properties: {
audioSource: {
type: cc.AudioSource,
default: null
},
judge: 1,
otheraudio: {
type: cc.AudioSource,
default: null
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
this.node.active = !1;
},
start: function() {},
onEnable: function() {
if (1 == this.judge) {
this.otheraudio.volume = 0;
this.otheraudio.stop();
this.audioSource.play();
this.judge = this.judge + 1;
}
},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"Eu早期胚胎": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "f348bIXjJNG2bDKCeLjQyNi", "Eu早期胚胎");
cc.Class({
extends: cc.Component,
properties: {
audioSource: {
type: cc.AudioSource,
default: null
},
judge: 1,
otheraudio: {
type: cc.AudioSource,
default: null
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
this.node.active = !1;
},
start: function() {},
onEnable: function() {
if (1 == this.judge) {
this.otheraudio.stop();
this.audioSource.play();
this.judge = this.judge + 1;
}
},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"Eu生产乳汁": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "a9eb8Lea3FFVI4dAzGvcWBe", "Eu生产乳汁");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.node.active = !1;
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"Eu表达载体": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "27fb0Gq5lBCfbLTLJkzAtAY", "Eu表达载体");
cc.Class({
extends: cc.Component,
properties: {
audioSource: {
type: cc.AudioSource,
default: null
},
judge: 1,
otheraudio: {
type: cc.AudioSource,
default: null
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
this.node.active = !1;
},
start: function() {},
onEnable: function() {
if (1 == this.judge) {
this.otheraudio.stop();
this.audioSource.play();
this.judge = this.judge + 1;
}
},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"Eu被剪开的人乳铁蛋白基因": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "3ce55XSGRNIx7O3QEWsTz3E", "Eu被剪开的人乳铁蛋白基因");
cc.Class({
extends: cc.Component,
properties: {
audioSource: {
type: cc.AudioSource,
default: null
},
judge: 1,
otheraudio: {
type: cc.AudioSource,
default: null
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
this.node.active = !1;
},
start: function() {},
onEnable: function() {
if (1 == this.judge) {
this.otheraudio.stop();
this.audioSource.play();
this.judge = this.judge + 1;
}
},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"Eu被剪开的质粒": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "ed57boufaBPKL5HfecFReGh", "Eu被剪开的质粒");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
this.node.active = !1;
},
start: function() {},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"Eu质粒": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "6ef72E6SHdKo63bFqazUT7o", "Eu质粒");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
start: function() {},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"Eu限制酶": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "bad9e8Nf9NFKaaF+lwzamts", "Eu限制酶");
cc.Class({
extends: cc.Component,
properties: {
bingoAudio: {
default: null,
type: cc.AudioClip
},
partner: {
default: null,
type: cc.Node
},
goal: {
default: null,
type: cc.Node
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
mix: function() {
if (Math.abs(this.node.x - this.partner.getPosition().x) < 16 && Math.abs(this.node.y - this.partner.getPosition().y) < 16) {
this.goal.active = !0;
this.goal.setPosition(this.node.x, this.node.y);
cc.audioEngine.playEffect(this.bingoAudio, !1, .5);
this.node.active = !1;
this.partner.active = !1;
} else ;
},
start: function() {},
update: function(t) {
this.node.x <= 240 && this.node.x >= -250 && this.node.y <= 180 && this.node.y >= -220 && this.mix();
}
});
cc._RF.pop();
}, {} ],
Home: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "95bfe72eBpOuLRgU7nK5uUF", "Home");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
cc.audioEngine.stopAll();
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("开始界面");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
NACanvas: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "31305aWx5RDy5pWe9CDPVuk", "NACanvas");
cc.Class({
extends: cc.Component,
properties: {},
gameOver: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("美洲游戏帮助");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"NADNA连接酶": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "ecd333qK35BNLyVToer3Vrr", "NADNA连接酶");
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
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
start: function() {},
mix: function() {
if (Math.abs(this.node.x - this.partnerI.getPosition().x) < 16 && Math.abs(this.node.y - this.partnerI.getPosition().y) < 16 && Math.abs(this.node.x - this.partnerII.getPosition().x) < 16 && Math.abs(this.node.y - this.partnerII.getPosition().y) < 16) {
this.goal.active = !0;
this.goal.setPosition(this.node.x, this.node.y);
cc.audioEngine.playEffect(this.bingoAudio, !1, .5);
this.node.active = !1;
this.partnerI.active = !1;
this.partnerII.active = !1;
} else ;
},
update: function(t) {
this.node.x <= 240 && this.node.x >= -250 && this.node.y <= 180 && this.node.y >= -220 && this.mix();
}
});
cc._RF.pop();
}, {} ],
"NARNA聚合酶": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "9fe78XcK81GH6GA7o01/c90", "NARNA聚合酶");
cc.Class({
extends: cc.Component,
properties: {
bingoAudio: {
default: null,
type: cc.AudioClip
},
partner: {
default: null,
type: cc.Node
},
goal: {
default: null,
type: cc.Node
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
mix: function() {
if (Math.abs(this.node.x - this.partner.getPosition().x) < 16 && Math.abs(this.node.y - this.partner.getPosition().y) < 16) {
this.goal.active = !0;
this.goal.setPosition(this.node.x, this.node.y);
cc.audioEngine.playEffect(this.bingoAudio, !1, .5);
this.node.active = !1;
this.partner.active = !1;
} else ;
},
start: function() {},
update: function(t) {
this.node.x <= 240 && this.node.x >= -250 && this.node.y <= 180 && this.node.y >= -220 && this.mix();
}
});
cc._RF.pop();
}, {} ],
"NA人胰岛细胞": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "f4516wTi8NG/KbcUd2RlEO3", "NA人胰岛细胞");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
start: function() {},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"NA受体细胞": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "cf80elXxstAGKlUXyP3rFc0", "NA受体细胞");
cc.Class({
extends: cc.Component,
properties: {
bingoAudio: {
default: null,
type: cc.AudioClip
},
partner: {
default: null,
type: cc.Node
},
canvas: {
default: null,
type: cc.Node
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
mix: function() {
if (Math.abs(this.node.x - this.partner.getPosition().x) < 16 && Math.abs(this.node.y - this.partner.getPosition().y) < 16) {
cc.audioEngine.stopAll();
cc.audioEngine.playEffect(this.bingoAudio, !1, .5);
this.canvas.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("游戏胜利");
})));
} else ;
},
start: function() {},
update: function(t) {
this.node.x <= 240 && this.node.x >= -250 && this.node.y <= 180 && this.node.y >= -220 && this.mix();
}
});
cc._RF.pop();
}, {} ],
"NA基因表达载体": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "1a5bfIfxglNhLWtto/9Zws9", "NA基因表达载体");
cc.Class({
extends: cc.Component,
properties: {
audioSource: {
type: cc.AudioSource,
default: null
},
judge: 1,
otheraudio: {
type: cc.AudioSource,
default: null
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
this.node.active = !1;
},
start: function() {},
onEnable: function() {
if (1 == this.judge) {
this.otheraudio.stop();
this.audioSource.play();
this.judge = this.judge + 1;
}
},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"NA大肠杆菌细胞": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "bc0c9+6XaxJ6aWRm2b4ozGM", "NA大肠杆菌细胞");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
start: function() {},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"NA真的人胰岛细胞": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "c6593Vok8NLPZ+fYW5Rmz78", "NA真的人胰岛细胞");
cc.Class({
extends: cc.Component,
properties: {
judge: 1,
audioSource: {
type: cc.AudioSource,
default: null
},
otheraudio: {
type: cc.AudioSource,
default: null
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
start: function() {},
update: function(t) {
if (this.node.x <= 240 && this.node.x >= -250 && this.node.y <= 180 && this.node.y >= -220 && 1 == this.judge) {
this.audioSource.play();
this.otheraudio.stop();
this.judge = this.judge + 1;
} else ;
}
});
cc._RF.pop();
}, {} ],
"NA真的胰岛素mRNA": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "6b5f3Tc3rJEwpo3gslkYKod", "NA真的胰岛素mRNA");
cc.Class({
extends: cc.Component,
properties: {
audioSource: {
type: cc.AudioSource,
default: null
},
judge: 1,
otheraudio: {
type: cc.AudioSource,
default: null
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
this.node.active = !1;
},
start: function() {},
onEnable: function() {
if (1 == this.judge) {
this.otheraudio.stop();
this.audioSource.play();
this.judge = this.judge + 1;
}
},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"NA碱与SDS操作": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "bfac80rd8lJsIgtUk6WAca1", "NA碱与SDS操作");
cc.Class({
extends: cc.Component,
properties: {
cell: {
type: cc.Node,
default: null
},
zhili: {
type: cc.Node,
default: null
},
bingoAudio: {
default: null,
type: cc.AudioClip
}
},
doit: function() {
if (this.cell.getPosition().x <= 240 && this.cell.getPosition().x >= -250 && this.cell.getPosition().y <= 180 && this.cell.getPosition().y >= -220) {
this.zhili.active = !0;
this.zhili.setPosition(this.cell.getPosition().x, this.cell.getPosition().y);
cc.audioEngine.playEffect(this.bingoAudio, !1, .5);
this.cell.active = !1;
this.node.active = !1;
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"NA胰岛素mNRA": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "cab6eiwUTpAZ4EexYgsX9sK", "NA胰岛素mNRA");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
this.node.active = !1;
},
start: function() {},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"NA胰岛素基因片段": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "7b63fjahQ1O3r1kMAfiC3ve", "NA胰岛素基因片段");
cc.Class({
extends: cc.Component,
properties: {
audioSource: {
type: cc.AudioSource,
default: null
},
judge: 1,
otheraudio: {
type: cc.AudioSource,
default: null
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
this.node.active = !1;
},
start: function() {},
onEnable: function() {
if (1 == this.judge) {
this.otheraudio.stop();
this.audioSource.play();
this.judge = this.judge + 1;
}
},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"NA被剪开的基因": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "00a21rCt41AlbYVUD8z3Rw0", "NA被剪开的基因");
cc.Class({
extends: cc.Component,
properties: {
audioSource: {
type: cc.AudioSource,
default: null
},
judge: 1,
otheraudio: {
type: cc.AudioSource,
default: null
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
this.node.active = !1;
},
start: function() {},
onEnable: function() {
if (1 == this.judge) {
this.otheraudio.stop();
this.audioSource.play();
this.judge = this.judge + 1;
}
},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"NA被剪开的质粒": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "f08f52JFBVHLJtoDXDyvzJx", "NA被剪开的质粒");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
this.node.active = !1;
},
start: function() {},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"NA质粒": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "ff9adui5p1A8aVrM86ErlVn", "NA质粒");
cc.Class({
extends: cc.Component,
properties: {
audioSource: {
type: cc.AudioSource,
default: null
},
judge: 1,
otheraudio: {
type: cc.AudioSource,
default: null
}
},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
this.node.active = !1;
},
start: function() {},
onEnable: function() {
if (1 == this.judge) {
this.otheraudio.stop();
this.audioSource.play();
this.judge = this.judge + 1;
}
},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"NA逆转录酶": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "ca763royqFMb4EfGt/tjX1h", "NA逆转录酶");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
start: function() {},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"NA限制酶II": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "44cd0TyolBB6YabFk8KqNFx", "NA限制酶II");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
start: function() {},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
"NA限制酶I": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "43909+AJShDWLXMWYNWalBv", "NA限制酶I");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var t = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t = cc.v2(this.x, this.y);
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.opacity = 100;
var c = t.touch.getDelta();
this.x += c.x;
this.y += c.y;
}, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.opacity = 255;
if (this.x > 240 || this.x < -250 || this.y > 180 || this.y < -220) {
var c = cc.moveTo(1, t).easing(cc.easeCubicActionOut());
this.runAction(c);
}
}, this.node);
},
start: function() {},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
NorthAmerica2: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "b2bd8aYOxZPeqinML9ckm2z", "NorthAmerica2");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("北美操作室");
})));
},
onLoad: function() {
this.AudioPlayer = cc.find("Audio").getComponent("AudioManager");
this.AudioPlayer.stopBgMusic();
this.AudioPlayer.playBgMusic();
},
start: function() {}
});
cc._RF.pop();
}, {} ],
NorthAmerica3: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "d16387wB+hIRIZORDsP3kHA", "NorthAmerica3");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("北美操作室");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
NorthAmerica: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "5bacbUj1ElDS71thP6D8vEC", "NorthAmerica");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("美洲剧情");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Oceania2: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "91079j0MAdMtqcPasEpbAB9", "Oceania2");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("大洋洲展览厅");
})));
},
onLoad: function() {
this.AudioPlayer = cc.find("Audio").getComponent("AudioManager");
this.AudioPlayer.stopBgMusic();
this.AudioPlayer.playBgMusic();
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Oceania: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "d62edmLtCJAnZVnJrUla+Eb", "Oceania");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("大洋洲展览厅导引");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"Oc按钮": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "c796aunvtlMX4WytxdrzsXf", "Oc按钮");
cc.Class({
extends: cc.Component,
properties: {
hiden1: {
default: null,
type: cc.Node
},
hiden2: {
default: null,
type: cc.Node
},
shown: {
default: null,
type: cc.Node
}
},
press: function() {
this.hiden1.active = !1;
this.hiden2.active = !1;
this.shown.active = !0;
this.shown.opacity = 0;
this.shown.runAction(cc.fadeIn(.5));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"Oc简介": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "e43baJ2BA9KkI5oHRADDko4", "Oc简介");
cc.Class({
extends: cc.Component,
properties: {},
hide: function() {
this.opacity = 255;
this.node.runAction(cc.fadeOut(.5));
this.node.active = !1;
},
onLoad: function() {
this.node.active = !1;
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Skip: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "adf2fQ1+ARByLTgsgDvae8M", "Skip");
cc.Class({
extends: cc.Component,
properties: {},
appear: function() {
this.node.active = !0;
},
onLoad: function() {
this.node.active = !1;
},
start: function() {}
});
cc._RF.pop();
}, {} ],
StartButton: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "1f9042Q5H5LDYrv+wbYUu0M", "StartButton");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("世界地图界面");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Video: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "2e2bfekwoFKkIJITT+r7Btr", "Video");
cc.Class({
extends: cc.Component,
properties: {
videoPlayer: {
type: cc.VideoPlayer,
default: null
}
},
appear: function() {
this.node.active = !0;
},
play: function() {
this.videoplayer.play();
},
pause: function() {
this.videoplayer.pause();
},
start: function() {}
});
cc._RF.pop();
}, {} ],
welcome: [ function(t, c, i) {
"use strict";
cc._RF.push(c, "eec8e9baS5IHKKvb250DerO", "welcome");
cc.Class({
extends: cc.Component,
properties: {
welcomeAudio: {
default: null,
type: cc.AudioClip
}
},
go: function() {
cc.audioEngine.playEffect(this.bingoAudio, !1, .5);
},
onLoad: function() {},
start: function() {}
});
cc._RF.pop();
}, {} ],
"助手开关2": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "8d486ZYP0lF67GOrW89jMXK", "助手开关2");
cc.Class({
extends: cc.Component,
properties: {
judge: 1,
assistants1: {
type: cc.AudioSource,
default: null
},
assistants2: {
type: cc.AudioSource,
default: null
},
assistants3: {
type: cc.AudioSource,
default: null
},
assistants4: {
type: cc.AudioSource,
default: null
},
assistants5: {
type: cc.AudioSource,
default: null
},
assistants6: {
type: cc.AudioSource,
default: null
}
},
onLoad: function() {},
turn: function() {
if (1 == this.judge) {
this.assistants1.volume = 0;
this.assistants2.volume = 0;
this.assistants3.volume = 0;
this.assistants4.volume = 0;
this.assistants5.volume = 0;
this.assistants6.volume = 0;
this.judge = 0;
cc.log(0);
} else {
this.assistants1.volume = 1;
this.assistants2.volume = 1;
this.assistants3.volume = 1;
this.assistants4.volume = 1;
this.assistants5.volume = 1;
this.assistants6.volume = 1;
this.judge = 1;
cc.log(1);
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"助手开关": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "7803e0HeAJCtZe7K8h6MIBZ", "助手开关");
cc.Class({
extends: cc.Component,
properties: {
judge: 1,
assistants1: {
type: cc.AudioSource,
default: null
},
assistants2: {
type: cc.AudioSource,
default: null
},
assistants3: {
type: cc.AudioSource,
default: null
},
assistants4: {
type: cc.AudioSource,
default: null
},
assistants5: {
type: cc.AudioSource,
default: null
}
},
onLoad: function() {},
turn: function() {
if (1 == this.judge) {
this.assistants1.volume = 0;
this.assistants2.volume = 0;
this.assistants3.volume = 0;
this.assistants4.volume = 0;
this.assistants5.volume = 0;
this.judge = 0;
cc.log(0);
} else {
this.assistants1.volume = 1;
this.assistants2.volume = 1;
this.assistants3.volume = 1;
this.assistants4.volume = 1;
this.assistants5.volume = 1;
this.judge = 1;
cc.log(1);
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"帮助按钮": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "cb2bdUaVMdKqI8nik8vH7mU", "帮助按钮");
cc.Class({
extends: cc.Component,
properties: {
help: {
default: null,
type: cc.Node
},
button: {
default: null,
type: cc.Node
}
},
helpMe: function() {
this.help.active = !0;
this.help.opacity = 0;
this.help.runAction(cc.fadeIn(.5));
this.button.active = !0;
this.button.runAction(cc.fadeIn(.5));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"游戏帮助": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "eb007Gm1y5Hda4Suw65aIUe", "游戏帮助");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.node.active = !1;
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"返回": [ function(t, c, i) {
"use strict";
cc._RF.push(c, "9fd10opn2NKfa/3K7Wj5PFN", "返回");
cc.Class({
extends: cc.Component,
properties: {
help: {
default: null,
type: cc.Node
}
},
back: function() {
this.help.opacity = 255;
this.node.opacity = 255;
this.help.runAction(cc.fadeOut(.5));
this.node.runAction(cc.fadeOut(.5));
this.help.active = !1;
this.node.active = !1;
},
onLoad: function() {
this.node.active = !1;
},
start: function() {}
});
cc._RF.pop();
}, {} ]
}, {}, [ "AfCanvas", "AfCanvas2", "AfCanvas3", "AfCanvas4", "Africa", "Africa2", "Af按钮", "Af按钮2", "Af按钮3", "Af简介", "Af简介2", "AsCanvas", "AsDNA片段", "AsDNA聚合酶", "AsDNA连接酶", "Asia", "Asia2", "Asia3", "As基因表达载体", "As棉花细胞", "As真的DNA片段", "As真的苏云金芽孢杆菌", "As组织培养", "As苏云金芽孢杆菌", "As被剪开的质粒", "As质粒", "AudioManager", "BackToMap", "EndButton", "EuCanvas", "EuDNA连接酶", "Europe", "Europe2", "Europe3", "Eu人乳铁蛋白", "Eu代孕牛", "Eu启动子+质粒", "Eu早期胚胎", "Eu生产乳汁", "Eu表达载体", "Eu被剪开的人乳铁蛋白基因", "Eu被剪开的质粒", "Eu质粒", "Eu限制酶", "Home", "NACanvas", "NADNA连接酶", "NARNA聚合酶", "NA人胰岛细胞", "NA受体细胞", "NA基因表达载体", "NA大肠杆菌细胞", "NA真的人胰岛细胞", "NA真的胰岛素mRNA", "NA碱与SDS操作", "NA胰岛素mNRA", "NA胰岛素基因片段", "NA被剪开的基因", "NA被剪开的质粒", "NA质粒", "NA逆转录酶", "NA限制酶I", "NA限制酶II", "NorthAmerica", "NorthAmerica2", "NorthAmerica3", "Oceania", "Oceania2", "Oc按钮", "Oc简介", "Skip", "StartButton", "Video", "welcome", "助手开关", "助手开关2", "帮助按钮", "游戏帮助", "返回" ]);
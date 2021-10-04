(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.KSA_TVTC_PH011_M001_L002_P015_Temp000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_103 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(103).call(this.frame_103));

	// Layer 4
	this.place = new lib.Symbol2();
	this.place.setTransform(336.6,392.1,1.605,1,0,0,0,21.5,51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.place}]}).wait(104));

	// Layer 3
	this.head = new lib.KadamaWarania002();
	this.head.setTransform(-618.4,373.1);
	this.head._off = true;

	this.timeline.addTween(cjs.Tween.get(this.head).wait(22).to({_off:false},0).to({x:8.2},5).to({x:99,y:372.1},1).to({x:175.7},1).to({x:241.7},1).to({x:295.6},1).to({x:337.6},1).to({x:367.6},1).wait(1).to({x:384.6},0).wait(1).to({x:390.6},0).wait(69));

	// Layer 1
	this.s5 = new lib.Estiwasa_001();
	this.s5.setTransform(777.4,536.5,0.558,0.558,0,0,0,0.1,0.1);

	this.s6 = new lib.Estiwasa_001();
	this.s6.setTransform(846.4,537.6,0.668,0.668);

	this.s7 = new lib.Estiwasa_001();
	this.s7.setTransform(921.4,540.7);

	this.ans = new lib.resultbox();
	this.ans.setTransform(278.6,607.3,1,1,0,0,0,0,10.9);

	this.submit = new lib.checkbox();
	this.submit.setTransform(170.2,531.2,0.607,0.607,0,0,0,0.4,-0.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5B3712").ss(2,0,0,45).p("ArnAAQAAh6BXhXQBXhWB7AAIN9AAQB7AABXBWQBXBXAAB6IAAAAQAAB7hXBWQhXBXh7AAIt9AAQh7AAhXhXQhXhWAAh7g");
	this.shape.setTransform(278.7,531.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0B68A").s().p("Am+EoQh7AAhXhXQhXhWAAh7IAAAAQAAh6BXhXQBXhWB7AAIN9AAQB7AABXBWQBXBXAAB6IAAAAQAAB7hXBWQhXBXh7AAg");
	this.shape_1.setTransform(278.7,531.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5B3712").ss(2,0,0,45).p("AptlXIoNAAAgEhTIAAG1AR8lXIoNAA");
	this.shape_2.setTransform(279.2,565.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.submit},{t:this.ans},{t:this.s7},{t:this.s6},{t:this.s5}]},40).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.submit},{t:this.ans},{t:this.s7},{t:this.s6},{t:this.s5}]},63).wait(1));

	// anim2
	this.s4 = new lib.Samola();
	this.s4.setTransform(671.4,528.3,0.398,0.398,0,0,0,-0.3,0.9);

	this.s1 = new lib.Samola();
	this.s1.setTransform(481.9,529.7,0.18,0.18,0,0,0,-0.2,0.3);

	this.s3 = new lib.Samola();
	this.s3.setTransform(595.4,528.9,0.301,0.301,0,0,0,0,0.7);

	this.s2 = new lib.Samola();
	this.s2.setTransform(532.2,529.2,0.236,0.236);

	this.instance = new lib.BGtab();
	this.instance.setTransform(710.8,536);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.s2},{t:this.s3},{t:this.s1},{t:this.s4}]},40).wait(64));

	// titel
	this.instance_1 = new lib.Symbol1("single",0);
	this.instance_1.setTransform(570.5,77.3,0.05,0.05,0,0,0,0,-30.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0,_off:false},0).to({regY:-31,scaleX:1.2,scaleY:1.2,y:77.4},10,cjs.Ease.get(1)).to({scaleX:0.8,scaleY:0.8,y:77.3},6,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1,y:77.4},5,cjs.Ease.get(1)).wait(82));

	// anim
	this.instance_2 = new lib.KadamaWarania();
	this.instance_2.setTransform(-404.2,321.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).to({x:605.3,y:320.5},13,cjs.Ease.get(1)).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(302.1,340.6,69,103);


// symbols:
(lib.text6354 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("inch", "6px Arial", "#292929");
	this.text.lineHeight = 7;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,15,10.6);


(lib.text6309 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("8", "5px Arial", "#292929");
	this.text.lineHeight = 6;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,10);


(lib.text6297 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("6", "7px Arial", "#292929");
	this.text.lineHeight = 9;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,12.1);


(lib.text6293 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("5", "7px Arial", "#292929");
	this.text.lineHeight = 9;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,12.1);


(lib.text6289 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("4", "7px Arial", "#292929");
	this.text.lineHeight = 9;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,12.1);


(lib.text6285 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("3", "7px Arial", "#292929");
	this.text.lineHeight = 9;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,12.1);


(lib.text6281 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("2", "7px Arial", "#292929");
	this.text.lineHeight = 9;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,12.1);


(lib.text6277 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("1", "7px Arial", "#292929");
	this.text.lineHeight = 9;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,12.1);


(lib.text6064 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("1/20", "5px Arial", "#292929");
	this.text.lineHeight = 6;
	this.text.setTransform(-1.9,-2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2,13.9,9.6);


(lib.text6060 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("0", "5px Arial", "#292929");
	this.text.lineHeight = 6;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,10);


(lib.text6056 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("9", "5px Arial", "#292929");
	this.text.lineHeight = 6;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,10);


(lib.text6052 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("8", "5px Arial", "#292929");
	this.text.lineHeight = 6;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,10);


(lib.text6048 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("7", "5px Arial", "#292929");
	this.text.lineHeight = 6;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,10);


(lib.text6044 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("6", "5px Arial", "#292929");
	this.text.lineHeight = 6;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,10);


(lib.text6040 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("5", "5px Arial", "#292929");
	this.text.lineHeight = 6;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,10);


(lib.text6036 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("4", "5px Arial", "#292929");
	this.text.lineHeight = 6;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,10);


(lib.text6032 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("3", "5px Arial", "#292929");
	this.text.lineHeight = 6;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,10);


(lib.text6028 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("2", "5px Arial", "#292929");
	this.text.lineHeight = 6;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,10);


(lib.text6024 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("1", "5px Arial", "#292929");
	this.text.lineHeight = 6;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,10);


(lib.text6020 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("0 ", "5px Arial", "#292929");
	this.text.lineHeight = 6;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,10);


(lib.text5967 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("1/128", "5px Arial", "#292929");
	this.text.lineHeight = 5;
	this.text.setTransform(-1.9,-2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2,15.5,9);


(lib.text5963 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("8", "5px Arial", "#292929");
	this.text.lineHeight = 6;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,10);


(lib.text5959 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("4", "5px Arial", "#292929");
	this.text.lineHeight = 6;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,10);


(lib.text5955 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("0", "5px Arial", "#292929");
	this.text.lineHeight = 6;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,10);


(lib.text5351 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("0", "7px Arial", "#292929");
	this.text.lineHeight = 9;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,12.1);


(lib.text5334 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("cm", "5px Arial", "#292929");
	this.text.lineHeight = 6;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,11.4,10);


(lib.text5330 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("17", "9px Arial", "#292929");
	this.text.lineHeight = 11;
	this.text.setTransform(-1.9,-2.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.2,14.2,14.1);


(lib.text5326 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("16", "9px Arial", "#292929");
	this.text.lineHeight = 11;
	this.text.setTransform(-1.9,-2.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.2,14.2,14.1);


(lib.text5322 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("15", "9px Arial", "#292929");
	this.text.lineHeight = 11;
	this.text.setTransform(-1.9,-2.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.2,14.2,14.1);


(lib.text5318 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("14", "9px Arial", "#292929");
	this.text.lineHeight = 11;
	this.text.setTransform(-1.9,-2.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.2,14.2,14.1);


(lib.text5314 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("13", "9px Arial", "#292929");
	this.text.lineHeight = 11;
	this.text.setTransform(-1.9,-2.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.2,14.2,14.1);


(lib.text5310 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("12", "9px Arial", "#292929");
	this.text.lineHeight = 11;
	this.text.setTransform(-1.9,-2.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.2,14.2,14.1);


(lib.text5306 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("11", "9px Arial", "#292929");
	this.text.lineHeight = 11;
	this.text.setTransform(-1.9,-2.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.2,13.6,14.1);


(lib.text5302 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("10", "9px Arial", "#292929");
	this.text.lineHeight = 11;
	this.text.setTransform(-1.9,-2.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.2,14.2,14.1);


(lib.text5298 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("9", "9px Arial", "#292929");
	this.text.lineHeight = 11;
	this.text.setTransform(-1.9,-2.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.2,10.2,14.1);


(lib.text5294 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("8", "9px Arial", "#292929");
	this.text.lineHeight = 11;
	this.text.setTransform(-1.9,-2.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.2,10.2,14.1);


(lib.text5290 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("7", "9px Arial", "#292929");
	this.text.lineHeight = 11;
	this.text.setTransform(-1.9,-2.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.2,10.2,14.1);


(lib.text5286 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("6", "9px Arial", "#292929");
	this.text.lineHeight = 11;
	this.text.setTransform(-1.9,-2.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.2,10.2,14.1);


(lib.text5282 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("5", "9px Arial", "#292929");
	this.text.lineHeight = 11;
	this.text.setTransform(-1.9,-2.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.2,10.2,14.1);


(lib.text5278 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("4", "9px Arial", "#292929");
	this.text.lineHeight = 11;
	this.text.setTransform(-1.9,-2.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.2,10.2,14.1);


(lib.text5274 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("3", "9px Arial", "#292929");
	this.text.lineHeight = 11;
	this.text.setTransform(-1.9,-2.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.2,10.2,14.1);


(lib.text5270 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("2", "9px Arial", "#292929");
	this.text.lineHeight = 11;
	this.text.setTransform(-1.9,-2.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.2,10.2,14.1);


(lib.text5266 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("1", "9px Arial", "#292929");
	this.text.lineHeight = 11;
	this.text.setTransform(-1.9,-2.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.2,10.2,14.1);


(lib.text5262 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("0", "8px Arial", "#292929");
	this.text.lineHeight = 10;
	this.text.setTransform(-1.9,-2.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.1,10.2,13);


(lib.Symbol11 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#494949").ss(3,0,1).p("AIsAAQAADmiiCiQijCijmAAQjlAAijiiQiiiiAAjmQAAjmCiiiQCjiiDlAAQDmAACjCiQCiCiAADmgANllmIAALOIn9H9IrQAAIn8n8IAArQIH9n9ILOAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AlnNlIn9n9IAArPIH9n9ILOAAIH+H+IAALOIn9H9gAmHmIQiiCiAADmQAADmCiCiQCjCiDkAAQDnAACjiiQCiiiAAjmQAAjmiiiiQijiijnAAQjkAAijCig");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86.9,-86.9,173.9,173.9);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,51,0,0.02)").s().p("AjWICIAAwEIGtAAIAAQEg");
	this.shape.setTransform(21.5,51.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,43,103);


(lib.Symbol1 = function() {
	this.initialize();

	// ﺔﻴﻧﺭﻮﻟﺍ ﺕﺍﺫ ﺔﻣﺪﻘﻟﺍ ﺔﺑﺮﺠﺗ
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALwBuIgTgGIgSgHIACgFIASADQAJACAIAAQAPAAATgLQAPgJAMgPQALgOAAgMIAAgBQAAgJgGgLQgEgJgJgIIAHgTQALAKAEAJQAGAJAAAOIAAAIIBfAAIgXgPQgKgIgJgCQgLgEgKAAIgOABQAEgIAGgFQAJgJANABQANAAARAMIAdAWQAQAOAFABIA9AAQABgPgEgIQgCgFgKgJIAKgUQAKALABAHQAEAJAAAWIAAAeIjJAAQAAAPgMAOQgLAOgPAJQgPAJgJAAQgJAAgKgCgAr5BuIgTgGIgSgHIACgFIASADQAIACAIAAQAQAAASgLQAQgJALgPQAMgOAAgMQgBgKgGgLQgEgJgIgIIAGgTQALAKAFAJQAGAJAAAOIAAAeQAAAPgNAOQgKAOgQAJQgOAJgJAAQgKAAgJgCgAqBBqIgRgEIgQgGIACgEIAPADQAHACAHAAQAPAAAOgIQALgGALgMIAPgUIAAAAQgRAAgJgFQgJgGAAgPQAAgNAGgKQAIgLAKgBQALABAFALQAEAJAAASIApAAIgPhpIgHgEQAAgIACgIIAEgPIACABQABAIAHADIAOAGIgCANIgCALIgGgCIAPBhIAAAZIg3AAQgCARgNASQgRAXgXgBQgIAAgJgCgApVAMQgDACAAADQAAAGAFADQAGAEAMAAIAAgBIABAAQgDgMgEgEQgDgEgFAAQgEAAgCADgAujBgIAKgTIAUALIgKASgAKWBaIAKgTIAVALIgKATgANsBWIAKgSIAUALIgKASgAuGBUIAJgSIAVALIgKASgAG/A1IABgIIAAgGIgCglIgEgwIgFgfIAHgNIAFgMIAGAnIAFAuQACAXAAANQAAAKgEAKQgCAFgGAKgAiuA1IABgIIAAgGIgCglIgFgwIgEgfIAGgNIAGgMIAGAnIAEAuQADAXAAANQgBAKgEAKQgBAFgHAKgAnmA1IABgIIAAgGIgCglIgEgwIgFgfIAHgNIAGgMIAFAnIAFAuQACAXAAANQAAAKgEAKQgBAFgHAKgAJxAzQgKABgHgRQgFgLgDgTQgEAIgGADQgFAFgHAAQgOAAgLgDQgJgCAAgCQAAgMAOgLQAPgNAUgKIgBgFIgBgGQAAgEAEgFIAGgJIADAPIADAQIADAVIAGAZQAEANAFAAIBIAAQgBgPgDgIQgDgFgJgJIAKgUQAJALADAHQADAJAAAWIAAAegAJDgJQgHAEgEAFIAGACIAJABQAJgBAGgFIgCgPQgMAFgFAEgADwAzQgHAAgGgEQgGgEAAgGIAAgIIACgJIAEAAQABAFADACQADACAGAAIAxAAQAAgXgGgLQgIgSgTgGIACgYQAWALAKAXQAGATAAAdIAjAAIAOAAIALgDQgWgDgGgDQgPgGAAgOQABgNAGgMQAJgNALAAQANAAAGARQAGANAAAPIAAAWIApAAIgPhpIgHgEQABgIABgIIAFgPIABABQAAAIAIADIANAGIgBANIgCALIgGgCIAPBhIAAAZgAFJgNQgDADABAEQgBAIALADQADABAOABIgGgNQgGgKgHAAQgDAAgDADgADDAzQgIAAgLgDQgMgFgJgIQgHAKgIADQgIADgOAAIgeAAQgJABgHgRQgFgLgDgTQgEAIgGADQgFAFgHAAQgOAAgLgDQgJgCAAgCQAAgMAOgLQAPgNAVgKIgBgFIgBgGQAAgEACgFIAHgJIACAPIADAQIAFAVIAFAZQAEANAEAAIAdAAQALAAAKgGQAGgEAGgIQAIgLALgHQAKgHAJgDQAJAOAFAIQAHAPAAAJIAAAWgACrAFIgGAJQAEAFAIAEQAJAEAHABIABgCIgEgOIgIgMQgHABgEAEgAAqgJQgGAEgFAFIAHACIAKABQAHgBAHgFIgCgPQgLAFgHAEgAh2AzQgHAAgFgEQgHgEAAgGIABgIIACgJIADAAQACAFADACQADACAFAAIAyAAQAAgXgHgLQgHgSgTgGIACgYQAWALAJAXQAHATAAAdIAAAWgAlEAzQgYAAgPgIQgRgLgBgXQAAgJAGgMIAJgRIADACIgFALQgDAKgBAGQAAAOAQAIQAPAHAVAAIBsAAIAAgDQAAgPgEgIQgDgIgJgGIAKgUIAHAJQAJAOAAAZIAAAigAu5AzQgJABgHgRQgFgLgDgTQgEAIgGADQgGAFgGAAQgPAAgJgDQgKgCAAgCQAAgMAOgLQAOgNAVgKIAAgFIgBgGQAAgEACgFIAHgJIACAPIADAQIAFAVIAFAZQAEANAEAAIBIAAQAAgPgDgIQgDgFgJgJIAKgUQAKALABAHQAEAJAAAWIAAAIIA2AAQAAgPgEgIQgCgFgJgJIAKgUQAJALACAHQAEAJAAAWIAAAegAvngJQgGAEgFAFIAHACIAKABQAHgBAHgFIgCgPQgLAFgHAEgAlBgrIAJgSIAVALIgKASgAPOg1IAKgTIAUALIgKASgAkkg3IAJgSIAVALIgKASgAtQg4IAJgTIAVALIgKASgAPrhBIAKgSIAUALIgKASgAEwhKIALgRIAPAKIgKASgAInhPIAKgTIAUALIgKATgAAPhPIAJgTIAVALIgKATgAwChPIAJgTIAVALIgJATgAFMhSIAMgRIAPALIgLARgAh9hZIAJgSIAWALIgKATgAJEhbIAKgSIAUAKIgKATgAAshbIAJgSIAWAKIgKATgAvlhbIAKgSIAVAKIgKATg");
	this.shape.setTransform(0,-39.2);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAYQgLgKABgOQgBgNALgLQAKgJANgBQAOABAKAJQALALAAANQAAAOgLAKQgKAKgOABQgNgBgKgKg");
	this.shape_1.setTransform(162.2,-31.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAYQgLgKAAgOQAAgNALgLQAKgJANgBQAOABAKAJQAKALAAANQAAAOgKAKQgKAKgOABQgNgBgKgKg");
	this.shape_2.setTransform(-162.1,-31.1);

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").p("AbUCbQhABBhbAAMgxxAAAQhbAAhAhBQhBhAAAhbQAAhaBBhAQBAhBBbAAMAxxAAAQBbAABABBQBBBAAABaQAABbhBBAg");
	this.shape_3.setTransform(0,-31.1);

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#386F43").s().p("A44ENQhvAAhQhPQhPhPAAhvQAAhuBPhQQBQhPBvAAMAxxAAAQBwAABPBPQBPBQAABuQAABvhPBPQhQBPhvAAg");
	this.shape_4.setTransform(0,-31.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-186.2,-58.1,372.7,54);


(lib.resultbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339900").s().p("AmkNlIqSqSQgpgpAAg6QAAg7ApgpIDwjuQApgqA7AAQA6AAAqAqIDbDaQApAoA6AAQA7AAApgoINbtcQApgpA7gBQA7ABApApIDwDvQApAqAAA6QAAA7gpApI0TUSQgpApg7AAQg6AAgqgpg");
	this.shape.setTransform(-0.3,11.2,0.085,0.085);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E44326").s().p("Ai6QQQhAAAgtgtQguguAAhAIAAofIofAAQhAAAguguQgtgtAAhAIAAl1QAAhAAtgtQAuguBAAAIIfAAIAAofQAAhAAuguQAtgtBAAAIF1AAQBAAAAtAtQAuAuAABAIAAIfIIfAAQBAAAAuAuQAtAuAAA/IAAF1QAABAgtAtQguAuhAAAIofAAIAAIfQAABAguAuQgtAthAAAg");
	this.shape_1.setTransform(-0.3,11.2,0.085,0.085,-44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0B68A").s("#5B3712").ss(2,0,0,45).rr(-74.45,-29.7,148.9,59.4,29.7);
	this.shape_2.setTransform(0,10.9,0.366,0.366);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.2,0,54.5,21.7);


(lib.path1873 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(1,0,1).p("EAvIgIDMhRyAAAIAAAQIhlAAIAAjuQAAixhniQQgzhIg0glIgBH1InSAAQgPAAgEAHQgEAEAAAMIAALJID2OWQAWBTA8AvQBAAyBgAAIAAzTMBWnAAAg");
	this.shape.setTransform(304.1,119.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egp/ARdQg8gugWhTIj1uWIAArJQgBgLAEgFQAEgHAPAAIHSAAIABn1QA0AmA0BHQBmCQAACxIAADuIBlAAIAAgQMBRyAAAIAAHAMhWnAAAIAATTQhgAAhAgzg");
	this.shape_1.setTransform(304.1,119.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.5,2.5,603.2,233.7);


(lib.KadamaWarania003 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(1,0,0,4).p("AAAgRQAHAAAFAGQAFAFAAAGQAAAHgFAGQgFAFgHAAQgGAAgFgFQgFgGAAgHQAAgGAFgFQAFgGAGAAg");
	this.shape.setTransform(30.9,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#292929").s().p("AgLANQgGgGAAgHQAAgGAGgFQAFgGAGAAQAHAAAGAGQAEAFAAAGQAAAHgEAGQgGAFgHAAQgGAAgFgFg");
	this.shape_1.setTransform(30.9,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(1,0,0,4).p("AFiAxIrCAAIAChhIIsAAIAAArICUAAg");
	this.shape_2.setTransform(35.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlgAxIAChhIIsAAIAAArICTAAIAAA2g");
	this.shape_3.setTransform(35.4,0);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-4.8,70.8,9.9);


(lib.Estiwasa_001 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BB5757","#480909"],[0,1],0.7,14.1,0.1,-7.1).s().p("AijBnQhEgqAAg9QAAg7BEgrQBEgrBfAAQBgAABFArQBDArAAA7QAAA9hDAqQhFArhgAAQhfAAhEgrg");
	this.shape.setTransform(0,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#801E1E").s().p("AivBvQhKgvAAhAQAAhABKgtQBIgvBnAAQBnAABJAvQBKAtAABAQAABAhKAvQhJAuhnAAQhnAAhIgugAikhmQhEArAAA7QAAA9BEAqQBEArBgAAQBgAABFgrQBDgqAAg9QAAg7hDgrQhFgrhgAAQhgAAhEArg");
	this.shape_1.setTransform(0,24.9);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#CC3333","#FA9E9E","#CC3333"],[0,0.451,1],-26.9,-14.9,27,-14.9).s().p("AkGF8QgBgKAAgRIAAowIAAgEQgGgOABgPQAAgbAQgXQAUgbAqgWQBPgoBvAAQBvAABQAoQA3AdARAlQAGAQABARIgBALIABAWIgBJLg");
	this.shape_2.setTransform(-0.2,-16.7,0.926,1.13);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.2,-59.7,50.3,100.4);


(lib.checkbox = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("AiSCUQg9g+AAhWQAAhVA9g9QA9g+BVABQBWgBA9A+QA9A9AABVQAABWg9A+Qg9A8hWAAQhVAAg9g8gABogVQgJAKAAALQAAAngcAcQgcAcgnAAQgMAAgJAKQgKAIAAAOQAAAOAKAJQAJAJAMAAQBCAAAvguQAugwAAhBQAAgLgJgKQgKgKgNABQgNgBgKAKg");
	this.shape.setTransform(-44.8,0,0.294,0.294);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("Aj9FfQiAguh4hXQhJg3hBhCIg1g5IgQgWQgHgHABgLQgBgJAHgJIAQgUQAUgZAhgiQBAhBBKg3QB5hXB/guQCAguB9AAQB+AAB/AuQCAAuB4BXQBLA3BABBQAgAiAUAZIARAUQAGAJABAJQgBALgGAHIgRAWQgUAZggAgQhABChLA3Qh4BXiAAuQh/Ath+AAQh9AAiAgtgAjXjWQhZBZAAB9QAAB+BZBZQBaBaB9AAQB+AABZhaQBZhZABh+QgBh9hZhZQhZhah+AAQh9AAhaBag");
	this.shape_1.setTransform(-44.8,0,0.294,0.294);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0B68A").s("#5B3712").ss(2,0,0,45).rr(-74.45,-29.7,148.9,59.4,29.7);
	this.shape_2.setTransform(-44.8,0,0.603,0.603);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89.7,-17.8,89.8,35.8);


(lib.BGtab = function() {
	this.initialize();

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#513510").s().p("AssEWILLoLQAsggA1gBQA2ABAsAgILLILgAg1hlQgWAWgBAhQABAgAWAUQAXAXAegBQAfABAXgXQAWgUAAggQAAghgWgWQgXgXgfAAQgeAAgXAXg");
	this.shape.setTransform(-304.3,-4.7,0.769,0.769,-89.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6BE9A").s().p("EgqwAKtQgeAAgbgOQgcgOgRgYIgGgIIAAzhIAGgIQARgYAcgOQAbgOAeAAMBXNAAAIAAVZg");
	this.shape_1.setTransform(1.6,-4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#513510").s().p("AiLKtIAA1ZICWAAQA1AAAlAmQAnAlAAA1IAARZQAAA1gnAlQglAmg1AAg");
	this.shape_2.setTransform(300.2,-4.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-325.8,-73.3,640.1,137.1);


(lib.Samola = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol5();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#383838").ss(3,0,2).p("ABXBbIiti1");
	this.shape.setTransform(43.2,94.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#383838").ss(3,0,2).p("ABSBNIijiZ");
	this.shape_1.setTransform(94.8,44.1);

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(2,0,1).p("AG0m9QiaiSjTAFQjkAGijC3QiiC3AAD8QAAD+CiCuQAqAtAvAiQgOgOgOgPQiiiuAAj+QAAj8Cii3QCii3DlgGQCrgECFBfQAYARAXAVQgNgJgOgJQh6hKiYADQjkAGijC3QiiC3AAD8QAAD+CiCuQAEAFAEAEQAKAKAJAMQgZgTgYgXAG0m9QAKAKAKAKAjJI1QgPgJgPgL");
	this.shape_2.setTransform(-4.9,4.7);

	// Symbol 5
	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(15.9,15.9,1,1,0,0,0,0.1,0.1);

	this.addChild(this.instance_1,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86.9,-86.9,190,190.2);


(lib.KadamaWarania004 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(1,0,0,4).p("AAAgQQAHAAAGAFQAFAFAAAGQAAAHgFAGQgGAFgHAAQgGAAgFgFQgFgGAAgHQAAgGAFgFQAFgFAGAAg");
	this.shape.setTransform(330.7,-10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#292929").s().p("AgLAMQgFgFgBgHQABgGAFgFQAFgGAGABQAHgBAFAGQAGAFgBAGQABAHgGAFQgFAFgHABQgGgBgFgFg");
	this.shape_1.setTransform(330.7,-10.2);

	this.instance = new lib.text6354();
	this.instance.setTransform(539.3,-42.6,1,1,0,0,0,5.5,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(1,0,0,4).p("AAAASQgGAAgFgFQgFgGAAgHQAAgGAFgFQAFgFAGAAQAHAAAGAFQAFAFAAAGQAAAHgFAGQgGAFgHAAg");
	this.shape_2.setTransform(311.6,-48.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#292929").s().p("AgLANQgGgGAAgHQAAgGAGgFQAFgGAGAAQAHAAAGAGQAEAFAAAGQAAAHgEAGQgGAEgHAAQgGAAgFgEg");
	this.shape_3.setTransform(311.6,-48.2);

	this.instance_1 = new lib.text6297();
	this.instance_1.setTransform(526.5,-37.3,1,1,0,0,0,3.1,3.8);

	this.instance_2 = new lib.text6293();
	this.instance_2.setTransform(454,-37.3,1,1,0,0,0,3.1,3.8);

	this.instance_3 = new lib.text6289();
	this.instance_3.setTransform(381.3,-37.5,1,1,0,0,0,3.1,3.8);

	this.instance_4 = new lib.text6285();
	this.instance_4.setTransform(310.1,-37.3,1,1,0,0,0,3.1,3.8);

	this.instance_5 = new lib.text6281();
	this.instance_5.setTransform(237.9,-37.1,1,1,0,0,0,3.1,3.8);

	this.instance_6 = new lib.text6277();
	this.instance_6.setTransform(165.5,-37.3,1,1,0,0,0,3.1,3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(1,0,0,4).p("AgRAAQAAgGAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAFQgGAFgHAAQgGAAgFgFQgGgFAAgHg");
	this.shape_4.setTransform(56.6,-99.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#292929").s().p("AgLANQgFgGgBgHQABgGAFgFQAFgFAGgBQAHABAFAFQAGAFAAAGQAAAHgGAGQgFAEgHAAQgGAAgFgEg");
	this.shape_5.setTransform(56.6,-99.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(1,0,0,4).p("AgRAAQAAgGAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAGQgGAFgHAAQgGAAgFgFQgGgGAAgHg");
	this.shape_6.setTransform(41.3,56.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#292929").s().p("AgLANQgGgGAAgHQAAgGAGgFQAFgFAGgBQAHABAGAFQAEAFAAAGQAAAHgEAGQgGAEgHAAQgGAAgFgEg");
	this.shape_7.setTransform(41.3,56.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(1,1,0,4).p("AAAA+IAAh7");
	this.shape_8.setTransform(527.9,-41.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_9.setTransform(523.5,-44.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_10.setTransform(518.9,-44.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_11.setTransform(514.5,-44.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAqIAAhS");
	this.shape_12.setTransform(509.9,-43.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_13.setTransform(505.4,-44.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_14.setTransform(500.9,-44.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_15.setTransform(496.3,-44.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_16.setTransform(487.4,-44.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_17.setTransform(478.4,-44.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_18.setTransform(469.5,-44.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAqIAAhT");
	this.shape_19.setTransform(491.9,-43.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAmIAAhL");
	this.shape_20.setTransform(482.9,-44);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAqIAAhT");
	this.shape_21.setTransform(473.9,-43.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAmIAAhL");
	this.shape_22.setTransform(464.8,-44);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_23.setTransform(460.4,-44.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(1,1,0,4).p("AAAA+IAAh7");
	this.shape_24.setTransform(455.9,-41.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_25.setTransform(451.5,-44.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_26.setTransform(446.9,-44.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_27.setTransform(442.5,-44.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAqIAAhS");
	this.shape_28.setTransform(437.9,-43.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_29.setTransform(433.4,-44.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_30.setTransform(428.9,-44.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_31.setTransform(424.3,-44.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_32.setTransform(415.4,-44.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_33.setTransform(406.4,-44.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_34.setTransform(397.5,-44.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAqIAAhT");
	this.shape_35.setTransform(419.9,-43.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAmIAAhL");
	this.shape_36.setTransform(410.9,-44);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAqIAAhT");
	this.shape_37.setTransform(401.9,-43.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAmIAAhL");
	this.shape_38.setTransform(392.8,-44);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_39.setTransform(388.4,-44.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(1,1,0,4).p("AAAA+IAAh7");
	this.shape_40.setTransform(383.9,-41.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_41.setTransform(379.4,-44.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_42.setTransform(374.9,-44.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_43.setTransform(370.4,-44.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAqIAAhS");
	this.shape_44.setTransform(365.9,-43.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_45.setTransform(361.4,-44.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_46.setTransform(356.9,-44.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_47.setTransform(352.3,-44.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_48.setTransform(343.3,-44.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_49.setTransform(334.4,-44.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_50.setTransform(325.5,-44.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAqIAAhT");
	this.shape_51.setTransform(347.9,-43.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAmIAAhL");
	this.shape_52.setTransform(338.8,-44);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAqIAAhT");
	this.shape_53.setTransform(329.8,-43.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAmIAAhL");
	this.shape_54.setTransform(320.8,-44);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_55.setTransform(316.3,-44.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_56.setTransform(298.2,-44.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_57.setTransform(289.1,-44.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_58.setTransform(280.1,-44.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_59.setTransform(271.1,-44.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_60.setTransform(262.1,-44.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_61.setTransform(253.2,-44.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_62.setTransform(244.1,-44.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#292929").ss(1,1,0,4).p("AAAA+IAAh7");
	this.shape_63.setTransform(311.6,-41.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_64.setTransform(307.2,-44.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_65.setTransform(302.6,-44.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_66.setTransform(298.2,-44.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAqIAAhS");
	this.shape_67.setTransform(293.6,-43.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_68.setTransform(289.1,-44.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_69.setTransform(284.6,-44.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_70.setTransform(280.1,-44.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_71.setTransform(271.1,-44.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_72.setTransform(262.1,-44.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_73.setTransform(253.2,-44.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAqIAAhT");
	this.shape_74.setTransform(275.7,-43.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAmIAAhL");
	this.shape_75.setTransform(266.6,-44);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAqIAAhT");
	this.shape_76.setTransform(257.6,-43.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAmIAAhL");
	this.shape_77.setTransform(248.5,-44);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_78.setTransform(244.1,-44.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#292929").ss(1,1,0,4).p("AAAA+IAAh7");
	this.shape_79.setTransform(239.6,-41.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_80.setTransform(235.2,-44.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_81.setTransform(230.7,-44.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_82.setTransform(226.2,-44.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAqIAAhS");
	this.shape_83.setTransform(221.6,-43.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_84.setTransform(217.2,-44.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_85.setTransform(212.7,-44.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_86.setTransform(208.1,-44.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_87.setTransform(199.1,-44.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_88.setTransform(190.2,-44.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_89.setTransform(181.3,-44.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAqIAAhT");
	this.shape_90.setTransform(203.7,-43.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAmIAAhL");
	this.shape_91.setTransform(194.6,-44);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAqIAAhT");
	this.shape_92.setTransform(185.6,-43.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAmIAAhL");
	this.shape_93.setTransform(176.6,-44);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_94.setTransform(172.1,-44.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#292929").ss(1,1,0,4).p("AAAA+IAAh7");
	this.shape_95.setTransform(167.6,-41.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_96.setTransform(163.2,-44.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_97.setTransform(158.7,-44.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_98.setTransform(154.2,-44.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAqIAAhS");
	this.shape_99.setTransform(149.6,-43.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_100.setTransform(145.2,-44.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_101.setTransform(140.7,-44.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_102.setTransform(136.1,-44.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_103.setTransform(127.1,-44.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_104.setTransform(118.2,-44.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_105.setTransform(109.3,-44.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAqIAAhT");
	this.shape_106.setTransform(131.7,-43.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAmIAAhL");
	this.shape_107.setTransform(122.6,-44);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAqIAAhT");
	this.shape_108.setTransform(113.6,-43.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAmIAAhL");
	this.shape_109.setTransform(104.6,-44);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAeIAAg7");
	this.shape_110.setTransform(100.1,-44.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#292929").ss(1,1,0,4).p("AAAA+IAAh7");
	this.shape_111.setTransform(95.7,-41.6);

	this.instance_7 = new lib.text5351();
	this.instance_7.setTransform(93.7,-37,1,1,0,0,0,3.1,3.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#858585").s().p("AgJATQgMgHAAgMQAAgLAMgGQAJgHAKAHQAMAFgBAMQABAMgMAHQgFADgFgBQgEABgFgDg");
	this.shape_112.setTransform(592.4,-15);

	this.instance_8 = new lib.text5334();
	this.instance_8.setTransform(558,-24.8,1,1,0,0,0,3.7,2.9);

	this.instance_9 = new lib.text5330();
	this.instance_9.setTransform(544.7,-25,1,1,0,0,0,5.1,4.7);

	this.instance_10 = new lib.text5326();
	this.instance_10.setTransform(516.3,-25,1,1,0,0,0,5.1,4.7);

	this.instance_11 = new lib.text5322();
	this.instance_11.setTransform(487.9,-25,1,1,0,0,0,5.1,4.7);

	this.instance_12 = new lib.text5318();
	this.instance_12.setTransform(459.5,-25,1,1,0,0,0,5.1,4.7);

	this.instance_13 = new lib.text5314();
	this.instance_13.setTransform(431.1,-25,1,1,0,0,0,5.1,4.7);

	this.instance_14 = new lib.text5310();
	this.instance_14.setTransform(402.5,-25,1,1,0,0,0,5.1,4.7);

	this.instance_15 = new lib.text5306();
	this.instance_15.setTransform(373.9,-25,1,1,0,0,0,4.8,4.7);

	this.instance_16 = new lib.text5302();
	this.instance_16.setTransform(345.6,-25,1,1,0,0,0,5.1,4.7);

	this.instance_17 = new lib.text5298();
	this.instance_17.setTransform(312.2,-25,1,1,0,0,0,3.1,4.7);

	this.instance_18 = new lib.text5294();
	this.instance_18.setTransform(283.9,-25,1,1,0,0,0,3.1,4.7);

	this.instance_19 = new lib.text5290();
	this.instance_19.setTransform(255,-25,1,1,0,0,0,3.1,4.7);

	this.instance_20 = new lib.text5286();
	this.instance_20.setTransform(227,-25,1,1,0,0,0,3.1,4.7);

	this.instance_21 = new lib.text5282();
	this.instance_21.setTransform(198.6,-25,1,1,0,0,0,3.1,4.7);

	this.instance_22 = new lib.text5278();
	this.instance_22.setTransform(170.4,-25,1,1,0,0,0,3.1,4.7);

	this.instance_23 = new lib.text5274();
	this.instance_23.setTransform(141.8,-25,1,1,0,0,0,3.1,4.7);

	this.instance_24 = new lib.text5270();
	this.instance_24.setTransform(113.2,-25,1,1,0,0,0,3.1,4.7);

	this.instance_25 = new lib.text5266();
	this.instance_25.setTransform(84.9,-25,1,1,0,0,0,3.1,4.7);

	this.instance_26 = new lib.text5262();
	this.instance_26.setTransform(61.6,-28.6,1,1,0,0,0,3.1,4.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_113.setTransform(569.7,-15.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_114.setTransform(566.8,-15.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_115.setTransform(564,-15.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_116.setTransform(561.1,-15.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABd");
	this.shape_117.setTransform(558.3,-16.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_118.setTransform(555.5,-15.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_119.setTransform(552.6,-15.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_120.setTransform(549.8,-15.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_121.setTransform(546.9,-15.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_122.setTransform(541.2,-15.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_123.setTransform(538.4,-15.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_124.setTransform(535.6,-15.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_125.setTransform(532.7,-15.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABd");
	this.shape_126.setTransform(529.9,-16.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_127.setTransform(527,-15.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_128.setTransform(524.2,-15.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_129.setTransform(521.3,-15.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_130.setTransform(518.5,-15.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_131.setTransform(512.8,-15.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_132.setTransform(510,-15.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_133.setTransform(507.1,-15.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_134.setTransform(504.3,-15.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABd");
	this.shape_135.setTransform(501.4,-16.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_136.setTransform(498.6,-15.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_137.setTransform(495.7,-15.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_138.setTransform(492.9,-15.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_139.setTransform(490.1,-15.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_140.setTransform(484.4,-15.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_141.setTransform(481.5,-15.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_142.setTransform(478.7,-15.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_143.setTransform(475.8,-15.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABd");
	this.shape_144.setTransform(473,-16.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_145.setTransform(470.2,-15.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_146.setTransform(467.3,-15.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_147.setTransform(464.5,-15.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_148.setTransform(461.6,-15.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_149.setTransform(455.9,-15.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_150.setTransform(453.1,-15.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_151.setTransform(450.3,-15.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_152.setTransform(447.4,-15.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABd");
	this.shape_153.setTransform(444.6,-16.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_154.setTransform(441.7,-15.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_155.setTransform(438.9,-15.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_156.setTransform(436,-15.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_157.setTransform(433.2,-15.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_158.setTransform(427.5,-15.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_159.setTransform(424.7,-15.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_160.setTransform(421.8,-15.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_161.setTransform(419,-15.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABd");
	this.shape_162.setTransform(416.1,-16.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_163.setTransform(413.3,-15.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_164.setTransform(410.4,-15.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_165.setTransform(407.6,-15.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_166.setTransform(404.8,-15.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_167.setTransform(399.1,-15.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_168.setTransform(396.2,-15.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_169.setTransform(393.4,-15.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_170.setTransform(390.5,-15.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABd");
	this.shape_171.setTransform(387.7,-16.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_172.setTransform(384.9,-15.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_173.setTransform(382,-15.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_174.setTransform(379.2,-15.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_175.setTransform(376.3,-15.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_176.setTransform(370.6,-15.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_177.setTransform(367.8,-15.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_178.setTransform(365,-15.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_179.setTransform(362.1,-15.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABd");
	this.shape_180.setTransform(359.3,-16.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_181.setTransform(356.4,-15.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_182.setTransform(353.6,-15.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_183.setTransform(350.7,-15.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_184.setTransform(347.9,-15.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_185.setTransform(342.2,-15.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_186.setTransform(339.4,-15.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_187.setTransform(336.5,-15.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_188.setTransform(333.7,-15.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABd");
	this.shape_189.setTransform(330.8,-16.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_190.setTransform(328,-15.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_191.setTransform(325.1,-15.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_192.setTransform(322.3,-15.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_193.setTransform(319.5,-15.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_194.setTransform(313.8,-15.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_195.setTransform(310.9,-15.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_196.setTransform(308.1,-15.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_197.setTransform(305.2,-15.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABd");
	this.shape_198.setTransform(302.4,-16.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_199.setTransform(299.6,-15.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_200.setTransform(296.7,-15.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_201.setTransform(293.9,-15.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_202.setTransform(291,-15.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_203.setTransform(285.3,-15.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_204.setTransform(282.5,-15.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_205.setTransform(279.7,-15.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_206.setTransform(276.8,-15.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABd");
	this.shape_207.setTransform(274,-16.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_208.setTransform(271.1,-15.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_209.setTransform(268.3,-15.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_210.setTransform(265.4,-15.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_211.setTransform(262.6,-15.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_212.setTransform(256.9,-15.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_213.setTransform(254.1,-15.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_214.setTransform(251.2,-15.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_215.setTransform(248.4,-15.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABd");
	this.shape_216.setTransform(245.5,-16.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_217.setTransform(242.7,-15.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_218.setTransform(239.8,-15.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_219.setTransform(237,-15.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_220.setTransform(234.2,-15.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_221.setTransform(228.5,-15.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_222.setTransform(225.6,-15.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_223.setTransform(222.8,-15.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_224.setTransform(219.9,-15.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABd");
	this.shape_225.setTransform(217.1,-16.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_226.setTransform(214.3,-15.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_227.setTransform(211.4,-15.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_228.setTransform(208.6,-15.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_229.setTransform(205.7,-15.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_230.setTransform(200,-15.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_231.setTransform(197.2,-15.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_232.setTransform(194.4,-15.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_233.setTransform(191.5,-15.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABd");
	this.shape_234.setTransform(188.7,-16.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_235.setTransform(185.8,-15.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_236.setTransform(183,-15.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_237.setTransform(180.1,-15.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_238.setTransform(177.3,-15.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_239.setTransform(171.6,-15.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_240.setTransform(168.8,-15.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_241.setTransform(165.9,-15.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_242.setTransform(163.1,-15.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABd");
	this.shape_243.setTransform(160.2,-16.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_244.setTransform(157.4,-15.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_245.setTransform(154.5,-15.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_246.setTransform(151.7,-15.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_247.setTransform(148.9,-15.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_248.setTransform(143.2,-15.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_249.setTransform(140.3,-15.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_250.setTransform(137.5,-15.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_251.setTransform(134.6,-15.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABd");
	this.shape_252.setTransform(131.8,-16.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_253.setTransform(129,-15.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_254.setTransform(126.1,-15.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_255.setTransform(123.3,-15.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_256.setTransform(120.4,-15.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_257.setTransform(114.7,-15.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_258.setTransform(111.9,-15.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_259.setTransform(109.1,-15.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_260.setTransform(106.2,-15.6);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABd");
	this.shape_261.setTransform(103.4,-16.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_262.setTransform(100.5,-15.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_263.setTransform(97.7,-15.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_264.setTransform(94.8,-15.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_265.setTransform(92,-15.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_266.setTransform(86.3,-15.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_267.setTransform(83.5,-15.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_268.setTransform(80.6,-15.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_269.setTransform(77.8,-15.6);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABd");
	this.shape_270.setTransform(74.9,-16.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_271.setTransform(72.1,-15.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_272.setTransform(69.2,-15.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_273.setTransform(66.4,-15.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_274.setTransform(63.6,-15.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#292929").ss(1,1,0,4).p("AAAglIAABL");
	this.shape_275.setTransform(63.6,-15.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#292929").ss(1,1,0,4).p("AAAg+IAAB9");
	this.shape_276.setTransform(572.5,-18);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#292929").ss(1,1,0,4).p("AAAg+IAAB9");
	this.shape_277.setTransform(544.1,-18);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#292929").ss(1,1,0,4).p("AAAg+IAAB9");
	this.shape_278.setTransform(515.6,-18);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#292929").ss(1,1,0,4).p("AAAg+IAAB9");
	this.shape_279.setTransform(487.2,-18);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#292929").ss(1,1,0,4).p("AAAg+IAAB9");
	this.shape_280.setTransform(458.7,-18);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#292929").ss(1,1,0,4).p("AAAg+IAAB9");
	this.shape_281.setTransform(430.3,-18);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#292929").ss(1,1,0,4).p("AAAg+IAAB9");
	this.shape_282.setTransform(401.8,-18);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#292929").ss(1,1,0,4).p("AAAg+IAAB9");
	this.shape_283.setTransform(345,-18);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#292929").ss(1,1,0,4).p("AAAg+IAAB9");
	this.shape_284.setTransform(373.4,-18);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#292929").ss(1,1,0,4).p("AAAg+IAAB9");
	this.shape_285.setTransform(316.5,-18);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#292929").ss(1,1,0,4).p("AAAg+IAAB9");
	this.shape_286.setTransform(288,-18);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#292929").ss(1,1,0,4).p("AAAg+IAAB9");
	this.shape_287.setTransform(259.6,-18);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#292929").ss(1,1,0,4).p("AAAg+IAAB9");
	this.shape_288.setTransform(231.2,-18);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#292929").ss(1,1,0,4).p("AAAg+IAAB9");
	this.shape_289.setTransform(202.8,-18);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#292929").ss(1,1,0,4).p("AAAg+IAAB9");
	this.shape_290.setTransform(174.4,-18);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#292929").ss(1,1,0,4).p("AAAg+IAAB9");
	this.shape_291.setTransform(145.9,-18);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#292929").ss(1,1,0,4).p("AAAg+IAAB9");
	this.shape_292.setTransform(117.5,-18);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#292929").ss(1,1,0,4).p("AAAg+IAAB9");
	this.shape_293.setTransform(89.1,-18);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#292929").ss(1,1,0,4).p("AAAg+IAAB9");
	this.shape_294.setTransform(60.6,-18);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#292929").s().p("AAYAtQgFgFAAgKQAAgJAFgFQADgGAJAAIAFABIAFADIAAAFIgFgDQgCgCgDAAQgGAAgDAEQgDAEAAAIQAAAJADADQADAEAGAAIAFgBIAFgEIAAAFQgCADgDABIgFABQgIAAgEgGgAgUAuQgDgEAAgMIABgLIADgHQADgCADAAIAFABIADAFIACAFIABAJIgBAMIgEAGQgCADgEAAQgFAAgCgFgAgRARQgCAFAAAIQAAAKACAEQACACACAAQADAAACgCQACgDAAgLQAAgJgCgDQgCgDgDAAQgCAAgCACgAgxAyIABgEIACgEIAFgHIAIgIIABgGQAAgDgBgBQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABQgCACAAAEIgEgBQAAgFADgDQADgEAEAAQAFAAADAEQACACAAAFIAAAFIgDAFIgLAMIgBACIAQAAIAAAFgAAEAYIgCgGIACgHQADgCACAAIADABIACABIACAEIAAADQAAADgCADQgCACgDAAQgDAAgCgCgAAGAOIgBAEIABADIADACQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAhFgLQgEgDgBgEQgCgFAAgFQAAgKAEgGQAFgGAGAAQAFAAADADQAEADACAEQACAFAAAGQAAAHgCAEQgDAGgDABQgEACgEABQgEAAgEgDgAhEgpQgEADAAAKQAAAGADAFQADAEAFAAQAFAAADgEQADgEAAgIIgBgIIgEgGQgCgCgEAAQgEAAgDAEgABggJIAAgoIARAAIAEADIACADIABAGQAAAFgCADQgDADgHABIgIAAIAAAQgABkgeIAIAAQAEAAACgCQACgCAAgDIgBgFQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBgBIgEAAIgIAAgABVgJIAAgiIgKAiIgEAAIgJgiIAAAiIgEAAIAAgoIAGAAIAKAiIAJgiIAGAAIAAAogAAcgJIAAgoIAXAAIAAAFIgTAAIAAAMIASAAIAAAFIgSAAIAAANIAUAAIAAAFgAAIgJIAAgjIgIAAIAAgFIAXAAIAAAFIgKAAIAAAjgAgTgJIgJgRIgKARIgFAAIANgVIgLgTIAFAAIAIAPIAJgPIAFAAIgMATIANAVgAhWgJIgRggIAAAgIgFAAIAAgoIAFAAIARAgIAAggIAEAAIAAAogAh3gJIAAgoIAEAAIAAAog");
	this.shape_295.setTransform(27.9,-18.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#292929").ss(1,0,1).p("AgjjgIgBHCIBJAAIAAl6QgZgegZgYQgWgSAAAAg");
	this.shape_296.setTransform(52.6,-94.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#E6E6E5").s().p("AgkDhIABnCIAWATQAZAYAZAdIAAF6g");
	this.shape_297.setTransform(52.6,-94.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#292929").ss(1,0,0,4).p("AgciZQgOAAgEAGQgEAEAAAMIAAELQAvASA2AAIAAkzg");
	this.shape_298.setTransform(43.6,101.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#E6E6E5").s().p("AgyCIIAAkLQAAgMADgEQAFgGAOAAIBPAAIAAEzQg2AAgvgSg");
	this.shape_299.setTransform(43.6,101.4);

	this.instance_27 = new lib.path1873();
	this.instance_27.setTransform(301.6,0.1,1,1,0,0,0,304.1,119.4);
	this.instance_27.shadow = new cjs.Shadow("rgba(55,53,53,0.408)",1,1,3);

	this.addChild(this.instance_27,this.shape_299,this.shape_298,this.shape_297,this.shape_296,this.shape_295,this.shape_294,this.shape_293,this.shape_292,this.shape_291,this.shape_290,this.shape_289,this.shape_288,this.shape_287,this.shape_286,this.shape_285,this.shape_284,this.shape_283,this.shape_282,this.shape_281,this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275,this.shape_274,this.shape_273,this.shape_272,this.shape_271,this.shape_270,this.shape_269,this.shape_268,this.shape_267,this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.shape_258,this.shape_257,this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.shape_112,this.instance_7,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.shape_3,this.shape_2,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-116.8,603.2,233.7);


(lib.KadamaWarania002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(1,0,0,4).p("AAAgQQAHAAAGAFQAFAFAAAGQAAAHgFAGQgGAFgHAAQgGAAgFgFQgGgGAAgHQAAgGAGgFQAFgFAGAAg");
	this.shape.setTransform(-14.2,-57.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#292929").s().p("AgLANQgGgGAAgHQAAgGAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAGQgGAEgHAAQgGAAgFgEg");
	this.shape_1.setTransform(-14.2,-57.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(1,0,0,4).p("AAAgRQAHAAAFAGQAGAFAAAGQAAAHgGAGQgFAFgHAAQgGAAgFgFQgGgGAAgHQAAgGAGgFQAFgGAGAAg");
	this.shape_2.setTransform(57,-26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#292929").s().p("AgLANQgGgGAAgHQAAgGAGgFQAFgGAGAAQAHAAAFAGQAGAFAAAGQAAAHgGAGQgFAEgHAAQgGAAgFgEg");
	this.shape_3.setTransform(57,-26.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(1,0,0,4).p("AASAAQAAAHgFAGQgGAFgHAAQgGAAgFgFQgGgGAAgHQAAgGAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAGg");
	this.shape_4.setTransform(-64,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#292929").s().p("AgLANQgFgGgBgHQABgGAFgFQAFgFAGgBQAHABAFAFQAGAFgBAGQABAHgGAGQgFAEgHAAQgGAAgFgEg");
	this.shape_5.setTransform(-64,4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#858585").s().p("AgLAMQgFgGAAgGQAAgFAFgGQAFgFAGAAQAHAAAFAFQAFAGAAAFQAAAGgFAGQgFAFgHAAQgGAAgFgFg");
	this.shape_6.setTransform(4.6,-36.8);

	this.instance = new lib.text6064();
	this.instance.setTransform(59.8,-59.8,1,1,0,0,0,4.9,2.6);

	this.instance_1 = new lib.text6060();
	this.instance_1.setTransform(48,-57.3,1,1,0,0,0,3.1,2.9);

	this.instance_2 = new lib.text6056();
	this.instance_2.setTransform(37,-57.3,1,1,0,0,0,3.1,2.9);

	this.instance_3 = new lib.text6052();
	this.instance_3.setTransform(25.9,-57.3,1,1,0,0,0,3.1,2.9);

	this.instance_4 = new lib.text6048();
	this.instance_4.setTransform(14.9,-57.4,1,1,0,0,0,3.1,2.9);

	this.instance_5 = new lib.text6044();
	this.instance_5.setTransform(3.8,-57.4,1,1,0,0,0,3.1,2.9);

	this.instance_6 = new lib.text6040();
	this.instance_6.setTransform(-7.2,-57.6,1,1,0,0,0,3.1,2.9);

	this.instance_7 = new lib.text6036();
	this.instance_7.setTransform(-18.2,-57.4,1,1,0,0,0,3.1,2.9);

	this.instance_8 = new lib.text6032();
	this.instance_8.setTransform(-29.4,-57.5,1,1,0,0,0,3.1,2.9);

	this.instance_9 = new lib.text6028();
	this.instance_9.setTransform(-40.3,-57.4,1,1,0,0,0,3.1,2.9);

	this.instance_10 = new lib.text6024();
	this.instance_10.setTransform(-51.4,-57.3,1,1,0,0,0,3.1,2.9);

	this.instance_11 = new lib.text6020();
	this.instance_11.setTransform(-57.7,-57.3,1,1,0,0,0,3.1,2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgzIAABn");
	this.shape_7.setTransform(48.9,-60.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgeIAAA9");
	this.shape_8.setTransform(43.5,-62.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgeIAAA9");
	this.shape_9.setTransform(32.3,-62.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABc");
	this.shape_10.setTransform(37.7,-60.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgeIAAA9");
	this.shape_11.setTransform(21.1,-62.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABc");
	this.shape_12.setTransform(26.6,-60.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgeIAAA9");
	this.shape_13.setTransform(10.1,-62.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABc");
	this.shape_14.setTransform(15.6,-60.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgeIAAA9");
	this.shape_15.setTransform(-1,-62.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABc");
	this.shape_16.setTransform(4.4,-60.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgeIAAA9");
	this.shape_17.setTransform(-11.9,-62.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABc");
	this.shape_18.setTransform(-6.5,-60.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgeIAAA9");
	this.shape_19.setTransform(-23.1,-62.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABc");
	this.shape_20.setTransform(-17.6,-60.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgeIAAA9");
	this.shape_21.setTransform(-34.2,-62.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABc");
	this.shape_22.setTransform(-28.7,-60.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgeIAAA9");
	this.shape_23.setTransform(-45.3,-62.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABc");
	this.shape_24.setTransform(-39.8,-60.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgeIAAA9");
	this.shape_25.setTransform(-56.3,-62.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(1,1,0,4).p("AAAguIAABc");
	this.shape_26.setTransform(-50.8,-60.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgzIAABn");
	this.shape_27.setTransform(-62,-60.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(1,0,1).p("Aq7A5IV3AAIAAhxI13AAg");
	this.shape_28.setTransform(3.4,-48);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Aq7A5IAAhxIV3AAIAABxg");
	this.shape_29.setTransform(3.4,-48);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(1,0,1).p("Aq7hyIV3AAIAADlI13AAg");
	this.shape_30.setTransform(3.4,-53.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E6E6E5").s().p("Aq7BzIAAjlIV3AAIAADlg");
	this.shape_31.setTransform(3.4,-53.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(1,0,0,4).p("Ag0iZIAAEyIAggCQAkgFAkgRIAAkDQAAgXgWAAg");
	this.shape_32.setTransform(-68.2,49.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E6E6E5").s().p("Ag0iZIBSAAQAXABAAAWIAAEDQglARgkAFIggACg");
	this.shape_33.setTransform(-68.2,49.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(1,0,1).p("AlvAlIF3AOIBEAkQBQAlA7gBQBCAAA+gbQAegOASgOIAEiUIsVgqIAACPQAAAJAFADQAGAEAQAAg");
	this.shape_34.setTransform(34,-29.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F1F2F2").s().p("ABMBXIhEgkIl3gOQgQAAgGgEQgFgDAAgJIAAiPIMVAqIgECUQgSAOgeAOQg+AbhCAAIgCAAQg6AAhPgkg");
	this.shape_35.setTransform(34,-29.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(1,0,0,4).p("AiamwIN5AAIAAhoI16AAIAABNIhDAAIAAPjQAyADA7gcQB1g6ArifICtqGQAMgrAfgSQAfgTBAAAg");
	this.shape_36.setTransform(0,11.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AreIYIAAvjIBDAAIAAhNIV6AAIAABoIt5AAQhAAAgfATQgfASgMArIitKGQgrCfh1A6Qg1AaguAAIgKgBg");
	this.shape_37.setTransform(0,11.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(1,0,1).p("AiamwIN5AAIAAhoI16AAIAABNIhDAAIAAPjQAyADA7gcQB1g6ArifICuqGQALgrAfgSQAfgTBAAAg");
	this.shape_38.setTransform(0,11.1);

	this.addChild(this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.5,-65.3,147.2,130.9);


(lib.KadamaWarania001 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text6309();
	this.instance.setTransform(12.6,29.6,1,1,0,0,0,3.1,2.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(1,0,0,4).p("AAAASQgGAAgFgFQgGgGAAgHQAAgGAGgFQAFgGAGAAQAHAAAFAGQAFAFAAAGQAAAHgFAGQgFAFgHAAg");
	this.shape.setTransform(1.7,28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#292929").s().p("AgLANQgGgGABgHQgBgGAGgFQAFgGAGAAQAHAAAFAGQAFAFABAGQgBAHgFAGQgFAFgHAAQgGAAgFgFg");
	this.shape_1.setTransform(1.7,28.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(1,0,0,4).p("AASAAQAAAHgFAFQgGAGgHAAQgGAAgFgGQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAGg");
	this.shape_2.setTransform(-70.6,-19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#292929").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAFQgGAGgHAAQgGAAgFgGg");
	this.shape_3.setTransform(-70.6,-19.5);

	this.instance_1 = new lib.text5967();
	this.instance_1.setTransform(25.9,30.3,1,1,0,0,0,5.7,2.4);

	this.instance_2 = new lib.text5963();
	this.instance_2.setTransform(12.6,29.6,1,1,0,0,0,3.1,2.9);

	this.instance_3 = new lib.text5959();
	this.instance_3.setTransform(-2.6,29.7,1,1,0,0,0,3.1,2.9);

	this.instance_4 = new lib.text5955();
	this.instance_4.setTransform(-13.7,29.7,1,1,0,0,0,3.1,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgQIAAAh");
	this.shape_4.setTransform(9.6,34.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgQIAAAh");
	this.shape_5.setTransform(1.8,34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgQIAAAh");
	this.shape_6.setTransform(-6.1,34.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgQIAAAh");
	this.shape_7.setTransform(-13.9,34.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgdIAAA7");
	this.shape_8.setTransform(5.7,33.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgdIAAA7");
	this.shape_9.setTransform(-10.1,33.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgtIAABb");
	this.shape_10.setTransform(13.5,31.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgtIAABb");
	this.shape_11.setTransform(-2.2,31.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(1,1,0,4).p("AAAgtIAABb");
	this.shape_12.setTransform(-18,31.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(1,1,1).p("ApRA2ISjAAIAAhrIyjAAg");
	this.shape_13.setTransform(22.9,31.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6E6E5").s().p("ApRA2IAAhrISjAAIAABrg");
	this.shape_14.setTransform(22.9,31.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(1,0,1).p("ApRhsISjAAIAADZIyjAAg");
	this.shape_15.setTransform(22.9,25.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F1F2F2").s().p("ApRBtIAAjZISjAAIAADZg");
	this.shape_16.setTransform(22.9,25.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(1,0,1).p("Ai+hmQAuiHBfhXIAAGrIgbAAIAABSIEwAAIAACMImhAAQgJgTgJgjQgUhGAAhRQAAh0Alhqg");
	this.shape_17.setTransform(-59.4,-4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ai9FEQgJgSgKgjQgShFAAhSQAAh0AkhqQAuiHBfhWIAAGpIgbAAIAABUIEwAAIAACKg");
	this.shape_18.setTransform(-59.4,-4);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.2,-36.5,164.6,73.1);


(lib.KadamaWarania = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Kadama Warania 001
	this.instance = new lib.KadamaWarania001();
	this.instance.setTransform(-223.7,-80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(138));

	// Kadama Warania 004
	this.instance_1 = new lib.KadamaWarania004();
	this.instance_1.setTransform(-35.1,-0.3,1,1,0,0,0,301.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(138));

	// Kadama Warania 003
	this.instance_2 = new lib.KadamaWarania003();
	this.instance_2.setTransform(226.6,-30.4,1,1,0,0,0,31.6,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(138));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-336.8,-117.2,603.2,233.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
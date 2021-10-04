(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.KSA_TVTC_PH011_M001_L002_P016_Temp000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_103 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(103).call(this.frame_103).wait(21));

	// Layer 1
	this.place = new lib.place();
	this.place.setTransform(399.1,224.1,0.707,0.707,0,0,0,41,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.place}]}).wait(125));

	// titel
	this.instance = new lib.Symbol1("single",0);
	this.instance.setTransform(570.5,77.3,0.05,0.05,0,0,0,0,-30.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({startPosition:0,_off:false},0).to({regY:-30.9,scaleX:0.29,scaleY:0.29},1,cjs.Ease.get(1)).to({scaleX:0.5,scaleY:0.5,x:570.4},1).to({scaleX:0.69,scaleY:0.69},1).to({regY:-30.8,scaleX:0.85,scaleY:0.85,y:77.4},1).to({scaleX:0.97,scaleY:0.97,x:570.5,y:77.3},1).to({scaleX:1.07,scaleY:1.07,y:77.4},1).to({scaleX:1.14,scaleY:1.14,x:570.4},1).to({regY:-30.9,scaleX:1.19,scaleY:1.19,y:77.3},1).to({regY:-31,scaleX:1.2,scaleY:1.2,x:570.5,y:77.4},1).to({scaleX:1.19,scaleY:1.19,y:77.5},1,cjs.Ease.get(-0.99)).to({scaleX:1.16,scaleY:1.16,y:77.4},1).to({regY:-31.1,scaleX:1.1,scaleY:1.1,y:77.3},1).to({regY:-31,scaleX:1.02,scaleY:1.02,y:77.4},1).to({regY:-31.1,scaleX:0.92,scaleY:0.92,y:77.3},1).to({regY:-31,scaleX:0.8,scaleY:0.8},1).to({scaleX:0.87,scaleY:0.87,y:77.4},1,cjs.Ease.get(1)).to({scaleX:0.93,scaleY:0.93},1).to({scaleX:0.97,scaleY:0.97},1).to({scaleX:0.99,scaleY:0.99},1).to({scaleX:1,scaleY:1},1).wait(102));

	// anim
	this.micrometer = new lib.Symbol2();
	this.micrometer.setTransform(578.5,314.6,1,1,0,0,0,0,-0.2);
	this.micrometer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.micrometer).wait(28).wait(1).to({_off:false},0).wait(74).to({_off:true},1).wait(21));

	// Layer 3
	this.s1 = new lib.Samola();
	this.s1.setTransform(491.8,528.5,0.18,0.18,0,0,0,-0.2,0.3);

	this.s2 = new lib.Samola();
	this.s2.setTransform(575.6,528.9,0.236,0.236);

	this.s3 = new lib.Samola();
	this.s3.setTransform(671.8,529.1,0.301,0.301,0,0,0,0,0.7);

	this.s4 = new lib.Samola();
	this.s4.setTransform(781.7,528.3,0.398,0.398,0,0,0,-0.3,0.9);

	this.s5 = new lib.Samola();
	this.s5.setTransform(910.1,515.3,0.479,0.479,0,0,0,-0.1,1);

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

	this.instance_1 = new lib.BGtab();
	this.instance_1.setTransform(710.8,536);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5B3712").ss(2,0,0,45).p("AptlXIoNAAAgEhTIAAG1AR8lXIoNAA");
	this.shape_2.setTransform(279.2,565.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.shape},{t:this.submit},{t:this.ans},{t:this.s5},{t:this.s4},{t:this.s3},{t:this.s2},{t:this.s1}]},29).wait(96));

	// Layer 5
	this.round = new lib.Symbol36();
	this.round.setTransform(727.5,222.8,0.857,0.857);
	this.round._off = true;

	this.timeline.addTween(cjs.Tween.get(this.round).wait(29).to({_off:false},0).wait(96));

	// Layer 2
	this.head = new lib.Symbol42();
	this.head.setTransform(503.8,223.1,0.857,0.857,0,0,0,0.3,0);
	this.head._off = true;

	this.timeline.addTween(cjs.Tween.get(this.head).wait(29).to({_off:false},0).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(370.2,171.1,58,106.1);


// symbols:
(lib.text278671190180265 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("25", "9px Arial Narrow", "#292929");
	this.text.lineHeight = 10;
	this.text.setTransform(-1.9,-2.4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.4,12,13.7);


(lib.text2786711901802506 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("20", "9px Arial Narrow", "#292929");
	this.text.lineHeight = 10;
	this.text.setTransform(-1.9,-2.4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.4,12,13.7);


(lib.text2786711901802555 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("5", "9px Arial Narrow", "#292929");
	this.text.lineHeight = 10;
	this.text.setTransform(-1.9,-2.4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.4,10.2,13.7);


(lib.text2786711901802540 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("0", "9px Arial Narrow", "#292929");
	this.text.lineHeight = 10;
	this.text.setTransform(-1.9,-2.4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.4,10.2,13.7);


(lib.text2786711901802536 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("15", "9px Arial Narrow", "#292929");
	this.text.lineHeight = 10;
	this.text.setTransform(-1.9,-2.4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.4,12,13.7);


(lib.text2786711901802509 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("10", "9px Arial Narrow", "#292929");
	this.text.lineHeight = 10;
	this.text.setTransform(-1.9,-2.4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-2.4,12,13.7);


(lib.Symbol40 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(1,1,1).p("AgigiIBGBF");
	this.shape.setTransform(-282.9,70.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(1,1,1).p("AhGhGICNCN");
	this.shape_1.setTransform(-279.3,67.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(1,1,1).p("AhShSIClCl");
	this.shape_2.setTransform(-275.7,6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(1,1,1).p("AgvgvIBfBf");
	this.shape_3.setTransform(-272.2,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_4.setTransform(-276.9,12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_5.setTransform(-276.9,19.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_6.setTransform(-276.9,26.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_7.setTransform(-276.9,33.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_8.setTransform(-276.9,40.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_9.setTransform(-276.9,48.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_10.setTransform(-276.9,55.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_11.setTransform(-276.9,62.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(1,1,1).p("AgiAjIBGhG");
	this.shape_12.setTransform(-282.9,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(1,1,1).p("AhGBHICNiN");
	this.shape_13.setTransform(-279.3,5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(1,1,1).p("AhSBTIClil");
	this.shape_14.setTransform(-275.7,66);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(1,1,1).p("AgvAvIBfhd");
	this.shape_15.setTransform(-272.2,69.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_16.setTransform(-276.9,60.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_17.setTransform(-276.9,52.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_18.setTransform(-276.9,45.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_19.setTransform(-276.9,38.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_20.setTransform(-276.9,31.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_21.setTransform(-276.9,24.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_22.setTransform(-276.9,17);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_23.setTransform(-276.9,9.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(1,1,1).p("AgigiIBGBF");
	this.shape_24.setTransform(-282.9,-0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(1,1,1).p("AhGhGICNCN");
	this.shape_25.setTransform(-279.3,-4.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(1,1,1).p("AhShSIClCl");
	this.shape_26.setTransform(-275.7,-65.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(1,1,1).p("AgvgvIBfBf");
	this.shape_27.setTransform(-272.2,-69);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_28.setTransform(-276.9,-59.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_29.setTransform(-276.9,-52.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_30.setTransform(-276.9,-45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_31.setTransform(-276.9,-37.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_32.setTransform(-276.9,-30.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_33.setTransform(-276.9,-23.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_34.setTransform(-276.9,-16.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_35.setTransform(-276.9,-9.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(1,1,1).p("AgiAjIBGhG");
	this.shape_36.setTransform(-282.9,-70.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(1,1,1).p("AhGBHICNiN");
	this.shape_37.setTransform(-279.3,-66.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(1,1,1).p("AhSBTIClil");
	this.shape_38.setTransform(-275.7,-5.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(1,1,1).p("AgvAvIBfhd");
	this.shape_39.setTransform(-272.2,-2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_40.setTransform(-276.9,-11.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_41.setTransform(-276.9,-18.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_42.setTransform(-276.9,-25.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_43.setTransform(-276.9,-33.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_44.setTransform(-276.9,-40.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_45.setTransform(-276.9,-47.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_46.setTransform(-276.9,-54.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_47.setTransform(-276.9,-61.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#494949").ss(1,1,0,4).p("AAkAjIhHhF");
	this.shape_48.setTransform(69.4,41.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#494949").ss(1,1,0,4).p("AA8A7Ih3h1");
	this.shape_49.setTransform(71.8,39.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#494949").ss(1,1,0,4).p("ABTBTIilil");
	this.shape_50.setTransform(74.1,37);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#494949").ss(1,1,0,4).p("AguAvIBehd");
	this.shape_51.setTransform(87.3,40.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#494949").ss(1,1,0,4).p("ABrBrIjVjV");
	this.shape_52.setTransform(76.5,34.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#494949").ss(1,1,0,4).p("ACDCDIkFkF");
	this.shape_53.setTransform(78.9,32.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#494949").ss(1,1,0,4).p("ACDCDIkFkF");
	this.shape_54.setTransform(78.9,27.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#494949").ss(1,1,0,4).p("ACDCDIkFkF");
	this.shape_55.setTransform(78.9,22.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#494949").ss(1,1,0,4).p("ACDCDIkFkF");
	this.shape_56.setTransform(78.9,17.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#494949").ss(1,1,0,4).p("ACDCDIkFkF");
	this.shape_57.setTransform(78.9,13.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#494949").ss(1,1,0,4).p("ACDCDIkFkF");
	this.shape_58.setTransform(78.9,8.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#494949").ss(1,1,0,4).p("AAwAvIhehd");
	this.shape_59.setTransform(87.3,-7.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#494949").ss(1,1,0,4).p("ABHBHIiNiN");
	this.shape_60.setTransform(84.9,-4.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#494949").ss(1,1,0,4).p("ABfBfIi9i9");
	this.shape_61.setTransform(82.5,-2.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#494949").ss(1,1,0,4).p("ACDCDIkFkF");
	this.shape_62.setTransform(78.9,3.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#494949").ss(1,1,0,4).p("AB3B3Ijtjt");
	this.shape_63.setTransform(80.1,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#494949").ss(1,1,0,4).p("AhGBHICNiN");
	this.shape_64.setTransform(84.9,38.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#494949").ss(1,1,0,4).p("AheBfIC9i9");
	this.shape_65.setTransform(82.5,35.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#494949").ss(1,1,0,4).p("Ah2B3IDtjt");
	this.shape_66.setTransform(80.1,33.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#494949").ss(1,1,0,4).p("AiCCDIEFkF");
	this.shape_67.setTransform(78.9,29.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#494949").ss(1,1,0,4).p("AiCCDIEFkF");
	this.shape_68.setTransform(78.9,25.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#494949").ss(1,1,0,4).p("AiCCDIEFkF");
	this.shape_69.setTransform(78.9,20.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#494949").ss(1,1,0,4).p("AiCCDIEFkF");
	this.shape_70.setTransform(78.9,15.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#494949").ss(1,1,0,4).p("AgjAjIBHhF");
	this.shape_71.setTransform(69.4,-8.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#494949").ss(1,1,0,4).p("Ag7A7IB3h1");
	this.shape_72.setTransform(71.8,-5.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#494949").ss(1,1,0,4).p("AhSBTIClil");
	this.shape_73.setTransform(74.1,-3.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#494949").ss(1,1,0,4).p("AhqBrIDVjV");
	this.shape_74.setTransform(76.5,-1.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#494949").ss(1,1,0,4).p("AiCCDIEFkF");
	this.shape_75.setTransform(78.9,1.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#494949").ss(1,1,0,4).p("AiCCDIEFkF");
	this.shape_76.setTransform(78.9,10.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#494949").ss(1,1,0,4).p("AiCCDIEFkF");
	this.shape_77.setTransform(78.9,5.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#494949").ss(1,1,0,4).p("AAkAjIhHhF");
	this.shape_78.setTransform(69.4,-10.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#494949").ss(1,1,0,4).p("AA8A7Ih3h1");
	this.shape_79.setTransform(71.8,-13);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#494949").ss(1,1,0,4).p("ABTBTIilil");
	this.shape_80.setTransform(74.1,-15.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#494949").ss(1,1,0,4).p("AguAvIBehd");
	this.shape_81.setTransform(87.3,-11.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#494949").ss(1,1,0,4).p("ABrBrIjVjV");
	this.shape_82.setTransform(76.5,-17.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#494949").ss(1,1,0,4).p("ACDCDIkFkF");
	this.shape_83.setTransform(78.9,-20.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#494949").ss(1,1,0,4).p("ACDCDIkFkF");
	this.shape_84.setTransform(78.9,-25);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#494949").ss(1,1,0,4).p("ACDCDIkFkF");
	this.shape_85.setTransform(78.9,-29.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#494949").ss(1,1,0,4).p("ACDCDIkFkF");
	this.shape_86.setTransform(78.9,-34.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#494949").ss(1,1,0,4).p("ACDCDIkFkF");
	this.shape_87.setTransform(78.9,-39.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#494949").ss(1,1,0,4).p("ACDCDIkFkF");
	this.shape_88.setTransform(78.9,-44.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#494949").ss(1,1,0,4).p("AAwAvIhehd");
	this.shape_89.setTransform(87.3,-59.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#494949").ss(1,1,0,4).p("ABHBHIiNiN");
	this.shape_90.setTransform(84.9,-57.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#494949").ss(1,1,0,4).p("ABfBfIi9i9");
	this.shape_91.setTransform(82.5,-54.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#494949").ss(1,1,0,4).p("ACDCDIkFkF");
	this.shape_92.setTransform(78.9,-48.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#494949").ss(1,1,0,4).p("AB3B3Ijtjt");
	this.shape_93.setTransform(80.1,-52.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#494949").ss(1,1,0,4).p("AhGBHICNiN");
	this.shape_94.setTransform(84.9,-14.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#494949").ss(1,1,0,4).p("AheBfIC9i9");
	this.shape_95.setTransform(82.5,-16.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#494949").ss(1,1,0,4).p("Ah2B3IDtjt");
	this.shape_96.setTransform(80.1,-19);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#494949").ss(1,1,0,4).p("AiCCDIEFkF");
	this.shape_97.setTransform(78.9,-22.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#494949").ss(1,1,0,4).p("AiCCDIEFkF");
	this.shape_98.setTransform(78.9,-27.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#494949").ss(1,1,0,4).p("AiCCDIEFkF");
	this.shape_99.setTransform(78.9,-32.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#494949").ss(1,1,0,4).p("AiCCDIEFkF");
	this.shape_100.setTransform(78.9,-37);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#494949").ss(1,1,0,4).p("AgjAjIBHhF");
	this.shape_101.setTransform(69.4,-60.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#494949").ss(1,1,0,4).p("Ag7A7IB3h1");
	this.shape_102.setTransform(71.8,-58.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#494949").ss(1,1,0,4).p("AhSBTIClil");
	this.shape_103.setTransform(74.1,-56.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#494949").ss(1,1,0,4).p("AhqBrIDVjV");
	this.shape_104.setTransform(76.5,-53.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#494949").ss(1,1,0,4).p("AiCCDIEFkF");
	this.shape_105.setTransform(78.9,-51.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#494949").ss(1,1,0,4).p("AiCCDIEFkF");
	this.shape_106.setTransform(78.9,-41.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#494949").ss(1,1,0,4).p("AiCCDIEFkF");
	this.shape_107.setTransform(78.9,-46.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#494949").ss(1,1,0,4).p("AgWAXIAtgu");
	this.shape_108.setTransform(89.7,-9.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#494949").ss(1,1,0,4).p("AAXAXIgtgt");
	this.shape_109.setTransform(89.7,-62.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#4A496B").ss(1,1,0,4).p("AgLAMIAXgW");
	this.shape_110.setTransform(33.5,75.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#4A496B").ss(1,1,0,4).p("AgiAjIBFhF");
	this.shape_111.setTransform(31.1,73);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#4A496B").ss(1,1,0,4).p("Ag6A7IB1h1");
	this.shape_112.setTransform(28.7,70.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#4A496B").ss(1,1,0,4).p("AhSBTIClil");
	this.shape_113.setTransform(26.3,68.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#4A496B").ss(1,1,0,4).p("AhqBrIDVjV");
	this.shape_114.setTransform(23.9,65.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#4A496B").ss(1,1,0,4).p("AiCCDIEFkF");
	this.shape_115.setTransform(21.5,63.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#4A496B").ss(1,1,0,4).p("AiaCbIE1k1");
	this.shape_116.setTransform(19.1,61);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#4A496B").ss(1,1,0,4).p("AiyCzIFlll");
	this.shape_117.setTransform(16.7,58.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#4A496B").ss(1,1,0,4).p("ABHBHIiNiN");
	this.shape_118.setTransform(27.5,2.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#4A496B").ss(1,1,0,4).p("ABfBfIi9i9");
	this.shape_119.setTransform(25.1,4.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#4A496B").ss(1,1,0,4).p("AB3B3Ijtjt");
	this.shape_120.setTransform(22.7,7.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#4A496B").ss(1,1,0,4).p("ACPCPIkdkd");
	this.shape_121.setTransform(20.3,9.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#4A496B").ss(1,1,0,4).p("ACnCnIlNlN");
	this.shape_122.setTransform(17.9,12);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#4A496B").ss(1,1,0,4).p("AALAMIgVgW");
	this.shape_123.setTransform(-90.8,75.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#4A496B").ss(1,1,0,4).p("AAjAjIhFhF");
	this.shape_124.setTransform(-88.4,73);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#4A496B").ss(1,1,0,4).p("AA7A7Ih1h1");
	this.shape_125.setTransform(-86,70.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#4A496B").ss(1,1,0,4).p("ABTBTIilil");
	this.shape_126.setTransform(-83.7,68.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#4A496B").ss(1,1,0,4).p("AjKDLIGVmV");
	this.shape_127.setTransform(14.3,56.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#4A496B").ss(1,1,0,4).p("ABrBrIjVjV");
	this.shape_128.setTransform(-81.3,65.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#4A496B").ss(1,1,0,4).p("ACDCDIkFkF");
	this.shape_129.setTransform(-78.9,63.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#4A496B").ss(1,1,0,4).p("ACbCbIk1k1");
	this.shape_130.setTransform(-76.5,61);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#4A496B").ss(1,1,0,4).p("ADLDLImVmV");
	this.shape_131.setTransform(-71.7,56.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#4A496B").ss(1,1,0,4).p("ACzCzIllll");
	this.shape_132.setTransform(-74.1,58.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#4A496B").ss(1,1,0,4).p("ADjDjInFnF");
	this.shape_133.setTransform(-69.3,53.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#4A496B").ss(1,1,0,4).p("AC/C/Il9l9");
	this.shape_134.setTransform(15.5,14.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#4A496B").ss(1,1,0,4).p("ADXDXImtmt");
	this.shape_135.setTransform(13.1,16.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#4A496B").ss(1,1,0,4).p("ADvDvIndnd");
	this.shape_136.setTransform(10.7,19.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#4A496B").ss(1,1,0,4).p("AEGEHIoMoM");
	this.shape_137.setTransform(8.4,21.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#4A496B").ss(1,1,0,4).p("AEfEeIo9o8");
	this.shape_138.setTransform(6,24);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#4A496B").ss(1,1,0,4).p("AE3E2Iptpr");
	this.shape_139.setTransform(3.6,26.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#4A496B").ss(1,1,0,4).p("AFOFOIqbqb");
	this.shape_140.setTransform(1.2,28.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#4A496B").ss(1,1,0,4).p("AD7D6In0n0");
	this.shape_141.setTransform(-66.9,51.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#4A496B").ss(1,1,0,4).p("AETETIolol");
	this.shape_142.setTransform(-64.5,49.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#4A496B").ss(1,1,0,4).p("AFCFCIqDqE");
	this.shape_143.setTransform(-59.7,44.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#4A496B").ss(1,1,0,4).p("AEqErIpUpV");
	this.shape_144.setTransform(-62.1,46.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#4A496B").ss(1,1,0,4).p("AFyFyIrjrj");
	this.shape_145.setTransform(-54.9,39.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#4A496B").ss(1,1,0,4).p("AFaFaIqzqz");
	this.shape_146.setTransform(-57.3,41.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGKGKIsTsT");
	this.shape_147.setTransform(-52.6,37.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_148.setTransform(-49,35.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_149.setTransform(-44.2,35.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_150.setTransform(-39.4,35.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_151.setTransform(-34.6,35.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_152.setTransform(-29.8,35.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_153.setTransform(-25,35.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_154.setTransform(-20.3,35.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_155.setTransform(-15.5,35.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_156.setTransform(-10.7,35.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_157.setTransform(-5.9,35.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#4A496B").ss(1,1,0,4).p("AF+F+Ir7r7");
	this.shape_158.setTransform(-3.5,33.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#4A496B").ss(1,1,0,4).p("AFmFmIrLrL");
	this.shape_159.setTransform(-1.1,31.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#4A496B").ss(1,1,0,4).p("AjiDjIHFnF");
	this.shape_160.setTransform(11.9,53.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#4A496B").ss(1,1,0,4).p("Aj6D6IH1n0");
	this.shape_161.setTransform(9.6,51.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#4A496B").ss(1,1,0,4).p("AkSETIIlol");
	this.shape_162.setTransform(7.2,49.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#4A496B").ss(1,1,0,4).p("AlBFCIKDqE");
	this.shape_163.setTransform(2.4,44.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#4A496B").ss(1,1,0,4).p("AkpErIJUpV");
	this.shape_164.setTransform(4.8,46.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#4A496B").ss(1,1,0,4).p("AlZFaIKzqz");
	this.shape_165.setTransform(0,41.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#4A496B").ss(1,1,0,4).p("AhGBHICNiN");
	this.shape_166.setTransform(-84.8,2.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#4A496B").ss(1,1,0,4).p("AheBfIC9i9");
	this.shape_167.setTransform(-82.5,4.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#4A496B").ss(1,1,0,4).p("Ah2B3IDtjt");
	this.shape_168.setTransform(-80.1,7.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#4A496B").ss(1,1,0,4).p("AiOCPIEdkd");
	this.shape_169.setTransform(-77.7,9.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#4A496B").ss(1,1,0,4).p("AimCnIFNlN");
	this.shape_170.setTransform(-75.3,12);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#4A496B").ss(1,1,0,4).p("Ai+C/IF9l9");
	this.shape_171.setTransform(-72.9,14.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#4A496B").ss(1,1,0,4).p("AjWDXIGtmt");
	this.shape_172.setTransform(-70.5,16.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#4A496B").ss(1,1,0,4).p("AlxFyILjrj");
	this.shape_173.setTransform(-2.3,39.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmJGKIMTsT");
	this.shape_174.setTransform(-4.7,37.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_175.setTransform(-13.1,35.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_176.setTransform(-8.3,35.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_177.setTransform(-22.7,35.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_178.setTransform(-17.9,35.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_179.setTransform(-27.4,35.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_180.setTransform(-32.2,35.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_181.setTransform(-37,35.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_182.setTransform(-41.8,35.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_183.setTransform(-46.6,35.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_184.setTransform(-51.4,35.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#4A496B").ss(1,1,0,4).p("Al9F+IL7r7");
	this.shape_185.setTransform(-53.7,33.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#4A496B").ss(1,1,0,4).p("AllFmILLrL");
	this.shape_186.setTransform(-56.1,31.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#4A496B").ss(1,1,0,4).p("AlNFOIKbqb");
	this.shape_187.setTransform(-58.5,28.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#4A496B").ss(1,1,0,4).p("Ak1E2IJspr");
	this.shape_188.setTransform(-60.9,26.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#4A496B").ss(1,1,0,4).p("AkdEeII8o8");
	this.shape_189.setTransform(-63.3,24);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#4A496B").ss(1,1,0,4).p("AkGEHIIMoM");
	this.shape_190.setTransform(-65.7,21.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#4A496B").ss(1,1,0,4).p("AjuDvIHcnd");
	this.shape_191.setTransform(-68.1,19.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#4A496B").ss(1,1,0,4).p("AAXAXIgtgt");
	this.shape_192.setTransform(32.3,-2.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#4A496B").ss(1,1,0,4).p("AAvAvIhdhd");
	this.shape_193.setTransform(29.9,0);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#4A496B").ss(1,1,0,4).p("AguAvIBdhd");
	this.shape_194.setTransform(-87.2,0);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#4A496B").ss(1,1,0,4).p("AgiAjIBFhF");
	this.shape_195.setTransform(31.1,1.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#4A496B").ss(1,1,0,4).p("Ag6A7IB1h1");
	this.shape_196.setTransform(28.7,-1.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#4A496B").ss(1,1,0,4).p("AhSBTIClil");
	this.shape_197.setTransform(26.3,-3.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#4A496B").ss(1,1,0,4).p("AhqBrIDVjV");
	this.shape_198.setTransform(23.9,-5.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#4A496B").ss(1,1,0,4).p("AiCCDIEFkF");
	this.shape_199.setTransform(21.5,-8.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#4A496B").ss(1,1,0,4).p("AiaCbIE1k1");
	this.shape_200.setTransform(19.1,-10.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#4A496B").ss(1,1,0,4).p("AiyCzIFlll");
	this.shape_201.setTransform(16.7,-13);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#4A496B").ss(1,1,0,4).p("AAXAXIgtgt");
	this.shape_202.setTransform(32.3,-74);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#4A496B").ss(1,1,0,4).p("AAvAvIhdhd");
	this.shape_203.setTransform(29.9,-71.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#4A496B").ss(1,1,0,4).p("ABHBHIiNiN");
	this.shape_204.setTransform(27.5,-69.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#4A496B").ss(1,1,0,4).p("ABfBfIi9i9");
	this.shape_205.setTransform(25.1,-66.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#4A496B").ss(1,1,0,4).p("AB3B3Ijtjt");
	this.shape_206.setTransform(22.7,-64.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#4A496B").ss(1,1,0,4).p("ACPCPIkdkd");
	this.shape_207.setTransform(20.3,-62.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#4A496B").ss(1,1,0,4).p("ACnCnIlNlN");
	this.shape_208.setTransform(17.9,-59.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#4A496B").ss(1,1,0,4).p("AA7A7Ih1h1");
	this.shape_209.setTransform(-86,-1.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#4A496B").ss(1,1,0,4).p("ABTBTIilil");
	this.shape_210.setTransform(-83.7,-3.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#4A496B").ss(1,1,0,4).p("AguAvIBdhd");
	this.shape_211.setTransform(-87.2,-71.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#4A496B").ss(1,1,0,4).p("AjKDLIGVmV");
	this.shape_212.setTransform(14.3,-15.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#4A496B").ss(1,1,0,4).p("ABrBrIjVjV");
	this.shape_213.setTransform(-81.3,-5.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#4A496B").ss(1,1,0,4).p("ACDCDIkFkF");
	this.shape_214.setTransform(-78.9,-8.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#4A496B").ss(1,1,0,4).p("ACbCbIk1k1");
	this.shape_215.setTransform(-76.5,-10.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#4A496B").ss(1,1,0,4).p("ADLDLImVmV");
	this.shape_216.setTransform(-71.7,-15.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#4A496B").ss(1,1,0,4).p("ACzCzIllll");
	this.shape_217.setTransform(-74.1,-13);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#4A496B").ss(1,1,0,4).p("ADjDjInFnF");
	this.shape_218.setTransform(-69.3,-17.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#4A496B").ss(1,1,0,4).p("AC/C/Il9l9");
	this.shape_219.setTransform(15.5,-57.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#4A496B").ss(1,1,0,4).p("ADXDXImtmt");
	this.shape_220.setTransform(13.1,-54.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#4A496B").ss(1,1,0,4).p("ADvDvIndnd");
	this.shape_221.setTransform(10.7,-52.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#4A496B").ss(1,1,0,4).p("AEGEHIoMoM");
	this.shape_222.setTransform(8.4,-50.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#4A496B").ss(1,1,0,4).p("AEfEeIo9o8");
	this.shape_223.setTransform(6,-47.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#4A496B").ss(1,1,0,4).p("AE3E2Iptpr");
	this.shape_224.setTransform(3.6,-45.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#4A496B").ss(1,1,0,4).p("AFOFOIqbqb");
	this.shape_225.setTransform(1.2,-42.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#4A496B").ss(1,1,0,4).p("AD7D6In0n0");
	this.shape_226.setTransform(-66.9,-20.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#4A496B").ss(1,1,0,4).p("AETETIolol");
	this.shape_227.setTransform(-64.5,-22.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#4A496B").ss(1,1,0,4).p("AFCFCIqDqE");
	this.shape_228.setTransform(-59.7,-27.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#4A496B").ss(1,1,0,4).p("AEqErIpUpV");
	this.shape_229.setTransform(-62.1,-25);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#4A496B").ss(1,1,0,4).p("AFyFyIrjrj");
	this.shape_230.setTransform(-54.9,-32.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#4A496B").ss(1,1,0,4).p("AFaFaIqzqz");
	this.shape_231.setTransform(-57.3,-29.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGKGKIsTsT");
	this.shape_232.setTransform(-52.6,-34.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_233.setTransform(-49,-35.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_234.setTransform(-44.2,-35.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_235.setTransform(-39.4,-35.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_236.setTransform(-34.6,-35.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_237.setTransform(-29.8,-35.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_238.setTransform(-25,-35.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_239.setTransform(-20.3,-35.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_240.setTransform(-15.5,-35.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_241.setTransform(-10.7,-35.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#4A496B").ss(1,1,0,4).p("AGWGWIsrsr");
	this.shape_242.setTransform(-5.9,-35.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#4A496B").ss(1,1,0,4).p("AF+F+Ir7r7");
	this.shape_243.setTransform(-3.5,-38.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#4A496B").ss(1,1,0,4).p("AFmFmIrLrL");
	this.shape_244.setTransform(-1.1,-40.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#4A496B").ss(1,1,0,4).p("AjiDjIHFnF");
	this.shape_245.setTransform(11.9,-17.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#4A496B").ss(1,1,0,4).p("Aj6D6IH1n0");
	this.shape_246.setTransform(9.6,-20.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#4A496B").ss(1,1,0,4).p("AkSETIIlol");
	this.shape_247.setTransform(7.2,-22.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#4A496B").ss(1,1,0,4).p("AlBFCIKDqE");
	this.shape_248.setTransform(2.4,-27.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#4A496B").ss(1,1,0,4).p("AkpErIJUpV");
	this.shape_249.setTransform(4.8,-25);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#4A496B").ss(1,1,0,4).p("AlZFaIKzqz");
	this.shape_250.setTransform(0,-29.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#4A496B").ss(1,1,0,4).p("AhGBHICNiN");
	this.shape_251.setTransform(-84.8,-69.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#4A496B").ss(1,1,0,4).p("AheBfIC9i9");
	this.shape_252.setTransform(-82.5,-66.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#4A496B").ss(1,1,0,4).p("Ah2B3IDtjt");
	this.shape_253.setTransform(-80.1,-64.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#4A496B").ss(1,1,0,4).p("AiOCPIEdkd");
	this.shape_254.setTransform(-77.7,-62.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#4A496B").ss(1,1,0,4).p("AimCnIFNlN");
	this.shape_255.setTransform(-75.3,-59.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#4A496B").ss(1,1,0,4).p("Ai+C/IF9l9");
	this.shape_256.setTransform(-72.9,-57.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#4A496B").ss(1,1,0,4).p("AjWDXIGtmt");
	this.shape_257.setTransform(-70.5,-54.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#4A496B").ss(1,1,0,4).p("AlxFyILjrj");
	this.shape_258.setTransform(-2.3,-32.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmJGKIMTsT");
	this.shape_259.setTransform(-4.7,-34.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_260.setTransform(-13.1,-35.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_261.setTransform(-8.3,-35.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_262.setTransform(-22.7,-35.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_263.setTransform(-17.9,-35.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_264.setTransform(-27.4,-35.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_265.setTransform(-32.2,-35.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_266.setTransform(-37,-35.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_267.setTransform(-41.8,-35.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_268.setTransform(-46.6,-35.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#4A496B").ss(1,1,0,4).p("AmVGWIMrsr");
	this.shape_269.setTransform(-51.4,-35.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#4A496B").ss(1,1,0,4).p("Al9F+IL7r7");
	this.shape_270.setTransform(-53.7,-38.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#4A496B").ss(1,1,0,4).p("AllFmILLrL");
	this.shape_271.setTransform(-56.1,-40.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#4A496B").ss(1,1,0,4).p("AlNFOIKbqb");
	this.shape_272.setTransform(-58.5,-42.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#4A496B").ss(1,1,0,4).p("Ak1E2IJspr");
	this.shape_273.setTransform(-60.9,-45.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#4A496B").ss(1,1,0,4).p("AkdEeII8o8");
	this.shape_274.setTransform(-63.3,-47.7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#4A496B").ss(1,1,0,4).p("AkGEHIIMoM");
	this.shape_275.setTransform(-65.7,-50.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#4A496B").ss(1,1,0,4).p("AjuDvIHcnd");
	this.shape_276.setTransform(-68.1,-52.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#4A496B").ss(1,1,0,4).p("AgWAXIAtgt");
	this.shape_277.setTransform(-89.6,-2.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#4A496B").ss(1,1,0,4).p("AALAMIgVgW");
	this.shape_278.setTransform(-90.8,3.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#4A496B").ss(1,1,0,4).p("AAjAjIhFhF");
	this.shape_279.setTransform(-88.4,1.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#4A496B").ss(1,1,0,4).p("AgWAXIAtgt");
	this.shape_280.setTransform(-89.6,-74);

	this.addChild(this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275,this.shape_274,this.shape_273,this.shape_272,this.shape_271,this.shape_270,this.shape_269,this.shape_268,this.shape_267,this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.shape_258,this.shape_257,this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-286.5,-76.4,378.7,153.1);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(1,1,0,4).p("AiygcIFlA5");
	this.shape.setTransform(0,67.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(1,1,0,4).p("AhqgQIDVAh");
	this.shape_1.setTransform(-7.1,65.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(1,1,0,4).p("AhqgPIDVAf");
	this.shape_2.setTransform(-7.1,63.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(1,1,0,4).p("AhqgOIDVAd");
	this.shape_3.setTransform(-7.1,61.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(1,1,0,4).p("AhqgMIDVAZ");
	this.shape_4.setTransform(-7.1,59.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(1,1,0,4).p("AiygTIFlAn");
	this.shape_5.setTransform(0,57.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(1,1,0,4).p("AhqgJIDVAT");
	this.shape_6.setTransform(-7.1,53.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(1,1,0,4).p("AhqgHIDVAP");
	this.shape_7.setTransform(-7.1,50);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(1,1,0,4).p("AhqgFIDVAL");
	this.shape_8.setTransform(-7.1,46.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(1,1,0,4).p("AhqgDIDVAH");
	this.shape_9.setTransform(-7.1,42.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(1,1,0,4).p("AiygCIFlAF");
	this.shape_10.setTransform(0,38.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(1,1,0,4).p("AhqARIDVgg");
	this.shape_11.setTransform(-7.1,2.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(1,1,0,4).p("AiyAbIFlg0");
	this.shape_12.setTransform(0,3.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(1,1,0,4).p("AhqAPIDVgd");
	this.shape_13.setTransform(-7.1,6.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(1,1,0,4).p("AhqAOIDVgb");
	this.shape_14.setTransform(-7.1,8.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(1,1,0,4).p("AhqAMIDVgX");
	this.shape_15.setTransform(-7.1,11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(1,1,0,4).p("AhqAKIDVgT");
	this.shape_16.setTransform(-7.1,14.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(1,1,0,4).p("AiyAOIFlgb");
	this.shape_17.setTransform(0,17.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(1,1,0,4).p("AhqAGIDVgL");
	this.shape_18.setTransform(-7.1,22);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(1,1,0,4).p("AhqAEIDVgH");
	this.shape_19.setTransform(-7.1,25.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(1,1,0,4).p("AhqACIDVgD");
	this.shape_20.setTransform(-7.1,30);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(1,1,0,4).p("AhqAAIDVAA");
	this.shape_21.setTransform(-7.1,34.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(1,1,0,4).p("AhqgQIDVAh");
	this.shape_22.setTransform(-7.1,66.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(1,1,0,4).p("AhqgJIDVAT");
	this.shape_23.setTransform(-7.1,56.6,1,1,0,0,1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(1,1,0,4).p("AhqARIDVgg");
	this.shape_24.setTransform(-6.9,4.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(1,1,0,4).p("AhqAKIDVgT");
	this.shape_25.setTransform(-7.1,18.3,1,1,0,0,1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(1,1,0,4).p("AhqAAIDVAA");
	this.shape_26.setTransform(-17.7,38,1,1,1,0,0,-10.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21,p:{regX:0,rotation:0,x:-7.1,y:34.1}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{skewY:0,y:17.7,scaleX:1}},{t:this.shape_16,p:{skewY:0,y:14.8}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{skewY:0,y:3.3}},{t:this.shape_11,p:{x:-7.1,y:2.8}},{t:this.shape_10,p:{skewY:0,y:38.4,scaleX:1}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{skewY:0,y:53.4}},{t:this.shape_5,p:{skewY:0,y:57.5,scaleX:1}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:65.4}},{t:this.shape,p:{y:67.6,skewY:0,scaleX:1}}]}).to({state:[{t:this.shape_21,p:{regX:-10.9,rotation:1,x:-17.7,y:38}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{skewY:-1,y:13.9,scaleX:1}},{t:this.shape_16,p:{skewY:1,y:18.3}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{skewY:-0.4,y:1.7}},{t:this.shape_11,p:{x:-6.9,y:4.3}},{t:this.shape_10,p:{skewY:-1.5,y:34.1,scaleX:1}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{skewY:1,y:56.6}},{t:this.shape_5,p:{skewY:-0.9,y:54.1,scaleX:1}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:66.4}},{t:this.shape,p:{y:66.3,skewY:0,scaleX:1}}]},1).to({state:[{t:this.shape_26},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{skewY:-1.9,y:10.7,scaleX:1.001}},{t:this.shape_25},{t:this.shape_14},{t:this.shape_13},{t:this.shape_24},{t:this.shape_10,p:{skewY:-1.8,y:29.8,scaleX:1.001}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_23},{t:this.shape_5,p:{skewY:-2.1,y:50.5,scaleX:1.001}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_22},{t:this.shape,p:{y:65,skewY:-0.6,scaleX:1}},{t:this.shape_1,p:{y:65.2}},{t:this.shape_6,p:{skewY:0,y:53.4}},{t:this.shape_21,p:{regX:0,rotation:0,x:-7.1,y:34.1}},{t:this.shape_16,p:{skewY:0,y:14.8}},{t:this.shape_11,p:{x:-7.1,y:2.8}}]},1).to({state:[{t:this.shape_26},{t:this.shape_18},{t:this.shape_17,p:{skewY:-2.8,y:7.8,scaleX:1.001}},{t:this.shape_25},{t:this.shape_13},{t:this.shape_24},{t:this.shape_10,p:{skewY:-3.5,y:25.6,scaleX:1.002}},{t:this.shape_9},{t:this.shape_23},{t:this.shape_5,p:{skewY:-2.8,y:46.7,scaleX:1.001}},{t:this.shape_4},{t:this.shape_22},{t:this.shape,p:{y:62.9,skewY:-1.2,scaleX:1}},{t:this.shape_1,p:{y:65.2}},{t:this.shape_6,p:{skewY:0,y:53.4}},{t:this.shape_21,p:{regX:0,rotation:0,x:-7.1,y:34.1}},{t:this.shape_16,p:{skewY:0,y:14.8}},{t:this.shape_11,p:{x:-7.1,y:2.8}},{t:this.shape_20},{t:this.shape_15},{t:this.shape_7},{t:this.shape_2}]},1).to({state:[{t:this.shape_26},{t:this.shape_17,p:{skewY:-3.5,y:5.3,scaleX:1.002}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_10,p:{skewY:-4.5,y:21.6,scaleX:1.003}},{t:this.shape_23},{t:this.shape_5,p:{skewY:-4.2,y:42.5,scaleX:1.003}},{t:this.shape_22},{t:this.shape,p:{y:60.3,skewY:-2.1,scaleX:1.001}},{t:this.shape_1,p:{y:65.2}},{t:this.shape_6,p:{skewY:0,y:53.4}},{t:this.shape_21,p:{regX:0,rotation:0,x:-7.1,y:34.1}},{t:this.shape_16,p:{skewY:0,y:14.8}},{t:this.shape_11,p:{x:-7.1,y:2.8}},{t:this.shape_20},{t:this.shape_15},{t:this.shape_7},{t:this.shape_2},{t:this.shape_19},{t:this.shape_14},{t:this.shape_8},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.9,0.6,35.9,70);


(lib.Symbol11 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,0,0,45).p("AD8gEQgHA9hDAfQhKAihogXQhogXhKhEQhDg7gGhB");
	this.shape.setTransform(0,0.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.2,-11.2,50.5,22.7);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(2,0,1).p("AUQh2IAADtMgofAAAIAAjtg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4A5A5A","#FCF8CB","#494959"],[0,0.333,1],0,-11.8,0,9.6).s().p("A0PB3IAAjtMAofAAAIAADtg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-129.6,-11.9,259.3,23.9);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(2,0,1).p("Ag6h2IB1AAIAADtIh1AAg");
	this.shape.setTransform(-211.7,-92,0.856,0.856);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4A5A5A","#FCF8CB","#494959"],[0,0.431,1],0,-14.2,0,12).s().p("Ag6B3IAAjtIB1AAIAADtg");
	this.shape_1.setTransform(-211.7,-92,0.856,0.856);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(2,0,1).p("AWb2aIAALOQgqArgJAuQgGAlAMBQQAYCeAEAkQARCVAACnQAAEwh7ERQhzEBjRDFQjLDAkBBqQkDBqkNAAQkKAAkDhqQkBhqjLjAQjSjFhzkBQh8kRAAkwQAAjHA4i+QAlh8BXi8QBejNAdhVQA4ilAAieIFnAAIAAIOIgTAfQgWAngTAvQg8CVAAClQAACwBACcQA+CWByByQByByCXA+QCcA/CvAAQCwAACcg/QCXg+ByhyQByhyA+iWQBAicAAiwQAAiWgkh3QgLgmgOgdIgLgXIAArOIDvAAIAALmIDAAAIAArmg");
	this.shape_2.setTransform(-155.3,0.1,0.856,0.856);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(2,0,1).p("Au7r5QAADZBSC5QBNCsCMCBQCFB5CtBCQCrBBCzAAQCyAACphBQCthDCGh4QCOiBBNisQBTi5AAjZQAAgwA4gvQA8gyBAALQBNANAuBpQA4B/AAD4QAADjhbDlQhdDsioC8Qi0DJjqBvQkAB6klAAQkrAAkCh6QjshvixjJQimi7hajtQhYjjAAjlQAAjQA4iGQAvhxBMgmQBFgiA3AnQA4ApAABYg");
	this.shape_3.setTransform(-155.3,34.6,0.856,0.856);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#606163").s().p("AotMWQjshvixjJQimi7hajtQhYjjAAjlQAAjQA4iGQAvhxBMgmQBFgiA3AnQA4ApAABYQAADZBSC5QBNCsCMCBQCFB5CtBCQCrBBCzAAQCyAACphBQCthDCGh4QCOiBBNisQBTi5AAjZQAAgwA4gvQA8gyBAALQBNANAuBpQA4B/AAD4QAADjhbDlQhdDsioC8Qi0DJjqBvQkAB6klAAQkrAAkCh6g");
	this.shape_4.setTransform(-155.3,34.6,0.856,0.856);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#4A6C49","#B7DDB7"],[0,1],30.4,130.6,-65.2,-108.5).s().p("AoNPxQkChnjKi9QjSjEhzkBQh8kRAAk4QAAkwBjjiQAOggA7hzQAkhHAHgqIH3AAIgTAlQgWAvgTAyQg8CiAACHQAACwBACcQA+CYByBxQByBwCXA+QCcBACvAAQCxAACchAQCYg9ByhxQBxhxA+iYQA/ibAAixQAAiWgkh4QgLglgOgdIgLgXIDvAAIAAAYIDAAAIAAgYIDvAAQgqArgJAuQgGAlAMBQQAYCeAEAkQARCUAACqQAAEwh7EPQh0EAjRDGQjKDAkBBqQkDBqkNAAQkLAAkChng");
	this.shape_5.setTransform(-155.3,27.7,0.856,0.856);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#4A6C49","#CADDCA","#4A6C49"],[0,0.651,1],0,-50.9,0,43.9).s().p("Ah2FnIAArMIDtAAIAALMg");
	this.shape_6.setTransform(-79.5,-92,0.856,0.856);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#4A6C49","#CADDCA","#4A6C49"],[0,0.651,1],0,-50.9,0,43.9).s().p("Ah2FnIAArMIDtAAIAALMg");
	this.shape_7.setTransform(-42.7,-92,0.856,0.856);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#4A6C49","#CADDCA","#4A6C49"],[0,0.553,1],0.1,-37.8,0.4,28.6).s().p("Aj6EHQBLiHAqjPQANhCAJhBIAFg0IFlAAIAAINg");
	this.shape_8.setTransform(-238.3,-90,0.856,0.856);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(1,1,1).p("AgigiIBGBF");
	this.shape_9.setTransform(-66.2,-62.3,0.856,0.856);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(1,1,1).p("AhGhGICNCN");
	this.shape_10.setTransform(-63.1,-65.4,0.856,0.856);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(1,1,1).p("AhShSIClCl");
	this.shape_11.setTransform(-60.1,-117.6,0.856,0.856);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(1,1,1).p("AgvgvIBfBf");
	this.shape_12.setTransform(-57,-120.7,0.856,0.856);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_13.setTransform(-61.1,-112.5,0.856,0.856);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_14.setTransform(-61.1,-106.3,0.856,0.856);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_15.setTransform(-61.1,-100.2,0.856,0.856);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_16.setTransform(-61.1,-94.1,0.856,0.856);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_17.setTransform(-61.1,-87.9,0.856,0.856);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_18.setTransform(-61.1,-81.8,0.856,0.856);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_19.setTransform(-61.1,-75.6,0.856,0.856);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(1,1,1).p("AheheIC9C9");
	this.shape_20.setTransform(-61.1,-69.5,0.856,0.856);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(1,1,1).p("AgiAjIBGhG");
	this.shape_21.setTransform(-66.2,-121.7,0.856,0.856);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(1,1,1).p("AhGBHICNiN");
	this.shape_22.setTransform(-63.1,-118.6,0.856,0.856);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(1,1,1).p("AhSBTIClil");
	this.shape_23.setTransform(-60.1,-66.4,0.856,0.856);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(1,1,1).p("AgvAvIBfhd");
	this.shape_24.setTransform(-57,-63.3,0.856,0.856);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_25.setTransform(-61.1,-71.5,0.856,0.856);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_26.setTransform(-61.1,-77.7,0.856,0.856);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_27.setTransform(-61.1,-83.8,0.856,0.856);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_28.setTransform(-61.1,-90,0.856,0.856);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_29.setTransform(-61.1,-96.1,0.856,0.856);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_30.setTransform(-61.1,-102.3,0.856,0.856);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_31.setTransform(-61.1,-108.4,0.856,0.856);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(1,1,1).p("AheBfIC9i9");
	this.shape_32.setTransform(-61.1,-114.5,0.856,0.856);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(5,0,1).p("ABfl9IAAL7Ii9AAIAAr7g");
	this.shape_33.setTransform(-61.1,-92,0.856,0.856);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#414249","#D4D3E7","#494949"],[0,0.667,1],0,-60,0,55.4).s().p("AheF+IAAr7IC9AAIAAL7g");
	this.shape_34.setTransform(-61.1,-92,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278.2,-124.8,245.8,247.9);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("ﺗ", "26px Arial", "#FFFFFF");
	this.text.lineHeight = 26;
	this.text.setTransform(65.2,-55.9);

	this.text_1 = new cjs.Text("ﺠ", "26px Arial", "#FFFFFF");
	this.text_1.lineHeight = 26;
	this.text_1.setTransform(51.4,-55.9);

	this.text_2 = new cjs.Text("ﺮ", "26px Arial", "#FFFFFF");
	this.text_2.lineHeight = 26;
	this.text_2.setTransform(38.7,-55.9);

	this.text_3 = new cjs.Text("ﺑ", "26px Arial", "#FFFFFF");
	this.text_3.lineHeight = 26;
	this.text_3.setTransform(32.4,-55.9);

	this.text_4 = new cjs.Text("ﺔ", "26px Arial", "#FFFFFF");
	this.text_4.lineHeight = 26;
	this.text_4.setTransform(22.6,-55.9);

	this.text_5 = new cjs.Text("ﺍ", "26px Arial", "#FFFFFF");
	this.text_5.lineHeight = 26;
	this.text_5.setTransform(10,-55.9);

	this.text_6 = new cjs.Text("ﻟ", "26px Arial", "#FFFFFF");
	this.text_6.lineHeight = 26;
	this.text_6.setTransform(4.6,-55.9);

	this.text_7 = new cjs.Text("ﻤ", "26px Arial", "#FFFFFF");
	this.text_7.lineHeight = 26;
	this.text_7.setTransform(-5.6,-55.9);

	this.text_8 = new cjs.Text("ﻴ", "26px Arial", "#FFFFFF");
	this.text_8.lineHeight = 26;
	this.text_8.setTransform(-11.9,-55.9);

	this.text_9 = new cjs.Text("ﻜ", "26px Arial", "#FFFFFF");
	this.text_9.lineHeight = 26;
	this.text_9.setTransform(-22.2,-55.9);

	this.text_10 = new cjs.Text("ﺮ", "26px Arial", "#FFFFFF");
	this.text_10.lineHeight = 26;
	this.text_10.setTransform(-34.9,-55.9);

	this.text_11 = new cjs.Text("ﻭ", "26px Arial", "#FFFFFF");
	this.text_11.lineHeight = 26;
	this.text_11.setTransform(-46.1,-55.9);

	this.text_12 = new cjs.Text("ﻣ", "26px Arial", "#FFFFFF");
	this.text_12.lineHeight = 26;
	this.text_12.setTransform(-56.4,-55.9);

	this.text_13 = new cjs.Text("ﺘ", "26px Arial", "#FFFFFF");
	this.text_13.lineHeight = 26;
	this.text_13.setTransform(-62.7,-55.9);

	this.text_14 = new cjs.Text("ﺮ", "26px Arial", "#FFFFFF");
	this.text_14.lineHeight = 26;
	this.text_14.setTransform(-75.4,-55.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAYQgLgKABgOQgBgNALgLQAKgJANgBQAOABAKAJQALALAAANQAAAOgLAKQgKAKgOABQgNgBgKgKg");
	this.shape.setTransform(144.2,-31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAYQgLgKAAgOQAAgNALgLQAKgJANgBQAOABAKAJQAKALAAANQAAAOgKAKQgKAKgOABQgNgBgKgKg");
	this.shape_1.setTransform(-144,-31.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("AZhAAQAABahBBBQhABBhbAAMgsJAAAQhbAAhAhBQhBhBAAhaQAAhaBBhAQBAhBBbAAMAsJAAAQBbAABABBQBBBAAABag");
	this.shape_2.setTransform(0,-31.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#386F43").s().p("A2EENQhvABhQhQQhPhPAAhvQAAhuBPhPQBQhQBvAAMAsJAAAQBwAABPBQQBPBPAABuQAABvhPBPQhQBQhvgBg");
	this.shape_3.setTransform(0,-31.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.text_14,this.text_13,this.text_12,this.text_11,this.text_10,this.text_9,this.text_8,this.text_7,this.text_6,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-168.2,-58.1,336.7,54);


(lib.SS45 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("45", "8px Arial");
	this.text.lineHeight = 28;
	this.text.setTransform(-5,-8.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-8.8,13.1,12.9);


(lib.SS40 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("40", "8px Arial");
	this.text.lineHeight = 28;
	this.text.setTransform(-5,-8.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-8.8,13.1,12.9);


(lib.SS35 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("35", "8px Arial");
	this.text.lineHeight = 28;
	this.text.setTransform(-5,-8.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-8.8,13.1,12.9);


(lib.SS30 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("30", "8px Arial");
	this.text.lineHeight = 28;
	this.text.setTransform(-5,-8.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-8.8,13.1,12.9);


(lib.SS25 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("25", "8px Arial");
	this.text.lineHeight = 28;
	this.text.setTransform(-5,-8.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-8.8,13.1,12.9);


(lib.SS20 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("20", "8px Arial");
	this.text.lineHeight = 28;
	this.text.setTransform(-5,-8.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-8.8,13.1,12.9);


(lib.SS15 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("15", "8px Arial");
	this.text.lineHeight = 28;
	this.text.setTransform(-5,-8.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-8.8,13.1,12.9);


(lib.SS10 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("10", "8px Arial");
	this.text.lineHeight = 28;
	this.text.setTransform(-5,-8.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-8.8,13.1,12.9);


(lib.SS5 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("5", "8px Arial");
	this.text.lineHeight = 28;
	this.text.setTransform(-5,-8.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-8.8,10.2,12.9);


(lib.SS0 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("0", "8px Arial");
	this.text.lineHeight = 28;
	this.text.setTransform(-5,-8.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-8.8,10.2,12.9);


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


(lib.place = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(106,93,93,0.02)").s().p("AmZLuIAA3bIMyAAIAAXbg");
	this.shape.setTransform(41,75);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,150.1);


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


(lib.Symbol42 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text2786711901802536();
	this.instance.setTransform(78,-19.9,1,1,0,0,0,4,4.4);

	this.instance_1 = new lib.text2786711901802509();
	this.instance_1.setTransform(54.1,-19.9,1,1,0,0,0,4,4.4);

	this.instance_2 = new lib.text2786711901802555();
	this.instance_2.setTransform(33.2,-19.9,1,1,0,0,0,3.1,4.4);

	this.instance_3 = new lib.text2786711901802540();
	this.instance_3.setTransform(9.3,-19.9,1,1,0,0,0,3.1,4.4);

	this.instance_4 = new lib.text278671190180265();
	this.instance_4.setTransform(125.9,-19.9,1,1,0,0,0,4,4.4);

	this.instance_5 = new lib.text2786711901802506();
	this.instance_5.setTransform(101.9,-19.9,1,1,0,0,0,4,4.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape.setTransform(139.4,-5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_1.setTransform(134.7,-5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(1,1,0,4).p("AAABHIAAiN");
	this.shape_2.setTransform(129.9,-7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_3.setTransform(125.1,-5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_4.setTransform(120.3,-5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_5.setTransform(115.5,-5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_6.setTransform(110.7,-5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#292929").ss(1,1,0,4).p("AAABHIAAiN");
	this.shape_7.setTransform(105.9,-7.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_8.setTransform(101.2,-5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_9.setTransform(96.4,-5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_10.setTransform(91.6,-5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_11.setTransform(86.8,-5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#292929").ss(1,1,0,4).p("AAABHIAAiN");
	this.shape_12.setTransform(82,-7.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_13.setTransform(77.2,-5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_14.setTransform(72.5,-5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_15.setTransform(67.7,-5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_16.setTransform(62.9,-5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#292929").ss(1,1,0,4).p("AAABHIAAiN");
	this.shape_17.setTransform(58.1,-7.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_18.setTransform(53.3,-5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_19.setTransform(48.5,-5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_20.setTransform(43.7,-5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_21.setTransform(39,-5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#292929").ss(1,1,0,4).p("AAABHIAAiN");
	this.shape_22.setTransform(34.2,-7.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_23.setTransform(137,3.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_24.setTransform(132.3,3.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_25.setTransform(127.5,3.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_26.setTransform(117.9,3.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_27.setTransform(122.7,3.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_28.setTransform(113.1,3.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_29.setTransform(108.3,3.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_30.setTransform(103.6,3.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_31.setTransform(98.8,3.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_32.setTransform(89.2,3.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_33.setTransform(94,3.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_34.setTransform(84.4,3.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_35.setTransform(79.6,3.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_36.setTransform(74.8,3.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_37.setTransform(70.1,3.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_38.setTransform(60.5,3.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_39.setTransform(65.3,3.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_40.setTransform(55.7,3.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_41.setTransform(50.9,3.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_42.setTransform(46.1,3.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_43.setTransform(41.4,3.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_44.setTransform(31.8,3.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_45.setTransform(36.6,3.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_46.setTransform(27,3.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_47.setTransform(22.2,3.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_48.setTransform(17.4,3.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAjIAAhF");
	this.shape_49.setTransform(12.6,3.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_50.setTransform(29.4,-5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_51.setTransform(24.6,-5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_52.setTransform(19.8,-5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#292929").ss(1,1,0,4).p("AAAAvIAAhd");
	this.shape_53.setTransform(15,-5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#292929").ss(1,1,0,4).p("AAABHIAAiN");
	this.shape_54.setTransform(10.3,-7.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#292929").ss(1,1,0,4).p("AsIAAIYRAA");
	this.shape_55.setTransform(76.3,-0.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#292929").ss(3,0,1).p("AMJEbI4OAHIgDpDIYRAAg");
	this.shape_56.setTransform(76.3,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#6B7E6C","#FFF1E7","#6B7E6C"],[0,0.725,1],0,-45.5,0,45.1).s().p("AsIkgIYRAAIAAI8I4OAFg");
	this.shape_57.setTransform(76.3,0);

	this.instance_6 = new lib.Symbol3("synched",0);
	this.instance_6.setTransform(-24.3,-0.2);

	this.addChild(this.instance_6,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-153.9,-28.9,308,58);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuYGWIAAsrITyAAIAAMrgAKREeIAAo8IEIAAIAAI8g");
	mask.setTransform(183.1,11.5);

	// Layer 2
	this.instance = new lib.Symbol40();
	this.instance.setTransform(183.1,26.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:47},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.4,-49.8,378.7,153.1);


(lib.SSS45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SS45();
	this.instance.setTransform(0,2.6,1,0.328,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleY:0.68,y:-5.7},4).to({scaleY:1,y:-26.4},5).to({y:-49.8},5).to({scaleY:0.48,y:-68.4},5).to({scaleY:0.14,y:-74},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-0.4,13.1,4.2);


(lib.SSS40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SS40();
	this.instance.setTransform(0,2.6,1,0.328,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleY:0.68,y:-5.7},4).to({scaleY:1,y:-26.4},5).to({y:-49.8},5).to({scaleY:0.48,y:-68.4},5).to({scaleY:0.14,y:-74},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-0.4,13.1,4.2);


(lib.SSS35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SS35();
	this.instance.setTransform(0,2.6,1,0.328,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleY:0.68,y:-5.7},4).to({scaleY:1,y:-26.4},5).to({y:-49.8},5).to({scaleY:0.48,y:-68.4},5).to({scaleY:0.14,y:-74},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-0.4,13.1,4.2);


(lib.SSS30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SS30();
	this.instance.setTransform(0,2.6,1,0.328,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleY:0.68,y:-5.7},4).to({scaleY:1,y:-26.4},5).to({y:-49.8},5).to({scaleY:0.48,y:-68.4},5).to({scaleY:0.14,y:-74},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-0.4,13.1,4.2);


(lib.SSS25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SS25();
	this.instance.setTransform(0,2.6,1,0.328,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleY:0.68,y:-5.7},4).to({scaleY:1,y:-26.4},5).to({y:-49.8},5).to({scaleY:0.48,y:-68.4},5).to({scaleY:0.14,y:-74},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-0.4,13.1,4.2);


(lib.SSS20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SS20();
	this.instance.setTransform(0,2.6,1,0.328,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleY:0.68,y:-5.7},4).to({scaleY:1,y:-26.4},5).to({y:-49.8},5).to({scaleY:0.48,y:-68.4},5).to({scaleY:0.14,y:-74},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-0.4,13.1,4.2);


(lib.SSS15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SS15();
	this.instance.setTransform(0,2.6,1,0.328,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleY:0.68,y:-5.7},4).to({scaleY:1,y:-26.4},5).to({y:-49.8},5).to({scaleY:0.48,y:-68.4},5).to({scaleY:0.14,y:-74},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-0.4,13.1,4.2);


(lib.SSS10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SS10();
	this.instance.setTransform(0,2.6,1,0.328,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleY:0.68,y:-5.7},4).to({scaleY:1,y:-26.4},5).to({y:-49.8},5).to({scaleY:0.48,y:-68.4},5).to({scaleY:0.14,y:-74},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-0.4,13.1,4.2);


(lib.SSS5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SS5();
	this.instance.setTransform(0,2.6,1,0.328,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleY:0.68,y:-5.7},4).to({scaleY:1,y:-26.4},5).to({y:-49.8},5).to({scaleY:0.48,y:-68.4},5).to({scaleY:0.14,y:-74},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-0.4,10.2,4.2);


(lib.SSS0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SS0();
	this.instance.setTransform(0,2.6,1,0.328,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleY:0.68,y:-5.7},4).to({scaleY:1,y:-26.4},5).to({y:-49.8},5).to({scaleY:0.48,y:-68.4},5).to({scaleY:0.14,y:-74},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-0.4,10.2,4.2);


(lib.Samola = function() {
	this.initialize();

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA1gwIgzAwIgCAAIg0AxADyAAIjyAAIAAAAIjxAA");
	this.shape.setTransform(-3.8,-26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#DEDEDE","#707070"],[0.176,1],0,0,0,0,0,16.9).s().p("ABmAkIjxAAIgUAAQAYgeBegTQBdgWBtAAIg5BFIgCACgABmAkIACgCg");
	this.shape_1.setTransform(-14.1,-30.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#DEDEDE","#707070"],[0.176,1],0,0,0,0,0,14.3).s().p("AhaAOQg9gSAYgeIAVAAIDwAAIABAAIg7BGQhqAAg8gWgABRAMIA1gug");
	this.shape_2.setTransform(-17.3,-23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#DEDEDE","#707070"],[0.176,1],0,0,0,0,0,14.3).s().p("ABqAkIjwAAIACgCIA4hFQBrAAA8AWQA9ATgYAegAiEAiIAzgug");
	this.shape_3.setTransform(9.7,-30.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#DEDEDE","#707070"],[0.176,1],0,0,0,0,0,16.9).s().p("AhlgiIDvAAIAXAAQgZAehdASQheAWhtAAg");
	this.shape_4.setTransform(6.4,-23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AisCUIAAAAIj3hXIAAh5ID3hXIFaAAID2BXIAAB5Ij2BXg");
	this.shape_5.setTransform(-1.3,-25.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ADADAD").s().p("AitBgIAAi/IFbAAIAAC/g");
	this.shape_6.setTransform(-1.2,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("ACug0ID2hXIAADAIj2BXgAisCMIj3hXIAAjAID3BXIAAAAIAADAg");
	this.shape_7.setTransform(-1.3,-5.1);

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACltNQATAAAQAHQARAHAMANQANAMAHARQAHAQAAATIAAXlQAAATgHAQQgHARgNAMQgMANgRAHQgQAHgTAAIlJAAQgmgBgagaQgagagBgmIAA3lQAAgTAHgQQAHgRANgMQAMgNARgHQAQgHATAAg");
	mask.setTransform(0,76.6);

	// Layer 3
	this.instance = new lib.Symbol4();
	this.instance.setTransform(3.6,5.3,1.09,1,0,0,0,3.6,-8.6);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(3.6,16.6,1.09,1,0,0,0,3.6,-8.6);

	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(3.6,27.9,1.09,1,0,0,0,3.6,-8.6);

	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(3.6,39.3,1.09,1,0,0,0,3.6,-8.6);

	this.instance_4 = new lib.Symbol4();
	this.instance_4.setTransform(3.6,50.6,1.09,1,0,0,0,3.6,-8.6);

	this.instance_5 = new lib.Symbol4();
	this.instance_5.setTransform(3.6,61.9,1.09,1,0,0,0,3.6,-8.6);

	this.instance_6 = new lib.Symbol4();
	this.instance_6.setTransform(3.6,73.3,1.09,1,0,0,0,3.6,-8.6);

	this.instance_7 = new lib.Symbol4();
	this.instance_7.setTransform(3.6,84.6,1.09,1,0,0,0,3.6,-8.6);

	this.instance_8 = new lib.Symbol4();
	this.instance_8.setTransform(3.6,95.9,1.09,1,0,0,0,3.6,-8.6);

	this.instance_9 = new lib.Symbol4();
	this.instance_9.setTransform(3.6,107.3,1.09,1,0,0,0,3.6,-8.6);

	this.instance_10 = new lib.Symbol4();
	this.instance_10.setTransform(3.6,118.6,1.09,1,0,0,0,3.6,-8.6);

	this.instance_11 = new lib.Symbol4();
	this.instance_11.setTransform(3.6,129.9,1.09,1,0,0,0,3.6,-8.6);

	this.instance_12 = new lib.Symbol4();
	this.instance_12.setTransform(3.6,141.3,1.09,1,0,0,0,3.6,-8.6);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = mask;

	// Layer 8
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#DEDEDE","#707070"],[0.176,1],-17.9,0,18.1,0).s().p("ABLNOQglgBgogJQhzgXhQhDQgmgggUggIAA2cQAAhbBbAAIFJAAQBbAAAABbIAAXlQAAAMgCALQgKBEhPAAg");
	this.shape_8.setTransform(0,76.6);

	this.addChild(this.shape_8,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.3,-40.2,84.1,201.5);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 17
	this.instance = new lib.Symbol41("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(50));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkvFpIgBrpILfAAIAXMBg");
	mask.setTransform(45.4,12.6);

	// Layer 11
	this.instance_1 = new lib.SSS45("synched",0,false);
	this.instance_1.setTransform(23,46.8);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({startPosition:0,_off:false},0).wait(25));

	// Layer 10
	this.instance_2 = new lib.SSS40("synched",0,false);
	this.instance_2.setTransform(23,46.8);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({startPosition:0,_off:false},0).wait(30));

	// Layer 9
	this.instance_3 = new lib.SSS35("synched",0,false);
	this.instance_3.setTransform(23,46.8);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({startPosition:0,_off:false},0).wait(35));

	// Layer 1
	this.instance_4 = new lib.SSS30("synched",0,false);
	this.instance_4.setTransform(23,46.8);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({startPosition:0,_off:false},0).wait(40));

	// Symbol 38
	this.instance_5 = new lib.SSS25("synched",0,false);
	this.instance_5.setTransform(23,46.8);
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({startPosition:0,_off:false},0).wait(45));

	// Layer 8
	this.instance_6 = new lib.SSS20("synched",0,false);
	this.instance_6.setTransform(23,46.8);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).wait(50));

	// SSS15
	this.instance_7 = new lib.SSS15("synched",5,false);
	this.instance_7.setTransform(23,46.8);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45).to({startPosition:0},0).wait(5));

	// SSS10
	this.instance_8 = new lib.SSS10("synched",10,false);
	this.instance_8.setTransform(23,46.8);

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40).to({startPosition:0},0).wait(10));

	// SSS5
	this.instance_9 = new lib.SSS5("synched",15,false);
	this.instance_9.setTransform(23,46.8);

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(35).to({startPosition:0},0).wait(15));

	// SSS0
	this.instance_10 = new lib.SSS0("synched",20,false);
	this.instance_10.setTransform(23,46.8);

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({startPosition:0},0).wait(20));

	// Symbol 37
	this.instance_11 = new lib.Symbol37("synched",0);
	this.instance_11.setTransform(-10,12.6,1,1,0,0,0,0,35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-29.1,303.3,81.3);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49));

	// Layer 1
	this.instance = new lib.Symbol39("synched",0);
	this.instance.setTransform(-94.6,-9.9,1,1,0,0,0,31.2,1.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4A496B").ss(2,0,1).p("ADXl9IAAL7ImthHIAApsg");
	this.shape.setTransform(-132.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#414249","#DDF0E6","#5A5A6B"],[0,0.663,1],6.5,-61.8,-5.3,61.9).s().p("AjWE3IAApsIGthIIAAL7g");
	this.shape_1.setTransform(-132.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4A496B").ss(2,0,1).p("AFkmJIAYMTIr3gYIAAr7g");
	this.shape_2.setTransform(-72.9,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#414249","#DDF0E6","#5A5A6B"],[0,0.686,1],0,-67.9,0,68.1).s().p("Al7FyIAAr7ILeAAIAZMTg");
	this.shape_3.setTransform(-72.9,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4A496B").ss(1,1,0,4).p("AgLAMIAXgW");
	this.shape_4.setTransform(90.6,39.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#4A496B").ss(2,0,1).p("Ag7juIB3AAIAAHdIh3AAg");
	this.shape_5.setTransform(112.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#414249","#DDF0E6","#5A5A6B"],[0,0.663,1],0,-40.2,0,38.1).s().p("Ag7DvIAAndIB3AAIAAHdg");
	this.shape_6.setTransform(112.2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#4A496B").ss(3,0,1).p("AALmVIAAMrIgVgYIAAr8g");
	this.shape_7.setTransform(-36.1,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#414249","#DDF0E6","#5A5A6B"],[0,0.663,1],-5.8,-54.7,6,56.6).s().p("AgLF+IAAr8IAXgXIAAMrg");
	this.shape_8.setTransform(-36.1,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#4A496B").ss(2,0,1).p("AALl+IAAL8IgWAYIAAsrg");
	this.shape_9.setTransform(93,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#414249","#DDF0E6","#5A5A6B"],[0,0.663,1],-6.2,-54.7,5.6,56.6).s().p("AgKmVIAWAXIAAL8IgWAYg");
	this.shape_10.setTransform(93,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#4A496B").ss(3,0,1).p("Ap4mVITxAAIAAMrIzxAAg");
	this.shape_11.setTransform(28.4,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#414249","#DDF0E6","#5A5A6B"],[0,0.671,1],0,-56.8,0,54.5).s().p("Ap4GWIAAsrITxAAIAAMrg");
	this.shape_12.setTransform(28.4,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#4A496B").ss(2,0,1).p("AAXlNIAAKcIgtAvIAAr7g");
	this.shape_13.setTransform(103.8,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#414249","#DDF0E6","#5A5A6B"],[0,0.663,1],-6.5,-54.4,5.3,56.9).s().p("AgWl9IAtAwIAAKcIgtAvg");
	this.shape_14.setTransform(103.8,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#4A496B").ss(2,0,1).p("AAjl9IAAL7IhGAAIAAr7g");
	this.shape_15.setTransform(97.8,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#414249","#DDF0E6","#5A5A6B"],[0,0.663,1],0,-61.7,0,61.9).s().p("AgiF+IAAr7IBGAAIAAL7g");
	this.shape_16.setTransform(97.8,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#494949").ss(1,1,0,4).p("AAXAXIgtgt");
	this.shape_17.setTransform(151.6,-26.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#494949").ss(2,0,1).p("AAXDvIgtAvIAAo7IAtAvg");
	this.shape_18.setTransform(151.6,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#414249","#DDF0E6","#5A5A6B"],[0,0.663,1],-6.7,-42.6,7.5,35.7).s().p("AgWkdIAtAvIAAHcIgtAxg");
	this.shape_19.setTransform(151.6,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#494949").ss(2,0,1).p("AgWjuIAtgvIAAI7Igtgvg");
	this.shape_20.setTransform(120.5,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#414249","#D4D3E7","#5A5A4A"],[0,0.663,1],5.7,-36.9,-8.5,24.9).s().p("AgWDuIAAncIAtgvIAAI8g");
	this.shape_21.setTransform(120.5,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#494949").ss(3,0,1).p("ACDEeIkFAAIAAo7IEFAAg");
	this.shape_22.setTransform(136.1,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#414249","#DDF0E6","#5A5A6B"],[0,0.749,1],0,-44.4,0,42.1).s().p("AiCEfIAAo8IEFAAIAAI8g");
	this.shape_23.setTransform(136.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.9,-40.6,308,81.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
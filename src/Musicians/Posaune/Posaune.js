(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Posaune_atlas_1", frames: [[126,158,60,104],[188,203,67,35],[279,0,189,120],[0,158,124,110],[387,122,62,125],[0,0,277,156],[188,158,65,43],[279,122,106,151],[387,249,92,30]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Posaune_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Posaune_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Posaune_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Posaune_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Posaune_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Posaune_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Posaune_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Posaune_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Posaune_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Unterarm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(6.65,0.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Unterarm, new cjs.Rectangle(6.7,0.4,30.000000000000004,52), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,33.5,17.5), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").p("AqUCeQCrgXHThiQGwhaBvgfQBfgbADgTQABgMghgMQgcgKgSgBQhmgFmABCQl0BBklBFIgHgcIATgEQGyhdDFgiQD2grDrgQQAygEAsALQA0AMADAXQAEAYgxAeQgsAcgqAIQiqAmi4AnQlqBPnXBaIgGggg");
	this.shape.setTransform(66.2341,19.0479);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCEB23").s().p("AqWCeIABAAQCrgXHThiQGxhaBugfQBggbACgTQABgMgggMQgcgKgTgBQhlgFmBBCQlzBBkmBFIgHgcIAUgEQGyhdDFgiQD1grDrgQQAygEAtALQAzAMAEAXQAEAYgyAeQgsAcgpAIIliBNQlqBPnXBag");
	this.shape_1.setTransform(66.29,19.0063);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,134.6,40), null);


(lib.Oberarm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").p("AhuioQgvAagaAnQgbApAEAqQADArAmAlQAVAVApAZQAfASAsAOQA1AQAzAAQAvABAkALQAWAGAEgFQASgXAEhYQAFhcgbgGQgUgFg4gIQg1gHgagH");
	this.shape.setTransform(26.2934,19.226);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A3286").s().p("ACfCmQgkgLgvgBQgzAAg1gQQgsgOgfgSQgpgZgVgVQgmglgDgrQgEgqAbgpQAagnAvgaICMBjQAaAHA1AHQA4AIAUAFQAbAGgFBcQgEBYgSAXQgCACgGAAQgHAAgLgDg");
	this.shape_1.setTransform(26.2934,19.226);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Oberarm, new cjs.Rectangle(4.5,1.3,43.7,38.300000000000004), null);


(lib.Jacke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").p("AhkhoQggAkAHBPQAIBigVA6QgTA0guA0QgiAnAFAMQADAHAXgGQAOgEArgOQBhgaBQAbQAbAJA3AUQAuAOAVgOQABAAAEgFQAcgnARh/QATiXgghtQgEgNgFh2QgFhqgHABQhuAVhFgEQg8gDg5gXQgLgFAOBsQAPB1gPARg");
	this.shape.setTransform(23.384,34.1889);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373886").s().p("ABuFPIhSgdQhQgbhhAaIg5ASQgXAGgDgHQgFgMAignQAug0ATg0QAVg6gIhiQgHhPAggkQAPgRgPh1QgOhsALAFQA5AXA8ADQBFAEBugVQAHgBAFBqQAFB2AEANQAgBtgTCXQgRB/gcAnIgFAFQgKAHgRAAQgRAAgXgHg");
	this.shape_1.setTransform(23.384,34.1889);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Jacke, new cjs.Rectangle(-2.2,-2.3,50,71.7), null);


(lib.Hand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").p("Ag4BSQAIgTgGgVQgBgEgHgCQgJgDgDgEQgJgKAAgeQAAgcAGgZQACgJAFgHQAHgIAIgBQALgBAOARQAJANACASIACAPQAAAAAFgcQAFgdAIgCQAEgBAEADQADACAKAIQAPALATAEQAPAEAEAGQAGAIgGASQgHAWADARQACALAHARQAFAMgCAIQgGARgfAJ");
	this.shape.setTransform(11.8121,7.1441);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9B33C").s().p("Ag4BSQAIgTgGgVQgBgEgHgCQgJgDgDgEQgJgKAAgeQAAgcAGgZQACgJAFgHQAHgIAIgBQALgBAOARQAJANACASIACAPIAFgcQAFgdAIgCQAEgBAEADIANAKQAPALATAEQAPAEAEAGQAGAIgGASQgHAWADARQACALAHARQAFAMgCAIQgGARgfAJg");
	this.shape_1.setTransform(11.8121,7.1441);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hand, new cjs.Rectangle(1.2,-5,21.3,22.2), null);


(lib.Pos_Schuh_links = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(16.6,8.8,1,1,0,0,0,16.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:16.8,rotation:0.8333,x:16.75,y:9},0).wait(1).to({rotation:1.6667,x:16.8,y:9.15},0).wait(1).to({rotation:2.5,y:9.3},0).wait(1).to({rotation:3.3333,x:16.75,y:9.5},0).wait(1).to({rotation:4.1667,y:9.6},0).wait(1).to({rotation:5,x:16.8,y:9.7},0).wait(1).to({rotation:5.8333,x:16.75,y:9.9},0).wait(1).to({rotation:6.6667,x:16.8,y:10.05},0).wait(1).to({rotation:7.5,x:16.75,y:10.2},0).wait(1).to({rotation:8.3333,y:10.4},0).wait(1).to({rotation:9.1667,x:16.8,y:10.55},0).wait(1).to({rotation:10,x:16.75,y:10.65},0).wait(1).to({rotation:10.8333,x:16.8,y:10.85},0).wait(1).to({rotation:11.6667,x:16.75,y:11},0).wait(1).to({rotation:12.5,x:16.8,y:11.15},0).wait(1).to({rotation:13.3333,x:16.75,y:11.25},0).wait(1).to({rotation:14.1667,x:16.8,y:11.45},0).wait(1).to({rotation:15,y:11.6},0).wait(1).to({rotation:15.8333,x:16.75,y:11.75},0).wait(1).to({rotation:16.6667,x:16.8,y:11.95},0).wait(1).to({rotation:17.5,x:16.75,y:12.1},0).wait(1).to({rotation:18.3333,x:16.8,y:12.25},0).wait(1).to({rotation:19.1667,x:16.75,y:12.35},0).wait(1).to({rotation:20,x:16.8,y:12.55},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-1.5,37.5,28);


(lib.Pos_Bogen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(66.2,19.95,1,1,0,0,0,66.2,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:19,x:67.4,y:19.55},0).wait(1).to({x:68.65,y:19.3},0).wait(1).to({x:69.85,y:19.05},0).wait(1).to({x:71.1,y:18.85},0).wait(1).to({x:72.3,y:18.6},0).wait(1).to({x:73.55,y:18.35},0).wait(1).to({x:74.75,y:18.1},0).wait(1).to({x:76,y:17.8},0).wait(1).to({x:77.2,y:17.55},0).wait(1).to({x:78.45,y:17.3},0).wait(1).to({x:79.65,y:17.05},0).wait(1).to({x:80.9,y:16.8},0).wait(1).to({x:82.1,y:16.55},0).wait(1).to({x:83.35,y:16.3},0).wait(1).to({x:84.55,y:16.05},0).wait(1).to({x:85.8,y:15.75},0).wait(1).to({x:87,y:15.5},0).wait(1).to({x:88.25,y:15.25},0).wait(1).to({x:89.45,y:15},0).wait(1).to({x:90.7,y:14.75},0).wait(1).to({x:91.9,y:14.5},0).wait(1).to({x:93.15,y:14.25},0).wait(1).to({x:94.35,y:14},0).wait(1).to({x:95.6,y:13.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-6.3,163.6,45.9);


// stage content:
(lib.Posaune = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Skelett_11
	this.ikNode_2 = new lib.Unterarm();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(170.05,234.7,0.9992,0.9992,-10.9089,0,0,12.1,49.5);

	this.ikNode_1 = new lib.Oberarm();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(144,210.85,0.9992,0.9992,5.9464,0,0,17,13.5);

	this.ikNode_4 = new lib.Hand();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(178.7,179,0.9992,0.9992,9.085,0,0,12,7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9992,scaleY:0.9992,rotation:9.085,x:178.7,y:179,regX:12}},{t:this.ikNode_1,p:{regX:17,regY:13.5,rotation:5.9464,x:144,y:210.85,scaleX:0.9992,scaleY:0.9992}},{t:this.ikNode_2,p:{rotation:-10.9089,x:170.05,y:234.7,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.5}}]}).to({state:[{t:this.ikNode_4,p:{regY:7.3,scaleX:0.9991,scaleY:0.9991,rotation:9.7598,x:179.65,y:178.8,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.6,rotation:5.0703,x:144.05,y:210.95,scaleX:0.9992,scaleY:0.9992}},{t:this.ikNode_2,p:{rotation:-10.2331,x:170.45,y:234.3,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.5}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9991,scaleY:0.9991,rotation:10.4345,x:180.65,y:178.35,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.6,rotation:4.1924,x:144.1,y:210.95,scaleX:0.9992,scaleY:0.9992}},{t:this.ikNode_2,p:{rotation:-9.5583,x:170.75,y:233.9,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.5}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9992,scaleY:0.9992,rotation:11.108,x:181.65,y:178.05,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.6,rotation:3.3155,x:144.05,y:210.9,scaleX:0.9992,scaleY:0.9992}},{t:this.ikNode_2,p:{rotation:-8.8836,x:171.1,y:233.5,scaleX:0.9991,scaleY:0.9991,regX:12.1,regY:49.5}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9992,scaleY:0.9992,rotation:11.7844,x:182.7,y:177.8,regX:12}},{t:this.ikNode_1,p:{regX:17,regY:13.6,rotation:2.4376,x:143.95,y:210.95,scaleX:0.9992,scaleY:0.9992}},{t:this.ikNode_2,p:{rotation:-8.2083,x:171.45,y:233.05,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.5}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9992,scaleY:0.9992,rotation:12.4591,x:183.6,y:177.5,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.6,rotation:1.5603,x:144.15,y:210.9,scaleX:0.9992,scaleY:0.9992}},{t:this.ikNode_2,p:{rotation:-7.5335,x:171.85,y:232.65,scaleX:0.9992,scaleY:0.9992,regX:12.2,regY:49.5}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9992,scaleY:0.9992,rotation:13.1347,x:184.65,y:177.15,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.6,rotation:0.6843,x:144.05,y:210.9,scaleX:0.9992,scaleY:0.9992}},{t:this.ikNode_2,p:{rotation:-6.858,x:172.1,y:232.2,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.5}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9991,scaleY:0.9991,rotation:13.809,x:185.65,y:176.9,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.6,rotation:-0.189,x:144.1,y:210.9,scaleX:0.9992,scaleY:0.9992}},{t:this.ikNode_2,p:{rotation:-6.1824,x:172.45,y:231.8,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.5}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9992,scaleY:0.9992,rotation:14.4838,x:186.5,y:176.6,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.6,rotation:-1.0667,x:144.1,y:210.9,scaleX:0.9992,scaleY:0.9992}},{t:this.ikNode_2,p:{rotation:-5.5078,x:172.7,y:231.5,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.6}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.3,scaleX:0.9991,scaleY:0.9991,rotation:15.1594,x:187.5,y:176.5,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.6,rotation:-1.9446,x:144.1,y:210.85,scaleX:0.9992,scaleY:0.9992}},{t:this.ikNode_2,p:{rotation:-4.8322,x:173.05,y:231,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.6}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9991,scaleY:0.9991,rotation:15.833,x:188.45,y:176.1,regX:12}},{t:this.ikNode_1,p:{regX:17,regY:13.5,rotation:-2.8213,x:143.95,y:210.8,scaleX:0.9992,scaleY:0.9992}},{t:this.ikNode_2,p:{rotation:-4.1572,x:173.35,y:230.4,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.5}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9991,scaleY:0.9991,rotation:16.5087,x:189.4,y:175.8,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.6,rotation:-3.6977,x:144.1,y:210.85,scaleX:0.9992,scaleY:0.9992}},{t:this.ikNode_2,p:{rotation:-3.482,x:173.55,y:229.9,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.5}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9992,scaleY:0.9992,rotation:17.1844,x:190.3,y:175.5,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.6,rotation:-4.5742,x:144.15,y:210.85,scaleX:0.9991,scaleY:0.9991}},{t:this.ikNode_2,p:{rotation:-2.8072,x:173.95,y:229.45,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.5}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9992,scaleY:0.9992,rotation:17.8599,x:191.2,y:175.3,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.6,rotation:-5.4534,x:144.1,y:210.9,scaleX:0.9992,scaleY:0.9992}},{t:this.ikNode_2,p:{rotation:-2.1319,x:174.3,y:229.15,scaleX:0.9992,scaleY:0.9992,regX:12.2,regY:49.6}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9991,scaleY:0.9991,rotation:18.5343,x:192.05,y:174.95,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.6,rotation:-6.3296,x:144.1,y:210.8,scaleX:0.9991,scaleY:0.9991}},{t:this.ikNode_2,p:{rotation:-1.457,x:174.5,y:228.55,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.5}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.3,scaleX:0.9992,scaleY:0.9992,rotation:19.2092,x:192.95,y:174.85,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.6,rotation:-7.2064,x:144.05,y:210.9,scaleX:0.9991,scaleY:0.9991}},{t:this.ikNode_2,p:{rotation:-0.7823,x:174.8,y:228.1,scaleX:0.9992,scaleY:0.9992,regX:12.2,regY:49.5}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9992,scaleY:0.9992,rotation:19.8847,x:194,y:174.55,regX:12.1}},{t:this.ikNode_1,p:{regX:17.1,regY:13.6,rotation:-8.0839,x:144.05,y:210.8,scaleX:0.9991,scaleY:0.9991}},{t:this.ikNode_2,p:{rotation:-0.105,x:174.95,y:227.6,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.5}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9991,scaleY:0.9991,rotation:20.5594,x:194.8,y:174.25,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.6,rotation:-8.9608,x:144.1,y:210.8,scaleX:0.9991,scaleY:0.9991}},{t:this.ikNode_2,p:{rotation:0.5644,x:175.2,y:227.05,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.5}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9991,scaleY:0.9991,rotation:21.2341,x:195.7,y:174.05,regX:12.1}},{t:this.ikNode_1,p:{regX:17.1,regY:13.6,rotation:-9.8389,x:144.1,y:210.9,scaleX:0.9991,scaleY:0.9991}},{t:this.ikNode_2,p:{rotation:1.2391,x:175.6,y:226.6,scaleX:0.9992,scaleY:0.9992,regX:12.2,regY:49.5}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9991,scaleY:0.9991,rotation:21.9098,x:196.5,y:173.7,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.6,rotation:-10.7157,x:144.15,y:210.75,scaleX:0.9991,scaleY:0.9991}},{t:this.ikNode_2,p:{rotation:1.9148,x:175.75,y:226.15,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.5}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9991,scaleY:0.9991,rotation:22.5856,x:197.35,y:173.55,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.6,rotation:-11.5922,x:144.15,y:210.75,scaleX:0.9992,scaleY:0.9992}},{t:this.ikNode_2,p:{rotation:2.5891,x:175.9,y:225.6,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.5}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9991,scaleY:0.9991,rotation:23.2601,x:198.1,y:173.3,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.5,rotation:-12.4701,x:144.1,y:210.65,scaleX:0.9992,scaleY:0.9992}},{t:this.ikNode_2,p:{rotation:3.2646,x:176.15,y:225.3,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.6}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9991,scaleY:0.9991,rotation:23.9344,x:199.05,y:173.1,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.5,rotation:-13.3461,x:144.05,y:210.65,scaleX:0.9992,scaleY:0.9992}},{t:this.ikNode_2,p:{rotation:3.9397,x:176.35,y:224.75,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.6}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9991,scaleY:0.9991,rotation:24.61,x:199.85,y:172.8,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.5,rotation:-14.2253,x:144.05,y:210.7,scaleX:0.9992,scaleY:0.9992}},{t:this.ikNode_2,p:{rotation:4.6145,x:176.55,y:224.15,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.5}}]},1).to({state:[{t:this.ikNode_4,p:{regY:7.2,scaleX:0.9991,scaleY:0.9991,rotation:25.2845,x:200.6,y:172.6,regX:12}},{t:this.ikNode_1,p:{regX:17.1,regY:13.6,rotation:-15.1023,x:144.1,y:210.75,scaleX:0.9991,scaleY:0.9991}},{t:this.ikNode_2,p:{rotation:5.2898,x:176.8,y:223.6,scaleX:0.9992,scaleY:0.9992,regX:12.1,regY:49.5}}]},1).wait(1));

	// Arm_rechts
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(140.7,196.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// Oberkörper
	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(148.35,184.5,0.5,0.5);

	this.ikNode_6 = new lib.Jacke();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.setTransform(145.2,228.7,1,1,0,0,0,22.5,33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_6},{t:this.instance_1}]}).wait(25));

	// Schuh_links
	this.instance_2 = new lib.Pos_Schuh_links();
	this.instance_2.setTransform(209.8,307.05,1,1,0,0,0,16.6,8.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").p("AAOCSQg9gwgUgxQgUgxBCAgQAMAGAJAFQAuAYAKAIQANAJADgCQAGgEghg8QgPgagThgQgRhYgEgDQgHgEgKAGQgKAFgEAHQgCAFAOA8QATBSAJA8QABAJAAAIQAGAnAGA0QABAHABAFQAFAgAEAHQAJAOAXgCQAXgCg/gwQgBAAAAgBg");
	this.shape.setTransform(171.7385,216.1773);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#194229").s().p("AAIC5QgEgHgEggIAAABQA+AwgWACIgEAAQgUAAgIgMgAApBLQgKgIgtgYIgDgRQgJg8gThSQgOg8ADgFQAEgHAJgFQALgGAGAEQAFADASBYQASBgAPAaQAhA8gHAEIgBABQgDAAgLgIg");
	this.shape_1.setTransform(173.2595,216.1773);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2}]}).wait(25));

	// Schuh_rechts
	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(106.2,308.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25));

	// Hose
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").p("AkhilQg1AIglAgQgjAegMAqQgJAdAQArQATA1AAAnQAAA1ggBAQgcA2AIAUQAIAUA/AcQA/AbAQgLQAdgVANgyQAKgkgBgmQgBgmAEgQQAThIBLg3QAlgdAwgLQAdgIBBgIQBLgIA+AHQBIAJAHAZQACAIgHASQgIASAFAOQAEANAQANQAPALABALQABAMgQARQgPAQACAJQACAIAQAIQASAJAHANQAFAIABALQAAAKADAFQAFAKA/gPQBCgPAQgXQAQgVgFghQgDgTgQgxQgIgbgPgZQgOgZgHgVQgLglADgpQAEgxgDgTQgGgogggoQgVgag6g2QgZgcgKgKQgQgRgEAKQghBHh8AwQhvAqjpAng");
	this.shape_2.setTransform(165.3806,276.6619);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B2B2A").s().p("Al9FeQg/gcgIgUQgIgUAcg2QAghAAAg1QAAgngTg1QgQgrAJgdQAMgqAjgeQAlggA1gIQDpgnBvgqQB8gwAhhHQAEgKAQARIAjAmQA6A2AVAaQAgAoAGAoQADATgEAxQgDApALAlQAHAVAOAZQAPAZAIAbQAQAxADATQAFAhgQAVQgQAXhCAPQg/APgFgKQgDgFAAgKQgBgLgFgIQgHgNgSgJQgQgIgCgIQgCgJAPgQQAQgRgBgMQgBgLgPgLQgQgNgEgNQgFgOAIgSQAHgSgCgIQgHgZhIgJQg+gHhLAIQhBAIgdAIQgwALglAdQhLA3gTBIQgEAQABAmQABAmgKAkQgNAygdAVQgFAEgIAAQgVAAgtgUg");
	this.shape_3.setTransform(165.3806,276.6619);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(25));

	// Posaune
	this.instance_4 = new lib.Pos_Bogen();
	this.instance_4.setTransform(232.7,158.6,1,1,0,0,0,66.2,19.1);

	this.instance_5 = new lib.CachedBmp_4();
	this.instance_5.setTransform(92.6,117.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(25));

	// Arm_links
	this.instance_6 = new lib.CachedBmp_5();
	this.instance_6.setTransform(170.3,156,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25));

	// Weste
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2B2B2A").p("Ah2kbQgcAEABA2QAAAlASBYQAWBxAFAlQAMBVgLAwQgHAggUAxQgMAcAJAMQANATAnADQAlADAsgNQBugeAZhGQADgIACgzQADhEgBgeQgCgwgKgoQgQhAgxhzQg5iDgRAQQgYAUggAJQgTAGgmAFg");
	this.shape_4.setTransform(175.2138,226.042);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A693C").s().p("AhNFGQgngDgNgTQgJgMAMgcQAUgxAHggQALgwgMhVQgFglgWhxQgShYAAglQgBg2AcgEQAmgFATgGQAggJAYgUQARgQA5CDQAxBzAQBAQAKAoACAwQABAegDBEQgCAzgDAIQgZBGhuAeQgjAKgfAAIgPAAg");
	this.shape_5.setTransform(175.2138,226.042);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(25));

	// Kopf
	this.instance_7 = new lib.CachedBmp_6();
	this.instance_7.setTransform(114.7,143.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25));

	// Hut
	this.instance_8 = new lib.CachedBmp_7();
	this.instance_8.setTransform(91.4,122,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(366.4,317.4,-66.79999999999995,12.200000000000045);
// library properties:
lib.properties = {
	id: '5B27DAF94321A747AAA243DBD6008DE8',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Posaune_atlas_1.png", id:"Posaune_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5B27DAF94321A747AAA243DBD6008DE8'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
(function (cjs, an) {
    var p; // shortcut to reference prototypes
    var lib={};var ss={};var img={};
    lib.ssMetadata = [
            {name:"PeaShooterSingleHTML5Canvas_atlas_", frames: [[107,33,18,14],[72,51,44,22],[110,94,15,12],[69,106,12,10],[0,67,67,40],[69,75,22,29],[107,0,15,31],[0,0,70,65],[72,0,33,49],[93,94,15,19],[93,75,26,17]]}
    ];
    // symbols:
    (lib.anim_sprout = function() {
        this.initialize(ss["PeaShooterSingleHTML5Canvas_atlas_"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    (lib.PeaShooter_backleaf = function() {
        this.initialize(ss["PeaShooterSingleHTML5Canvas_atlas_"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    (lib.PeaShooter_backleaf_lefttip = function() {
        this.initialize(ss["PeaShooterSingleHTML5Canvas_atlas_"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    (lib.PeaShooter_backleaf_righttip = function() {
        this.initialize(ss["PeaShooterSingleHTML5Canvas_atlas_"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    (lib.PeaShooter_frontleaf = function() {
        this.initialize(ss["PeaShooterSingleHTML5Canvas_atlas_"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    (lib.PeaShooter_frontleaf_lefttip = function() {
        this.initialize(ss["PeaShooterSingleHTML5Canvas_atlas_"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    (lib.PeaShooter_frontleaf_righttip = function() {
        this.initialize(ss["PeaShooterSingleHTML5Canvas_atlas_"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    (lib.PeaShooter_head = function() {
        this.initialize(ss["PeaShooterSingleHTML5Canvas_atlas_"]);
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    (lib.PeaShooter_mouth = function() {
        this.initialize(ss["PeaShooterSingleHTML5Canvas_atlas_"]);
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();
    (lib.PeaShooter_stalk_bottom = function() {
        this.initialize(ss["PeaShooterSingleHTML5Canvas_atlas_"]);
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();
    (lib.PeaShooter_stalk_top = function() {
        this.initialize(ss["PeaShooterSingleHTML5Canvas_atlas_"]);
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();
    // helper functions:
    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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
    (lib.Tween3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer_1
        this.instance = new lib.PeaShooter_backleaf();
        this.instance.parent = this;
        this.instance.setTransform(-11.35,-5.8,0.5554,0.5554);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-11.3,-5.8,24.4,12.2);
    (lib.Peashooter_stalk_top = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer_1
        this.instance = new lib.PeaShooter_stalk_top();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,26,17);
    (lib.PeaShooter_stalk_bottom_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer_1
        this.instance = new lib.PeaShooter_stalk_bottom();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,15,19);
    (lib.PeaShooter_mouth_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer_1
        this.instance = new lib.PeaShooter_mouth();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,33,49);
    (lib.PeaShooter_head_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer_1
        this.instance = new lib.PeaShooter_head();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,70,65);
    (lib.PeaShooter_frontleaf_right_tip = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer_1
        this.instance = new lib.PeaShooter_frontleaf_righttip();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,15,31);
    (lib.PeaShooter_frontleaf_left_tip = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer_1
        this.instance = new lib.PeaShooter_frontleaf_lefttip();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,22,29);
    (lib.PeaShooter_frontleaf_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer_1
        this.instance = new lib.PeaShooter_frontleaf();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,67,40);
    (lib.PeaShooter_backleaf_righttip_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer_1
        this.instance = new lib.PeaShooter_backleaf_righttip();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,12,10);
    (lib.PeaShooter_backleaf_lefttip_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer_1
        this.instance = new lib.PeaShooter_backleaf_lefttip();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,15,12);
    (lib.locator = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,0,0);
    (lib.anim_sprout_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // Layer_1
        this.instance = new lib.anim_sprout();
        this.instance.parent = this;
        this.instance.setTransform(0,0,0.8,0.8);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.anim_sprout_1, new cjs.Rectangle(0,0,14.4,11.2), null);
    // stage content:
    (lib.PeaShooterSingleHTML5Canvas = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // idle_mouth
        this.instance = new lib.PeaShooter_mouth_1("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(61.8,30.1,0.555,0.5,0,0,0,16.4,24.6);
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:24.7,scaleX:0.5639,scaleY:0.5165,skewY:9.9341,x:62.35,y:30.3},1).to({regY:24.5,scaleX:0.5554,scaleY:0.5669,skewY:0,x:63.25,y:26.65},2).to({regY:24.6,scaleY:0.585,x:64.55,y:25.95},3).to({scaleX:0.5583,scaleY:0.5554,skewY:-5.8292,x:67.8,y:23.9},3).to({scaleX:0.5471,scaleY:0.4995,skewY:0,x:71.8,y:27.7},3).to({scaleX:0.5568,scaleY:0.5182,skewY:9.0581,x:69.7,y:27.9},1).to({scaleX:0.5554,scaleY:0.5554,skewY:0,x:68.1,y:24.5},2).to({scaleY:0.585,x:64.95,y:22.15},3).to({regY:24.5,scaleY:0.5669,x:62.95,y:22.9},3).to({regY:24.6,scaleX:0.555,scaleY:0.5,x:61.8,y:30.1},3).wait(1));
        // anim_face
        this.instance_1 = new lib.PeaShooter_head_1("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(38.8,32.6,0.555,0.5,0,0,0,34.9,29.6);
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:35,scaleX:0.5554,scaleY:0.5669,x:40.3,y:29.6},3).to({regX:34.9,regY:29.8,scaleX:0.555,scaleY:0.575,x:41.55,y:29},3).to({regX:35,regY:29.6,scaleX:0.5554,scaleY:0.5554,x:44.85,y:27.55},3).to({regY:29.7,scaleY:0.4995,x:48.9,y:30.2},3).to({regY:29.6,scaleY:0.5554,x:45.15,y:27.35},3).to({regY:29.7,scaleY:0.585,x:42,y:25.15},3).to({regY:29.6,scaleY:0.5669,x:40,y:25.85},3).to({regX:34.9,scaleX:0.555,scaleY:0.5,x:38.8,y:32.6},3).wait(1));
        // anim_sprout
        this.instance_2 = new lib.anim_sprout_1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(16.35,31.35,0.9991,0.9991,-14.872,0,0,7.2,5.7);
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.0109,rotation:0,skewX:-14.872,skewY:-23.6181,y:31.8},1).to({scaleX:0.9993,scaleY:0.9993,rotation:-13.3016,skewX:0,skewY:0,x:17.55,y:29.05},2).to({scaleX:0.999,scaleY:0.999,rotation:-8.494,x:18.55,y:28.3},3).to({scaleX:0.9974,scaleY:0.9974,rotation:1.5324,x:21.5,y:24.65},3).to({regX:7.4,scaleX:0.9968,scaleY:0.9968,rotation:-8.983,x:25.85,y:28.55},3).to({scaleX:0.9962,scaleY:0.9962,rotation:-19.0261,x:23.7,y:28.75},1).to({scaleX:0.9958,scaleY:0.9958,rotation:-10.9731,x:22.25,y:26.35},2).to({regX:7.2,regY:5.8,scaleX:0.9263,scaleY:0.9955,rotation:-16.7333,x:19.3,y:24.8},3).to({regY:5.7,scaleX:0.9993,scaleY:0.9993,rotation:-13.3016,x:17.25,y:25.45},3).to({scaleX:0.9991,scaleY:0.9991,rotation:-14.872,x:16.35,y:31.35},3).wait(1));
        // frontleaf_tip_left
        this.instance_3 = new lib.PeaShooter_frontleaf_left_tip("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(25.25,69.1,0.5554,0.5554,0,0,0,10.5,13.5);
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:10.7,regY:13.7,scaleX:0.628,scaleY:0.5449,rotation:8.2769,x:25.2,y:68.75},6).to({regX:10.6,scaleX:0.5796,scaleY:0.5817,rotation:0,skewX:-6.028,skewY:-5.7568,x:25.1,y:69.8},6).to({regX:10.7,scaleX:0.628,scaleY:0.5449,rotation:8.2769,skewX:0,skewY:0,x:25.2,y:68.95},6).to({regX:10.5,regY:13.5,scaleX:0.5554,scaleY:0.5554,rotation:0,x:25.25,y:69.1},6).wait(1));
        // frontleaf_right_tip
        this.instance_4 = new lib.PeaShooter_frontleaf_right_tip("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(59.9,63.85,0.5554,0.5554,0,0,0,6.5,14.1);
        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.7293,scaleY:0.5451,rotation:-9.2772,x:61.5,y:63.3},6).to({regY:14,scaleX:0.5995,scaleY:0.5354,rotation:0,x:61.75,y:64.65},6).to({regY:14.1,scaleX:0.7293,scaleY:0.5451,rotation:-9.2772,x:61.5,y:63.5},6).to({scaleX:0.5554,scaleY:0.5554,rotation:0,x:59.9,y:63.85},6).wait(1));
        // frontleaf
        this.instance_5 = new lib.PeaShooter_frontleaf_1("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(41.3,64.95,0.5554,0.5554,0,0,0,33.4,19);
        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.5995,scaleY:0.4874,x:41.65,y:65.75},12).to({scaleX:0.5554,scaleY:0.5554,x:41.3,y:64.95},12).wait(1));
        // stalk_top
        this.instance_6 = new lib.Peashooter_stalk_top("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(38.3,49.95,0.5554,0.5554,0,0,0,13.1,8.4);
        this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:12.9,scaleX:0.5574,scaleY:0.7869,skewX:3.5084,skewY:5.749,x:39.3,y:45.85},3).to({regY:8.5,scaleX:0.5663,scaleY:0.8577,skewX:6.5484,skewY:10.9763,x:40.6,y:45.25},3).to({regX:13.1,regY:8.7,scaleX:0.5605,scaleY:0.8148,skewX:13.3037,skewY:17.7947,x:43.35,y:46.25},3).to({regX:12.8,regY:8.5,scaleX:0.5324,scaleY:0.7846,skewX:30.8476,skewY:23.4543,x:46.8,y:47.45},3).to({regX:13,scaleX:0.5757,scaleY:0.8147,skewX:15.1065,skewY:19.5944,x:43.6,y:46.1},3).to({regX:12.9,scaleX:0.5663,scaleY:0.8577,skewX:6.5484,skewY:10.9763,x:40.6,y:45.25},3).to({regY:8.4,scaleX:0.5574,scaleY:0.7869,skewX:3.5084,skewY:5.749,x:39.3,y:45.85},3).to({regX:13.1,scaleX:0.5554,scaleY:0.5554,skewX:0,skewY:0,x:38.3,y:49.95},3).wait(1));
        // stalk_bottom
        this.instance_7 = new lib.PeaShooter_stalk_bottom_1("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(40.25,58,0.5554,0.5554,0,0,0,7.5,9.7);
        this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:7.6,scaleX:0.5605,scaleY:0.7549,skewX:8.2818,skewY:12.7105,x:41.35,y:57.15},6).to({regY:9.4,scaleX:0.5674,scaleY:0.6287,skewX:24.1278,skewY:37.4585,x:43.4,y:58.35},6).to({regX:7.7,regY:9.7,scaleX:0.5605,scaleY:0.6654,skewX:8.2823,skewY:12.7105,x:41.25,y:57.15},6).to({regX:7.5,scaleX:0.5554,scaleY:0.5554,skewX:0,skewY:0,x:40.25,y:58},6).wait(1));
        // backleaf_right_tip
        this.instance_8 = new lib.PeaShooter_backleaf_righttip_1("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(50.1,55.4,0.5554,0.5554,0,0,0,5.5,4.6);
        this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:5.4,regY:4.7,scaleX:0.6673,scaleY:0.5154,rotation:1.5354,x:51.25,y:56.65},5).to({regX:5.5,regY:4.6,scaleX:0.6326,scaleY:0.4768,rotation:8.7817,x:51.85,y:58.4},5).to({regX:5.4,regY:4.7,scaleX:0.6673,scaleY:0.5154,rotation:1.2419,x:51.25,y:56.65},7).to({regX:5.5,regY:4.6,scaleX:0.5554,scaleY:0.5554,rotation:0,x:50.2,y:55.4},7).wait(1));
        // backleaf_left_tip
        this.instance_9 = new lib.PeaShooter_backleaf_lefttip_1("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(28.55,56.95,0.5554,0.5554,0,0,0,6.5,5.5);
        this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:0.6039,scaleY:0.5154,rotation:2.7388,x:28.7,y:57.75},5).to({regX:6.4,scaleX:0.6646,scaleY:0.5149,rotation:-8.5712,x:28.45,y:59.7},5).to({regX:6.5,scaleX:0.6039,scaleY:0.5154,rotation:2.7388,x:28.7,y:57.75},7).to({scaleX:0.5554,scaleY:0.5554,rotation:0,x:28.55,y:56.95},7).wait(1));
        // backleaf
        this.instance_10 = new lib.Tween3("synched",0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(39,58.7);
        this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1.0991,scaleY:0.7729,x:39.9,y:60.35},10).to({scaleX:1,scaleY:1,x:39,y:58.7},14).wait(1));
        // anim_full_idle
        this.instance_11 = new lib.locator();
        this.instance_11.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(25));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(48,47.8,32.900000000000006,31.5);
    // library properties:
    lib.properties = {
        id: 'F3C59C91C52E1841BAF74512D34DBC30',
        width: 80,
        height: 80,
        fps: 12,
        color: "#535353",
        opacity: 0.00,
        manifest: [
            {src:"images/PeaShooterSingleHTML5Canvas_atlas_.png", id:"PeaShooterSingleHTML5Canvas_atlas_"}
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
    an.compositions['F3C59C91C52E1841BAF74512D34DBC30'] = {
        getStage: function() { return exportRoot.getStage(); },
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
    })(createjs = createjs||{}, AdobeAn = AdobeAn||{});
    var createjs, AdobeAn;
















    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("F3C59C91C52E1841BAF74512D34DBC30");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.PeaShooterSingleHTML5Canvas();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
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
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	makeResponsive(false,'both',false,1);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
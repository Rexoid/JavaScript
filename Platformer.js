(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

function Check_Active(y) {
	var lvl = y.lvl[0].Active;
	alert("lvl is equal to "+lvl);
	for(var i=0; i<y.length; i++) {
		var check_active = y[i].Active;
		if(check_active == "True") {
			var Selected_Level = y[i].layout;
			Generate_Level(Selected_Level);
		}
	}
}

function Generate_Level(Selected_Level_Layout) {
	var layout = Selected_Level_Layout;
	for(var i=0; i<layout.length; i++) {
		var object = layout.slice(i,i);
		if(object == "2") {
			var block_object = document.createElement("img");
			block_object.id = "i";
			block_object.className = "Block";
			var canvas = document.getElementById("Level");
			canvas.appendChild(block_object);
			block_object.style.width = 50;
			block_object.style.height = 50;
			block_object.style.position = "absolute";
			block_object.style.left = (i*50)+"px";
			if(i<21) { block_object.style.top = 0+"px"; }
			if(i<41) { block_object.style.top = 50+"px"; }
			if(i<61) { block_object.style.top = 100+"px"; }
			if(i<81) { block_object.style.top = 150+"px"; }
			if(i<101) { block_object.style.top = 200+"px"; }
			if(i<121) { block_object.style.top = 250+"px"; }
			if(i<141) { block_object.style.top = 300+"px"; }
			if(i<161) { block_object.style.top = 350+"px"; }
			if(i<181) { block_object.style.top = 400+"px"; }
			if(i<201) { block_object.style.top = 450+"px"; }
			if(i<221) { block_object.style.top = 500+"px"; }
			if(i<241) { block_object.style.top = 550+"px"; }
			if(i<261) { block_object.style.top = 600+"px"; }
			if(i<281) { block_object.style.top = 650+"px"; }
			if(i<301) { block_object.style.top = 700+"px"; }
			if(i<321) { block_object.style.top = 750+"px"; }
			if(i<341) { block_object.style.top = 800+"px"; }
			if(i<361) { block_object.style.top = 850+"px"; }
			if(i<381) { block_object.style.top = 900+"px"; }
			if(i<401) { block_object.style.top = 950+"px"; }
		}
	}
}

var Level_Layout_JSON = "https://rawgit.com/Rexoid/JavaScript/master/Level_Layout.json";
var Level_Assets_JSON = "https://rawgit.com/Rexoid/JavaScript/master/Level_Assets.json";
var request_Layout = new XMLHttpRequest();
var request_Assets = new XMLHttpRequest();
request_Layout.open("GET", Level_Layout_JSON);
request_Layout.responseType = "text";
request_Layout.send();
request_Layout.onload = function() {
	Check_Active(request_Layout.response)
}
request_Assets.open("GET", Level_Assets_JSON);
request_Assets.responseType = "text";
request_Assets.send();
request_Assets.onload = function() {
	var level_assets = request_Assets.response;
}

(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

function Check_Active(y) {
	alert(y);
	alert(y.levels[0]);
	for(var i=0; i<y.levels.length; i++) {
		var check_active = y.levels[i].Active;
		alert(check_active);
		if(check_active == "True") {
			var Selected_Level = y.levels[i].layout;
			alert(Selected_Level);
			Generate_Level(Selected_Level);
		}
	}
}

function Generate_Level(layout) {
	for(var g=0; g<layout.length; g++) {
		var target = layout.substr(g,1);
		var parentDiv = document.getElementById("Level");
		if(target=="2") {
			var object = document.createElement("canvas");
			object.setAttribute("class","Block_Object");
			object.setAttribute("id",toString(g));
			object.setAttribute("width","50");
			object.setAttribute("height","50");
			object.style.position = "absolute";
			parentDiv.appendChild(object);
			if(g==0  ) { object.style.top = 0  +"px"; object.style.left = 0  +"px"; }
			if(g==1  ) { object.style.top = 0  +"px"; object.style.left = 50 +"px"; }
			if(g==2  ) { object.style.top = 0  +"px"; object.style.left = 100+"px"; }
			if(g==3  ) { object.style.top = 0  +"px"; object.style.left = 150+"px"; }
			if(g==4  ) { object.style.top = 0  +"px"; object.style.left = 200+"px"; }
			if(g==5  ) { object.style.top = 0  +"px"; object.style.left = 250+"px"; }
			if(g==6  ) { object.style.top = 0  +"px"; object.style.left = 300+"px"; }
			if(g==7  ) { object.style.top = 0  +"px"; object.style.left = 350+"px"; }
			if(g==8  ) { object.style.top = 0  +"px"; object.style.left = 400+"px"; }
			if(g==9  ) { object.style.top = 0  +"px"; object.style.left = 450+"px"; }
			if(g==10 ) { object.style.top = 0  +"px"; object.style.left = 500+"px"; }
			if(g==11 ) { object.style.top = 0  +"px"; object.style.left = 550+"px"; }
			if(g==12 ) { object.style.top = 0  +"px"; object.style.left = 600+"px"; }
			if(g==13 ) { object.style.top = 0  +"px"; object.style.left = 650+"px"; }
			if(g==14 ) { object.style.top = 0  +"px"; object.style.left = 700+"px"; }
			if(g==15 ) { object.style.top = 0  +"px"; object.style.left = 750+"px"; }
			if(g==16 ) { object.style.top = 0  +"px"; object.style.left = 800+"px"; }
			if(g==17 ) { object.style.top = 0  +"px"; object.style.left = 850+"px"; }
			if(g==18 ) { object.style.top = 0  +"px"; object.style.left = 900+"px"; }
			if(g==19 ) { object.style.top = 0  +"px"; object.style.left = 950+"px"; }
			if(g==20 ) { object.style.top = 50 +"px"; object.style.left = 0  +"px"; }
			if(g==21 ) { object.style.top = 50 +"px"; object.style.left = 50 +"px"; }
			if(g==22 ) { object.style.top = 50 +"px"; object.style.left = 100+"px"; }
			if(g==23 ) { object.style.top = 50 +"px"; object.style.left = 150+"px"; }
			if(g==24 ) { object.style.top = 50 +"px"; object.style.left = 200+"px"; }
			if(g==25 ) { object.style.top = 50 +"px"; object.style.left = 250+"px"; }
			if(g==26 ) { object.style.top = 50 +"px"; object.style.left = 300+"px"; }
			if(g==27 ) { object.style.top = 50 +"px"; object.style.left = 350+"px"; }
			if(g==28 ) { object.style.top = 50 +"px"; object.style.left = 400+"px"; }
			if(g==29 ) { object.style.top = 50 +"px"; object.style.left = 450+"px"; }
			if(g==30 ) { object.style.top = 50 +"px"; object.style.left = 500+"px"; }
			if(g==31 ) { object.style.top = 50 +"px"; object.style.left = 550+"px"; }
			if(g==32 ) { object.style.top = 50 +"px"; object.style.left = 600+"px"; }
			if(g==33 ) { object.style.top = 50 +"px"; object.style.left = 650+"px"; }
			if(g==34 ) { object.style.top = 50 +"px"; object.style.left = 700+"px"; }
			if(g==35 ) { object.style.top = 50 +"px"; object.style.left = 750+"px"; }
			if(g==36 ) { object.style.top = 50 +"px"; object.style.left = 800+"px"; }
			if(g==37 ) { object.style.top = 50 +"px"; object.style.left = 850+"px"; }
			if(g==38 ) { object.style.top = 50 +"px"; object.style.left = 900+"px"; }
			if(g==39 ) { object.style.top = 50 +"px"; object.style.left = 950+"px"; }
			if(g==40 ) { object.style.top = 100+"px"; object.style.left = 0  +"px"; }
			if(g==41 ) { object.style.top = 100+"px"; object.style.left = 50 +"px"; }
			if(g==42 ) { object.style.top = 100+"px"; object.style.left = 100+"px"; }
			if(g==43 ) { object.style.top = 100+"px"; object.style.left = 150+"px"; }
			if(g==44 ) { object.style.top = 100+"px"; object.style.left = 200+"px"; }
			if(g==45 ) { object.style.top = 100+"px"; object.style.left = 250+"px"; }
			if(g==46 ) { object.style.top = 100+"px"; object.style.left = 300+"px"; }
			if(g==47 ) { object.style.top = 100+"px"; object.style.left = 350+"px"; }
			if(g==48 ) { object.style.top = 100+"px"; object.style.left = 400+"px"; }
			if(g==49 ) { object.style.top = 100+"px"; object.style.left = 450+"px"; }
			if(g==50 ) { object.style.top = 100+"px"; object.style.left = 500+"px"; }
			if(g==51 ) { object.style.top = 100+"px"; object.style.left = 550+"px"; }
			if(g==52 ) { object.style.top = 100+"px"; object.style.left = 600+"px"; }
			if(g==53 ) { object.style.top = 100+"px"; object.style.left = 650+"px"; }
			if(g==54 ) { object.style.top = 100+"px"; object.style.left = 700+"px"; }
			if(g==55 ) { object.style.top = 100+"px"; object.style.left = 750+"px"; }
			if(g==56 ) { object.style.top = 100+"px"; object.style.left = 800+"px"; }
			if(g==57 ) { object.style.top = 100+"px"; object.style.left = 850+"px"; }
			if(g==58 ) { object.style.top = 100+"px"; object.style.left = 900+"px"; }
			if(g==59 ) { object.style.top = 100+"px"; object.style.left = 950+"px"; }
			if(g==60 ) { object.style.top = 150+"px"; object.style.left = 0  +"px"; }
			if(g==61 ) { object.style.top = 150+"px"; object.style.left = 50 +"px"; }
			if(g==62 ) { object.style.top = 150+"px"; object.style.left = 100+"px"; }
			if(g==63 ) { object.style.top = 150+"px"; object.style.left = 150+"px"; }
			if(g==64 ) { object.style.top = 150+"px"; object.style.left = 200+"px"; }
			if(g==65 ) { object.style.top = 150+"px"; object.style.left = 250+"px"; }
			if(g==66 ) { object.style.top = 150+"px"; object.style.left = 300+"px"; }
			if(g==67 ) { object.style.top = 150+"px"; object.style.left = 350+"px"; }
			if(g==68 ) { object.style.top = 150+"px"; object.style.left = 400+"px"; }
			if(g==69 ) { object.style.top = 150+"px"; object.style.left = 450+"px"; }
			if(g==70 ) { object.style.top = 150+"px"; object.style.left = 500+"px"; }
			if(g==71 ) { object.style.top = 150+"px"; object.style.left = 550+"px"; }
			if(g==72 ) { object.style.top = 150+"px"; object.style.left = 600+"px"; }
			if(g==73 ) { object.style.top = 150+"px"; object.style.left = 650+"px"; }
			if(g==74 ) { object.style.top = 150+"px"; object.style.left = 700+"px"; }
			if(g==75 ) { object.style.top = 150+"px"; object.style.left = 750+"px"; }
			if(g==76 ) { object.style.top = 150+"px"; object.style.left = 800+"px"; }
			if(g==77 ) { object.style.top = 150+"px"; object.style.left = 850+"px"; }
			if(g==78 ) { object.style.top = 150+"px"; object.style.left = 900+"px"; }
			if(g==79 ) { object.style.top = 150+"px"; object.style.left = 950+"px"; }
			if(g==80 ) { object.style.top = 200+"px"; object.style.left = 0  +"px"; }
			if(g==81 ) { object.style.top = 200+"px"; object.style.left = 50 +"px"; }
			if(g==82 ) { object.style.top = 200+"px"; object.style.left = 100+"px"; }
			if(g==83 ) { object.style.top = 200+"px"; object.style.left = 150+"px"; }
			if(g==84 ) { object.style.top = 200+"px"; object.style.left = 200+"px"; }
			if(g==85 ) { object.style.top = 200+"px"; object.style.left = 250+"px"; }
			if(g==86 ) { object.style.top = 200+"px"; object.style.left = 300+"px"; }
			if(g==87 ) { object.style.top = 200+"px"; object.style.left = 350+"px"; }
			if(g==88 ) { object.style.top = 200+"px"; object.style.left = 400+"px"; }
			if(g==89 ) { object.style.top = 200+"px"; object.style.left = 450+"px"; }
			if(g==90 ) { object.style.top = 200+"px"; object.style.left = 500+"px"; }
			if(g==91 ) { object.style.top = 200+"px"; object.style.left = 550+"px"; }
			if(g==92 ) { object.style.top = 200+"px"; object.style.left = 600+"px"; }
			if(g==93 ) { object.style.top = 200+"px"; object.style.left = 650+"px"; }
			if(g==94 ) { object.style.top = 200+"px"; object.style.left = 700+"px"; }
			if(g==95 ) { object.style.top = 200+"px"; object.style.left = 750+"px"; }
			if(g==96 ) { object.style.top = 200+"px"; object.style.left = 800+"px"; }
			if(g==97 ) { object.style.top = 200+"px"; object.style.left = 850+"px"; }
			if(g==98 ) { object.style.top = 200+"px"; object.style.left = 900+"px"; }
			if(g==99 ) { object.style.top = 200+"px"; object.style.left = 950+"px"; }
			if(g==100) { object.style.top = 250+"px"; object.style.left = 0  +"px"; }
			if(g==101) { object.style.top = 250+"px"; object.style.left = 50 +"px"; }
			if(g==102) { object.style.top = 250+"px"; object.style.left = 100+"px"; }
			if(g==103) { object.style.top = 250+"px"; object.style.left = 150+"px"; }
			if(g==104) { object.style.top = 250+"px"; object.style.left = 200+"px"; }
			if(g==105) { object.style.top = 250+"px"; object.style.left = 250+"px"; }
			if(g==106) { object.style.top = 250+"px"; object.style.left = 300+"px"; }
			if(g==107) { object.style.top = 250+"px"; object.style.left = 350+"px"; }
			if(g==108) { object.style.top = 250+"px"; object.style.left = 400+"px"; }
			if(g==109) { object.style.top = 250+"px"; object.style.left = 450+"px"; }
			if(g==110) { object.style.top = 250+"px"; object.style.left = 500+"px"; }
			if(g==111) { object.style.top = 250+"px"; object.style.left = 550+"px"; }
			if(g==112) { object.style.top = 250+"px"; object.style.left = 600+"px"; }
			if(g==113) { object.style.top = 250+"px"; object.style.left = 650+"px"; }
			if(g==114) { object.style.top = 250+"px"; object.style.left = 700+"px"; }
			if(g==115) { object.style.top = 250+"px"; object.style.left = 750+"px"; }
			if(g==116) { object.style.top = 250+"px"; object.style.left = 800+"px"; }
			if(g==117) { object.style.top = 250+"px"; object.style.left = 850+"px"; }
			if(g==118) { object.style.top = 250+"px"; object.style.left = 900+"px"; }
			if(g==119) { object.style.top = 250+"px"; object.style.left = 950+"px"; }
			if(g==120) { object.style.top = 300+"px"; object.style.left = 0  +"px"; }
			if(g==121) { object.style.top = 300+"px"; object.style.left = 50 +"px"; }
			if(g==122) { object.style.top = 300+"px"; object.style.left = 100+"px"; }
			if(g==123) { object.style.top = 300+"px"; object.style.left = 150+"px"; }
			if(g==124) { object.style.top = 300+"px"; object.style.left = 200+"px"; }
			if(g==125) { object.style.top = 300+"px"; object.style.left = 250+"px"; }
			if(g==126) { object.style.top = 300+"px"; object.style.left = 300+"px"; }
			if(g==127) { object.style.top = 300+"px"; object.style.left = 350+"px"; }
			if(g==128) { object.style.top = 300+"px"; object.style.left = 400+"px"; }
			if(g==129) { object.style.top = 300+"px"; object.style.left = 450+"px"; }
			if(g==130) { object.style.top = 300+"px"; object.style.left = 500+"px"; }
			if(g==131) { object.style.top = 300+"px"; object.style.left = 550+"px"; }
			if(g==132) { object.style.top = 300+"px"; object.style.left = 600+"px"; }
			if(g==133) { object.style.top = 300+"px"; object.style.left = 650+"px"; }
			if(g==134) { object.style.top = 300+"px"; object.style.left = 700+"px"; }
			if(g==135) { object.style.top = 300+"px"; object.style.left = 750+"px"; }
			if(g==136) { object.style.top = 300+"px"; object.style.left = 800+"px"; }
			if(g==137) { object.style.top = 300+"px"; object.style.left = 850+"px"; }
			if(g==138) { object.style.top = 300+"px"; object.style.left = 900+"px"; }
			if(g==139) { object.style.top = 300+"px"; object.style.left = 950+"px"; }
			if(g==140) { object.style.top = 350+"px"; object.style.left = 0  +"px"; }
			if(g==141) { object.style.top = 350+"px"; object.style.left = 50 +"px"; }
			if(g==142) { object.style.top = 350+"px"; object.style.left = 100+"px"; }
			if(g==143) { object.style.top = 350+"px"; object.style.left = 150+"px"; }
			if(g==144) { object.style.top = 350+"px"; object.style.left = 200+"px"; }
			if(g==145) { object.style.top = 350+"px"; object.style.left = 250+"px"; }
			if(g==146) { object.style.top = 350+"px"; object.style.left = 300+"px"; }
			if(g==147) { object.style.top = 350+"px"; object.style.left = 350+"px"; }
			if(g==148) { object.style.top = 350+"px"; object.style.left = 400+"px"; }
			if(g==149) { object.style.top = 350+"px"; object.style.left = 450+"px"; }
			if(g==150) { object.style.top = 350+"px"; object.style.left = 500+"px"; }
			if(g==151) { object.style.top = 350+"px"; object.style.left = 550+"px"; }
			if(g==152) { object.style.top = 350+"px"; object.style.left = 600+"px"; }
			if(g==153) { object.style.top = 350+"px"; object.style.left = 650+"px"; }
			if(g==154) { object.style.top = 350+"px"; object.style.left = 700+"px"; }
			if(g==155) { object.style.top = 350+"px"; object.style.left = 750+"px"; }
			if(g==156) { object.style.top = 350+"px"; object.style.left = 800+"px"; }
			if(g==157) { object.style.top = 350+"px"; object.style.left = 850+"px"; }
			if(g==158) { object.style.top = 350+"px"; object.style.left = 900+"px"; }
			if(g==159) { object.style.top = 350+"px"; object.style.left = 950+"px"; }
			if(g==160) { object.style.top = 400+"px"; object.style.left = 0  +"px"; }
			if(g==161) { object.style.top = 400+"px"; object.style.left = 50 +"px"; }
			if(g==162) { object.style.top = 400+"px"; object.style.left = 100+"px"; }
			if(g==163) { object.style.top = 400+"px"; object.style.left = 150+"px"; }
			if(g==164) { object.style.top = 400+"px"; object.style.left = 200+"px"; }
			if(g==165) { object.style.top = 400+"px"; object.style.left = 250+"px"; }
			if(g==166) { object.style.top = 400+"px"; object.style.left = 300+"px"; }
			if(g==167) { object.style.top = 400+"px"; object.style.left = 350+"px"; }
			if(g==168) { object.style.top = 400+"px"; object.style.left = 400+"px"; }
			if(g==169) { object.style.top = 400+"px"; object.style.left = 450+"px"; }
			if(g==170) { object.style.top = 400+"px"; object.style.left = 500+"px"; }
			if(g==171) { object.style.top = 400+"px"; object.style.left = 550+"px"; }
			if(g==172) { object.style.top = 400+"px"; object.style.left = 600+"px"; }
			if(g==173) { object.style.top = 400+"px"; object.style.left = 650+"px"; }
			if(g==174) { object.style.top = 400+"px"; object.style.left = 700+"px"; }
			if(g==175) { object.style.top = 400+"px"; object.style.left = 750+"px"; }
			if(g==176) { object.style.top = 400+"px"; object.style.left = 800+"px"; }
			if(g==177) { object.style.top = 400+"px"; object.style.left = 850+"px"; }
			if(g==178) { object.style.top = 400+"px"; object.style.left = 900+"px"; }
			if(g==179) { object.style.top = 400+"px"; object.style.left = 950+"px"; }
			if(g==180) { object.style.top = 450+"px"; object.style.left = 0  +"px"; }
			if(g==181) { object.style.top = 450+"px"; object.style.left = 50 +"px"; }
			if(g==182) { object.style.top = 450+"px"; object.style.left = 100+"px"; }
			if(g==183) { object.style.top = 450+"px"; object.style.left = 150+"px"; }
			if(g==184) { object.style.top = 450+"px"; object.style.left = 200+"px"; }
			if(g==185) { object.style.top = 450+"px"; object.style.left = 250+"px"; }
			if(g==186) { object.style.top = 450+"px"; object.style.left = 300+"px"; }
			if(g==187) { object.style.top = 450+"px"; object.style.left = 350+"px"; }
			if(g==188) { object.style.top = 450+"px"; object.style.left = 400+"px"; }
			if(g==189) { object.style.top = 450+"px"; object.style.left = 450+"px"; }
			if(g==190) { object.style.top = 450+"px"; object.style.left = 500+"px"; }
			if(g==191) { object.style.top = 450+"px"; object.style.left = 550+"px"; }
			if(g==192) { object.style.top = 450+"px"; object.style.left = 600+"px"; }
			if(g==193) { object.style.top = 450+"px"; object.style.left = 650+"px"; }
			if(g==194) { object.style.top = 450+"px"; object.style.left = 700+"px"; }
			if(g==195) { object.style.top = 450+"px"; object.style.left = 750+"px"; }
			if(g==196) { object.style.top = 450+"px"; object.style.left = 800+"px"; }
			if(g==197) { object.style.top = 450+"px"; object.style.left = 850+"px"; }
			if(g==198) { object.style.top = 450+"px"; object.style.left = 900+"px"; }
			if(g==199) { object.style.top = 450+"px"; object.style.left = 950+"px"; }
			if(g==200) { object.style.top = 500+"px"; object.style.left = 0  +"px"; }
			if(g==201) { object.style.top = 500+"px"; object.style.left = 50 +"px"; }
			if(g==202) { object.style.top = 500+"px"; object.style.left = 100+"px"; }
			if(g==203) { object.style.top = 500+"px"; object.style.left = 150+"px"; }
			if(g==204) { object.style.top = 500+"px"; object.style.left = 200+"px"; }
			if(g==205) { object.style.top = 500+"px"; object.style.left = 250+"px"; }
			if(g==206) { object.style.top = 500+"px"; object.style.left = 300+"px"; }
			if(g==207) { object.style.top = 500+"px"; object.style.left = 350+"px"; }
			if(g==208) { object.style.top = 500+"px"; object.style.left = 400+"px"; }
			if(g==209) { object.style.top = 500+"px"; object.style.left = 450+"px"; }
			if(g==210) { object.style.top = 500+"px"; object.style.left = 500+"px"; }
			if(g==211) { object.style.top = 500+"px"; object.style.left = 550+"px"; }
			if(g==212) { object.style.top = 500+"px"; object.style.left = 600+"px"; }
			if(g==213) { object.style.top = 500+"px"; object.style.left = 650+"px"; }
			if(g==214) { object.style.top = 500+"px"; object.style.left = 700+"px"; }
			if(g==215) { object.style.top = 500+"px"; object.style.left = 750+"px"; }
			if(g==216) { object.style.top = 500+"px"; object.style.left = 800+"px"; }
			if(g==217) { object.style.top = 500+"px"; object.style.left = 850+"px"; }
			if(g==218) { object.style.top = 500+"px"; object.style.left = 900+"px"; }
			if(g==219) { object.style.top = 500+"px"; object.style.left = 950+"px"; }
			if(g==220) { object.style.top = 550+"px"; object.style.left = 0  +"px"; }
			if(g==221) { object.style.top = 550+"px"; object.style.left = 50 +"px"; }
			if(g==222) { object.style.top = 550+"px"; object.style.left = 100+"px"; }
			if(g==223) { object.style.top = 550+"px"; object.style.left = 150+"px"; }
			if(g==224) { object.style.top = 550+"px"; object.style.left = 200+"px"; }
			if(g==225) { object.style.top = 550+"px"; object.style.left = 250+"px"; }
			if(g==226) { object.style.top = 550+"px"; object.style.left = 300+"px"; }
			if(g==227) { object.style.top = 550+"px"; object.style.left = 350+"px"; }
			if(g==228) { object.style.top = 550+"px"; object.style.left = 400+"px"; }
			if(g==229) { object.style.top = 550+"px"; object.style.left = 450+"px"; }
			if(g==230) { object.style.top = 550+"px"; object.style.left = 500+"px"; }
			if(g==231) { object.style.top = 550+"px"; object.style.left = 550+"px"; }
			if(g==232) { object.style.top = 550+"px"; object.style.left = 600+"px"; }
			if(g==233) { object.style.top = 550+"px"; object.style.left = 650+"px"; }
			if(g==234) { object.style.top = 550+"px"; object.style.left = 700+"px"; }
			if(g==235) { object.style.top = 550+"px"; object.style.left = 750+"px"; }
			if(g==236) { object.style.top = 550+"px"; object.style.left = 800+"px"; }
			if(g==237) { object.style.top = 550+"px"; object.style.left = 850+"px"; }
			if(g==238) { object.style.top = 550+"px"; object.style.left = 900+"px"; }
			if(g==239) { object.style.top = 550+"px"; object.style.left = 950+"px"; }
			if(g==240) { object.style.top = 600+"px"; object.style.left = 0  +"px"; }
			if(g==241) { object.style.top = 600+"px"; object.style.left = 50 +"px"; }
			if(g==242) { object.style.top = 600+"px"; object.style.left = 100+"px"; }
			if(g==243) { object.style.top = 600+"px"; object.style.left = 150+"px"; }
			if(g==244) { object.style.top = 600+"px"; object.style.left = 200+"px"; }
			if(g==245) { object.style.top = 600+"px"; object.style.left = 250+"px"; }
			if(g==246) { object.style.top = 600+"px"; object.style.left = 300+"px"; }
			if(g==247) { object.style.top = 600+"px"; object.style.left = 350+"px"; }
			if(g==248) { object.style.top = 600+"px"; object.style.left = 400+"px"; }
			if(g==249) { object.style.top = 600+"px"; object.style.left = 450+"px"; }
			if(g==250) { object.style.top = 600+"px"; object.style.left = 500+"px"; }
			if(g==251) { object.style.top = 600+"px"; object.style.left = 550+"px"; }
			if(g==252) { object.style.top = 600+"px"; object.style.left = 600+"px"; }
			if(g==253) { object.style.top = 600+"px"; object.style.left = 650+"px"; }
			if(g==254) { object.style.top = 600+"px"; object.style.left = 700+"px"; }
			if(g==255) { object.style.top = 600+"px"; object.style.left = 750+"px"; }
			if(g==256) { object.style.top = 600+"px"; object.style.left = 800+"px"; }
			if(g==257) { object.style.top = 600+"px"; object.style.left = 850+"px"; }
			if(g==258) { object.style.top = 600+"px"; object.style.left = 900+"px"; }
			if(g==259) { object.style.top = 600+"px"; object.style.left = 950+"px"; }
			if(g==260) { object.style.top = 650+"px"; object.style.left = 0  +"px"; }
			if(g==261) { object.style.top = 650+"px"; object.style.left = 50 +"px"; }
			if(g==262) { object.style.top = 650+"px"; object.style.left = 100+"px"; }
			if(g==263) { object.style.top = 650+"px"; object.style.left = 150+"px"; }
			if(g==264) { object.style.top = 650+"px"; object.style.left = 200+"px"; }
			if(g==265) { object.style.top = 650+"px"; object.style.left = 250+"px"; }
			if(g==266) { object.style.top = 650+"px"; object.style.left = 300+"px"; }
			if(g==267) { object.style.top = 650+"px"; object.style.left = 350+"px"; }
			if(g==268) { object.style.top = 650+"px"; object.style.left = 400+"px"; }
			if(g==269) { object.style.top = 650+"px"; object.style.left = 450+"px"; }
			if(g==270) { object.style.top = 650+"px"; object.style.left = 500+"px"; }
			if(g==271) { object.style.top = 650+"px"; object.style.left = 550+"px"; }
			if(g==272) { object.style.top = 650+"px"; object.style.left = 600+"px"; }
			if(g==273) { object.style.top = 650+"px"; object.style.left = 650+"px"; }
			if(g==274) { object.style.top = 650+"px"; object.style.left = 700+"px"; }
			if(g==275) { object.style.top = 650+"px"; object.style.left = 750+"px"; }
			if(g==276) { object.style.top = 650+"px"; object.style.left = 800+"px"; }
			if(g==277) { object.style.top = 650+"px"; object.style.left = 850+"px"; }
			if(g==278) { object.style.top = 650+"px"; object.style.left = 900+"px"; }
			if(g==279) { object.style.top = 650+"px"; object.style.left = 950+"px"; }
			if(g==280) { object.style.top = 700+"px"; object.style.left = 0  +"px"; }
			if(g==281) { object.style.top = 700+"px"; object.style.left = 50 +"px"; }
			if(g==282) { object.style.top = 700+"px"; object.style.left = 100+"px"; }
			if(g==283) { object.style.top = 700+"px"; object.style.left = 150+"px"; }
			if(g==284) { object.style.top = 700+"px"; object.style.left = 200+"px"; }
			if(g==285) { object.style.top = 700+"px"; object.style.left = 250+"px"; }
			if(g==286) { object.style.top = 700+"px"; object.style.left = 300+"px"; }
			if(g==287) { object.style.top = 700+"px"; object.style.left = 350+"px"; }
			if(g==288) { object.style.top = 700+"px"; object.style.left = 400+"px"; }
			if(g==289) { object.style.top = 700+"px"; object.style.left = 450+"px"; }
			if(g==290) { object.style.top = 700+"px"; object.style.left = 500+"px"; }
			if(g==291) { object.style.top = 700+"px"; object.style.left = 550+"px"; }
			if(g==292) { object.style.top = 700+"px"; object.style.left = 600+"px"; }
			if(g==293) { object.style.top = 700+"px"; object.style.left = 650+"px"; }
			if(g==294) { object.style.top = 700+"px"; object.style.left = 700+"px"; }
			if(g==295) { object.style.top = 700+"px"; object.style.left = 750+"px"; }
			if(g==296) { object.style.top = 700+"px"; object.style.left = 800+"px"; }
			if(g==297) { object.style.top = 700+"px"; object.style.left = 850+"px"; }
			if(g==298) { object.style.top = 700+"px"; object.style.left = 900+"px"; }
			if(g==299) { object.style.top = 700+"px"; object.style.left = 950+"px"; }
			if(g==300) { object.style.top = 750+"px"; object.style.left = 0  +"px"; }
			if(g==301) { object.style.top = 750+"px"; object.style.left = 50 +"px"; }
			if(g==302) { object.style.top = 750+"px"; object.style.left = 100+"px"; }
			if(g==303) { object.style.top = 750+"px"; object.style.left = 150+"px"; }
			if(g==304) { object.style.top = 750+"px"; object.style.left = 200+"px"; }
			if(g==305) { object.style.top = 750+"px"; object.style.left = 250+"px"; }
			if(g==306) { object.style.top = 750+"px"; object.style.left = 300+"px"; }
			if(g==307) { object.style.top = 750+"px"; object.style.left = 350+"px"; }
			if(g==308) { object.style.top = 750+"px"; object.style.left = 400+"px"; }
			if(g==309) { object.style.top = 750+"px"; object.style.left = 450+"px"; }
			if(g==310) { object.style.top = 750+"px"; object.style.left = 500+"px"; }
			if(g==311) { object.style.top = 750+"px"; object.style.left = 550+"px"; }
			if(g==312) { object.style.top = 750+"px"; object.style.left = 600+"px"; }
			if(g==313) { object.style.top = 750+"px"; object.style.left = 650+"px"; }
			if(g==314) { object.style.top = 750+"px"; object.style.left = 700+"px"; }
			if(g==315) { object.style.top = 750+"px"; object.style.left = 750+"px"; }
			if(g==316) { object.style.top = 750+"px"; object.style.left = 800+"px"; }
			if(g==317) { object.style.top = 750+"px"; object.style.left = 850+"px"; }
			if(g==318) { object.style.top = 750+"px"; object.style.left = 900+"px"; }
			if(g==319) { object.style.top = 750+"px"; object.style.left = 950+"px"; }
			if(g==320) { object.style.top = 800+"px"; object.style.left = 0  +"px"; }
			if(g==321) { object.style.top = 800+"px"; object.style.left = 50 +"px"; }
			if(g==322) { object.style.top = 800+"px"; object.style.left = 100+"px"; }
			if(g==323) { object.style.top = 800+"px"; object.style.left = 150+"px"; }
			if(g==324) { object.style.top = 800+"px"; object.style.left = 200+"px"; }
			if(g==325) { object.style.top = 800+"px"; object.style.left = 250+"px"; }
			if(g==326) { object.style.top = 800+"px"; object.style.left = 300+"px"; }
			if(g==327) { object.style.top = 800+"px"; object.style.left = 350+"px"; }
			if(g==328) { object.style.top = 800+"px"; object.style.left = 400+"px"; }
			if(g==329) { object.style.top = 800+"px"; object.style.left = 450+"px"; }
			if(g==330) { object.style.top = 800+"px"; object.style.left = 500+"px"; }
			if(g==331) { object.style.top = 800+"px"; object.style.left = 550+"px"; }
			if(g==332) { object.style.top = 800+"px"; object.style.left = 600+"px"; }
			if(g==333) { object.style.top = 800+"px"; object.style.left = 650+"px"; }
			if(g==334) { object.style.top = 800+"px"; object.style.left = 700+"px"; }
			if(g==335) { object.style.top = 800+"px"; object.style.left = 750+"px"; }
			if(g==336) { object.style.top = 800+"px"; object.style.left = 800+"px"; }
			if(g==337) { object.style.top = 800+"px"; object.style.left = 850+"px"; }
			if(g==338) { object.style.top = 800+"px"; object.style.left = 900+"px"; }
			if(g==339) { object.style.top = 800+"px"; object.style.left = 950+"px"; }
			if(g==340) { object.style.top = 850+"px"; object.style.left = 0  +"px"; }
			if(g==341) { object.style.top = 850+"px"; object.style.left = 50 +"px"; }
			if(g==342) { object.style.top = 850+"px"; object.style.left = 100+"px"; }
			if(g==343) { object.style.top = 850+"px"; object.style.left = 150+"px"; }
			if(g==344) { object.style.top = 850+"px"; object.style.left = 200+"px"; }
			if(g==345) { object.style.top = 850+"px"; object.style.left = 250+"px"; }
			if(g==346) { object.style.top = 850+"px"; object.style.left = 300+"px"; }
			if(g==347) { object.style.top = 850+"px"; object.style.left = 350+"px"; }
			if(g==348) { object.style.top = 850+"px"; object.style.left = 400+"px"; }
			if(g==349) { object.style.top = 850+"px"; object.style.left = 450+"px"; }
			if(g==350) { object.style.top = 850+"px"; object.style.left = 500+"px"; }
			if(g==351) { object.style.top = 850+"px"; object.style.left = 550+"px"; }
			if(g==352) { object.style.top = 850+"px"; object.style.left = 600+"px"; }
			if(g==353) { object.style.top = 850+"px"; object.style.left = 650+"px"; }
			if(g==354) { object.style.top = 850+"px"; object.style.left = 700+"px"; }
			if(g==355) { object.style.top = 850+"px"; object.style.left = 750+"px"; }
			if(g==356) { object.style.top = 850+"px"; object.style.left = 800+"px"; }
			if(g==357) { object.style.top = 850+"px"; object.style.left = 850+"px"; }
			if(g==358) { object.style.top = 850+"px"; object.style.left = 900+"px"; }
			if(g==359) { object.style.top = 850+"px"; object.style.left = 950+"px"; }
			if(g==360) { object.style.top = 900+"px"; object.style.left = 0  +"px"; }
			if(g==361) { object.style.top = 900+"px"; object.style.left = 50 +"px"; }
			if(g==362) { object.style.top = 900+"px"; object.style.left = 100+"px"; }
			if(g==363) { object.style.top = 900+"px"; object.style.left = 150+"px"; }
			if(g==364) { object.style.top = 900+"px"; object.style.left = 200+"px"; }
			if(g==365) { object.style.top = 900+"px"; object.style.left = 250+"px"; }
			if(g==366) { object.style.top = 900+"px"; object.style.left = 300+"px"; }
			if(g==367) { object.style.top = 900+"px"; object.style.left = 350+"px"; }
			if(g==368) { object.style.top = 900+"px"; object.style.left = 400+"px"; }
			if(g==369) { object.style.top = 900+"px"; object.style.left = 450+"px"; }
			if(g==370) { object.style.top = 900+"px"; object.style.left = 500+"px"; }
			if(g==371) { object.style.top = 900+"px"; object.style.left = 550+"px"; }
			if(g==372) { object.style.top = 900+"px"; object.style.left = 600+"px"; }
			if(g==373) { object.style.top = 900+"px"; object.style.left = 650+"px"; }
			if(g==374) { object.style.top = 900+"px"; object.style.left = 700+"px"; }
			if(g==375) { object.style.top = 900+"px"; object.style.left = 750+"px"; }
			if(g==376) { object.style.top = 900+"px"; object.style.left = 800+"px"; }
			if(g==377) { object.style.top = 900+"px"; object.style.left = 850+"px"; }
			if(g==378) { object.style.top = 900+"px"; object.style.left = 900+"px"; }
			if(g==379) { object.style.top = 900+"px"; object.style.left = 950+"px"; }
			if(g==380) { object.style.top = 950+"px"; object.style.left = 0  +"px"; }
			if(g==381) { object.style.top = 950+"px"; object.style.left = 50 +"px"; }
			if(g==382) { object.style.top = 950+"px"; object.style.left = 100+"px"; }
			if(g==383) { object.style.top = 950+"px"; object.style.left = 150+"px"; }
			if(g==384) { object.style.top = 950+"px"; object.style.left = 200+"px"; }
			if(g==385) { object.style.top = 950+"px"; object.style.left = 250+"px"; }
			if(g==386) { object.style.top = 950+"px"; object.style.left = 300+"px"; }
			if(g==387) { object.style.top = 950+"px"; object.style.left = 350+"px"; }
			if(g==388) { object.style.top = 950+"px"; object.style.left = 400+"px"; }
			if(g==389) { object.style.top = 950+"px"; object.style.left = 450+"px"; }
			if(g==390) { object.style.top = 950+"px"; object.style.left = 500+"px"; }
			if(g==391) { object.style.top = 950+"px"; object.style.left = 550+"px"; }
			if(g==392) { object.style.top = 950+"px"; object.style.left = 600+"px"; }
			if(g==393) { object.style.top = 950+"px"; object.style.left = 650+"px"; }
			if(g==394) { object.style.top = 950+"px"; object.style.left = 700+"px"; }
			if(g==395) { object.style.top = 950+"px"; object.style.left = 750+"px"; }
			if(g==396) { object.style.top = 950+"px"; object.style.left = 800+"px"; }
			if(g==397) { object.style.top = 950+"px"; object.style.left = 850+"px"; }
			if(g==398) { object.style.top = 950+"px"; object.style.left = 900+"px"; }
			if(g==399) { object.style.top = 950+"px"; object.style.left = 950+"px"; }
		}
	}
}
var Level_Layout_JSON = "https://rawgit.com/Rexoid/JavaScript/master/Level_Layout.json";
var Level_Assets_JSON = "https://rawgit.com/Rexoid/JavaScript/master/Level_Assets.json";
var request_Layout = new XMLHttpRequest();
var request_Assets = new XMLHttpRequest();
request_Layout.open("GET", Level_Layout_JSON);
request_Layout.responseType = "json";
request_Layout.send();
request_Layout.onload = function() {
	alert(request_Layout.response);
	Check_Active(request_Layout.response);
}
request_Assets.open("GET", Level_Assets_JSON);
request_Assets.responseType = "text";
request_Assets.send();
request_Assets.onload = function() {
	var level_assets = request_Assets.response;
}

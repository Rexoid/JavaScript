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
		alert(target);
		var parentDiv = document.getElementById("Level");
		if(target=="1") {}
		if(target=="2") {
			var object = document.createElement("canvas");
			object.setAttribute("class","Block_Object");
			object.setAttribute("id",toString(g));
			object.setAttribute("width","50");
			object.setAttribute("height","50");
			object.setAttribute("position","absolute");
			if(g==0  ) {object.setAttribute("top","0  "); object.setAttribute("left","0  ");}
			if(g==1  ) {object.setAttribute("top","0  "); object.setAttribute("left","50 ");}
			if(g==2  ) {object.setAttribute("top","0  "); object.setAttribute("left","100");}
			if(g==3  ) {object.setAttribute("top","0  "); object.setAttribute("left","150");}
			if(g==4  ) {object.setAttribute("top","0  "); object.setAttribute("left","200");}
			if(g==5  ) {object.setAttribute("top","0  "); object.setAttribute("left","250");}
			if(g==6  ) {object.setAttribute("top","0  "); object.setAttribute("left","300");}
			if(g==7  ) {object.setAttribute("top","0  "); object.setAttribute("left","350");}
			if(g==8  ) {object.setAttribute("top","0  "); object.setAttribute("left","400");}
			if(g==9  ) {object.setAttribute("top","0  "); object.setAttribute("left","450");}
			if(g==10 ) {object.setAttribute("top","0  "); object.setAttribute("left","500");}
			if(g==11 ) {object.setAttribute("top","0  "); object.setAttribute("left","550");}
			if(g==12 ) {object.setAttribute("top","0  "); object.setAttribute("left","600");}
			if(g==13 ) {object.setAttribute("top","0  "); object.setAttribute("left","650");}
			if(g==14 ) {object.setAttribute("top","0  "); object.setAttribute("left","700");}
			if(g==15 ) {object.setAttribute("top","0  "); object.setAttribute("left","750");}
			if(g==16 ) {object.setAttribute("top","0  "); object.setAttribute("left","800");}
			if(g==17 ) {object.setAttribute("top","0  "); object.setAttribute("left","850");}
			if(g==18 ) {object.setAttribute("top","0  "); object.setAttribute("left","900");}
			if(g==19 ) {object.setAttribute("top","0  "); object.setAttribute("left","950");}
			if(g==20 ) {object.setAttribute("top","50 "); object.setAttribute("left","0  ");}
			if(g==21 ) {object.setAttribute("top","50 "); object.setAttribute("left","50 ");}
			if(g==22 ) {object.setAttribute("top","50 "); object.setAttribute("left","100");}
			if(g==23 ) {object.setAttribute("top","50 "); object.setAttribute("left","150");}
			if(g==24 ) {object.setAttribute("top","50 "); object.setAttribute("left","200");}
			if(g==25 ) {object.setAttribute("top","50 "); object.setAttribute("left","250");}
			if(g==26 ) {object.setAttribute("top","50 "); object.setAttribute("left","300");}
			if(g==27 ) {object.setAttribute("top","50 "); object.setAttribute("left","350");}
			if(g==28 ) {object.setAttribute("top","50 "); object.setAttribute("left","400");}
			if(g==29 ) {object.setAttribute("top","50 "); object.setAttribute("left","450");}
			if(g==30 ) {object.setAttribute("top","50 "); object.setAttribute("left","500");}
			if(g==31 ) {object.setAttribute("top","50 "); object.setAttribute("left","550");}
			if(g==32 ) {object.setAttribute("top","50 "); object.setAttribute("left","600");}
			if(g==33 ) {object.setAttribute("top","50 "); object.setAttribute("left","650");}
			if(g==34 ) {object.setAttribute("top","50 "); object.setAttribute("left","700");}
			if(g==35 ) {object.setAttribute("top","50 "); object.setAttribute("left","750");}
			if(g==36 ) {object.setAttribute("top","50 "); object.setAttribute("left","800");}
			if(g==37 ) {object.setAttribute("top","50 "); object.setAttribute("left","850");}
			if(g==38 ) {object.setAttribute("top","50 "); object.setAttribute("left","900");}
			if(g==39 ) {object.setAttribute("top","50 "); object.setAttribute("left","950");}
			if(g==40 ) {object.setAttribute("top","100"); object.setAttribute("left","0  ");}
			if(g==41 ) {object.setAttribute("top","100"); object.setAttribute("left","50 ");}
			if(g==42 ) {object.setAttribute("top","100"); object.setAttribute("left","100");}
			if(g==43 ) {object.setAttribute("top","100"); object.setAttribute("left","150");}
			if(g==44 ) {object.setAttribute("top","100"); object.setAttribute("left","200");}
			if(g==45 ) {object.setAttribute("top","100"); object.setAttribute("left","250");}
			if(g==46 ) {object.setAttribute("top","100"); object.setAttribute("left","300");}
			if(g==47 ) {object.setAttribute("top","100"); object.setAttribute("left","350");}
			if(g==48 ) {object.setAttribute("top","100"); object.setAttribute("left","400");}
			if(g==49 ) {object.setAttribute("top","100"); object.setAttribute("left","450");}
			if(g==50 ) {object.setAttribute("top","100"); object.setAttribute("left","500");}
			if(g==51 ) {object.setAttribute("top","100"); object.setAttribute("left","550");}
			if(g==52 ) {object.setAttribute("top","100"); object.setAttribute("left","600");}
			if(g==53 ) {object.setAttribute("top","100"); object.setAttribute("left","650");}
			if(g==54 ) {object.setAttribute("top","100"); object.setAttribute("left","700");}
			if(g==55 ) {object.setAttribute("top","100"); object.setAttribute("left","750");}
			if(g==56 ) {object.setAttribute("top","100"); object.setAttribute("left","800");}
			if(g==57 ) {object.setAttribute("top","100"); object.setAttribute("left","850");}
			if(g==58 ) {object.setAttribute("top","100"); object.setAttribute("left","900");}
			if(g==59 ) {object.setAttribute("top","100"); object.setAttribute("left","950");}
			if(g==60 ) {object.setAttribute("top","150"); object.setAttribute("left","0  ");}
			if(g==61 ) {object.setAttribute("top","150"); object.setAttribute("left","50 ");}
			if(g==62 ) {object.setAttribute("top","150"); object.setAttribute("left","100");}
			if(g==63 ) {object.setAttribute("top","150"); object.setAttribute("left","150");}
			if(g==64 ) {object.setAttribute("top","150"); object.setAttribute("left","200");}
			if(g==65 ) {object.setAttribute("top","150"); object.setAttribute("left","250");}
			if(g==66 ) {object.setAttribute("top","150"); object.setAttribute("left","300");}
			if(g==67 ) {object.setAttribute("top","150"); object.setAttribute("left","350");}
			if(g==68 ) {object.setAttribute("top","150"); object.setAttribute("left","400");}
			if(g==69 ) {object.setAttribute("top","150"); object.setAttribute("left","450");}
			if(g==70 ) {object.setAttribute("top","150"); object.setAttribute("left","500");}
			if(g==71 ) {object.setAttribute("top","150"); object.setAttribute("left","550");}
			if(g==72 ) {object.setAttribute("top","150"); object.setAttribute("left","600");}
			if(g==73 ) {object.setAttribute("top","150"); object.setAttribute("left","650");}
			if(g==74 ) {object.setAttribute("top","150"); object.setAttribute("left","700");}
			if(g==75 ) {object.setAttribute("top","150"); object.setAttribute("left","750");}
			if(g==76 ) {object.setAttribute("top","150"); object.setAttribute("left","800");}
			if(g==77 ) {object.setAttribute("top","150"); object.setAttribute("left","850");}
			if(g==78 ) {object.setAttribute("top","150"); object.setAttribute("left","900");}
			if(g==79 ) {object.setAttribute("top","150"); object.setAttribute("left","950");}
			if(g==80 ) {object.setAttribute("top","200"); object.setAttribute("left","0  ");}
			if(g==81 ) {object.setAttribute("top","200"); object.setAttribute("left","50 ");}
			if(g==82 ) {object.setAttribute("top","200"); object.setAttribute("left","100");}
			if(g==83 ) {object.setAttribute("top","200"); object.setAttribute("left","150");}
			if(g==84 ) {object.setAttribute("top","200"); object.setAttribute("left","200");}
			if(g==85 ) {object.setAttribute("top","200"); object.setAttribute("left","250");}
			if(g==86 ) {object.setAttribute("top","200"); object.setAttribute("left","300");}
			if(g==87 ) {object.setAttribute("top","200"); object.setAttribute("left","350");}
			if(g==88 ) {object.setAttribute("top","200"); object.setAttribute("left","400");}
			if(g==89 ) {object.setAttribute("top","200"); object.setAttribute("left","450");}
			if(g==90 ) {object.setAttribute("top","200"); object.setAttribute("left","500");}
			if(g==91 ) {object.setAttribute("top","200"); object.setAttribute("left","550");}
			if(g==92 ) {object.setAttribute("top","200"); object.setAttribute("left","600");}
			if(g==93 ) {object.setAttribute("top","200"); object.setAttribute("left","650");}
			if(g==94 ) {object.setAttribute("top","200"); object.setAttribute("left","700");}
			if(g==95 ) {object.setAttribute("top","200"); object.setAttribute("left","750");}
			if(g==96 ) {object.setAttribute("top","200"); object.setAttribute("left","800");}
			if(g==97 ) {object.setAttribute("top","200"); object.setAttribute("left","850");}
			if(g==98 ) {object.setAttribute("top","200"); object.setAttribute("left","900");}
			if(g==99 ) {object.setAttribute("top","200"); object.setAttribute("left","950");}
			if(g==100) {object.setAttribute("top","250"); object.setAttribute("left","0  ");}
			if(g==101) {object.setAttribute("top","250"); object.setAttribute("left","50 ");}
			if(g==102) {object.setAttribute("top","250"); object.setAttribute("left","100");}
			if(g==103) {object.setAttribute("top","250"); object.setAttribute("left","150");}
			if(g==104) {object.setAttribute("top","250"); object.setAttribute("left","200");}
			if(g==105) {object.setAttribute("top","250"); object.setAttribute("left","250");}
			if(g==106) {object.setAttribute("top","250"); object.setAttribute("left","300");}
			if(g==107) {object.setAttribute("top","250"); object.setAttribute("left","350");}
			if(g==108) {object.setAttribute("top","250"); object.setAttribute("left","400");}
			if(g==109) {object.setAttribute("top","250"); object.setAttribute("left","450");}
			if(g==110) {object.setAttribute("top","250"); object.setAttribute("left","500");}
			if(g==111) {object.setAttribute("top","250"); object.setAttribute("left","550");}
			if(g==112) {object.setAttribute("top","250"); object.setAttribute("left","600");}
			if(g==113) {object.setAttribute("top","250"); object.setAttribute("left","650");}
			if(g==114) {object.setAttribute("top","250"); object.setAttribute("left","700");}
			if(g==115) {object.setAttribute("top","250"); object.setAttribute("left","750");}
			if(g==116) {object.setAttribute("top","250"); object.setAttribute("left","800");}
			if(g==117) {object.setAttribute("top","250"); object.setAttribute("left","850");}
			if(g==118) {object.setAttribute("top","250"); object.setAttribute("left","900");}
			if(g==119) {object.setAttribute("top","250"); object.setAttribute("left","950");}
			if(g==120) {object.setAttribute("top","300"); object.setAttribute("left","0  ");}
			if(g==121) {object.setAttribute("top","300"); object.setAttribute("left","50 ");}
			if(g==122) {object.setAttribute("top","300"); object.setAttribute("left","100");}
			if(g==123) {object.setAttribute("top","300"); object.setAttribute("left","150");}
			if(g==124) {object.setAttribute("top","300"); object.setAttribute("left","200");}
			if(g==125) {object.setAttribute("top","300"); object.setAttribute("left","250");}
			if(g==126) {object.setAttribute("top","300"); object.setAttribute("left","300");}
			if(g==127) {object.setAttribute("top","300"); object.setAttribute("left","350");}
			if(g==128) {object.setAttribute("top","300"); object.setAttribute("left","400");}
			if(g==129) {object.setAttribute("top","300"); object.setAttribute("left","450");}
			if(g==130) {object.setAttribute("top","300"); object.setAttribute("left","500");}
			if(g==131) {object.setAttribute("top","300"); object.setAttribute("left","550");}
			if(g==132) {object.setAttribute("top","300"); object.setAttribute("left","600");}
			if(g==133) {object.setAttribute("top","300"); object.setAttribute("left","650");}
			if(g==134) {object.setAttribute("top","300"); object.setAttribute("left","700");}
			if(g==135) {object.setAttribute("top","300"); object.setAttribute("left","750");}
			if(g==136) {object.setAttribute("top","300"); object.setAttribute("left","800");}
			if(g==137) {object.setAttribute("top","300"); object.setAttribute("left","850");}
			if(g==138) {object.setAttribute("top","300"); object.setAttribute("left","900");}
			if(g==139) {object.setAttribute("top","300"); object.setAttribute("left","950");}
			if(g==140) {object.setAttribute("top","350"); object.setAttribute("left","0  ");}
			if(g==141) {object.setAttribute("top","350"); object.setAttribute("left","50 ");}
			if(g==142) {object.setAttribute("top","350"); object.setAttribute("left","100");}
			if(g==143) {object.setAttribute("top","350"); object.setAttribute("left","150");}
			if(g==144) {object.setAttribute("top","350"); object.setAttribute("left","200");}
			if(g==145) {object.setAttribute("top","350"); object.setAttribute("left","250");}
			if(g==146) {object.setAttribute("top","350"); object.setAttribute("left","300");}
			if(g==147) {object.setAttribute("top","350"); object.setAttribute("left","350");}
			if(g==148) {object.setAttribute("top","350"); object.setAttribute("left","400");}
			if(g==149) {object.setAttribute("top","350"); object.setAttribute("left","450");}
			if(g==150) {object.setAttribute("top","350"); object.setAttribute("left","500");}
			if(g==151) {object.setAttribute("top","350"); object.setAttribute("left","550");}
			if(g==152) {object.setAttribute("top","350"); object.setAttribute("left","600");}
			if(g==153) {object.setAttribute("top","350"); object.setAttribute("left","650");}
			if(g==154) {object.setAttribute("top","350"); object.setAttribute("left","700");}
			if(g==155) {object.setAttribute("top","350"); object.setAttribute("left","750");}
			if(g==156) {object.setAttribute("top","350"); object.setAttribute("left","800");}
			if(g==157) {object.setAttribute("top","350"); object.setAttribute("left","850");}
			if(g==158) {object.setAttribute("top","350"); object.setAttribute("left","900");}
			if(g==159) {object.setAttribute("top","350"); object.setAttribute("left","950");}
			if(g==160) {object.setAttribute("top","400"); object.setAttribute("left","0  ");}
			if(g==161) {object.setAttribute("top","400"); object.setAttribute("left","50 ");}
			if(g==162) {object.setAttribute("top","400"); object.setAttribute("left","100");}
			if(g==163) {object.setAttribute("top","400"); object.setAttribute("left","150");}
			if(g==164) {object.setAttribute("top","400"); object.setAttribute("left","200");}
			if(g==165) {object.setAttribute("top","400"); object.setAttribute("left","250");}
			if(g==166) {object.setAttribute("top","400"); object.setAttribute("left","300");}
			if(g==167) {object.setAttribute("top","400"); object.setAttribute("left","350");}
			if(g==168) {object.setAttribute("top","400"); object.setAttribute("left","400");}
			if(g==169) {object.setAttribute("top","400"); object.setAttribute("left","450");}
			if(g==170) {object.setAttribute("top","400"); object.setAttribute("left","500");}
			if(g==171) {object.setAttribute("top","400"); object.setAttribute("left","550");}
			if(g==172) {object.setAttribute("top","400"); object.setAttribute("left","600");}
			if(g==173) {object.setAttribute("top","400"); object.setAttribute("left","650");}
			if(g==174) {object.setAttribute("top","400"); object.setAttribute("left","700");}
			if(g==175) {object.setAttribute("top","400"); object.setAttribute("left","750");}
			if(g==176) {object.setAttribute("top","400"); object.setAttribute("left","800");}
			if(g==177) {object.setAttribute("top","400"); object.setAttribute("left","850");}
			if(g==178) {object.setAttribute("top","400"); object.setAttribute("left","900");}
			if(g==179) {object.setAttribute("top","400"); object.setAttribute("left","950");}
			if(g==180) {object.setAttribute("top","450"); object.setAttribute("left","0  ");}
			if(g==181) {object.setAttribute("top","450"); object.setAttribute("left","50 ");}
			if(g==182) {object.setAttribute("top","450"); object.setAttribute("left","100");}
			if(g==183) {object.setAttribute("top","450"); object.setAttribute("left","150");}
			if(g==184) {object.setAttribute("top","450"); object.setAttribute("left","200");}
			if(g==185) {object.setAttribute("top","450"); object.setAttribute("left","250");}
			if(g==186) {object.setAttribute("top","450"); object.setAttribute("left","300");}
			if(g==187) {object.setAttribute("top","450"); object.setAttribute("left","350");}
			if(g==188) {object.setAttribute("top","450"); object.setAttribute("left","400");}
			if(g==189) {object.setAttribute("top","450"); object.setAttribute("left","450");}
			if(g==190) {object.setAttribute("top","450"); object.setAttribute("left","500");}
			if(g==191) {object.setAttribute("top","450"); object.setAttribute("left","550");}
			if(g==192) {object.setAttribute("top","450"); object.setAttribute("left","600");}
			if(g==193) {object.setAttribute("top","450"); object.setAttribute("left","650");}
			if(g==194) {object.setAttribute("top","450"); object.setAttribute("left","700");}
			if(g==195) {object.setAttribute("top","450"); object.setAttribute("left","750");}
			if(g==196) {object.setAttribute("top","450"); object.setAttribute("left","800");}
			if(g==197) {object.setAttribute("top","450"); object.setAttribute("left","850");}
			if(g==198) {object.setAttribute("top","450"); object.setAttribute("left","900");}
			if(g==199) {object.setAttribute("top","450"); object.setAttribute("left","950");}
			if(g==200) {object.setAttribute("top","500"); object.setAttribute("left","0  ");}
			if(g==201) {object.setAttribute("top","500"); object.setAttribute("left","50 ");}
			if(g==202) {object.setAttribute("top","500"); object.setAttribute("left","100");}
			if(g==203) {object.setAttribute("top","500"); object.setAttribute("left","150");}
			if(g==204) {object.setAttribute("top","500"); object.setAttribute("left","200");}
			if(g==205) {object.setAttribute("top","500"); object.setAttribute("left","250");}
			if(g==206) {object.setAttribute("top","500"); object.setAttribute("left","300");}
			if(g==207) {object.setAttribute("top","500"); object.setAttribute("left","350");}
			if(g==208) {object.setAttribute("top","500"); object.setAttribute("left","400");}
			if(g==209) {object.setAttribute("top","500"); object.setAttribute("left","450");}
			if(g==210) {object.setAttribute("top","500"); object.setAttribute("left","500");}
			if(g==211) {object.setAttribute("top","500"); object.setAttribute("left","550");}
			if(g==212) {object.setAttribute("top","500"); object.setAttribute("left","600");}
			if(g==213) {object.setAttribute("top","500"); object.setAttribute("left","650");}
			if(g==214) {object.setAttribute("top","500"); object.setAttribute("left","700");}
			if(g==215) {object.setAttribute("top","500"); object.setAttribute("left","750");}
			if(g==216) {object.setAttribute("top","500"); object.setAttribute("left","800");}
			if(g==217) {object.setAttribute("top","500"); object.setAttribute("left","850");}
			if(g==218) {object.setAttribute("top","500"); object.setAttribute("left","900");}
			if(g==219) {object.setAttribute("top","500"); object.setAttribute("left","950");}
			if(g==220) {object.setAttribute("top","550"); object.setAttribute("left","0  ");}
			if(g==221) {object.setAttribute("top","550"); object.setAttribute("left","50 ");}
			if(g==222) {object.setAttribute("top","550"); object.setAttribute("left","100");}
			if(g==223) {object.setAttribute("top","550"); object.setAttribute("left","150");}
			if(g==224) {object.setAttribute("top","550"); object.setAttribute("left","200");}
			if(g==225) {object.setAttribute("top","550"); object.setAttribute("left","250");}
			if(g==226) {object.setAttribute("top","550"); object.setAttribute("left","300");}
			if(g==227) {object.setAttribute("top","550"); object.setAttribute("left","350");}
			if(g==228) {object.setAttribute("top","550"); object.setAttribute("left","400");}
			if(g==229) {object.setAttribute("top","550"); object.setAttribute("left","450");}
			if(g==230) {object.setAttribute("top","550"); object.setAttribute("left","500");}
			if(g==231) {object.setAttribute("top","550"); object.setAttribute("left","550");}
			if(g==232) {object.setAttribute("top","550"); object.setAttribute("left","600");}
			if(g==233) {object.setAttribute("top","550"); object.setAttribute("left","650");}
			if(g==234) {object.setAttribute("top","550"); object.setAttribute("left","700");}
			if(g==235) {object.setAttribute("top","550"); object.setAttribute("left","750");}
			if(g==236) {object.setAttribute("top","550"); object.setAttribute("left","800");}
			if(g==237) {object.setAttribute("top","550"); object.setAttribute("left","850");}
			if(g==238) {object.setAttribute("top","550"); object.setAttribute("left","900");}
			if(g==239) {object.setAttribute("top","550"); object.setAttribute("left","950");}
			if(g==240) {object.setAttribute("top","600"); object.setAttribute("left","0  ");}
			if(g==241) {object.setAttribute("top","600"); object.setAttribute("left","50 ");}
			if(g==242) {object.setAttribute("top","600"); object.setAttribute("left","100");}
			if(g==243) {object.setAttribute("top","600"); object.setAttribute("left","150");}
			if(g==244) {object.setAttribute("top","600"); object.setAttribute("left","200");}
			if(g==245) {object.setAttribute("top","600"); object.setAttribute("left","250");}
			if(g==246) {object.setAttribute("top","600"); object.setAttribute("left","300");}
			if(g==247) {object.setAttribute("top","600"); object.setAttribute("left","350");}
			if(g==248) {object.setAttribute("top","600"); object.setAttribute("left","400");}
			if(g==249) {object.setAttribute("top","600"); object.setAttribute("left","450");}
			if(g==250) {object.setAttribute("top","600"); object.setAttribute("left","500");}
			if(g==251) {object.setAttribute("top","600"); object.setAttribute("left","550");}
			if(g==252) {object.setAttribute("top","600"); object.setAttribute("left","600");}
			if(g==253) {object.setAttribute("top","600"); object.setAttribute("left","650");}
			if(g==254) {object.setAttribute("top","600"); object.setAttribute("left","700");}
			if(g==255) {object.setAttribute("top","600"); object.setAttribute("left","750");}
			if(g==256) {object.setAttribute("top","600"); object.setAttribute("left","800");}
			if(g==257) {object.setAttribute("top","600"); object.setAttribute("left","850");}
			if(g==258) {object.setAttribute("top","600"); object.setAttribute("left","900");}
			if(g==259) {object.setAttribute("top","600"); object.setAttribute("left","950");}
			if(g==260) {object.setAttribute("top","650"); object.setAttribute("left","0  ");}
			if(g==261) {object.setAttribute("top","650"); object.setAttribute("left","50 ");}
			if(g==262) {object.setAttribute("top","650"); object.setAttribute("left","100");}
			if(g==263) {object.setAttribute("top","650"); object.setAttribute("left","150");}
			if(g==264) {object.setAttribute("top","650"); object.setAttribute("left","200");}
			if(g==265) {object.setAttribute("top","650"); object.setAttribute("left","250");}
			if(g==266) {object.setAttribute("top","650"); object.setAttribute("left","300");}
			if(g==267) {object.setAttribute("top","650"); object.setAttribute("left","350");}
			if(g==268) {object.setAttribute("top","650"); object.setAttribute("left","400");}
			if(g==269) {object.setAttribute("top","650"); object.setAttribute("left","450");}
			if(g==270) {object.setAttribute("top","650"); object.setAttribute("left","500");}
			if(g==271) {object.setAttribute("top","650"); object.setAttribute("left","550");}
			if(g==272) {object.setAttribute("top","650"); object.setAttribute("left","600");}
			if(g==273) {object.setAttribute("top","650"); object.setAttribute("left","650");}
			if(g==274) {object.setAttribute("top","650"); object.setAttribute("left","700");}
			if(g==275) {object.setAttribute("top","650"); object.setAttribute("left","750");}
			if(g==276) {object.setAttribute("top","650"); object.setAttribute("left","800");}
			if(g==277) {object.setAttribute("top","650"); object.setAttribute("left","850");}
			if(g==278) {object.setAttribute("top","650"); object.setAttribute("left","900");}
			if(g==279) {object.setAttribute("top","650"); object.setAttribute("left","950");}
			if(g==280) {object.setAttribute("top","700"); object.setAttribute("left","0  ");}
			if(g==281) {object.setAttribute("top","700"); object.setAttribute("left","50 ");}
			if(g==282) {object.setAttribute("top","700"); object.setAttribute("left","100");}
			if(g==283) {object.setAttribute("top","700"); object.setAttribute("left","150");}
			if(g==284) {object.setAttribute("top","700"); object.setAttribute("left","200");}
			if(g==285) {object.setAttribute("top","700"); object.setAttribute("left","250");}
			if(g==286) {object.setAttribute("top","700"); object.setAttribute("left","300");}
			if(g==287) {object.setAttribute("top","700"); object.setAttribute("left","350");}
			if(g==288) {object.setAttribute("top","700"); object.setAttribute("left","400");}
			if(g==289) {object.setAttribute("top","700"); object.setAttribute("left","450");}
			if(g==290) {object.setAttribute("top","700"); object.setAttribute("left","500");}
			if(g==291) {object.setAttribute("top","700"); object.setAttribute("left","550");}
			if(g==292) {object.setAttribute("top","700"); object.setAttribute("left","600");}
			if(g==293) {object.setAttribute("top","700"); object.setAttribute("left","650");}
			if(g==294) {object.setAttribute("top","700"); object.setAttribute("left","700");}
			if(g==295) {object.setAttribute("top","700"); object.setAttribute("left","750");}
			if(g==296) {object.setAttribute("top","700"); object.setAttribute("left","800");}
			if(g==297) {object.setAttribute("top","700"); object.setAttribute("left","850");}
			if(g==298) {object.setAttribute("top","700"); object.setAttribute("left","900");}
			if(g==299) {object.setAttribute("top","700"); object.setAttribute("left","950");}
			if(g==300) {object.setAttribute("top","750"); object.setAttribute("left","0  ");}
			if(g==301) {object.setAttribute("top","750"); object.setAttribute("left","50 ");}
			if(g==302) {object.setAttribute("top","750"); object.setAttribute("left","100");}
			if(g==303) {object.setAttribute("top","750"); object.setAttribute("left","150");}
			if(g==304) {object.setAttribute("top","750"); object.setAttribute("left","200");}
			if(g==305) {object.setAttribute("top","750"); object.setAttribute("left","250");}
			if(g==306) {object.setAttribute("top","750"); object.setAttribute("left","300");}
			if(g==307) {object.setAttribute("top","750"); object.setAttribute("left","350");}
			if(g==308) {object.setAttribute("top","750"); object.setAttribute("left","400");}
			if(g==309) {object.setAttribute("top","750"); object.setAttribute("left","450");}
			if(g==310) {object.setAttribute("top","750"); object.setAttribute("left","500");}
			if(g==311) {object.setAttribute("top","750"); object.setAttribute("left","550");}
			if(g==312) {object.setAttribute("top","750"); object.setAttribute("left","600");}
			if(g==313) {object.setAttribute("top","750"); object.setAttribute("left","650");}
			if(g==314) {object.setAttribute("top","750"); object.setAttribute("left","700");}
			if(g==315) {object.setAttribute("top","750"); object.setAttribute("left","750");}
			if(g==316) {object.setAttribute("top","750"); object.setAttribute("left","800");}
			if(g==317) {object.setAttribute("top","750"); object.setAttribute("left","850");}
			if(g==318) {object.setAttribute("top","750"); object.setAttribute("left","900");}
			if(g==319) {object.setAttribute("top","750"); object.setAttribute("left","950");}
			if(g==320) {object.setAttribute("top","800"); object.setAttribute("left","0  ");}
			if(g==321) {object.setAttribute("top","800"); object.setAttribute("left","50 ");}
			if(g==322) {object.setAttribute("top","800"); object.setAttribute("left","100");}
			if(g==323) {object.setAttribute("top","800"); object.setAttribute("left","150");}
			if(g==324) {object.setAttribute("top","800"); object.setAttribute("left","200");}
			if(g==325) {object.setAttribute("top","800"); object.setAttribute("left","250");}
			if(g==326) {object.setAttribute("top","800"); object.setAttribute("left","300");}
			if(g==327) {object.setAttribute("top","800"); object.setAttribute("left","350");}
			if(g==328) {object.setAttribute("top","800"); object.setAttribute("left","400");}
			if(g==329) {object.setAttribute("top","800"); object.setAttribute("left","450");}
			if(g==330) {object.setAttribute("top","800"); object.setAttribute("left","500");}
			if(g==331) {object.setAttribute("top","800"); object.setAttribute("left","550");}
			if(g==332) {object.setAttribute("top","800"); object.setAttribute("left","600");}
			if(g==333) {object.setAttribute("top","800"); object.setAttribute("left","650");}
			if(g==334) {object.setAttribute("top","800"); object.setAttribute("left","700");}
			if(g==335) {object.setAttribute("top","800"); object.setAttribute("left","750");}
			if(g==336) {object.setAttribute("top","800"); object.setAttribute("left","800");}
			if(g==337) {object.setAttribute("top","800"); object.setAttribute("left","850");}
			if(g==338) {object.setAttribute("top","800"); object.setAttribute("left","900");}
			if(g==339) {object.setAttribute("top","800"); object.setAttribute("left","950");}
			if(g==340) {object.setAttribute("top","850"); object.setAttribute("left","0  ");}
			if(g==341) {object.setAttribute("top","850"); object.setAttribute("left","50 ");}
			if(g==342) {object.setAttribute("top","850"); object.setAttribute("left","100");}
			if(g==343) {object.setAttribute("top","850"); object.setAttribute("left","150");}
			if(g==344) {object.setAttribute("top","850"); object.setAttribute("left","200");}
			if(g==345) {object.setAttribute("top","850"); object.setAttribute("left","250");}
			if(g==346) {object.setAttribute("top","850"); object.setAttribute("left","300");}
			if(g==347) {object.setAttribute("top","850"); object.setAttribute("left","350");}
			if(g==348) {object.setAttribute("top","850"); object.setAttribute("left","400");}
			if(g==349) {object.setAttribute("top","850"); object.setAttribute("left","450");}
			if(g==350) {object.setAttribute("top","850"); object.setAttribute("left","500");}
			if(g==351) {object.setAttribute("top","850"); object.setAttribute("left","550");}
			if(g==352) {object.setAttribute("top","850"); object.setAttribute("left","600");}
			if(g==353) {object.setAttribute("top","850"); object.setAttribute("left","650");}
			if(g==354) {object.setAttribute("top","850"); object.setAttribute("left","700");}
			if(g==355) {object.setAttribute("top","850"); object.setAttribute("left","750");}
			if(g==356) {object.setAttribute("top","850"); object.setAttribute("left","800");}
			if(g==357) {object.setAttribute("top","850"); object.setAttribute("left","850");}
			if(g==358) {object.setAttribute("top","850"); object.setAttribute("left","900");}
			if(g==359) {object.setAttribute("top","850"); object.setAttribute("left","950");}
			if(g==360) {object.setAttribute("top","900"); object.setAttribute("left","0  ");}
			if(g==361) {object.setAttribute("top","900"); object.setAttribute("left","50 ");}
			if(g==362) {object.setAttribute("top","900"); object.setAttribute("left","100");}
			if(g==363) {object.setAttribute("top","900"); object.setAttribute("left","150");}
			if(g==364) {object.setAttribute("top","900"); object.setAttribute("left","200");}
			if(g==365) {object.setAttribute("top","900"); object.setAttribute("left","250");}
			if(g==366) {object.setAttribute("top","900"); object.setAttribute("left","300");}
			if(g==367) {object.setAttribute("top","900"); object.setAttribute("left","350");}
			if(g==368) {object.setAttribute("top","900"); object.setAttribute("left","400");}
			if(g==369) {object.setAttribute("top","900"); object.setAttribute("left","450");}
			if(g==370) {object.setAttribute("top","900"); object.setAttribute("left","500");}
			if(g==371) {object.setAttribute("top","900"); object.setAttribute("left","550");}
			if(g==372) {object.setAttribute("top","900"); object.setAttribute("left","600");}
			if(g==373) {object.setAttribute("top","900"); object.setAttribute("left","650");}
			if(g==374) {object.setAttribute("top","900"); object.setAttribute("left","700");}
			if(g==375) {object.setAttribute("top","900"); object.setAttribute("left","750");}
			if(g==376) {object.setAttribute("top","900"); object.setAttribute("left","800");}
			if(g==377) {object.setAttribute("top","900"); object.setAttribute("left","850");}
			if(g==378) {object.setAttribute("top","900"); object.setAttribute("left","900");}
			if(g==379) {object.setAttribute("top","900"); object.setAttribute("left","950");}
			if(g==380) {object.setAttribute("top","950"); object.setAttribute("left","0  ");}
			if(g==381) {object.setAttribute("top","950"); object.setAttribute("left","50 ");}
			if(g==382) {object.setAttribute("top","950"); object.setAttribute("left","100");}
			if(g==383) {object.setAttribute("top","950"); object.setAttribute("left","150");}
			if(g==384) {object.setAttribute("top","950"); object.setAttribute("left","200");}
			if(g==385) {object.setAttribute("top","950"); object.setAttribute("left","250");}
			if(g==386) {object.setAttribute("top","950"); object.setAttribute("left","300");}
			if(g==387) {object.setAttribute("top","950"); object.setAttribute("left","350");}
			if(g==388) {object.setAttribute("top","950"); object.setAttribute("left","400");}
			if(g==389) {object.setAttribute("top","950"); object.setAttribute("left","450");}
			if(g==390) {object.setAttribute("top","950"); object.setAttribute("left","500");}
			if(g==391) {object.setAttribute("top","950"); object.setAttribute("left","550");}
			if(g==392) {object.setAttribute("top","950"); object.setAttribute("left","600");}
			if(g==393) {object.setAttribute("top","950"); object.setAttribute("left","650");}
			if(g==394) {object.setAttribute("top","950"); object.setAttribute("left","700");}
			if(g==395) {object.setAttribute("top","950"); object.setAttribute("left","750");}
			if(g==396) {object.setAttribute("top","950"); object.setAttribute("left","800");}
			if(g==397) {object.setAttribute("top","950"); object.setAttribute("left","850");}
			if(g==398) {object.setAttribute("top","950"); object.setAttribute("left","900");}
			if(g==399) {object.setAttribute("top","950"); object.setAttribute("left","950");}
			parentDiv.appendChild(object);
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

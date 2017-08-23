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
		if(target=="1") {}
		if(target=="2") {
			var object = document.createElement("canvas");
			object.setAttribute("class","Block_Object");
			object.setAttribute("id",string(g));
			object.setAttribute("width","50");
			object.setAttribute("height","50");
			object.setAttribute("position","absolute");
			if(g==0  ) {setAttribute("top","0  "); setAttribute("left","0  ");}
			if(g==1  ) {setAttribute("top","0  "); setAttribute("left","50 ");}
			if(g==2  ) {setAttribute("top","0  "); setAttribute("left","100");}
			if(g==3  ) {setAttribute("top","0  "); setAttribute("left","150");}
			if(g==4  ) {setAttribute("top","0  "); setAttribute("left","200");}
			if(g==5  ) {setAttribute("top","0  "); setAttribute("left","250");}
			if(g==6  ) {setAttribute("top","0  "); setAttribute("left","300");}
			if(g==7  ) {setAttribute("top","0  "); setAttribute("left","350");}
			if(g==8  ) {setAttribute("top","0  "); setAttribute("left","400");}
			if(g==9  ) {setAttribute("top","0  "); setAttribute("left","450");}
			if(g==10 ) {setAttribute("top","0  "); setAttribute("left","500");}
			if(g==11 ) {setAttribute("top","0  "); setAttribute("left","550");}
			if(g==12 ) {setAttribute("top","0  "); setAttribute("left","600");}
			if(g==13 ) {setAttribute("top","0  "); setAttribute("left","650");}
			if(g==14 ) {setAttribute("top","0  "); setAttribute("left","700");}
			if(g==15 ) {setAttribute("top","0  "); setAttribute("left","750");}
			if(g==16 ) {setAttribute("top","0  "); setAttribute("left","800");}
			if(g==17 ) {setAttribute("top","0  "); setAttribute("left","850");}
			if(g==18 ) {setAttribute("top","0  "); setAttribute("left","900");}
			if(g==19 ) {setAttribute("top","0  "); setAttribute("left","950");}
			if(g==20 ) {setAttribute("top","50 "); setAttribute("left","0  ");}
			if(g==21 ) {setAttribute("top","50 "); setAttribute("left","50 ");}
			if(g==22 ) {setAttribute("top","50 "); setAttribute("left","100");}
			if(g==23 ) {setAttribute("top","50 "); setAttribute("left","150");}
			if(g==24 ) {setAttribute("top","50 "); setAttribute("left","200");}
			if(g==25 ) {setAttribute("top","50 "); setAttribute("left","250");}
			if(g==26 ) {setAttribute("top","50 "); setAttribute("left","300");}
			if(g==27 ) {setAttribute("top","50 "); setAttribute("left","350");}
			if(g==28 ) {setAttribute("top","50 "); setAttribute("left","400");}
			if(g==29 ) {setAttribute("top","50 "); setAttribute("left","450");}
			if(g==30 ) {setAttribute("top","50 "); setAttribute("left","500");}
			if(g==31 ) {setAttribute("top","50 "); setAttribute("left","550");}
			if(g==32 ) {setAttribute("top","50 "); setAttribute("left","600");}
			if(g==33 ) {setAttribute("top","50 "); setAttribute("left","650");}
			if(g==34 ) {setAttribute("top","50 "); setAttribute("left","700");}
			if(g==35 ) {setAttribute("top","50 "); setAttribute("left","750");}
			if(g==36 ) {setAttribute("top","50 "); setAttribute("left","800");}
			if(g==37 ) {setAttribute("top","50 "); setAttribute("left","850");}
			if(g==38 ) {setAttribute("top","50 "); setAttribute("left","900");}
			if(g==39 ) {setAttribute("top","50 "); setAttribute("left","950");}
			if(g==40 ) {setAttribute("top","100"); setAttribute("left","0  ");}
			if(g==41 ) {setAttribute("top","100"); setAttribute("left","50 ");}
			if(g==42 ) {setAttribute("top","100"); setAttribute("left","100");}
			if(g==43 ) {setAttribute("top","100"); setAttribute("left","150");}
			if(g==44 ) {setAttribute("top","100"); setAttribute("left","200");}
			if(g==45 ) {setAttribute("top","100"); setAttribute("left","250");}
			if(g==46 ) {setAttribute("top","100"); setAttribute("left","300");}
			if(g==47 ) {setAttribute("top","100"); setAttribute("left","350");}
			if(g==48 ) {setAttribute("top","100"); setAttribute("left","400");}
			if(g==49 ) {setAttribute("top","100"); setAttribute("left","450");}
			if(g==50 ) {setAttribute("top","100"); setAttribute("left","500");}
			if(g==51 ) {setAttribute("top","100"); setAttribute("left","550");}
			if(g==52 ) {setAttribute("top","100"); setAttribute("left","600");}
			if(g==53 ) {setAttribute("top","100"); setAttribute("left","650");}
			if(g==54 ) {setAttribute("top","100"); setAttribute("left","700");}
			if(g==55 ) {setAttribute("top","100"); setAttribute("left","750");}
			if(g==56 ) {setAttribute("top","100"); setAttribute("left","800");}
			if(g==57 ) {setAttribute("top","100"); setAttribute("left","850");}
			if(g==58 ) {setAttribute("top","100"); setAttribute("left","900");}
			if(g==59 ) {setAttribute("top","100"); setAttribute("left","950");}
			if(g==60 ) {setAttribute("top","150"); setAttribute("left","0  ");}
			if(g==61 ) {setAttribute("top","150"); setAttribute("left","50 ");}
			if(g==62 ) {setAttribute("top","150"); setAttribute("left","100");}
			if(g==63 ) {setAttribute("top","150"); setAttribute("left","150");}
			if(g==64 ) {setAttribute("top","150"); setAttribute("left","200");}
			if(g==65 ) {setAttribute("top","150"); setAttribute("left","250");}
			if(g==66 ) {setAttribute("top","150"); setAttribute("left","300");}
			if(g==67 ) {setAttribute("top","150"); setAttribute("left","350");}
			if(g==68 ) {setAttribute("top","150"); setAttribute("left","400");}
			if(g==69 ) {setAttribute("top","150"); setAttribute("left","450");}
			if(g==70 ) {setAttribute("top","150"); setAttribute("left","500");}
			if(g==71 ) {setAttribute("top","150"); setAttribute("left","550");}
			if(g==72 ) {setAttribute("top","150"); setAttribute("left","600");}
			if(g==73 ) {setAttribute("top","150"); setAttribute("left","650");}
			if(g==74 ) {setAttribute("top","150"); setAttribute("left","700");}
			if(g==75 ) {setAttribute("top","150"); setAttribute("left","750");}
			if(g==76 ) {setAttribute("top","150"); setAttribute("left","800");}
			if(g==77 ) {setAttribute("top","150"); setAttribute("left","850");}
			if(g==78 ) {setAttribute("top","150"); setAttribute("left","900");}
			if(g==79 ) {setAttribute("top","150"); setAttribute("left","950");}
			if(g==80 ) {setAttribute("top","200"); setAttribute("left","0  ");}
			if(g==81 ) {setAttribute("top","200"); setAttribute("left","50 ");}
			if(g==82 ) {setAttribute("top","200"); setAttribute("left","100");}
			if(g==83 ) {setAttribute("top","200"); setAttribute("left","150");}
			if(g==84 ) {setAttribute("top","200"); setAttribute("left","200");}
			if(g==85 ) {setAttribute("top","200"); setAttribute("left","250");}
			if(g==86 ) {setAttribute("top","200"); setAttribute("left","300");}
			if(g==87 ) {setAttribute("top","200"); setAttribute("left","350");}
			if(g==88 ) {setAttribute("top","200"); setAttribute("left","400");}
			if(g==89 ) {setAttribute("top","200"); setAttribute("left","450");}
			if(g==90 ) {setAttribute("top","200"); setAttribute("left","500");}
			if(g==91 ) {setAttribute("top","200"); setAttribute("left","550");}
			if(g==92 ) {setAttribute("top","200"); setAttribute("left","600");}
			if(g==93 ) {setAttribute("top","200"); setAttribute("left","650");}
			if(g==94 ) {setAttribute("top","200"); setAttribute("left","700");}
			if(g==95 ) {setAttribute("top","200"); setAttribute("left","750");}
			if(g==96 ) {setAttribute("top","200"); setAttribute("left","800");}
			if(g==97 ) {setAttribute("top","200"); setAttribute("left","850");}
			if(g==98 ) {setAttribute("top","200"); setAttribute("left","900");}
			if(g==99 ) {setAttribute("top","200"); setAttribute("left","950");}
			if(g==100) {setAttribute("top","250"); setAttribute("left","0  ");}
			if(g==101) {setAttribute("top","250"); setAttribute("left","50 ");}
			if(g==102) {setAttribute("top","250"); setAttribute("left","100");}
			if(g==103) {setAttribute("top","250"); setAttribute("left","150");}
			if(g==104) {setAttribute("top","250"); setAttribute("left","200");}
			if(g==105) {setAttribute("top","250"); setAttribute("left","250");}
			if(g==106) {setAttribute("top","250"); setAttribute("left","300");}
			if(g==107) {setAttribute("top","250"); setAttribute("left","350");}
			if(g==108) {setAttribute("top","250"); setAttribute("left","400");}
			if(g==109) {setAttribute("top","250"); setAttribute("left","450");}
			if(g==110) {setAttribute("top","250"); setAttribute("left","500");}
			if(g==111) {setAttribute("top","250"); setAttribute("left","550");}
			if(g==112) {setAttribute("top","250"); setAttribute("left","600");}
			if(g==113) {setAttribute("top","250"); setAttribute("left","650");}
			if(g==114) {setAttribute("top","250"); setAttribute("left","700");}
			if(g==115) {setAttribute("top","250"); setAttribute("left","750");}
			if(g==116) {setAttribute("top","250"); setAttribute("left","800");}
			if(g==117) {setAttribute("top","250"); setAttribute("left","850");}
			if(g==118) {setAttribute("top","250"); setAttribute("left","900");}
			if(g==119) {setAttribute("top","250"); setAttribute("left","950");}
			if(g==120) {setAttribute("top","300"); setAttribute("left","0  ");}
			if(g==121) {setAttribute("top","300"); setAttribute("left","50 ");}
			if(g==122) {setAttribute("top","300"); setAttribute("left","100");}
			if(g==123) {setAttribute("top","300"); setAttribute("left","150");}
			if(g==124) {setAttribute("top","300"); setAttribute("left","200");}
			if(g==125) {setAttribute("top","300"); setAttribute("left","250");}
			if(g==126) {setAttribute("top","300"); setAttribute("left","300");}
			if(g==127) {setAttribute("top","300"); setAttribute("left","350");}
			if(g==128) {setAttribute("top","300"); setAttribute("left","400");}
			if(g==129) {setAttribute("top","300"); setAttribute("left","450");}
			if(g==130) {setAttribute("top","300"); setAttribute("left","500");}
			if(g==131) {setAttribute("top","300"); setAttribute("left","550");}
			if(g==132) {setAttribute("top","300"); setAttribute("left","600");}
			if(g==133) {setAttribute("top","300"); setAttribute("left","650");}
			if(g==134) {setAttribute("top","300"); setAttribute("left","700");}
			if(g==135) {setAttribute("top","300"); setAttribute("left","750");}
			if(g==136) {setAttribute("top","300"); setAttribute("left","800");}
			if(g==137) {setAttribute("top","300"); setAttribute("left","850");}
			if(g==138) {setAttribute("top","300"); setAttribute("left","900");}
			if(g==139) {setAttribute("top","300"); setAttribute("left","950");}
			if(g==140) {setAttribute("top","350"); setAttribute("left","0  ");}
			if(g==141) {setAttribute("top","350"); setAttribute("left","50 ");}
			if(g==142) {setAttribute("top","350"); setAttribute("left","100");}
			if(g==143) {setAttribute("top","350"); setAttribute("left","150");}
			if(g==144) {setAttribute("top","350"); setAttribute("left","200");}
			if(g==145) {setAttribute("top","350"); setAttribute("left","250");}
			if(g==146) {setAttribute("top","350"); setAttribute("left","300");}
			if(g==147) {setAttribute("top","350"); setAttribute("left","350");}
			if(g==148) {setAttribute("top","350"); setAttribute("left","400");}
			if(g==149) {setAttribute("top","350"); setAttribute("left","450");}
			if(g==150) {setAttribute("top","350"); setAttribute("left","500");}
			if(g==151) {setAttribute("top","350"); setAttribute("left","550");}
			if(g==152) {setAttribute("top","350"); setAttribute("left","600");}
			if(g==153) {setAttribute("top","350"); setAttribute("left","650");}
			if(g==154) {setAttribute("top","350"); setAttribute("left","700");}
			if(g==155) {setAttribute("top","350"); setAttribute("left","750");}
			if(g==156) {setAttribute("top","350"); setAttribute("left","800");}
			if(g==157) {setAttribute("top","350"); setAttribute("left","850");}
			if(g==158) {setAttribute("top","350"); setAttribute("left","900");}
			if(g==159) {setAttribute("top","350"); setAttribute("left","950");}
			if(g==160) {setAttribute("top","400"); setAttribute("left","0  ");}
			if(g==161) {setAttribute("top","400"); setAttribute("left","50 ");}
			if(g==162) {setAttribute("top","400"); setAttribute("left","100");}
			if(g==163) {setAttribute("top","400"); setAttribute("left","150");}
			if(g==164) {setAttribute("top","400"); setAttribute("left","200");}
			if(g==165) {setAttribute("top","400"); setAttribute("left","250");}
			if(g==166) {setAttribute("top","400"); setAttribute("left","300");}
			if(g==167) {setAttribute("top","400"); setAttribute("left","350");}
			if(g==168) {setAttribute("top","400"); setAttribute("left","400");}
			if(g==169) {setAttribute("top","400"); setAttribute("left","450");}
			if(g==170) {setAttribute("top","400"); setAttribute("left","500");}
			if(g==171) {setAttribute("top","400"); setAttribute("left","550");}
			if(g==172) {setAttribute("top","400"); setAttribute("left","600");}
			if(g==173) {setAttribute("top","400"); setAttribute("left","650");}
			if(g==174) {setAttribute("top","400"); setAttribute("left","700");}
			if(g==175) {setAttribute("top","400"); setAttribute("left","750");}
			if(g==176) {setAttribute("top","400"); setAttribute("left","800");}
			if(g==177) {setAttribute("top","400"); setAttribute("left","850");}
			if(g==178) {setAttribute("top","400"); setAttribute("left","900");}
			if(g==179) {setAttribute("top","400"); setAttribute("left","950");}
			if(g==180) {setAttribute("top","450"); setAttribute("left","0  ");}
			if(g==181) {setAttribute("top","450"); setAttribute("left","50 ");}
			if(g==182) {setAttribute("top","450"); setAttribute("left","100");}
			if(g==183) {setAttribute("top","450"); setAttribute("left","150");}
			if(g==184) {setAttribute("top","450"); setAttribute("left","200");}
			if(g==185) {setAttribute("top","450"); setAttribute("left","250");}
			if(g==186) {setAttribute("top","450"); setAttribute("left","300");}
			if(g==187) {setAttribute("top","450"); setAttribute("left","350");}
			if(g==188) {setAttribute("top","450"); setAttribute("left","400");}
			if(g==189) {setAttribute("top","450"); setAttribute("left","450");}
			if(g==190) {setAttribute("top","450"); setAttribute("left","500");}
			if(g==191) {setAttribute("top","450"); setAttribute("left","550");}
			if(g==192) {setAttribute("top","450"); setAttribute("left","600");}
			if(g==193) {setAttribute("top","450"); setAttribute("left","650");}
			if(g==194) {setAttribute("top","450"); setAttribute("left","700");}
			if(g==195) {setAttribute("top","450"); setAttribute("left","750");}
			if(g==196) {setAttribute("top","450"); setAttribute("left","800");}
			if(g==197) {setAttribute("top","450"); setAttribute("left","850");}
			if(g==198) {setAttribute("top","450"); setAttribute("left","900");}
			if(g==199) {setAttribute("top","450"); setAttribute("left","950");}
			if(g==200) {setAttribute("top","500"); setAttribute("left","0  ");}
			if(g==201) {setAttribute("top","500"); setAttribute("left","50 ");}
			if(g==202) {setAttribute("top","500"); setAttribute("left","100");}
			if(g==203) {setAttribute("top","500"); setAttribute("left","150");}
			if(g==204) {setAttribute("top","500"); setAttribute("left","200");}
			if(g==205) {setAttribute("top","500"); setAttribute("left","250");}
			if(g==206) {setAttribute("top","500"); setAttribute("left","300");}
			if(g==207) {setAttribute("top","500"); setAttribute("left","350");}
			if(g==208) {setAttribute("top","500"); setAttribute("left","400");}
			if(g==209) {setAttribute("top","500"); setAttribute("left","450");}
			if(g==210) {setAttribute("top","500"); setAttribute("left","500");}
			if(g==211) {setAttribute("top","500"); setAttribute("left","550");}
			if(g==212) {setAttribute("top","500"); setAttribute("left","600");}
			if(g==213) {setAttribute("top","500"); setAttribute("left","650");}
			if(g==214) {setAttribute("top","500"); setAttribute("left","700");}
			if(g==215) {setAttribute("top","500"); setAttribute("left","750");}
			if(g==216) {setAttribute("top","500"); setAttribute("left","800");}
			if(g==217) {setAttribute("top","500"); setAttribute("left","850");}
			if(g==218) {setAttribute("top","500"); setAttribute("left","900");}
			if(g==219) {setAttribute("top","500"); setAttribute("left","950");}
			if(g==220) {setAttribute("top","550"); setAttribute("left","0  ");}
			if(g==221) {setAttribute("top","550"); setAttribute("left","50 ");}
			if(g==222) {setAttribute("top","550"); setAttribute("left","100");}
			if(g==223) {setAttribute("top","550"); setAttribute("left","150");}
			if(g==224) {setAttribute("top","550"); setAttribute("left","200");}
			if(g==225) {setAttribute("top","550"); setAttribute("left","250");}
			if(g==226) {setAttribute("top","550"); setAttribute("left","300");}
			if(g==227) {setAttribute("top","550"); setAttribute("left","350");}
			if(g==228) {setAttribute("top","550"); setAttribute("left","400");}
			if(g==229) {setAttribute("top","550"); setAttribute("left","450");}
			if(g==230) {setAttribute("top","550"); setAttribute("left","500");}
			if(g==231) {setAttribute("top","550"); setAttribute("left","550");}
			if(g==232) {setAttribute("top","550"); setAttribute("left","600");}
			if(g==233) {setAttribute("top","550"); setAttribute("left","650");}
			if(g==234) {setAttribute("top","550"); setAttribute("left","700");}
			if(g==235) {setAttribute("top","550"); setAttribute("left","750");}
			if(g==236) {setAttribute("top","550"); setAttribute("left","800");}
			if(g==237) {setAttribute("top","550"); setAttribute("left","850");}
			if(g==238) {setAttribute("top","550"); setAttribute("left","900");}
			if(g==239) {setAttribute("top","550"); setAttribute("left","950");}
			if(g==240) {setAttribute("top","600"); setAttribute("left","0  ");}
			if(g==241) {setAttribute("top","600"); setAttribute("left","50 ");}
			if(g==242) {setAttribute("top","600"); setAttribute("left","100");}
			if(g==243) {setAttribute("top","600"); setAttribute("left","150");}
			if(g==244) {setAttribute("top","600"); setAttribute("left","200");}
			if(g==245) {setAttribute("top","600"); setAttribute("left","250");}
			if(g==246) {setAttribute("top","600"); setAttribute("left","300");}
			if(g==247) {setAttribute("top","600"); setAttribute("left","350");}
			if(g==248) {setAttribute("top","600"); setAttribute("left","400");}
			if(g==249) {setAttribute("top","600"); setAttribute("left","450");}
			if(g==250) {setAttribute("top","600"); setAttribute("left","500");}
			if(g==251) {setAttribute("top","600"); setAttribute("left","550");}
			if(g==252) {setAttribute("top","600"); setAttribute("left","600");}
			if(g==253) {setAttribute("top","600"); setAttribute("left","650");}
			if(g==254) {setAttribute("top","600"); setAttribute("left","700");}
			if(g==255) {setAttribute("top","600"); setAttribute("left","750");}
			if(g==256) {setAttribute("top","600"); setAttribute("left","800");}
			if(g==257) {setAttribute("top","600"); setAttribute("left","850");}
			if(g==258) {setAttribute("top","600"); setAttribute("left","900");}
			if(g==259) {setAttribute("top","600"); setAttribute("left","950");}
			if(g==260) {setAttribute("top","650"); setAttribute("left","0  ");}
			if(g==261) {setAttribute("top","650"); setAttribute("left","50 ");}
			if(g==262) {setAttribute("top","650"); setAttribute("left","100");}
			if(g==263) {setAttribute("top","650"); setAttribute("left","150");}
			if(g==264) {setAttribute("top","650"); setAttribute("left","200");}
			if(g==265) {setAttribute("top","650"); setAttribute("left","250");}
			if(g==266) {setAttribute("top","650"); setAttribute("left","300");}
			if(g==267) {setAttribute("top","650"); setAttribute("left","350");}
			if(g==268) {setAttribute("top","650"); setAttribute("left","400");}
			if(g==269) {setAttribute("top","650"); setAttribute("left","450");}
			if(g==270) {setAttribute("top","650"); setAttribute("left","500");}
			if(g==271) {setAttribute("top","650"); setAttribute("left","550");}
			if(g==272) {setAttribute("top","650"); setAttribute("left","600");}
			if(g==273) {setAttribute("top","650"); setAttribute("left","650");}
			if(g==274) {setAttribute("top","650"); setAttribute("left","700");}
			if(g==275) {setAttribute("top","650"); setAttribute("left","750");}
			if(g==276) {setAttribute("top","650"); setAttribute("left","800");}
			if(g==277) {setAttribute("top","650"); setAttribute("left","850");}
			if(g==278) {setAttribute("top","650"); setAttribute("left","900");}
			if(g==279) {setAttribute("top","650"); setAttribute("left","950");}
			if(g==280) {setAttribute("top","700"); setAttribute("left","0  ");}
			if(g==281) {setAttribute("top","700"); setAttribute("left","50 ");}
			if(g==282) {setAttribute("top","700"); setAttribute("left","100");}
			if(g==283) {setAttribute("top","700"); setAttribute("left","150");}
			if(g==284) {setAttribute("top","700"); setAttribute("left","200");}
			if(g==285) {setAttribute("top","700"); setAttribute("left","250");}
			if(g==286) {setAttribute("top","700"); setAttribute("left","300");}
			if(g==287) {setAttribute("top","700"); setAttribute("left","350");}
			if(g==288) {setAttribute("top","700"); setAttribute("left","400");}
			if(g==289) {setAttribute("top","700"); setAttribute("left","450");}
			if(g==290) {setAttribute("top","700"); setAttribute("left","500");}
			if(g==291) {setAttribute("top","700"); setAttribute("left","550");}
			if(g==292) {setAttribute("top","700"); setAttribute("left","600");}
			if(g==293) {setAttribute("top","700"); setAttribute("left","650");}
			if(g==294) {setAttribute("top","700"); setAttribute("left","700");}
			if(g==295) {setAttribute("top","700"); setAttribute("left","750");}
			if(g==296) {setAttribute("top","700"); setAttribute("left","800");}
			if(g==297) {setAttribute("top","700"); setAttribute("left","850");}
			if(g==298) {setAttribute("top","700"); setAttribute("left","900");}
			if(g==299) {setAttribute("top","700"); setAttribute("left","950");}
			if(g==300) {setAttribute("top","750"); setAttribute("left","0  ");}
			if(g==301) {setAttribute("top","750"); setAttribute("left","50 ");}
			if(g==302) {setAttribute("top","750"); setAttribute("left","100");}
			if(g==303) {setAttribute("top","750"); setAttribute("left","150");}
			if(g==304) {setAttribute("top","750"); setAttribute("left","200");}
			if(g==305) {setAttribute("top","750"); setAttribute("left","250");}
			if(g==306) {setAttribute("top","750"); setAttribute("left","300");}
			if(g==307) {setAttribute("top","750"); setAttribute("left","350");}
			if(g==308) {setAttribute("top","750"); setAttribute("left","400");}
			if(g==309) {setAttribute("top","750"); setAttribute("left","450");}
			if(g==310) {setAttribute("top","750"); setAttribute("left","500");}
			if(g==311) {setAttribute("top","750"); setAttribute("left","550");}
			if(g==312) {setAttribute("top","750"); setAttribute("left","600");}
			if(g==313) {setAttribute("top","750"); setAttribute("left","650");}
			if(g==314) {setAttribute("top","750"); setAttribute("left","700");}
			if(g==315) {setAttribute("top","750"); setAttribute("left","750");}
			if(g==316) {setAttribute("top","750"); setAttribute("left","800");}
			if(g==317) {setAttribute("top","750"); setAttribute("left","850");}
			if(g==318) {setAttribute("top","750"); setAttribute("left","900");}
			if(g==319) {setAttribute("top","750"); setAttribute("left","950");}
			if(g==320) {setAttribute("top","800"); setAttribute("left","0  ");}
			if(g==321) {setAttribute("top","800"); setAttribute("left","50 ");}
			if(g==322) {setAttribute("top","800"); setAttribute("left","100");}
			if(g==323) {setAttribute("top","800"); setAttribute("left","150");}
			if(g==324) {setAttribute("top","800"); setAttribute("left","200");}
			if(g==325) {setAttribute("top","800"); setAttribute("left","250");}
			if(g==326) {setAttribute("top","800"); setAttribute("left","300");}
			if(g==327) {setAttribute("top","800"); setAttribute("left","350");}
			if(g==328) {setAttribute("top","800"); setAttribute("left","400");}
			if(g==329) {setAttribute("top","800"); setAttribute("left","450");}
			if(g==330) {setAttribute("top","800"); setAttribute("left","500");}
			if(g==331) {setAttribute("top","800"); setAttribute("left","550");}
			if(g==332) {setAttribute("top","800"); setAttribute("left","600");}
			if(g==333) {setAttribute("top","800"); setAttribute("left","650");}
			if(g==334) {setAttribute("top","800"); setAttribute("left","700");}
			if(g==335) {setAttribute("top","800"); setAttribute("left","750");}
			if(g==336) {setAttribute("top","800"); setAttribute("left","800");}
			if(g==337) {setAttribute("top","800"); setAttribute("left","850");}
			if(g==338) {setAttribute("top","800"); setAttribute("left","900");}
			if(g==339) {setAttribute("top","800"); setAttribute("left","950");}
			if(g==340) {setAttribute("top","850"); setAttribute("left","0  ");}
			if(g==341) {setAttribute("top","850"); setAttribute("left","50 ");}
			if(g==342) {setAttribute("top","850"); setAttribute("left","100");}
			if(g==343) {setAttribute("top","850"); setAttribute("left","150");}
			if(g==344) {setAttribute("top","850"); setAttribute("left","200");}
			if(g==345) {setAttribute("top","850"); setAttribute("left","250");}
			if(g==346) {setAttribute("top","850"); setAttribute("left","300");}
			if(g==347) {setAttribute("top","850"); setAttribute("left","350");}
			if(g==348) {setAttribute("top","850"); setAttribute("left","400");}
			if(g==349) {setAttribute("top","850"); setAttribute("left","450");}
			if(g==350) {setAttribute("top","850"); setAttribute("left","500");}
			if(g==351) {setAttribute("top","850"); setAttribute("left","550");}
			if(g==352) {setAttribute("top","850"); setAttribute("left","600");}
			if(g==353) {setAttribute("top","850"); setAttribute("left","650");}
			if(g==354) {setAttribute("top","850"); setAttribute("left","700");}
			if(g==355) {setAttribute("top","850"); setAttribute("left","750");}
			if(g==356) {setAttribute("top","850"); setAttribute("left","800");}
			if(g==357) {setAttribute("top","850"); setAttribute("left","850");}
			if(g==358) {setAttribute("top","850"); setAttribute("left","900");}
			if(g==359) {setAttribute("top","850"); setAttribute("left","950");}
			if(g==360) {setAttribute("top","900"); setAttribute("left","0  ");}
			if(g==361) {setAttribute("top","900"); setAttribute("left","50 ");}
			if(g==362) {setAttribute("top","900"); setAttribute("left","100");}
			if(g==363) {setAttribute("top","900"); setAttribute("left","150");}
			if(g==364) {setAttribute("top","900"); setAttribute("left","200");}
			if(g==365) {setAttribute("top","900"); setAttribute("left","250");}
			if(g==366) {setAttribute("top","900"); setAttribute("left","300");}
			if(g==367) {setAttribute("top","900"); setAttribute("left","350");}
			if(g==368) {setAttribute("top","900"); setAttribute("left","400");}
			if(g==369) {setAttribute("top","900"); setAttribute("left","450");}
			if(g==370) {setAttribute("top","900"); setAttribute("left","500");}
			if(g==371) {setAttribute("top","900"); setAttribute("left","550");}
			if(g==372) {setAttribute("top","900"); setAttribute("left","600");}
			if(g==373) {setAttribute("top","900"); setAttribute("left","650");}
			if(g==374) {setAttribute("top","900"); setAttribute("left","700");}
			if(g==375) {setAttribute("top","900"); setAttribute("left","750");}
			if(g==376) {setAttribute("top","900"); setAttribute("left","800");}
			if(g==377) {setAttribute("top","900"); setAttribute("left","850");}
			if(g==378) {setAttribute("top","900"); setAttribute("left","900");}
			if(g==379) {setAttribute("top","900"); setAttribute("left","950");}
			if(g==380) {setAttribute("top","950"); setAttribute("left","0  ");}
			if(g==381) {setAttribute("top","950"); setAttribute("left","50 ");}
			if(g==382) {setAttribute("top","950"); setAttribute("left","100");}
			if(g==383) {setAttribute("top","950"); setAttribute("left","150");}
			if(g==384) {setAttribute("top","950"); setAttribute("left","200");}
			if(g==385) {setAttribute("top","950"); setAttribute("left","250");}
			if(g==386) {setAttribute("top","950"); setAttribute("left","300");}
			if(g==387) {setAttribute("top","950"); setAttribute("left","350");}
			if(g==388) {setAttribute("top","950"); setAttribute("left","400");}
			if(g==389) {setAttribute("top","950"); setAttribute("left","450");}
			if(g==390) {setAttribute("top","950"); setAttribute("left","500");}
			if(g==391) {setAttribute("top","950"); setAttribute("left","550");}
			if(g==392) {setAttribute("top","950"); setAttribute("left","600");}
			if(g==393) {setAttribute("top","950"); setAttribute("left","650");}
			if(g==394) {setAttribute("top","950"); setAttribute("left","700");}
			if(g==395) {setAttribute("top","950"); setAttribute("left","750");}
			if(g==396) {setAttribute("top","950"); setAttribute("left","800");}
			if(g==397) {setAttribute("top","950"); setAttribute("left","850");}
			if(g==398) {setAttribute("top","950"); setAttribute("left","900");}
			if(g==399) {setAttribute("top","950"); setAttribute("left","950");}
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

localStorage.removeItem("arr");
var lang = "en";
function uLan(){
	var curLan = navigator.language||navigator.userLanguage;
	curLan = curLan.substr(0, 2);
	if(curLan == "th" || curLan == "vi"){
		lang = curLan;
	}
}
if(localStorage.lang == undefined){
	uLan();
	localStorage.lang = lang;
}else{
	lang = localStorage.lang;
}

function cLang(cLan){
   lang = cLan;
	localStorage.lang = lang;
	catLan();
	wHome();
}

var mStatus = "none";
function menuBar(){
	if(mStatus == "none"){
		By("isMenu1").style.display = "block";
		By("isMenu2").className = "on";
		mStatus = "block";
	}
}
By("isMenu1").onclick = function(){
	By("isMenu1").style.display = "none";
	By("isMenu2").className = "off";
	mStatus = "none";
}

/**/
var firC = scrollTag = 0;
window.onscroll = function() {
	scrollTag = document.documentElement.scrollTop || document.body.scrollTop;
	switch(firC){
		case 0:
		if(scrollTag >= 200){
			firC = 1;
			By("dTop").style.display = "none";
			By("uTop").style.display = "block";
		}
		break;
		case 1:
		if(scrollTag < 200){
			firC = 0;
			By("dTop").style.display = "block";
			By("uTop").style.display = "none";
		}
		break;
	}
}
 
/*search text*/
var catNums = (Object.keys(text1).length)/langSum; 
function catLan(){
	var aaa = "";
	for(var i = 0; i < catNums; i++){
		 aaa += "<a href='#' onclick='showCat("+i+")'>"+text1["mKey"+(i+1)+lang]+"</a>";
	}
	By("sKey").innerHTML = aaa;
}
catLan();

var selCat = "";
function showCat(cVal){
   localStorage.selCat = cVal;
	location.href = "news_all.html";
}
/**/
function picLazy(){
echo.init({
	offset: 100,
	throttle: 250,
	unload: false,
	callback: function (element, op) {
	// console.log(element, 'has been', op + 'ed')
		if(op === 'load') {
			element.classList.add('loaded');
		}else{
			element.classList.remove('loaded');
		}
	}
  });
}	
picLazy();
var hOut = hdiv = cName = "";
var sList = 1;
function wHome(){
	var dLen = 1;
	var resH = "",ffname = "",tag0 = ""//,noF = ""; 
	hOut = cName = "";
	By("hCat").innerHTML = "";
	for(var i=0; i<dtp.length; i++){
		dLen = Object.keys(dtp[i]).length;
		if(dLen > 0){
		hOut = "<div class='pd home'><div class='pd_title'><p class='TL'>"+text1["mKey"+(i+1)+lang]+"</p></div> <div class='ser_group'>";
		if(dLen > 6){sList = 6;}else{sList = dLen;}
		for(var j=0; j<sList; j++){	
			cName = (i+1)+"_"+uTime[i][j];
			ffname = "file/"+fName+cName+".html";
			tag0 = "<span class='cTag'>"+dtp[i][cName][0]["1"];
			hdiv += "<h2><div class='ser_box'>"+tag0+"</span><a class='full' href='"+ffname+"'></a><div class='img'><img class='lazy' src='imgs/load.gif' data-echo='picture/view/"+fName+cName+".jpg' alt='"+dtp[i][cName][0][lang]+"'/><span>"+dtp[i][cName][0][lang]+"</span><div class='box_layer'></div></div><p>"+dtp[i][cName][0][lang]+"</p></div></h2>";
		}
		resH += hOut+hdiv+"</div></div>"+"<div class='moreC' onclick='showCat("+(i)+")'><span>More</span></div>";
		hdiv = "";
		}
	}
	By("hCat").innerHTML = resH;
}
wHome();
function By(id){
	return document.getElementById(id);
}

var st = speed = num = 0;
function fadeOut(cVal){
	By("tempT").style.display = "block";
	//By("tempT").style.top = 50+"px";
	clearInterval(st); 
	By("tempT").innerText = cVal;
	speed = speed || 20 ;
	num = 50;
	st = setInterval(function(){
		num--;
		By("tempT").style.opacity = num / 25 ;
		if(num <= 0){   
			clearInterval(st); 
			By("tempT").style.display = "none";
		}
	},speed);
}
function cMess(val){
	var cTArea = document.createElement("input"); 
	cTArea.setAttribute("value", val); 
	document.body.appendChild(cTArea); 
	cTArea.select();
	document.execCommand("copy"); 
	document.body.removeChild(cTArea);
	fadeOut("已複製");
}
/**/
var corVal = ["#ff7676e3","#41b141","#bfba10","#819fab","#ff47b6c7"];
var dSty = "<div class='ser_box1'>"; 
var cDict = "<a class='btn0' style='position:absolute;width:70px;' onclick='sDict(1)'><img src='imgs/s.gif'/></a>";
var cDict0 = "<a class='btn0' style='position:absolute;width:70px;' onclick='sDict(2)'><img src='imgs/s.gif'/></a>";
var dSty0 = "<div class='ser_box2' id='serId'>"; 
hOut = "<div class='pd home'><div class='pd_title'><p class='TL'>";
var rArr = sArr0.slice(2,sArr0.length-5-2);
var rArr0 = sArr0.slice(sArr0.length-5,sArr0.length);

var colT = 0;
var d2C = 0;
var ranArr = [];
function suiji(){
	ranArr = rArr.sort(
		function(){
			return Math.random()>0.5?-1:1;
		}
	); 
}
suiji();

var tList = "";
function Cword(){}
Cword.prototype = {
	dSen:"dSen0",
	sArr:rArr0,
	curT:sArr0[0],
	dSty:dSty,
	cDict:cDict,
	showL:rArr0.length-1,
	newi:0,
	cHtml:"<a href='",
	hzHtml:".html'>",
	eHtml:"</a>",
	pSty:"",
	ckey:"1",
	wName:"", // 
	wCtn:"",   //
   w:function(){
		this.pSty = "<pre style='font-size=;font-size: 24px;text-align: center;'>"+this.curT+"</pre>";
		for(var i=this.newi; i<=this.showL; i++){
			this.pSty += "<pre style='color:"+corVal[i]+"'>"+this.sArr[i]+"</pre>";
		}
		tList += this.cDict+this.dSty+this.pSty+"</div>";
	},
	w1:function(){
		var gLnum = 1;
		if(colT >= corVal.length){colT = 0;}
		this.pSty = "<pre style='font-size=;font-size: 24px;text-align: center;'>"+this.curT+"</pre>";
		for(var i=this.newi; i<=this.showL; i++){
			gLnum = (Object.keys(this.wName[1]["rList"][i-1]).length).toString();
			this.pSty += this.cHtml+"file/"+this.wCtn+(i-1)+"_"+(gLnum)+this.hzHtml+"<pre style='color:"+corVal[colT]+"'>"+this.wName[1]["rList"][i-1][gLnum][0]+"</pre>"+this.eHtml;
			colT++;
		}
		By(this.dSen).innerHTML += hOut+text2["mKey"+this.ckey]+"</p></div>"+this.dSty+this.pSty+"</div>";
	},
};
By("dSen0").innerHTML = "<div class='pd home'><div class='pd_title'><p class='TL'>"+text2["mKey1"]+"</p></div>";
Cword.prototype.w();  // 句子左
var d2 = new Cword;  // 句子右
d2.curT = sArr0[1];
d2.sArr = ranArr;
d2.dSty = dSty0;
d2.cDict = cDict0;
d2.showL = d2C
d2.newi = d2C;
d2.w();

By("dSen0").innerHTML = "<div class='pd home'><div class='pd_title'><p class='TL'>"+text2["mKey1"]+"</p></div>"+tList+"</div>";
tList = "";
By("dSen0").innerHTML += "<div class='moreC mSpe' onclick='next()'><span>Next</span></div>";
var d3 = new Cword;  // 字典
d3.showL = Object.keys(data0[1].rList).length; // 字典顯示數量  總頁數 
d3.dSen = "dSen1";
d3.ckey = "2";
d3.wName = data0;
d3.wCtn = fName0;
d3.newi = d3.showL-4; //參數4臨時固定，數據showL長度 < 4 則出錯
d3.w1();
By("dSen1").innerHTML += "<div class='moreC mSpe'><a href='dict.html'>More</a></div>";



/**/
colT = 1;
function next(){
	By("serId").innerHTML = "";
	if(colT >= corVal.length){colT = 0;}
	if(d2C < rArr.length-1){
		d2C++;
		By("serId").innerHTML += "<pre style='font-size=;font-size: 24px;text-align: center;'>"+sArr0[1]+"</pre>"+"<pre>"+"<pre style='color:"+corVal[colT]+"'>"+ranArr[d2C]+"</pre>";
	}else{
		d2C = 0;
		suiji();
	}
	colT++;
}
/**/
function sDict(val){
	var sStr = By("dSen0").getElementsByClassName("ser_box"+val)[0].innerText;
	localStorage.sStr = sStr;
	location.href = "file/cus.html";
}
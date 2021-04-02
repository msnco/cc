var pageNums = 0;
var fdArr = [];
var wCtn = wName = "";
var cPath = "file/";
var isUrl = window.location.href;
var firName = xyStr("/","_").substring(1,wCtn.length);
//switch(firName){
 //	case fName1:
//	wCtn = fName1;
//	wName = sArr1;
//	break;
//	default:
	wCtn = fName0;
	wName = data0;  // dict 頁面 暫時 只搜索字典，不加入其他模組
//	break; 
//}
function xyStr(a,b){
	var start0 = isUrl.lastIndexOf(a);
	var end0 = isUrl.lastIndexOf(b);
	return isUrl.substring(start0+1,end0);
}

var pName = xyStr("/",".");
var pName0 = xyStr("/",".").substring(wCtn.length);
var top0 = isUrl.substr(0,isUrl.lastIndexOf("/")+1);
var fName = 1;
var amountPage = Math.ceil(pageNums/showNums);   // 詳情頁 == pageNums
var pl,curPage = 1;
var isLi = pageLists = btn0 = inputVal = "";
var scrollTag = speed = num = st = firC = scrollTag0 = 0;
var serLists = cur_url = "";
var indexVal = cusT = 0;
var curView = 1;
var fdArr1 = [];
var cpObj = "";
var tf = false; 
var ptData = wName[1]["rList"];
function getNum(){
	fdArr = []; pageNums = 0;
	for(var i = 0; i < ptData.length; i++){     
		pageNums += Object.keys(wName[1]["rList"][i]).length;
		for(var j = 1; j <= Object.keys(wName[1]["rList"][i]).length; j++){  //對象長度
			fdArr.push(i+"_"+j);
		}
	}
	fdArr.reverse();
}
function clearSer(){
	localStorage.removeItem("fdArr");
   localStorage.removeItem("strArr");
}
function By(id){return document.getElementById(id);}
function getVal(){return By("searchTxt").value;}

if(pName != "cus"){
document.onkeydown = function(e){
	e = e||window.event;
	if(event.target.id =="searchTxt"){
		if(e.keyCode==13 ){
			sEd = 1;
			getWord(1); 
	    }
	}else{
		switch(e.keyCode) {
		case 37:
			prevPage();
			break;
		case 38:
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			break;
		case 39:
			nextPage();
			break; 
		case 40:
			window.scrollTo(0,document.body.scrollHeight);
			break; 		  
		} 
	}
}
}

window.onscroll = function() {
	scrollTag0 = document.documentElement.scrollTop || document.body.scrollTop;
	switch(firC){
		case 0:
		if(scrollTag0 >= 200){
			firC = 1;
			By("dTop").style.display = "none";
			By("uTop").style.display = "block";
		}
		break;
		case 1:
		if(scrollTag0 < 200){
			firC = 0;
			By("dTop").style.display = "block";
			By("uTop").style.display = "none";
		}
		break;
	}
}
function gTop(){
	if(window.screen.width <= 1024){
		By("searchTxt").scrollIntoView();
	}
}
function fadeOut(cVal){
	By("tempT").style.display = "block";
	scrollTag = document.documentElement.scrollTop || document.body.scrollTop;
	By("tempT").style.top = scrollTag+"px";
	clearInterval(st);
	By("tempT").innerText = cVal;
	speed = speed || 20 ;
	num = 50;
	
	st = setInterval(
	function(){
		num--;
		By("tempT").style.opacity = num / 25 ;
		if(num <= 0){   
			clearInterval(st);  
			By("tempT").style.display = "none";
		}
	},speed);
}
function gCk(){
	if(localStorage.strArr != undefined){
		strArr = localStorage.strArr; 
		strArr = JSON.parse(strArr);
	}
}
/*翻譯取詞*/
var reg = /^[0-9]*$/;
var regs = /[`~!@#$^&*()={}':;'\\\[\]\.,<>\/?~！@#￥……&*（）——【】'；：""'。，、？|/]/g;
var regZh = /[\u4E00-\u9FA5\uF900-\uFA2D/]/i;
var seled = resuStr = curWord = ""; 
var strArr1 = [];
var cutArr = [];
var strArr = {};
var cpTemp = "";
function cusW(str,val){
	var cGstr = "";
	for(var i=0; i<str.length; i++){
		cGstr = str.substring(i,i+1);
	//	console.log(i+" "+cGstr);
		if(wName[0]["zh"][0][cGstr] != undefined){
			cWord = wName[0][cGstr];
			curWord = str.substring(i,i+2);
			showView(curWord,"zh");
			i+=cpTemp;
		}
	}
	resuRun(val);
}
function cusEn(str,val){
	resuStr = str.replace(/\s{2,}/g," ").toLowerCase();  
	cutArr = resuStr.split(" ");
	for(var i=0; i<cutArr.length; i++){
		curWord = cutArr[i];
		if(curWord.length >= 3){
			f2(1);
		}
	}
	resuRun(val);
}
function gwResu(val){
	if(resuStr != ""){
		if(resuStr.match(regZh) != null){
			cusW(resuStr,val);  // 漢字
		}else{
			cusEn(resuStr,val);
		}
	}else{
		fadeOut("No words");
	}
}
/* function c123(){
	By("tArea").innerHTML = By("tArea").innerHTML.replace(/<[^>]*>/g," ");
} */
function gSword(){ // 劃詞
	if(window.getSelection() != ""){
		seled = window.getSelection();
		seled = seled.getRangeAt(0);
		resuStr = seled.toString();  
	}
	var tSa = {};
	var tFa = [];			
	resuStr = resuStr.replace(/[\r\n]/g," ");  //回車換行替換
	tSa = strArr;
	tFa = fdArr;
 	strArr = {};
	fdArr = []; 
	/**/
	gwResu(2);  
	strArr = tSa;
	fdArr = tFa; 
}
function getWord(val){
	resuStr = "";
	inputVal = getVal().trim().replace(/\s{2,}/g," ");
	inputVal = inputVal.replace(regs,"");
	By("data_list").innerHTML = ""; 
	By("data_list").style.display = "none";
	switch(inputVal){
		case "":
		d0.wRval = 0;
		d1.wRval = 0;
	//	localStorage.clear();
		clearSer();
		strArr = {};
		getNum();
		pageNums = fdArr.length;
		defP();
		break;
		default:
		if(sEd == 1){
			sEd = 0;
			resuRun(val);
		}else{
			resuStr = inputVal.toLowerCase();
			findData(resuStr,val);
		}
	}
}
function abcd(){}
abcd.prototype={ 
	cFile:1,
	btn0: "#",
	btn: "",
	wHTML:"dictAll",
	wRval:0,   // 有搜索結果時 = 1，沒有 = 0
	gp:"",
	np:"",  //pageView  nextP  prevP
	pp:"",  //
	wp:1,
	h:function(rVal){
	var j = sLen = 0;
	var str0 = "";
	var wLen = "";
	var curTitle = "";
	var sRstr = Object.keys(strArr);
	var cpNum = this.cFile-1;  
	if(this.wp > showNums && this.wHTML != "Cus0"){  // 控制dict每頁顯示數量 && 劃詞頁 沒分頁，不限制
		this.wp = showNums;
	}
		for(var i=0; i<this.wp; i++){ 				 //詳情頁 只顯示1條完整數據 wp = 1;
			fdArr1 = fdArr[cpNum].split("_");  	 	
			var cAreaNum = parseInt(fdArr1[0]);   		
			var cNum = fdArr1[1];   	 		
			this.btn0 = cPath+wCtn+cAreaNum+"_"+fdArr1[1]+".html"; 
		//	console.log(cAreaNum+" :: "+cNum);
			wLen = wName[1]["rList"][cAreaNum][cNum];  

			sLen = wLen.length;
			if( pName == "dict"  && sLen > 3){ sLen = 3; }
	
			if(sRstr.length >=1){curTitle = strArr[cAreaNum];}
		//	console.log("【"+curTitle+"】");
		// console.log("【"+wLen[0]+"】");
		//	str0 = setColor(wLen[0],curTitle);
			
			isLi += "<h3>"+wLen[0].replace(/[,]/gi,"")+"</h3>";
			j = 1;
			while(j < sLen){   					
				str0 = wLen[j].replace(/[-]/g," ");    
				if(sRstr.length >= 1){
					str0 = setColor(str0,curTitle);
				}
				isLi += "<pre>"+str0+"</pre>";
				j++;
			}
			isLi = isLi+"<a href='"+this.btn0+"'>"+this.btn+"</a><hr>";
			j = 0;
			cpNum++;
		}
		By(this.wHTML).innerHTML = "<div class='dict'>"+isLi+"</div>";
		isLi = "";
		s = 1;
		if(pName != "cus"){setpage();}
	},
	
	jPage:function(){
		cpTemp = By("jump").value;
		tf = reg.test(cpTemp);
		curPage = parseInt(cpTemp);
		if(tf == true && curPage > 0 && curPage <= amountPage){
			By("jump").value="";
			By("jump").placeholder = "Page "+curPage+"";
			eval(this.gp+"(curPage)");
		}else{
			By("jump").value="";
			By("jump").placeholder = "1 - "+amountPage+"~";
		}
	},
};
var d0 = new abcd;
var d1 = new abcd;
if(pName == "cus"){
	if(localStorage.sStr != undefined){
		By("tArea").innerText = localStorage.sStr;
		resuStr = localStorage.sStr;
		cusT = 1; // 控制cus頁保存 劃詞 搜索數據
		gwResu(2);// 首頁 每日句子
	}
}
function getCurP(){ //初始化當前頁 位置  有搜索結果時 定位
	for(var i=0; i<fdArr.length;i++){
		if(fdArr[i] == pName0){
			fName = i+1;
			break;
		}
	}
}	

function gListNum(nextNums){  // dict頁狀態記錄 上次所在位置，讀取選中頁數 的數據 
	curPage = nextNums;
	localStorage.curView = curPage;
	indexVal = (curPage-1)*showNums+1;	 // 沒搜索結果 默認頁， 每個分頁 第1條數據位置

	By("pageMount0").innerHTML = "Page "+curPage+"";
	By("pageMount").innerHTML = " Total "+amountPage +"";
}

function a123(){
	if(localStorage.fdArr != undefined){  // 讀取搜索結果
		cpObj.wRval = 1;
		serLists = localStorage.fdArr; //每開一個 dict頁，記錄一個cookie 
		fdArr = JSON.parse(serLists); 

		serLists = localStorage.strArr; 
		strArr = JSON.parse(serLists);
		
		pageNums = fdArr.length;
	}else{
		getNum();
	}	
}

var defNum = 1;
function defP(){   // dict
	if(localStorage.curView != undefined){
		defNum = parseInt(localStorage.curView);
	}else{defNum = 1;}
	gListNum(defNum);   
	d0.btn = "More";
	d0.cFile = indexVal; 
	amountPage = Math.ceil(pageNums/showNums);
	d0.wp = fdArr.length - (curPage-1)*showNums;   // dict頁 獲取當前頁 還剩的數據 數量
	d0.h(d0.wRval);
}

function dtP(){ //  xx html
	curPage = fName;
	amountPage = pageNums; 
	d1.h(d1.wRval);
}

function tyi(val){   // 
	switch(val){
		case "dict":
			sessionStorage.removeItem("cFile");
			d0.gp = "goPage0";
			d0.np = "nextP0";
			d0.pp = "prevP0";
			cpObj = d0;
			a123();
			defP();
		break;
		default:
			cBtn(); // 所有詳情頁 添加額外 按鈕
			d1.gp = "goPage1";
			d1.np = "nextP1";
			d1.pp = "prevP1";
			cpObj = d1;
			
			fdArr = [pName0];
			d1.cFile = 1;
			gCk();
			d1.h(d1.wRval);
			
			a123(); // 調搜索結果 緩存，更新 數據
			if(sessionStorage.cFile != undefined){ 
				fName = parseInt(sessionStorage.cFile);	
			}else{
				getCurP();  // 詳情頁頁面修正  有搜索結果時 才調用，dict頁不調用
			}
			d1.cFile = fName;
			curPage = fName;
			amountPage = pageNums; 
			By("pageMount0").innerHTML = "Page "+curPage+"";
			By("pageMount").innerHTML = " Total "+amountPage +"";
		break;
	}
}

var kName0 = kName1 = "";
function goPage0(val){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	d0.wp = fdArr.length - (curPage-1)*showNums;
	gListNum(val);  
	d0.cFile = indexVal; 
	d0.h(cpObj.wRval);
}
function goPage1(val){
	curPage = val;
	fdArr1 = fdArr[curPage-1].split("_");

	kName0 = fdArr1[0];
	kName1 = fdArr1[1];

	sessionStorage.cFile = curPage;
	cur_url = top0+wCtn+kName0+"_"+kName1+".html";   
	window.location.href = cur_url; 
}

/*0*/
function nextP0(val){
	curPage = parseInt(curPage);
	if(curPage < amountPage){
		curPage++;
	}else{
		curPage = 1;
	}
	eval(cpObj.gp+"(curPage)");
}
function prevP0(val){
	curPage = parseInt(curPage);
	if(curPage > 1){
		curPage--;
	}else{
		curPage = amountPage;
	}
	eval(cpObj.gp+"(curPage)");
}

/*1*/

function nextP1(val){     
	if(curPage < pageNums){
		curPage++;
	}else{
		curPage = 1;
	}
	eval(cpObj.gp+"(curPage)");
}
function prevP1(val){
	if(curPage > 1){
		curPage--;
	}else{
		curPage = pageNums;
	}
	eval(cpObj.gp+"(curPage)");
}
/**/

function gotopage(val){
	curPage = val;
	eval(cpObj.gp+"(val)");
}

function prevPage(){
	eval(cpObj.pp+"(curPage)");   
}

function nextPage(){
	eval(cpObj.np+"(curPage)");
}

function jumpPage(){
	eval(cpObj.jPage());
}

/*create content list*/
var pVal0 = pVal1 = 0;
var sty0 = "<span class='list0 list2'>";
function setpage() {   // 初始化or重繪 頁面列表
	pVal0 = parseInt((curPage-1)/pageLen);
	pVal1 = parseInt(amountPage/pageLen);
	var p11 = 1;
	var p2 = amountPage;
	if(amountPage>pageLen){
		if(pVal0 == 0) { 
			p2 = pageLen;
			btn0 += "<a class='isBtn1' onclick='gotopage("+(p2+1)+")'> Next </a>"; 
		}else if(pVal0 == pVal1){
			p11 = pVal1*pageLen+1;
			p2 = amountPage;
			btn0 += "<a class='isBtn0' onclick='gotopage("+(pVal0*pageLen)+")'>Prev</a>";
		}else{
			p11 = pVal0*pageLen+1;
			p2 = pVal0*pageLen+pageLen;
			btn0 += "<a class='isBtn0' onclick='gotopage("+(pVal0*pageLen)+")'>Prev</a>"; 
			btn0 += "<a class='isBtn1' onclick='gotopage("+(p2+1)+")'> Next </a>"; 
		}
	}
	for(pl=p11; pl<=p2; pl++) {
		if(pl!=curPage){
			if(pl <= amountPage){
				aaa = "<a class='list0' onclick='gotopage("+pl+")'>"+pl+"</a>";
			}else{
				aaa = "<a class='list1'>"+pl+"</a>";
			}
			pageLists = pageLists + aaa;
		}else{pageLists = pageLists + sty0 +pl+"</span>"; }
	} 
	By("setpage").innerHTML = "<div id='setpage'>"+"<div class='aLists'>"+ pageLists+"<\/div>" + "<\/div>"; 
	By("btnArea").innerHTML = "<div id='btnArea'>"+btn0+"<\/div>";	
	pageLists = ""; 
	btn0="";
	By("pageMount0").innerHTML = "Page "+curPage+"";
	By("pageMount").innerHTML = "Total "+amountPage;
} 
if(pName != "cus"){
	tyi(pName);
	By("prev").setAttribute("data-content", "Prev" );
	By("next").setAttribute("data-content", "Next" );
}else{
	sessionStorage.removeItem("cFile");
	cBtn();
}

/**/
function wSort(fdArr,arrLen){
	var cTemp = "";
	for(var i = 0; i < arrLen.length-1; i++){
		for(var j = i; j < arrLen.length-1; j++){
			if(arrLen[i].length < arrLen[j+1].length){
				cTemp = fdArr[i];
				fdArr[i] = fdArr[j+1];
				fdArr[j+1] = cTemp;
				
				cTemp = arrLen[i];
				arrLen[i] = arrLen[j+1];
				arrLen[j+1] = cTemp;
				
			}
		} 
	}
	return fdArr;
}
/**/
var rsT = "the words";
var reg1 = matStr = "";
var wArea = matRes = cWord = sEd = enTag = 0; 
var jieguo = -1;
var Len1 = isWord = [];
var m1 = m2 = "";
function showView(cVal,cLan){
	m1 = cVal.substring(0,1);   // 首個字串
	if(wName[0][cLan][0][m1] != undefined){
		m2 = wName[0][cLan][0][m1];  // 2 提取開頭相同的 所有單詞
		for(var i=0; i<m2.length; i++){
			isWord = m2[i].split(":");

			reg1 = new RegExp(("(" + cVal + ")"), "i");
			jieguo = isWord[0].search(reg1);
			
			enTag = isWord[1].lastIndexOf("_");
			cWord = isWord[1].substring(0,enTag);
			if(jieguo != -1){
				strArr1.push(isWord[0]);
				fdArr.push(isWord[1]);
				strArr[cWord] = isWord[0];
			}
		}
	}else if(isWord.length >= 1){
		cpTemp = isWord[0].length-1;
	}
}

/*去重*/
function dRept(arr){
	var n = {}, r = [], val, type;
	for(var i = 0; i < arr.length; i++){
		val = arr[i];
		type = typeof val;
		if(!n[val]){
			n[val] = [type];
			r.push(val);
		}else if(n[val].indexOf(type) < 0){
			n[val].push(type);
			r.push(val);
		}
	}
	return r;
} 
/*
function dRept(arr) {
 return arr.filter(
	function(item, index, arr) {
		return arr.indexOf(item, 0) === index;
	});
}
*/

/*findData*/

/*2*/
function f2(wArea){
	switch(wArea){
		case 0:
		showView(curWord,"zh");
		break;
		case  1:    	// 調用 匹配 en區塊
		showView(curWord,"en");
		break;
	}
}
/*3*/
function resuRun(val){
	if(fdArr.length >= 1){
		fdArr = dRept(fdArr);
		d0.wRval = 1;
		d1.wRval = 1;
	//	fdArr = wSort(fdArr,strArr);
		
		if(val == 1 || cusT == 1){//劃詞 只顯示，不加入, cus另外處理
			pageNums = fdArr.length;
			serLists = JSON.stringify(fdArr);    
			localStorage.fdArr = serLists; 
			
			serLists = JSON.stringify(strArr); 
			localStorage.strArr = serLists; 
			sessionStorage.removeItem("cFile");  // fdArr 變化清除 詳情頁記錄位置
		}
		switch(val){
			case 1:
			localStorage.removeItem("curView");  //搜索結果 回到1頁 刪除上次停留頁面
			tyi(pName);
			break;
			
			case 2:
			By("cbtn0").style.display = "block";
			By("Cus0").style.display = "block";
			scrollTag = document.documentElement.scrollTop || document.body.scrollTop;
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			d1.wHTML = "Cus0";  // case2劃詞頁用, 非dict頁 & 詳情頁未設置 還是默認的
			d1.wp = fdArr.length;  // 只有dict頁設置數量,詳情頁默認1，此處需重新設置，
			d1.btn = "More";
			d1.cFile = 1;
			cPath = "";
			if(pName != "cus"){localStorage.dinwei = 1;}
			dtP();
			break;
			
			default:
			pageNums = fdArr.length;
			create_data();
			break;
		}
	}else{
		fadeOut("【"+rsT+"】 no data temporarily");  
	} 
}

function findData(resuStr,val){
	//matRes = 3;
	strArr = {};
	strArr1 = [];
	fdArr = [];
	cutArr = resuStr.split(" ");
	for(var i=0; i<cutArr.length; i++){
		if(cutArr[i].match(regZh) != null){
			wArea = 0;
		}else{
			wArea = 1;  
		}
		curWord = cutArr[i];
		f2(wArea);
	}
	resuRun(val);
}

function sResuC(val){
	By("searchTxt").value = val;
	//getWord(1);
}
function create_data() {
	var add_item = optioned = "";
	strArr1 = dRept(strArr1);
	By("data_list").style.display="none";
//	if(inputVal.length > 0){
	add_item = ""; 
	for(var i = 0; i < strArr1.length; i++) {
	//	optioned = "./file/"+fName0+"_"+fdArr[i]+".html";
		add_item += 
		"<li class='link_li' onclick='sResuC(this.innerText)'>"+
			strArr1[i]+
		"</li>"
	}
	By("data_list").innerHTML = add_item; 
	By("data_list").style.display="block";
//}
} 
function creatEle(){
	By("Cus0").style.display = "none"; 
	By("Cus0").innerHTML = "";
	By("cbtn0").style.display = "none"; 
	isLi = "";
	document.body.scrollTop = scrollTag;
	document.documentElement.scrollTop = scrollTag;
	clearBtn();
}
function cBtn(){
	By("fWord").innerHTML = "<a class='header_info htag htag0' onclick='gSword()'>Search</a>";
	if(pName != "cus"){
		By("sCol").innerHTML = "<a id='ci0' class='header_info htag htag0 sc0' onclick='dtPCol(0)'>Zh</a>";
		By("sCol").innerHTML += "<a id='ci1' class='header_info htag htag0 sc1' onclick='dtPCol(1)'>En</a>";
	}
}

function setColor(str, key){
	var reg0 = new RegExp(("(" + key + ")"), "gi");
	var newstr = str.replace(reg0,"<b>$1</b>");
	return newstr;
} 
var tArr = [];

function addResu(val){
	var tt = "";
	if(val == 0){matRes = 1;}else{matRes = 3;}
	for(var j=0; j<tArr.length; j++){
		if(tArr[j].length >= matRes){
			tt = tArr[j].replace(/-([.]+)/g,"");
			str0 = setColor(str0,tt.replace(/[-]+/g," ").trim());
		}
	}
}
var c0 = "";
var c1 = "";
var defArr = "";
function dc(){

	fdArr1 = pName0.split("_");
	fdArr1 = wName[1]["rList"][fdArr1[0]][fdArr1[1]];
	str0 = By("showArea1").innerText;

	if(c0 != undefined){ // zh
		tArr = fdArr1[0].replace(/\s+/g,"").split(",");
		tArr = dRept(tArr);
		addResu(0);
		By("ci0").style.backgroundColor = "#216e47";
	}else{
		By("ci0").style.backgroundColor = "#545454";
		if(eStr != ""){ // 臨時添加
			By("showArea1").innerHTML = "<div class='pdetail'><pre>"+defArr+"</pre></div>";
		}
	}
	var eStr = "";
	switch(c1){  // en
		case undefined:
		By("ci1").style.backgroundColor = "#545454";
		break;
		default:
			for(var i=2; i<fdArr1.length; i++){  // 2臨時數字
				if(fdArr1[i].match(regZh) == null){
					eStr += fdArr1[i]+",";
				}
			}
			if(eStr != ""){//    /\s+/g
				eStr = eStr.replace(/[,.]/g," ").replace(/\s{2,}/g," ").trim();
				tArr = eStr.split(" ");
				tArr = dRept(tArr);
			//	console.log("default Arr = "+tArr);
				addResu(1);
			}
		By("ci1").style.backgroundColor = "#216e47";
	}
	By("showArea1").innerHTML = "<div class='pdetail'><pre>"+str0+"</pre></div>";
}
function dtPCol(val){
	if(val != "def"){
		var e0 = "sc"+val;
		var e1 = localStorage.getItem(e0);
		if(e1 == undefined){
			localStorage.setItem(e0,1);
		}else{
			localStorage.removeItem(e0);
		}	
	}
	c0 = localStorage.sc0;
	c1 = localStorage.sc1;
	if(c0 != undefined || c1 != undefined){
		dc();
	}else{
		By("showArea1").innerHTML = "<div class='pdetail'><pre>"+defArr+"</pre></div>";
		By("ci0").style.backgroundColor = "#545454";
		By("ci1").style.backgroundColor = "#545454";
	}	
}
function clearBtn(){
	localStorage.removeItem("dinwei");
}
if(pName != "dict" && pName != "cus"){
	defArr = By("showArea1").innerText;
	dtPCol("def");
	if(localStorage.dinwei != undefined){
		location.href = top0+pName+".html"+"#pArea"; 
		By("aBtn").innerHTML += "<a class='btn_2' id='back' href='javascript:history.go(-1)' onclick='clearBtn()'></a>";
	}
}
function Lmess(){new Waline({el:"#container0",path:location.pathname,serverURL:"https://lc-nu.vercel.app/",highlight:false,emojiCDN:"../imgs/face/"})}Lmess();
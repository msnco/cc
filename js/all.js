var tLen = [];
var pageNums = 0;
function taa(){
	for(var i=0; i<dtp.length; i++){
		tLen.push(Object.keys(dtp[i]).length);
	}
	pageNums = uTime2.length;
}
taa();
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
var ctrlImg = pageNums;
//if(ctrlImg < pageNums){ctrlImg = pageNums;}
var amountPage = Math.ceil(ctrlImg/showNums);
var creatImg = creatLists = cpTemp = pageLists = btn0 = aaa = sty0 = inputVal = str = serLists = str0 = "";
var searchStr = "";
var pl,curPage = 1;
var tf = false; 
var serResuCount = 0;
var arr = arrTemp = arrLen = arrLen0 = strTemp = matWord = overcheck = cStr = defArr = defArr0 =  new Array();
var arr0 = []; 

var reg = /^[0-9]*$/;
var regs = /[`~!@#$^&*()={}':;'\\\[\]\.<>\/?~！@#￥……&*（）——【】'；：""'。，、？/]/g;
var regZh = /[\u4E00-\u9FA5\uF900-\uFA2D/]/i;
var regEng = /[^\u4E00-\u9FA5\uF900-\uFA2D/]/i;

var txtstore = {};
var cutArr = [];
var lang = "en";
function uLan(){
	var curLan = navigator.language||navigator.userLanguage;
	curLan = curLan.substr(0, 2);
	if(curLan == "th" || curLan == "vi"){
		lang = curLan;
	}
}
if(localStorage.lang != undefined){
	lang = localStorage.lang;
}else{
	uLan();
}
var arrss = defss[lang];
function By(id){
  return document.getElementById(id);
}
/*search text*/
var catNums = (Object.keys(text1).length)/langSum; 
function catLan(){
	var aaa = "";
	for(var i = 0; i < catNums; i++){
		if(text1["mKey"+(i+1)+lang] != ""){
			aaa += "<a href='#' onclick='showCat("+i+")'>"+text1["mKey"+(i+1)+lang]+"</a>";
		}
	}
	By("sKey").innerHTML = aaa;
}
catLan();
/**/

/*mobile menu*/
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
/*cat menu*/
function showCat(cVal){
	cVal = parseInt(cVal);
	arr = []; arr0 = [];
	var gT = "", gT0 = "";
	gT0 = uTime[cVal];
	for(var i=0; i<uTime[cVal].length; i++){
		gT = dtp[cVal][(cVal+1)+"_"+(gT0[i])][0][lang];
		arr.push((cVal+1)+"_"+(gT0[i]));
		arr0.push(gT);
	}
	amountPage = Math.ceil(arr.length/showNums);
	serLists = JSON.stringify(arr);    
	localStorage.arr = serLists;   
	localStorage.setItem("setResu",amountPage);
	showAll();
}
/**/
var st = speed = num = 0;
function fadeOut(cVal){
	By("tempT").style.top = 50+"px";
	clearInterval(st); 
	By("tempT").innerText = cVal;
	speed = speed || 20 ;
	num = 50;
	st = setInterval(function(){
		num--;
		By("tempT").style.opacity = num / 25 ;
		if(num <= 0){   
			clearInterval(st);  
		}
	},speed);
}

function isstore(){}
//isstore();

function clearSer(){
  // localStorage.clear();
   localStorage.removeItem("arr");
   localStorage.removeItem("setResu");
	localStorage.lang = lang;
}
//clearSer();
//
document.onkeydown = function(e){
	e = e||window.event;
	if(event.target.id =="searchTxt"){
		if(e.keyCode==13 ){
		  timeoff =0; 
		  fnDelay("ct1"); //to cleartime =1  
	    }
	}
}
//
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
function gTop(){
	if(window.screen.width <= 1024){
		By("searchTxt").scrollIntoView(); 
	}
}
function sessExise(){ 
	var curCat = 0;
	By("searchTxt").placeholder = "empty search restore";
	By("searchTxt").className = "addLig";
	serLists = localStorage.arr;  
	arr = JSON.parse(serLists);  

	for(var i=0; i<arr.length; i++){
		curCat = arr[i].substring(0,arr[i].lastIndexOf("_"));
		arr0.push(dtp[curCat-1][arr[i]][0][lang]); 
	}
	amountPage = localStorage.getItem("setResu");
	amountPage = parseInt(amountPage);
}

/*new123*/ 
function defpage() {
	for(var i = 0; i < uTime2.length; i++){
		var cNum = uTime2[i].substring(0,uTime2[i].lastIndexOf("_"));
		arr.push(uTime2[i]); 
		arr0.push(dtp[cNum-1][uTime2[i]][0][lang]); 	
	}
} 

if(localStorage.selCat == undefined){
	if(localStorage.arr != undefined){
		sessExise();
	}else{
		defpage();
	}
}else{
	showCat(localStorage.selCat);
	localStorage.removeItem("selCat");
}
defArr = arr;
defArr0 = arr0;

/*create content list*/
var pVal0 = pVal1 = resuT = 0;
sty0 = "<span class='list0 list2'>";
function setpage() {   // 初始化or重繪 頁面列表
	pVal0 = parseInt((curPage-1)/pageLen);  //計算 當前所在頁 在第幾頁 分頁
	pVal1 = parseInt(amountPage/pageLen); // 分頁數量
	if(amountPage%pageLen == 0){pVal1 = pVal1-1;}
	//console.log(curPage+" :: "+pVal0+" - "+pVal1);
	var p11 = 1;
	var p2 = amountPage;
	if(amountPage > pageLen){
		if(pVal0 == 0) { 
			p2 = pageLen;
			btn0 += "<a class='isBtn1' onclick='gotopage("+(p2+1)+")'>Next</a>"; 
		}else if(pVal0 < pVal1){
			p11 = pVal0*pageLen+1;
			p2 = pVal0*pageLen+pageLen;
			btn0 += "<a class='isBtn0' onclick='gotopage("+(pVal0*pageLen)+")'>Prev</a>"; 
			btn0 += "<a class='isBtn1' onclick='gotopage("+(p2+1)+")'>Next</a>"; 
		}else{
			p11 = pVal1*pageLen+1;
			btn0 += "<a class='isBtn0' onclick='gotopage("+(pVal0*pageLen)+")'>Prev</a>";
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
	By("pageMount").innerHTML = "Total "+amountPage;
} 

/*create page list*/
var valTwo = showNums;
var indexVal = 0;
var curView = 1;
var gTstr = "",cName0 = "";//,gGroup = '<ins class="adsbygoogle" style="display:block;" data-ad-format="fluid" data-ad-layout-key="-d0-8q+1h+e7+kh" data-ad-client="ca-pub-1937515231401291" data-ad-slot="7813549177"></ins>';
function gotopage(nextNums){
	location.href = "#top0";
//	console.log(arr+" :: "+arr0);
	curPage = nextNums;
	localStorage.curView = curPage;

	indexVal = (curPage-1)*showNums;						
	valTwo = curPage*showNums;	
	
	By("data_list").style.display="none";
	By("pageMount0").innerHTML = "Page "+curPage+"";
	By("pageMount").innerHTML = " Total "+amountPage +"";
	creatLists="";
	if(arr.length < valTwo){valTwo = arr.length;}
	for(var i=indexVal; i<valTwo; i++){
		gTstr = arr[i].substring(0,1);
		cName0 = arr[i];
		if(gTstr == 2 && dtp[gTstr-1][arr[i]][0]["3"] != undefined){
			cName0 = "null";
		}
		creatImg += "<li><a href='file/"+fName+arr[i]+".html'> <div class='imgSize'><img class='lazy' src='"+pUrl+"imgs/load.gif' data-echo='"+pUrl+"picture/view/"+fName+cName0+".jpg'/></div></a><div class='newsAllTitle'><p>"+arr0[i]+"</p><span class='tView'>"+dtp[gTstr-1][arr[i]][0]["1"]+"</span></div></li>";
	}
	creatLists = creatLists + creatImg;
	By("newsAll").innerHTML = creatLists;
	creatImg = "";
	setpage();
	picLazy();
//	(adsbygoogle = window.adsbygoogle || []).push({});
}

if(localStorage.curView != undefined){
	gotopage(parseInt(localStorage.curView));
}else{
	gotopage(1);
}
/**/

function nextPage(){
//	curPage = parseInt(curPage);
	if(curPage < amountPage){
		gotopage(curPage+1);
	}else{
		gotopage(1); 
	}
}
function prevPage(){
//	curPage = parseInt(curPage);
	if(curPage > 1){
		gotopage(curPage-1);
	}else{
		gotopage(amountPage); 
	}
}

function jumpPage(){
	cpTemp = By("jump").value ;
	tf = reg.test(cpTemp);
	curPage = parseInt(cpTemp);
	if(tf == true && curPage > 0 && curPage <= amountPage){
		By("jump").value="";
		By("jump").placeholder = "Page "+curPage+"";
		gotopage(curPage); 
	}else{
		By("jump").value="";
		By("jump").placeholder = "1 - "+amountPage+"~";
	}
}  

/*延遲加載*/
var timer = null;
var timeoff = 50;

function fnDelay(enDown){
	 clearTimeout(timer);
	 timer = setTimeout(function(){ 
		serCon(enDown);         
	}, timeoff)
	timeoff = 50;   
} 
var tureN = matchRes;
var curTag = pInt0 = pInt1 = matNum = 0;
var jword = tNum = aLen = newI = 0;
var h = n = matTag = 0;
var jieguo = -1;
/*search*/
function wSort(){
	for(var c = 0; c < cutArr.length-1; c++){
		for(var ci = c; ci < cutArr.length-1; ci++){
			if(cutArr[c].length < cutArr[ci+1].length){
				var cTemp = cutArr[c];
				cutArr[c] = cutArr[ci+1];
				cutArr[ci+1] = cTemp;
			}
		} 
	}
}

function wExist(s,aVal){
	for(var i=0; i < aVal.length; i++){ 
		if(cutArr[s] == aVal[i]){  // 單詞出現過,跳過 
			jword = 1;                       
			break;
		}
	}
}

function coverCheck(s){
	var sLen = searchStr.length;
	for(var ts=0; ts < overcheck.length; ts++){  
		cStr = overcheck[ts].split("-");
		pInt0 = parseInt(cStr[0]);
		pInt1 = cStr[1].length;
		if( sLen+jieguo-1 < pInt0 || jieguo >= pInt0+pInt1 ) {   
			tNum = 0;
		}else{  // 重叠 
			tNum = 1;
			if(sLen > pInt1){		
				overcheck.splice(ts,1,jieguo+"-"+searchStr);  
				matWord.splice(ts,1,searchStr);
			}
			if(str.length-matchRes > (pInt0)+(sLen+1) && (cutArr[s].length-sLen) > sLen){
				curTag = 0; 
				curTag += (pInt0+sLen);     
				n = pInt0+sLen; 
				h = h+sLen;
			}else{
				n = cutArr[s].length+1;
			}
			break;
		}
	}
}
function arrSum(){
	var lenEst = 0;
	if(matWord.length >=1){
		for(var i=0; i<matWord.length; i++){
			if(matWord[i].length > lenEst){
				lenEst = matWord[i].length;
			}
			aLen += (matWord[i].length);
		}
		matNum = matWord.length;
		aLen += lenEst*100; // 
		//console.log(str+" 字符長度總和"+aLen+" 數量"+matWord.length+"匹配次數="+matNum);
		//console.log(matWord);
	}
}
function addWord(i){
	//if(matWord.length >= 1){console.log(i+" 匹配内容= "+matWord+" 匹配次數 = "+matNum);}
	if(arr.length == 0 && matNum == 1){
		arrTemp.push(i); arrLen0.push(aLen); strTemp.push(str0);
	}else if(matNum >= 2){
		arr.push(i);   
		arrLen.push(aLen);    
		arr0.push(str0);  
		arrTemp = [];
		strTemp = [];	
		arrLen0 = []; 
	}
}
/*hans exChange hant*/
function cHant(){
	var tempW ="",newW = "",sCt = "";
	for(var i=0; i<inputVal.length; i++){
		tempW = inputVal.substring(i,i+1);
		sCt = hans[1].indexOf(tempW);
		if(tempW != " "){
			if(sCt != -1){
				newW += hans[0][sCt];
			}else{
				newW += tempW;
			}
		}else{
			newW += " ";
		}
	}
	inputVal = newW;
}
/*search end*/
/*空格分詞,不分開視爲1個單詞*/
var gList = "";
function serCon(enDown){
	resuT = 0;
	newI = 0;
	arr = [];
	arr0 = [];
	arrTemp = [];
	strTemp = [];
	arrLen = [];
	arrLen0 = [];
	inputVal = By("searchTxt").value;
	inputVal = inputVal.replace(regs,"");
	inputVal = inputVal.replace(/\s{2,}/g," ");
	if(inputVal.match(regZh) != null){
		cHant();
	}
if(inputVal.length >= matchRes){

	for(var i=0; i<uTime2.length; i++){
	gList = parseInt(uTime2[i].substring(0,1));
		
	if(dtp[gList-1][uTime2[i]][0]["en"] != "00"){
	jword = 0;
	matNum=0;
	aLen = 0;
	overcheck = [];
	matWord=[];
	if(enDown == "ct0"){
		if(arr.length >= 8 || arrTemp.length >= 8){
			break;
		}	
	}
	str0 = dtp[gList-1][uTime2[i]][0][lang];       // 只作顯示用
	str = str0.replace(regs,"");  
	str = str0.replace(/\s{2,}/g," ");
	str = str0.toLowerCase();

	inputVal = inputVal.toLowerCase();
	cutArr = inputVal.split(/\s+/); 
	wSort();

	h = n = matTag = 0; 
	txtstore = arrss[newI];   // 取當前 數據串
	newI++;
	for(var s=0;s<cutArr.length;s++){  
		n=0; tNum=0; 
		wExist(s,matWord);
		for( h=1;h<=cutArr[s].length-(matchRes-1); h++){ 
			if(jword == 1){jword = 0; break;}
			searchStr = cutArr[s].substr(h-1,matchRes); 
			if(txtstore[searchStr] != undefined){
				curTag = txtstore[searchStr];    		
				while(n <= cutArr[s].length-matchRes-(h-1)){
					searchStr = cutArr[s].substr(h-1,cutArr[s].length-n-(h-1));   // -n若匹配不到退掉1位數,繼續
					jieguo = str.indexOf(searchStr,curTag); 					// 從新匹配字符 找搜索串
					n++;
					matTag++;
					if(jieguo != -1){
						preStr = str.charAt(jieguo-1).replace(/\s*/g,"");
						nextStr = str.charAt(jieguo+searchStr.length).replace(/\s*/g,"");
						if(searchStr.match(regZh) != null){ //漢字另外處理
						tureN = matchRes;}else{tureN = matchRes+2;}
						if(searchStr.length >= tureN || cutArr[s] == searchStr || preStr == "" && nextStr == "" ){
							coverCheck(s);
							if(tNum == 0){            // null
								matWord.push(searchStr);
								n = cutArr[s].length+1;   
								overcheck.push(jieguo+"-"+searchStr);
							}
						}
					}
				}
				if(matTag-1 >= tureN){  // 後退次数>matchRes,提取繼續匹配
					cutArr[s] = cutArr[s].substr(searchStr.length+(h-1),cutArr[s].length);  // (h-1)+1去掉h,前進1位
					h = 0; n = 0; matTag = 0;
				}else{
					h = cutArr[s].length;
					matTag = 0;
				}
			}
		}	
	}  

	for(var sc=0; sc<matWord.length; sc++){
		str0 = setColor(str0,matWord[sc]);
	} 
	arrSum();
	addWord(uTime2[i]);
	}
	}

	/*pageNums 結束*/
	var snTemp = 0;	
	function sortNumber(aL,aResu){          
		serResuCount = aL.length;
		if(aResu == 1){
			arr = arrTemp;
			arr0 = strTemp;
		}
		for(var i = 0; i < aL.length-1; i++ ){
			for(var j = 0; j < aL.length-1-i; j++) {
				if(aL[j] < aL[j+1]) {
					
					snTemp = aL[j+1];       
					aL[j+1] = aL[j];
					aL[j] = snTemp; 
					
					snTemp = arr[j+1];   
					arr[j+1] = arr[j];
					arr[j] = snTemp; 
					
					snTemp = arr0[j];
					arr0[j] = arr0[j+1];
					arr0[j+1] = snTemp;

				}
			}
		}	
	} 

	function selArr(){
		if(arr.length >=1){
		  sortNumber(arrLen,0);
		}else if(arrTemp.length >= 1){
		  sortNumber(arrLen0,1);
		} 
	}
	selArr(); 

	if(arr.length >= 1 ){
		if(enDown == "ct0"){  
			create_data();
		}else{           // 
			amountPage = Math.ceil(serResuCount/showNums);
			//存臨時數據
			serLists = JSON.stringify(arr);    //對象轉字符串
			localStorage.arr = serLists;   	//存入
			localStorage.setItem("setResu",amountPage);
			//
			showAll();
		}
		resuT = 1;
	}
}else if(inputVal == "" && enDown == "ct1" ){
	By("data_list").style.display="none";
	By("searchTxt").className = "";
	amountPage = Math.ceil(ctrlImg/showNums);
	clearSer();
	//console.log(localStorage.lang+" curLang = "+lang);
	showAll();
}else if(inputVal == ""){
	By("searchTxt").value = "";
	By("data_list").style.display="none";  
}
serResuCount = 0;
if(resuT == 0 && enDown == "ct0"){
	arr = defArr;
	arr0 = defArr0;
}
}

function setColor(str, key){  //  ([^<.*>])   .replace(/<font[^>]+>/ig,'')
	var reg0 = new RegExp(("(" + key + ")"), "gi");
	var newstr = str.replace(reg0,"<b>$1</b>");
	return newstr;
} 

/* */
var get_list = By("data_list").getElementsByTagName("li");
var add_item = optioned = "";
function create_data() {
	add_item = ""; 
	for(var i = 0; i < arr.length; i++) {
		optioned = "./file/"+fName+arr[i]+".html";
		add_item += 
		"<li class='link_li'>"+
			"<a href=\""+optioned+"\"onclick=\"serCon('ct1')\">"+arr0[i]+"</a>"+
		"</li>"
	}
	By("data_list").innerHTML = add_item; 
	By("data_list").style.display="block";
} 
 
function showAll(){
	if(arr.length > 0){
		By("searchTxt").placeholder = "empty search restore";
		By("searchTxt").className = "addLig";
		gotopage(1);
	}else{
		By("searchTxt").value = "";
		By("searchTxt").placeholder = "Search for Something";
		defpage();
		gotopage(1);
	}
}
By("prev").setAttribute("data-content", "Prev" );
By("next").setAttribute("data-content", "Next" );

/* window.addEventListener('load', function () {
    Waline.Widget.RecentComments({
      el: '#waline-recent',
      serverURL: 'https://data-zeta.vercel.app',
      count: 7
    });
}); */
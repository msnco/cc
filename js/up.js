var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,b){var c=$jscomp.propertyToPolyfillSymbol[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]};
$jscomp.polyfill=function(a,b,c,d){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,c,d):$jscomp.polyfillUnisolated(a,b,c,d))};$jscomp.polyfillUnisolated=function(a,b,c,d){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))return;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,c,d){var e=a.split(".");a=1===e.length;d=e[0];d=!a&&d in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var f=0;f<e.length-1;f++){var g=e[f];if(!(g in d))return;d=d[g]}e=e[e.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?d[e]:null;b=b(c);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,e,{configurable:!0,writable:!0,value:b}):b!==c&&(void 0===$jscomp.propertyToPolyfillSymbol[e]&&($jscomp.propertyToPolyfillSymbol[e]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(e):
$jscomp.POLYFILL_PREFIX+e),$jscomp.defineProperty(d,$jscomp.propertyToPolyfillSymbol[e],{configurable:!0,writable:!0,value:b})))};$jscomp.initSymbol=function(){};
$jscomp.polyfill("Symbol",function(a){if(a)return a;var b=function(e,f){this.$jscomp$symbol$id_=e;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:f})};b.prototype.toString=function(){return this.$jscomp$symbol$id_};var c=0,d=function(e){if(this instanceof d)throw new TypeError("Symbol is not a constructor");return new b("jscomp_symbol_"+(e||"")+"_"+c++,e)};return d},"es6","es3");
$jscomp.polyfill("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=$jscomp.global[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&$jscomp.defineProperty(d.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}})}return a},"es6",
"es3");$jscomp.iteratorPrototype=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a};$jscomp.iteratorFromArray=function(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e};$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(b){return b})}},"es6","es3");
var isUrl=window.location.href,start0=top0=pName=curCat=curFile=cur_url="",curPage=1;function xyStr(a,b){start0=isUrl.lastIndexOf(a);end0=isUrl.lastIndexOf(b);return isUrl.substring(start0+1,end0)}top0=isUrl.substr(0,isUrl.lastIndexOf("/")+1);pName=xyStr("_",".");curCat=fName+xyStr("/","_").substring(fName.length)+"_";curFile=curCat+pName;var curCat0=xyStr("/",".").substring(fName.length,end0);
function uLan(){var a=navigator.language||navigator.userLanguage;a=a.substr(0,2);if("th"==a||"vi"==a)lang=a}var lang="en",arrLang=["en","th","vi"];void 0!=localStorage.lang?lang=localStorage.lang:uLan();function hLang(){for(var a=0;a<arrLang.length;a++)null!=By(lang+"Lang")&&lang!=arrLang[a]&&(By(arrLang[a]+"Lang").style.display="none",By(arrLang[a]+"Lang").innerHTML="")}hLang();var hUl=hLi=hFont=hBtn=hpic="";hUl="<ul class='dtUl'>";hLi="<li class='Lpic'><div class='tdPic'><img class='lazy' src='../imgs/load.gif' data-echo='../picture/view/";
hpic=".jpg'/></div></li><li class='tdTxt'><span>";end0=parseInt(curCat.substring(fName.length,curCat.lastIndexOf("_")));
function wtxt(a){var b=1,c="";picNum0="";hFont="<font class='"+fontSty[0]+"'>"+dtp[end0-1][a][0][lang]+"<br/></font><br>";for(var d=0;d<dtp[end0-1][a].length;d++){var e=Object.keys(dtp[end0-1][a][d]).length;for(0==d&&(e=e-langSum-1);b<=e;)hFont+="<font class='"+fontSty[b-1]+"'>"+dtp[end0-1][a][d][b]+"<br/></font>",b++;b=1;picNum0="pd1[curFile]["+d+"]";e=void 0!=eval(picNum0)?"btn0":"btn1";hBtn="</span><br/><div class='"+e+"'><a onclick='creatEle("+(d+1)+")'>More pic</a></div></li></ul>";c+=hUl+hLi+
(curFile+"-"+(d+1)+hpic)+hFont+hBtn;hFont=""}document.getElementById("showArea0").innerHTML=c}void 0!=pd1[curFile]&&wtxt(curCat0);var curArea="pd1",isLi=picNum="",acWin=scrollTag=scrollTop0=firC=speed=num=st=0;
function fadeOut(a){scrollTag=document.documentElement.scrollTop||document.body.scrollTop;By("tempT").style.top=scrollTag+"px";clearInterval(st);By("tempT").innerText=a;speed=speed||20;num=50;st=setInterval(function(){num--;By("tempT").style.opacity=num/25;0>=num&&clearInterval(st)},speed)}
function creatEle(a){if("cWin"!=a&&0==acWin){picNum=curArea+"[curFile]["+(a-1)+"]";if(void 0!=eval(picNum)){picNum=eval(picNum);acWin=1;for(var b=0;b<picNum;b++)isLi+="<li><img alt='"+document.title+"' class='lazy' src='../imgs/load.gif' data-echo='../picture/"+fName+curCat0+"/gp"+a+"/"+(b+1)+".jpg'/></li>";""!=isLi&&(By("cbtn0").style.display="block",By("Cus0").style.display="block",By("Cus0").innerHTML+="<ol>"+isLi+"</ol>",isLi="");scrollTag=document.documentElement.scrollTop||document.body.scrollTop;
document.body.scrollTop=0;document.documentElement.scrollTop=0}else fadeOut("No more pic...");picLazy()}else"cWin"==a&&(By("Cus0").style.display="none",By("Cus0").innerHTML="",By("cbtn0").style.display="none",isLi="",acWin=0,document.body.scrollTop=scrollTag,document.documentElement.scrollTop=scrollTag)}function picLazy(){echo.init({offset:100,throttle:250,unload:!1,callback:function(a,b){"load"===b?a.classList.add("loaded"):a.classList.remove("loaded")}})}picLazy();
window.onscroll=function(){scrollTop0=document.documentElement.scrollTop||document.body.scrollTop;switch(firC){case 0:200<=scrollTop0&&(firC=1,By("dTop").style.display="none",By("uTop").style.display="block");break;case 1:200>scrollTop0&&(firC=0,By("dTop").style.display="block",By("uTop").style.display="none")}};function By(a){return document.getElementById(a)}var amountPage=uTime2.length,arr=[];
if(void 0!=localStorage.arr){var serLists=localStorage.arr;arr=JSON.parse(serLists);amountPage=arr.length}else arr=uTime2;function getCurP(){for(var a=0;a<arr.length;a++)if(curCat0==arr[a]){curPage=a+1;break}}getCurP();var pageLists=btn0=aaa="",reg=/^[0-9]*$/,tf=!1,pl=1;document.onkeydown=function(a){a=a||window.event;switch(a.keyCode){case 37:prevPage();break;case 38:document.body.scrollTop=0;document.documentElement.scrollTop=0;break;case 39:nextPage();break;case 40:window.scrollTo(0,document.body.scrollHeight)}};
function nextPage(){1<arr.length&&(curPage<arr.length?(curPage++,cur_url=top0+fName+arr[curPage-1]+".html"):(curPage=1,cur_url=top0+fName+arr[0]+".html"),window.location.href=cur_url)}function prevPage(){1<arr.length&&(1<curPage?(curPage--,cur_url=top0+fName+arr[curPage-1]+".html"):(curPage=arr.length,cur_url=top0+fName+arr[arr.length-1]+".html"),window.location.href=cur_url)}By("pageMount0").innerHTML="Page "+curPage;By("jump").placeholder="Page "+curPage;By("pageMount").innerHTML=" Total "+amountPage;
function gotopage(a){pName=arr[a-1];window.location.href=top0+fName+pName+".html"}var pVal0=pVal1=0,sty0="<span class='list0 list2'>";
function setpage(){pVal0=parseInt((curPage-1)/pageLen);pVal1=parseInt(amountPage/pageLen);0==amountPage%pageLen&&--pVal1;var a=1,b=amountPage;amountPage>pageLen&&(0==pVal0?(b=pageLen,btn0="<a class='isBtn1' onclick='gotopage("+(b+1)+")'>Next</a>"):pVal0<pVal1?(a=pVal0*pageLen+1,b=pVal0*pageLen+pageLen,btn0="<a class='isBtn0' onclick='gotopage("+pVal0*pageLen+")'>Prev</a>",btn0+="<a class='isBtn1' onclick='gotopage("+(b+1)+")'>Next</a>"):(a=pVal1*pageLen+1,btn0="<a class='isBtn0' onclick='gotopage("+
pVal0*pageLen+")'>Prev</a>"));for(pl=a;pl<=b;pl++)pl!=curPage?(aaa=pl<=amountPage?"<a class='list0' href='"+top0+fName+arr[pl-1]+".html'>"+pl+"</a>":"<a class='list1'>"+pl+"</a>",pageLists+=aaa):pageLists=pageLists+sty0+pl+"</span>";By("setpage").innerHTML="<div id='setpage'><div class='aLists'>"+pageLists+"</div></div>";By("btnArea").innerHTML="<div id='btnArea'>"+btn0+"</div>";btn0=pageLists="";By("pageMount").innerHTML="Total "+amountPage}var cpTemp="";
function jumpPage(){cpTemp=By("jump").value;tf=reg.test(cpTemp);curPage=parseInt(cpTemp);1==tf&&0<curPage&&curPage<=amountPage?(By("jump").value="",pName=arr[curPage-1],window.location.href=top0+fName+pName+".html"):(By("jump").value="",By("jump").placeholder="1 - "+amountPage+"~")}setpage();var view0=view1="";
function showView(){if(3<=arr.length)switch(curPage){case 1:view0="End";var a=arr[curPage].substring(0,1);view1=dtp[a-1][arr[curPage]][0][lang];break;case arr.length:a=arr[curPage-2].substring(0,1);view0=dtp[a-1][arr[curPage-2]][0][lang];view1="First";break;default:a=arr[curPage-2].substring(0,1),view0=dtp[a-1][arr[curPage-2]][0][lang],a=arr[curPage].substring(0,1),view1=dtp[a-1][arr[curPage]][0][lang]}else view0="Prev",view1="Next";By("prev").setAttribute("data-content",view0);By("next").setAttribute("data-content",
view1)}showView();function Lmess(){new Waline({el:"#container0",path:location.pathname,serverURL:"https://message-five-smoky.vercel.app"})}Lmess();

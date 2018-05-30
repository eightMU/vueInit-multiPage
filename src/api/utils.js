export class JKUtils{

  /*获取url参数*/
  static GetRequestArg () {
    let url = location.href;
    url = decodeURI(url);
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
      let str = url.split("?")[1];
      let strs = str.split("&");
      for(let i = 0; i < strs.length; i ++) {
        theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
      }
    }
    return theRequest;
  }
  static  logDebug = true;
  static log () {
    if(!this.logDebug)
      return
    var a = "";
    for(var i = 0; i < arguments.length; i++) {
      a += "  " + arguments[i];
    }
    console.log(a);
  }

  static waring(){
    if(!this.logDebug)
      return
    var a = "";
    for(var i = 0; i < arguments.length; i++) {
      a += arguments[i] + ",  ";
    }
    console.log("%c waring:" + a, "color:red; font-size:20pt");
  }

  static getPlatform(){
    let ua = window.navigator.userAgent.toLowerCase();
    if(!!ua.match(/android/i) || !!ua.match(/adr/i)){
      return 'android';
    }

    if(!!ua.match(/MicroMessenger/i)){
      return 'wx';
    }
    if(!!ua.match(/ipad/i)){
      return 'ipad';
    }
    if(!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i)){
      return 'iphone';
    }
    if(!!ua.match(/iphone/i)){
      return 'iphone';
    }
    return "other";
  }


}


//
// JK.utils.loadJS = function ($url, $callback) {
//   if($url.indexOf(".js") != -1) {
//     var otherJScipt = document.createElement("script");
//     otherJScipt = document.createElement("script");
//     otherJScipt.setAttribute("type", "text/javascript");
//     otherJScipt.setAttribute("src", $url);
//   }
//
//   if($url.indexOf(".css") != -1)
//   {
//     var otherJScipt = document.createElement( "link" );
//     otherJScipt.type = "text/css";
//     otherJScipt.rel = "stylesheet";
//     otherJScipt.href = $url;
//   }
//
//   document.getElementsByTagName("head")[0].appendChild(otherJScipt);//追加到head标签内
//   //判断服务器
//   if (navigator.userAgent.indexOf("IE") >= 0)
//   {
//     //IE下的事件
//     otherJScipt.onreadystatechange = function ()
//     {
//       //IE下的判断，判断是否加载完成
//       if (otherJScipt && (otherJScipt.readyState == "loaded" || otherJScipt.readyState == "complete"))
//       {
//         otherJScipt.onreadystatechange = null;
//         $callback();
//       }
//     };
//   }
//   else
//   {
//     otherJScipt.onload = function ()
//     {
//       otherJScipt.onload = null;
//       $callback();
//     };
//   }
// }
//
// JK.utils.loadArrJs = function($arr, $callBack)
// {
//   if($arr.length <= 0)
//   {
//     if($callBack)
//     {
//       $callBack();
//     }
//     JK.utils.Log("JKjs文件加载完毕");
//     return;
//   }
//
//   var value = $arr.shift();
//   JK.utils.loadJS(value,
//     function b()
//     {
//       JK.utils.Log("JK加载js-->" + value);
//       JK.utils.loadArrJs($arr, $callBack);
//     }
//   )
// }
//
// JK.utils.exeAjxJs = function(content){
//   // 第一步：匹配加载的页面中是否含有js
//   var regDetectJs = /<script(.|\n)*?>(.|\n|\r\n)*?<\/script>/ig;
//   var jsContained = content.match(regDetectJs);
//
// // 第二步：如果包含js，则一段一段的取出js再加载执行
//   if(jsContained) {
//     // 分段取出js正则
//     var regGetJS = /<script(.|\n)*?>((.|\n|\r\n)*)?<\/script>/im;
//
//     // 按顺序分段执行js
//     var jsNums = jsContained.length;
//     for (var i=0; i<jsNums; i++) {
//       var jsSection = jsContained[i].match(regGetJS);
//
//       if(jsSection[2]) {
//         if(window.execScript) {
//           // 给IE的特殊待遇
//           window.execScript(jsSection[2]);
//         } else {
//           // 给其他大部分浏览器用的
//           window.eval(jsSection[2]);
//         }
//       }
//     }
//   }
// }
//
// JK.utils.GetRequestArg = function()
// {
//   var url = location.search;
//   url = decodeURI(url);
//   var theRequest = new Object();
//   if (url.indexOf("?") != -1) {
//     var str = url.substr(1);
//     strs = str.split("&");
//     for(var i = 0; i < strs.length; i ++) {
//       theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
//     }
//   }
//   return theRequest;
// }
//
//
// /********************************* Date, time相关 *********************************/
// //获取当前时间戳
// Date.prototype.curTimestamp = function () {
//   var t = new Date();
//   return t.getTime();
// }
//
// //获取当前时间戳
// JK.utils.timestamp = function () {
//   var t = new Date();
//   return t.getTime();
// }
//
// /*把秒拆分成具体时间*/
// JK.utils.parseTimeStrBySecond = function (arg_second) {
//   var returnO = {};
//   var s = arg_second;
//   var h = Math.floor(s / (60 * 60));
//   var m = Math.floor((s - (60 * 60) * houre) / 60);
//   var s = (s - (60 * 60) * houre -  60 * mi);
//   returnO["h"] = h;
//   returnO["m"] = m;
//   returnO["s"] = s;
//   return returnO;
// }
//
// /********************************* cookie相关 *********************************/
// //获取cookie
// JK.utils.getCookieObj = function () {
//   var ts = document.cookie.trim();
//   var cookies = ts.split(";");
//   var co = {};
//   cookies.forEach(function(v) {
//     var kv = v.split("=");
//     co[kv[0]] = kv[1];
//   })
//   return co;
// }
//
// //设置cookie
// JK.utils.setCookie = function (n,v,t) {
//   t = t != undefined ? 60 * 1000 : t;//t为0关闭销毁
//   var exp = new Date();
//   exp.setTime(exp.getTime() + t);
//   if(t)
//     document.cookie = n + "="+ escape (v) + ";expires=" + exp.toGMTString();
//   else
//     document.cookie = n + "="+ escape (v);
// }
//
// /********************************* string相关 *********************************/
// //去除所有的空格
// String.prototype.trim = function () {
//   return  this.replace(/\s/g,"");
// }
//
// String.prototype.filterSpecialChar = function(){
//   var s = this.valueOf();
//   var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*%（）——|{}【】‘；：”“'。，、？]");
//   var rs = "";
//   for (var i = 0; i < s.length; i++) {
//     rs = rs + s.substr(i, 1).replace(pattern, '');
//   }
//   return rs;
// }
//
// String.prototype.toHtmlElement = function () {
//   var txt = this.valueOf();
//   var el;
//   try{
//     xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
//     xmlDoc.async="false";
//     xmlDoc.loadXML(txt);
//     el = xmlDoc.documentElement;
//   }
//   catch(e){
//     try{
//       parser=new DOMParser();
//       xmlDoc=parser.parseFromString(txt,"text/xml");
//       el = xmlDoc.documentElement;
//     }
//     catch(e){
//       alert(e.message)
//     }
//   }
//   return el ;
// }
//
// /********************************* log相关 *********************************/
//
// var logDebug = false;
// JK.utils.Log = function () {
//   if(!logDebug)
//     return
//   var a = "";
//   for(var i = 0; i < arguments.length; i++) {
//     a += "  " + arguments[i];
//   }
//   console.log(a);
// }
//
// JK.utils.log = function () {
//   if(!logDebug)
//     return
//   var a = "";
//   for(var i = 0; i < arguments.length; i++) {
//     a += "  " + arguments[i];
//   }
//   console.log(a);
// }
//
// JK.utils.waring = function() {
//   if(!logDebug)
//     return
//   var a = "";
//   for(var i = 0; i < arguments.length; i++) {
//     a += arguments[i] + ",  ";
//   }
//   console.log("%c waring:" + a, "color:red; font-size:20pt");
// }
//
// JK.utils.getCookieObj = function () {
//   var cookies = document.cookie.split(";");
//   var co = {};
//   cookies.forEach(function(v) {
//     var kv = v.split("=");
//     co[kv[0]] = kv[1];
//   })
//   return co;
// }
//
//
//
// /********************************* system相关 *********************************/
// JK.utils.getPlatformFormat = function(){
//   var userAgent = navigator.userAgent;
//   var isOpera = userAgent.indexOf("Opera") > -1;
//   if (isOpera) {
//     return "Opera"
//   };
//   if (userAgent.indexOf("Firefox") > -1) {
//     return "Firefox";
//   }
//   if (userAgent.indexOf("Chrome") > -1){
//     return "Chrome";
//   }
//   if (userAgent.indexOf("Safari") > -1) {
//     return "Safari";
//   }
//   if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
//     return "IE";
//   };
// }
//
// /********************************* 验证相关 *********************************/
// JK.utils.checkPhone = function(phone) {
//   return (/^1[3|4|5|7|8]\d{9}$/.test(phone));
// }
// window.JK = JK;
//
// JK.utils.checkPeopleCard = function(id) {
//   //身份证正则表达式(15位)`
//   var isId1=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
//   //身份证正则表达式(18位)
//   var isId2=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|X)$/;
//   return ((isId1.test(id))||(isId2.test(id)))
// }
//
// JK.utils.checkMail = function(mail) {
//   var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
//   return re.test(mail);
// }

import trdauthApis from "./trdauthApi"
import {ajxProxy} from "./net"
import {mconfig} from "@/../config/mainConfig"
import {JKUtils} from "./utils"
import userApis from "./userApi"
import store from '../store/store.js'

export class MoProxy{

  static autoAuth(){

    // console.log(1);
    if(navigator.userAgent.indexOf('Android') != -1) {
      var num = navigator.userAgent.substr(navigator.userAgent.indexOf('Android') + 9, 3);
      if(num < 6.2) {
        console.log('您当前系统版本过低，请先升级系统')
        return;
      }
      console.log(num + "--num")
    }

    console.log(JKUtils.getPlatform());
    let arg = JKUtils.GetRequestArg();
    let motoken = arg["motoken"];
    console.log(window.location.href + "--href");
    console.log(motoken + "--token")
    if(arg["lo"] == 1){
      return;
    }

    if(motoken == undefined || motoken == null){
      let mt = this.getToken();
      if(mt == undefined || mt == null){
        this.reqMotoken();
      }else {
        this.reqMoUserInfo(mt);
      }
    }else {
      localStorage.setItem("m_m_tk", motoken);
      // window.location.href = "/";
      this.reqMoUserInfo(motoken);
    }
  }

  /*服务器请求token*/
  static reqMotoken(){

    var m = new trdauthApis.TrdauthmoauthIn();
    ajxProxy.sendHttp(m,(o)=> {
      if (o.code == 0) {
        console.log(o.t + "--code");
        window.location.href = o.t;
      }
    }, null, mconfig.AUTH_DOMAIN)
  }

  /*获取已经存在的token*/
  static getToken(){
    return localStorage.getItem("m_m_tk");
  }

  //获取momo用户信息
  static reqMoUserInfo(token){

    MMGAMESDK.init({appid: 'a9fee1234s6ubnc',access_token:token}, function(res){
      // console.log(JSON.stringify(res) + "--");
      if(res["status"] == 0){
        MMGAMESDK.getUserInfo(function(res){
          console.log(JSON.stringify(res) + "^^^^^^^");
          if(res["ec"] != 0){
            MoProxy.reqMotoken();
          }else {
            MoProxy.loginPt(res["data"]);
          }
        });

      }else {
        MoProxy.reqMotoken();
      }
    });
  }

  static initMoSDK(){
    console.log(this.getToken() + "--getToken");
    MMGAMESDK.init({appid: 'a9fee1234s6ubnc',access_token:this.getToken()}, function(res){
      console.log(JSON.stringify(res) + "--res");
      if(res["status"] == 0){

      }else {
        MoProxy.reqMotoken();
      }
    });
  }

  //登录
  static loginPt(data){

    console.log(data["name"] + data["avatar"] + "(((((((((" + data["mmid"]);
//  store.commit("updateUnid",data["mmid"])
    let m = new userApis.UserloginIn();
    m.unid = data["mmid"];
    m.username = data["name"];
    m.sex = 1;
    m.avatar_origin = data["avatar"]
    ajxProxy.sendHttp(m,(o)=> {
      if (o.code == 0) {
         console.log("login - sex_" + o.user.avatar + "/" + o.user.username  + "/" +  o.user.gold  + "/" +  o.user.id  + "/" + o.sid  + "/" + o.user.unid);

        console.log('登录成功');
          localStorage.setItem("username", o.user.username);
          localStorage.setItem("usermoney", o.user.gold);
          localStorage.setItem("userid", o.user.id);
          localStorage.setItem("useravatar", mconfig.SERVER_IMAGE + "?action=imagestore.use&name="  + o.user.avatar);
          localStorage.setItem('sid', o.sid);
          window.location.href = mconfig.SELF_DOMAIN + "?_ui=256&_ui_mode=1";
          // console.log( o.user.avatar)
      }
      else {
        console.log('登录失败dddd')
      }
    }, null, mconfig.WEB_DOMAIN)
  }

}
//
// window.onerror = function (errorMessage, scriptURI, lineNumber,columnNumber,errorObj) {
// 	console.log("错误信息：" , errorMessage);
// 	console.log("出错文件：" , scriptURI);
// 	console.log("出错行号：" , lineNumber);
// 	console.log("出错列号：" , columnNumber);
// 	console.log("错误详情：" , errorObj);
// 	var errorMsg = "错误信息：" + errorMessage + "\n"
// 		+ "出错文件：" + scriptURI + "\n"
// 		+ "出错行号：" + lineNumber + "\n"
// 		+ "出错列号：" + columnNumber + "\n"
// 		+ "错误详情：" + errorObj;
// 	console.log(errorMsg);
// };

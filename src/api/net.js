import {ApiBase} from "./ApiBase";
import {mconfig} from '../../config/mainConfig'
import {ajxProxyErrorHandler as errorHandler} from './netErrorHandler'

export let store
let num = 0;
let timer = null;
export function _init(st) {
  store = st
  return st
}

export class ajxProxy {

  static sendHttp (o, funComplete, funError, host) {

    let httpInfo = new HttpControlInfo()
    httpInfo.funComplete = funComplete
    httpInfo.funIoError = funError
    httpInfo.apiModel = o
    o.host = host || mconfig.WEB_DOMAIN;
    if(o.enableWaiting && store) {
      num++;
      if(!timer) {
        timer = setTimeout(function(){
          store.commit('showApiWaiting')
        },1000)
      }
    }
    let onCompleteHttp = (str) => {
      if(o.enableWaiting && store) {
        num--;
        if(num<=0) {
        	clearInterval(timer);
        	timer = null;
          store.commit('hideApiWaiting')
        } else {
          store.commit('showApiWaiting')
        }
      }
      if (httpInfo.funComplete) {
        try {
          let obj = JSON.parse(str)
          let a = httpInfo.apiModel.returnData
          a.code = obj.code
          errorHandler.handler(a.code);
          let message = obj.message
          for (let val in message) {
            a[val] = message[val]
          }
          httpInfo.funComplete(a)
        } catch (e) {
          // console.log(e);
          httpInfo.funComplete(str)
        }
      }
    }
    let onHttpError = () => {
      if (httpInfo.funIoError) {
        httpInfo.funIoError()
      }
    }

    httpInfo.funErrorHandleCode = onHttpError
    httpInfo.funCompleteHandleCode = onCompleteHttp
    let s = new HttpControl(httpInfo)
  }
}

export class HttpControl {
  http = null
  httpInfo = null

  constructor (httpInfo) {
    this.http = this.initHttp()
    this.httpInfo = httpInfo
    this.send(this.httpInfo.apiModel)

  }

  initHttp () {
    var request = false
    if (window.XMLHttpRequest) {
      // FireFox
      request = new XMLHttpRequest();
      // request.withCredentials = true;

      if (request.overrideMimeType) {
        request.overrideMimeType('text/xml')
      }
    } else if (window.ActiveXObject) {
      // IE
      try {
        request = new ActiveXObject('Msxml2.XMLHTTP')
      } catch (e) {
        try {
          request = new ActiveXObject('Microsoft.XMLHTTP')
        }catch (e) {

        }
      }
    }
    if (!request) {
      window.alert('Create request error!')
      return false
    }
    return request
  }

  send (o) {
    this.http = this.initHttp()
    let sendUrl = o.baseUrl()
    let method = o.method
    let sendData = o.fields()
    let parent = this
    this.http.onreadystatechange = function () {
      parent.onHttpCallBack(this)// 指定请求返回时的回调函数
    }
    var tempUrl = sendUrl
    var sdata = ''
    var arr = []
    for (var key in sendData) {
      var value = sendData[key]
      sendData[key] = value
      arr.push(key + '=' + encodeURIComponent(value))
    }
    var u = "";

    if(arr.length == 0)
      u = tempUrl + '?sid=' + encodeURIComponent(localStorage.getItem("sid"));
    else{
      sdata = arr.join('&')
      u = tempUrl + '?' + sdata + '&sid=' + encodeURIComponent(localStorage.getItem("sid"));
    }

    if (method === 'get') {
      this.http.open('GET', u, true)
      //console.log(tempUrl)
      this.http.send(null)
    } else if (method === 'post') {
      this.http.open('POST', tempUrl, true)
      this.http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      this.http.send(sdata)
    }
  }

  onHttpCallBack () {
    // readyState共有5中状态，0未初始化，1已初始化，2发送请求，3开始接收结果，4接收结果完毕。
    // status服务器响应状态码
    if (this.http.readyState === 4) {
      if (this.http.status === 200) {
        var str = this.http.responseText
        if (this.httpInfo.funCompleteHandleCode) {
          this.httpInfo.funCompleteHandleCode(str)
        } else {
          if (this.httpInfo.funComplete) {
            this.httpInfo.funComplete(str)
          }
        }
      } else if (this.http.status === 404) {

      } else {
        if (this.httpInfo.funErrorHandleCode) {
          this.httpInfo.funErrorHandleCode()
        } else {
          if (this.httpInfo.funIoError) {
            this.httpInfo.funIoError()
          }
        }
      }
    }
  }
}

/**
 * http处理数据封装
 * */
export class HttpControlInfo {
  apiModel;
  funComplete = null;
  funIoError = null;
  funCompleteHandleCode = null;
  funErrorHandleCode = null;
}

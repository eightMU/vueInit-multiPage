import {FrontrefreshIn,FrontsetUserNewInfoIn} from './frontApi'
import {ajxProxy} from "./net"
import {mconfig} from "../../config/mainConfig";

const LOOPINTERVAL = 3000;

export class Session {
  static tm
  listen(suc,err){
    if(this.tm) {return}
    this.tm = setInterval(()=>{
      var m = new FrontrefreshIn();
      m.enableWaiting = false;
      ajxProxy.sendHttp(m,(o)=>{
        if(o && o.return) {
          var newMsg = JSON.parse(o.return)
          suc(newMsg)
        }


      },null,mconfig.HEART_DOMAIN)
    },LOOPINTERVAL)
  }
  unlisten(){
    clearInterval(this.tm)
    this.tm = null
  }
}

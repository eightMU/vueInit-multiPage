import {ENVIRONMENT, mconfig} from "@/../config/mainConfig"
import {MoProxy} from "@/api/MoProxy";
export class ajxProxyErrorHandler {

  static handler (code, data) {
    if(code != 0){
      // alert("错误: code:" + code);
    }
    if(code == -3){
      alert("参数错误！");
    }
    if(code == -4){
      if(ENVIRONMENT == "release"){
        // alert("release");
        window.location.href = mconfig.SELF_DOMAIN + '/auth';
      }else {
        // this.$router.push({path:'/logintest'});
        window.location.href = mconfig.SELF_DOMAIN + '/logintest'
      }

      //alert();
    }
    if(code == -3){
      alert("参数错误！");
    }
    if(code == -4){
      console.log("需要登陆！");
    }
    if(code == -5){
    	alert("图片上传失败")
    }
    if(code == -6){
    	alert("图片体积过大")
    }
    if(code == -7){
    	alert("金币不足")
    }
    if(code == -8){
    	alert("未知错误")
    }
    if(code == -9){
    	alert("超时，过期")
    }
    if(code == -1000){
    	console.log("用户今日已经签到")
    }
    if(code == -1001){
    	alert("签到奖励已经领取")
    }
    if(code == -2000){
    	alert("请充值对应金额!")
    }
    if(code == -3000){
    	alert("足球场次不存在!")
    }
    if(code == -3001){
    	alert("足球场次已经结算过!")
    }
    if(code == -3002){
    	alert("结算失败!")
    }
    if(code == -5000){
    	alert("物品不存在!")
    }
    if(code == -5001){
    	alert("库存不足!")
    }
    if(code == -5002){
    	alert("地址不存在!")
    }
    if(code == -5003){
    	alert("无可用商品!")
    }
    if(code == -5004){
    	alert("奖品已使用或者未支付!")
    }
    if(code == -5005){
    	alert("无效的电话号码!")
    }
    if(code == -7001){
    	alert("账号被锁定!")
    }
    if(code == -7002){
    	alert("用户不存在!")
    }
    if(code == -7003){
    	alert("用户登录失败!")
    }
    if(code == -8001){
    	alert("没有找到制定的对象!")
    }
    if(code == -8002){
    	alert("溢出!")
    }
    if(code == -8003){
    	alert("mysql错误!")
    }
    if(code == -8004){
    	alert("目标已经存在!")
    }
  }

}


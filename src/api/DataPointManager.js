export class  DPManager {
  static dpm;
  static arrEventListen = [];
  static init(){
    this.dpm = new dpm();
    this.dpm.init();
    this.dpm.uploadDp();
  }

}

export class dpm {
  arrBtn;
  pathName;
  init (){
    this.arrBtn = [];
    this.arrBtn = document.getElementsByClassName("datapoint_btn");
    for(let i = 0; i < this.arrBtn.length; i++){
      let item = this.arrBtn[i];
      let data_point_btn_name = item.getAttribute("datapoint_btn_name");
      if(DPManager.arrEventListen[data_point_btn_name] == true)
        continue;
      item.addEventListener("click", (event)=>{
        //console.log(data_point_btn_name);
        this.saveLocalStorage(data_point_btn_name, "btn");
      })
      DPManager.arrEventListen[data_point_btn_name] = true
    }
    this.pathName = window.location.pathname;
    this.saveLocalStorage(this.pathName, "page");
  }

  saveLocalStorage(pathName, type){
    this.pathName = pathName;
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let k = "pdw_" + this.pathName + "_" + year + "/" + month + "/" + day;
    let j = localStorage.getItem(k);
    let o;
    if(j === null){
      o = {count:0, pathName:this.pathName, type:type, time:year + "/" + month + "/" + day};
    }
    else {
      try{
        o  = JSON.parse(j);
      } catch(err){
        o = {count:0, pathName:this.pathName, type:type, time:year + "/" + month + "/" + day};
      }
    }
    o.count += 1;
    let json = JSON.stringify(o);
    localStorage.setItem(k, json);
  }

  uploadDp (){
    let arr = {};
    for(var i = 0 ; i< 1000; i++){
      let s = localStorage.key(i);
      if(s == null)
        break;
      if(s.indexOf("pdw_") == -1)
        continue;
      let o = localStorage.getItem(s);
      arr[s] = o;
    }
    let json = JSON.stringify(arr);
    //console.log(json);
    for(var k in arr){
      localStorage.removeItem(k);
    }
  }
}

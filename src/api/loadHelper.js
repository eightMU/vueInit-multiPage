import {JKEvent} from "./Event";

export class LoaderHelper{
  static event_image_load_complete = "eventImageLoadComplete";
  static __INSTANCE__ = 0;

  static imageQueueLoad (obj) {
    var lazy = new LoadHelperInstance();
    lazy.setData(obj);
    return this.__INSTANCE__;
  };

}

export class LoadHelperInstance{
  cl = "";//要操作的容器
  key = 0;
  completeCount = 0;
  count = 2;//并发个数
  arrImage = [];
  loadId = 0;
  defaultImg = "";


  setData(obj){
    LoaderHelper.__INSTANCE__++;
    this.loadId = LoaderHelper.__INSTANCE__;
    for (var key in obj) {
      this[key] = obj[key];
    }
    let o = document.getElementsByClassName(this.cl);
    if(!o || o.length <= 0)
      return;
    let imgArr = o[0].getElementsByTagName("img");
    for (let m = 0; m < imgArr.length; m++) {
      let img = imgArr[m];
      if(img.getAttribute("noLoadHelper") != "0"){
        this.arrImage.push(img);
      }
    }

    this.arrImage.sort(function (a, b) {
        return  parseInt( a.getAttribute("sort-index")) - parseInt (b.getAttribute("sort-index"));
      }
    );
    for (let m = 0; m < imgArr.length; m++) {
      let img = imgArr[m];
      //img.style.backgroundColor = "black"
      img.setAttribute("loaderHelper-src", img.src);
      img.src = this.defaultImg;
    }
    this.loop();
  }

  loop (){
    for(var i = 0; i < this.count; i++){
      this.step();
    }
  }

  step () {
    let t = this;

    let imgArr = this.arrImage;
    if (t.key >= imgArr.length) {
      return;
    }
    let img = imgArr[t.key];
    img.src = img.getAttribute("loaderHelper-src");//img.setAttribute("src", img.getAttribute("data-src"));
    // img.style.display = "none";
    img.style.opacity = 0;

    t.key++;
    img.onload = function (e) {
      t.fadeIn(img);
      t.completeCount++;
      if (t.completeCount >= imgArr.length) {

        JKEvent.dispatcherEvent(document, LoaderHelper.event_image_load_complete + t.loadId);
      }
      t.loop();
    }
    img.onerror = function(e){
      //console.log("加载错误-->", e.currentTarget.getAttribute("sort-index"),  e.currentTarget.src);
     // $(e.currentTarget).fadeIn();
      t.fadeIn(img);
      if(t.defaultImg != "")
        img.src = t.defaultImg;
      t.completeCount++;
      if (t.completeCount >= imgArr.length) {
        JKEvent.dispatcherEvent(document, LoaderHelper.event_image_load_complete + t.loadId);
      }
      t.loop();
    }
  };

  //淡入效果(含淡入到指定透明度)
  fadeIn (obj){
    let num = 0;
    let st = setInterval(function(){
      num++;
      obj.style.opacity = num / 20;
      if (num >= 20) {
        // console.log(obj.src, obj.style.opacity)

        clearInterval(st);
      }
    },20);
  }

}


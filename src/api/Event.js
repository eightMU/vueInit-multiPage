
export class JKEvent{
  static MapDataEvent ={};
  static JK_INIT = "jk_init";
  static key_enter = 13;//回车键
  static key_up = 38;//箭头上
  static key_down = 40;//箭头上
  static key_down = 27;//箭头上

  static dispatcherEvent (target, eventType, data, canBubble, cancelable) {
    canBubble = canBubble != undefined ? false : true;
    cancelable = cancelable != undefined ? false : true;
    var event = document.createEvent("HTMLEvents");
    event.initEvent(eventType, canBubble, cancelable);
    if(!JKEvent.MapDataEvent[target]) {
      JKEvent.MapDataEvent[target] = [];
    }
    JKEvent.MapDataEvent[target][eventType] = data;
    target.dispatchEvent(event);
  }

  static addJKEventListener (eventType, fun, target) {
    target.addEventListener(eventType, function() {
      if(fun) {
        if(JKEvent.MapDataEvent[target] && (JKEvent.MapDataEvent[target][eventType] !== undefined))
          fun.call(target, JKEvent.MapDataEvent[target][eventType]);
        else
          fun.call(target, null);
      }
    })
  }

  static onKeyDown (render, key, fun) {
    render.onkeypress=function(event) {
      if (event.which == key) {
        if(fun) {
          fun.call(render, event);
        }
      }
    }
  }
}

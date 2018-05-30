export class ApiBase {
  constructor () {
    this.host = ''
    this.wshost = ''
    this.params = {}
  }

  // 请求的服务器地址
  host;

  // websocket的地址
  wshost;

  // 返回码
  code;

  // 错误消息
  error;

  // 请求controller
  controller;

  // 请求动作
  action;

  // http请求方法
  method = 'get';

  // 设置的参数
  params;

  returnData;

  //是否需要显示等待
  enableWaiting = true;

  baseUrl () {
    return this.host + '/' + this.controller + '/' + this.action
  }

  fields () {
    return this.params
  }

}

export class ApiOutBase {
  constructor () {

  }

  // 返回码
  code;

  // 错误消息
  error;

  // 请求controller
  controller;

  // 请求动作
  action;
}



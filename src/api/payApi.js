import {ApiBase, ApiOutBase} from './ApiBase'
export class PayinfoIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'pay'
        this.action = 'info'
        this.returnData = new PayinfoOut()
    }
}
export class PayinfoOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'pay'
        this.action = 'info'
    }
}
export class PaypayChannelListIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'pay'
        this.action = 'payChannelList'
        this.returnData = new PaypayChannelListOut()
    }
}
export class PaypayChannelListOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'pay'
        this.action = 'payChannelList'
    }
    list
}
export class PaywechatOrderIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'pay'
        this.action = 'wechatOrder'
        this.returnData = new PaywechatOrderOut()
    }
    _subject
   get subject () {
        return this._subject
    }
   set subject (val) {
        this._subject = val
        this.params['subject'] = val
    }
    _price
   get price () {
        return this._price
    }
   set price (val) {
        this._price = val
        this.params['price'] = val
    }
}
export class PaywechatOrderOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'pay'
        this.action = 'wechatOrder'
    }
    output
}
export class PaywechatNotifyIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'pay'
        this.action = 'wechatNotify'
        this.returnData = new PaywechatNotifyOut()
    }
}
export class PaywechatNotifyOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'pay'
        this.action = 'wechatNotify'
    }
}
export class PayaliOrderIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'pay'
        this.action = 'aliOrder'
        this.returnData = new PayaliOrderOut()
    }
    _subject
   get subject () {
        return this._subject
    }
   set subject (val) {
        this._subject = val
        this.params['subject'] = val
    }
    _price
   get price () {
        return this._price
    }
   set price (val) {
        this._price = val
        this.params['price'] = val
    }
}
export class PayaliOrderOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'pay'
        this.action = 'aliOrder'
    }
    output
}
export class PayalipayredirectorIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'pay'
        this.action = 'alipayredirector'
        this.returnData = new PayalipayredirectorOut()
    }
}
export class PayalipayredirectorOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'pay'
        this.action = 'alipayredirector'
    }
}
export class PaypayOrderIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'pay'
        this.action = 'payOrder'
        this.returnData = new PaypayOrderOut()
    }
    _subject
   get subject () {
        return this._subject
    }
   set subject (val) {
        this._subject = val
        this.params['subject'] = val
    }
    _price
   get price () {
        return this._price
    }
   set price (val) {
        this._price = val
        this.params['price'] = val
    }
}
export class PaypayOrderOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'pay'
        this.action = 'payOrder'
    }
    output
}
export class PaydescriptionIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'pay'
        this.action = 'description'
        this.returnData = new PaydescriptionOut()
    }
}
export class PaydescriptionOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'pay'
        this.action = 'description'
    }
}
export class PayapidocIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'pay'
        this.action = 'apidoc'
        this.returnData = new PayapidocOut()
    }
}
export class PayapidocOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'pay'
        this.action = 'apidoc'
    }
}
export class PayapiexportIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'pay'
        this.action = 'apiexport'
        this.returnData = new PayapiexportOut()
    }
}
export class PayapiexportOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'pay'
        this.action = 'apiexport'
    }
}
   let payApis = {
        PayinfoIn,PayinfoOut,PaypayChannelListIn,PaypayChannelListOut,PaywechatOrderIn,PaywechatOrderOut,PaywechatNotifyIn,PaywechatNotifyOut,PayaliOrderIn,PayaliOrderOut,PayalipayredirectorIn,PayalipayredirectorOut,PaypayOrderIn,PaypayOrderOut,PaydescriptionIn,PaydescriptionOut,PayapidocIn,PayapidocOut,PayapiexportIn,PayapiexportOut
    }
    export default payApis
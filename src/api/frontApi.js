import {ApiBase, ApiOutBase} from './ApiBase'
export class FrontrefreshIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'front'
        this.action = 'refresh'
        this.returnData = new FrontrefreshOut()
    }
    _sid
   get sid () {
        return this._sid
    }
   set sid (val) {
        this._sid = val
        this.params['sid'] = val
    }
}
export class FrontrefreshOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'front'
        this.action = 'refresh'
    }
    return
}
export class FrontsetUserNewInfoIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'front'
        this.action = 'setUserNewInfo'
        this.returnData = new FrontsetUserNewInfoOut()
    }
    _json
   get json () {
        return this._json
    }
   set json (val) {
        this._json = val
        this.params['json'] = val
    }
    _uid
   get uid () {
        return this._uid
    }
   set uid (val) {
        this._uid = val
        this.params['uid'] = val
    }
}
export class FrontsetUserNewInfoOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'front'
        this.action = 'setUserNewInfo'
    }
    return
}
export class FrontdescriptionIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'front'
        this.action = 'description'
        this.returnData = new FrontdescriptionOut()
    }
}
export class FrontdescriptionOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'front'
        this.action = 'description'
    }
}
export class FrontapidocIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'front'
        this.action = 'apidoc'
        this.returnData = new FrontapidocOut()
    }
}
export class FrontapidocOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'front'
        this.action = 'apidoc'
    }
}
export class FrontapiexportIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'front'
        this.action = 'apiexport'
        this.returnData = new FrontapiexportOut()
    }
}
export class FrontapiexportOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'front'
        this.action = 'apiexport'
    }
}
   let frontApis = {
        FrontrefreshIn,FrontrefreshOut,FrontsetUserNewInfoIn,FrontsetUserNewInfoOut,FrontdescriptionIn,FrontdescriptionOut,FrontapidocIn,FrontapidocOut,FrontapiexportIn,FrontapiexportOut
    }
    export default frontApis
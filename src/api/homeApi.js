import {ApiBase, ApiOutBase} from './ApiBase'
export class HomebannerStatusIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'home'
        this.action = 'bannerStatus'
        this.returnData = new HomebannerStatusOut()
    }
    _id
   get id () {
        return this._id
    }
   set id (val) {
        this._id = val
        this.params['id'] = val
    }
    _status
   get status () {
        return this._status
    }
   set status (val) {
        this._status = val
        this.params['status'] = val
    }
}
export class HomebannerStatusOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'home'
        this.action = 'bannerStatus'
    }
}
export class HomeinfoIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'home'
        this.action = 'info'
        this.returnData = new HomeinfoOut()
    }
    _id
   get id () {
        return this._id
    }
   set id (val) {
        this._id = val
        this.params['id'] = val
    }
    _title
   get title () {
        return this._title
    }
   set title (val) {
        this._title = val
        this.params['title'] = val
    }
    _isUp
   get isUp () {
        return this._isUp
    }
   set isUp (val) {
        this._isUp = val
        this.params['isUp'] = val
    }
}
export class HomeinfoOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'home'
        this.action = 'info'
    }
    id
    title
    expire
    pirority
    openurl
    image
    desc
    isUp
}
export class HomefindIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'home'
        this.action = 'find'
        this.returnData = new HomefindOut()
    }
}
export class HomefindOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'home'
        this.action = 'find'
    }
    arrBanner
}
export class HomeupdateIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'home'
        this.action = 'update'
        this.returnData = new HomeupdateOut()
    }
    _id
   get id () {
        return this._id
    }
   set id (val) {
        this._id = val
        this.params['id'] = val
    }
    _title
   get title () {
        return this._title
    }
   set title (val) {
        this._title = val
        this.params['title'] = val
    }
    _expire
   get expire () {
        return this._expire
    }
   set expire (val) {
        this._expire = val
        this.params['expire'] = val
    }
    _openurl
   get openurl () {
        return this._openurl
    }
   set openurl (val) {
        this._openurl = val
        this.params['openurl'] = val
    }
    _image
   get image () {
        return this._image
    }
   set image (val) {
        this._image = val
        this.params['image'] = val
    }
    _desc
   get desc () {
        return this._desc
    }
   set desc (val) {
        this._desc = val
        this.params['desc'] = val
    }
    _isUp
   get isUp () {
        return this._isUp
    }
   set isUp (val) {
        this._isUp = val
        this.params['isUp'] = val
    }
}
export class HomeupdateOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'home'
        this.action = 'update'
    }
    id
    title
    expire
    openurl
    image
    desc
    isUp
}
export class HomeaddIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'home'
        this.action = 'add'
        this.returnData = new HomeaddOut()
    }
    _title
   get title () {
        return this._title
    }
   set title (val) {
        this._title = val
        this.params['title'] = val
    }
    _expire
   get expire () {
        return this._expire
    }
   set expire (val) {
        this._expire = val
        this.params['expire'] = val
    }
    _pirority
   get pirority () {
        return this._pirority
    }
   set pirority (val) {
        this._pirority = val
        this.params['pirority'] = val
    }
    _openurl
   get openurl () {
        return this._openurl
    }
   set openurl (val) {
        this._openurl = val
        this.params['openurl'] = val
    }
    _image
   get image () {
        return this._image
    }
   set image (val) {
        this._image = val
        this.params['image'] = val
    }
    _desc
   get desc () {
        return this._desc
    }
   set desc (val) {
        this._desc = val
        this.params['desc'] = val
    }
    _isUp
   get isUp () {
        return this._isUp
    }
   set isUp (val) {
        this._isUp = val
        this.params['isUp'] = val
    }
}
export class HomeaddOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'home'
        this.action = 'add'
    }
    id
    title
    expire
    pirority
    openurl
    image
    desc
    isUp
}
export class HomedeleteIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'home'
        this.action = 'delete'
        this.returnData = new HomedeleteOut()
    }
    _id
   get id () {
        return this._id
    }
   set id (val) {
        this._id = val
        this.params['id'] = val
    }
}
export class HomedeleteOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'home'
        this.action = 'delete'
    }
    id
}
export class HomeuploadLunboIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'home'
        this.action = 'uploadLunbo'
        this.returnData = new HomeuploadLunboOut()
    }
}
export class HomeuploadLunboOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'home'
        this.action = 'uploadLunbo'
    }
    serverPath
}
export class HomemoduleInfoIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'home'
        this.action = 'moduleInfo'
        this.returnData = new HomemoduleInfoOut()
    }
    _id
   get id () {
        return this._id
    }
   set id (val) {
        this._id = val
        this.params['id'] = val
    }
}
export class HomemoduleInfoOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'home'
        this.action = 'moduleInfo'
    }
    id
    name
    desc
    dress
    img
}
export class HomemoduleQueryIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'home'
        this.action = 'moduleQuery'
        this.returnData = new HomemoduleQueryOut()
    }
}
export class HomemoduleQueryOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'home'
        this.action = 'moduleQuery'
    }
    arrHomemodule
}
export class HomemoduleModifyIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'home'
        this.action = 'moduleModify'
        this.returnData = new HomemoduleModifyOut()
    }
    _id
   get id () {
        return this._id
    }
   set id (val) {
        this._id = val
        this.params['id'] = val
    }
    _name
   get name () {
        return this._name
    }
   set name (val) {
        this._name = val
        this.params['name'] = val
    }
    _desc
   get desc () {
        return this._desc
    }
   set desc (val) {
        this._desc = val
        this.params['desc'] = val
    }
    _dress
   get dress () {
        return this._dress
    }
   set dress (val) {
        this._dress = val
        this.params['dress'] = val
    }
    _img
   get img () {
        return this._img
    }
   set img (val) {
        this._img = val
        this.params['img'] = val
    }
}
export class HomemoduleModifyOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'home'
        this.action = 'moduleModify'
    }
    id
    name
    desc
    dress
    img
}
export class HomemoduleAddIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'home'
        this.action = 'moduleAdd'
        this.returnData = new HomemoduleAddOut()
    }
    _name
   get name () {
        return this._name
    }
   set name (val) {
        this._name = val
        this.params['name'] = val
    }
    _desc
   get desc () {
        return this._desc
    }
   set desc (val) {
        this._desc = val
        this.params['desc'] = val
    }
    _dress
   get dress () {
        return this._dress
    }
   set dress (val) {
        this._dress = val
        this.params['dress'] = val
    }
    _img
   get img () {
        return this._img
    }
   set img (val) {
        this._img = val
        this.params['img'] = val
    }
}
export class HomemoduleAddOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'home'
        this.action = 'moduleAdd'
    }
    id
    name
    desc
    dress
    img
}
export class HomemoduleDeleteIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'home'
        this.action = 'moduleDelete'
        this.returnData = new HomemoduleDeleteOut()
    }
    _id
   get id () {
        return this._id
    }
   set id (val) {
        this._id = val
        this.params['id'] = val
    }
}
export class HomemoduleDeleteOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'home'
        this.action = 'moduleDelete'
    }
    id
}
export class HomeurlInfoIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'home'
        this.action = 'urlInfo'
        this.returnData = new HomeurlInfoOut()
    }
}
export class HomeurlInfoOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'home'
        this.action = 'urlInfo'
    }
    arrUrl
}
export class HomeagentAddIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'home'
        this.action = 'agentAdd'
        this.returnData = new HomeagentAddOut()
    }
    _content
   get content () {
        return this._content
    }
   set content (val) {
        this._content = val
        this.params['content'] = val
    }
}
export class HomeagentAddOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'home'
        this.action = 'agentAdd'
    }
    id
    content
    created_time
    userid
    username
}
export class HomepayJsonIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'home'
        this.action = 'payJson'
        this.returnData = new HomepayJsonOut()
    }
}
export class HomepayJsonOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'home'
        this.action = 'payJson'
    }
    jsonPay
}
export class HomedescriptionIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'home'
        this.action = 'description'
        this.returnData = new HomedescriptionOut()
    }
}
export class HomedescriptionOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'home'
        this.action = 'description'
    }
}
export class HomeapidocIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'home'
        this.action = 'apidoc'
        this.returnData = new HomeapidocOut()
    }
}
export class HomeapidocOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'home'
        this.action = 'apidoc'
    }
}
export class HomeapiexportIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'home'
        this.action = 'apiexport'
        this.returnData = new HomeapiexportOut()
    }
}
export class HomeapiexportOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'home'
        this.action = 'apiexport'
    }
}
   let homeApis = {
        HomebannerStatusIn,HomebannerStatusOut,HomeinfoIn,HomeinfoOut,HomefindIn,HomefindOut,HomeupdateIn,HomeupdateOut,HomeaddIn,HomeaddOut,HomedeleteIn,HomedeleteOut,HomeuploadLunboIn,HomeuploadLunboOut,HomemoduleInfoIn,HomemoduleInfoOut,HomemoduleQueryIn,HomemoduleQueryOut,HomemoduleModifyIn,HomemoduleModifyOut,HomemoduleAddIn,HomemoduleAddOut,HomemoduleDeleteIn,HomemoduleDeleteOut,HomeurlInfoIn,HomeurlInfoOut,HomeagentAddIn,HomeagentAddOut,HomepayJsonIn,HomepayJsonOut,HomedescriptionIn,HomedescriptionOut,HomeapidocIn,HomeapidocOut,HomeapiexportIn,HomeapiexportOut
    }
    export default homeApis
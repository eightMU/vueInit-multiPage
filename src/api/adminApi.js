import {ApiBase, ApiOutBase} from './ApiBase'
export class AdmintestIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'admin'
        this.action = 'test'
        this.returnData = new AdmintestOut()
    }
}
export class AdmintestOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'admin'
        this.action = 'test'
    }
}
export class AdminindexAuthIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'admin'
        this.action = 'indexAuth'
        this.returnData = new AdminindexAuthOut()
    }
}
export class AdminindexAuthOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'admin'
        this.action = 'indexAuth'
    }
    auths
    groupList
    adminuser
    id
}
export class AdminloginIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'admin'
        this.action = 'login'
        this.returnData = new AdminloginOut()
    }
    _na
   get na () {
        return this._na
    }
   set na (val) {
        this._na = val
        this.params['na'] = val
    }
    _pw
   get pw () {
        return this._pw
    }
   set pw (val) {
        this._pw = val
        this.params['pw'] = val
    }
    _vf
   get vf () {
        return this._vf
    }
   set vf (val) {
        this._vf = val
        this.params['vf'] = val
    }
}
export class AdminloginOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'admin'
        this.action = 'login'
    }
    adminuser
    group_name
    sid
}
export class AdminlogoutIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'admin'
        this.action = 'logout'
        this.returnData = new AdminlogoutOut()
    }
}
export class AdminlogoutOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'admin'
        this.action = 'logout'
    }
}
export class AdminuserListIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'admin'
        this.action = 'userList'
        this.returnData = new AdminuserListOut()
    }
}
export class AdminuserListOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'admin'
        this.action = 'userList'
    }
    adminList
    groupList
}
export class AdmingroupListIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'admin'
        this.action = 'groupList'
        this.returnData = new AdmingroupListOut()
    }
}
export class AdmingroupListOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'admin'
        this.action = 'groupList'
    }
    adminList
    groupList
}
export class AdminaddUserIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'admin'
        this.action = 'addUser'
        this.returnData = new AdminaddUserOut()
    }
    _admin
   get admin () {
        return this._admin
    }
   set admin (val) {
        this._admin = val
        this.params['admin'] = val
    }
    _password
   get password () {
        return this._password
    }
   set password (val) {
        this._password = val
        this.params['password'] = val
    }
    _group_id
   get group_id () {
        return this._group_id
    }
   set group_id (val) {
        this._group_id = val
        this.params['group_id'] = val
    }
}
export class AdminaddUserOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'admin'
        this.action = 'addUser'
    }
    id
    admin
    group_id
    group_name
    last_login_time
}
export class AdminuserIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'admin'
        this.action = 'user'
        this.returnData = new AdminuserOut()
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
export class AdminuserOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'admin'
        this.action = 'user'
    }
    admin
    group_id
}
export class AdminuserGIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'admin'
        this.action = 'userG'
        this.returnData = new AdminuserGOut()
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
export class AdminuserGOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'admin'
        this.action = 'userG'
    }
    group_name
    auth_code
}
export class AdmindUserIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'admin'
        this.action = 'dUser'
        this.returnData = new AdmindUserOut()
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
export class AdmindUserOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'admin'
        this.action = 'dUser'
    }
    admin
    group_id
}
export class AdmindUserGIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'admin'
        this.action = 'dUserG'
        this.returnData = new AdmindUserGOut()
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
export class AdmindUserGOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'admin'
        this.action = 'dUserG'
    }
    group_name
    auth_code
}
export class AdminupdUserIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'admin'
        this.action = 'updUser'
        this.returnData = new AdminupdUserOut()
    }
    _id
   get id () {
        return this._id
    }
   set id (val) {
        this._id = val
        this.params['id'] = val
    }
    _admin
   get admin () {
        return this._admin
    }
   set admin (val) {
        this._admin = val
        this.params['admin'] = val
    }
    _password
   get password () {
        return this._password
    }
   set password (val) {
        this._password = val
        this.params['password'] = val
    }
    _group_id
   get group_id () {
        return this._group_id
    }
   set group_id (val) {
        this._group_id = val
        this.params['group_id'] = val
    }
}
export class AdminupdUserOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'admin'
        this.action = 'updUser'
    }
    id
    admin
    group_id
    last_login_time
}
export class AdminaddGroupIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'admin'
        this.action = 'addGroup'
        this.returnData = new AdminaddGroupOut()
    }
    _group_name
   get group_name () {
        return this._group_name
    }
   set group_name (val) {
        this._group_name = val
        this.params['group_name'] = val
    }
    _auth_code
   get auth_code () {
        return this._auth_code
    }
   set auth_code (val) {
        this._auth_code = val
        this.params['auth_code'] = val
    }
    _operators
   get operators () {
        return this._operators
    }
   set operators (val) {
        this._operators = val
        this.params['operators'] = val
    }
}
export class AdminaddGroupOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'admin'
        this.action = 'addGroup'
    }
    id
    group_name
    auth_code
    create_time
    operators
}
export class AdminupdGroupIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'admin'
        this.action = 'updGroup'
        this.returnData = new AdminupdGroupOut()
    }
    _id
   get id () {
        return this._id
    }
   set id (val) {
        this._id = val
        this.params['id'] = val
    }
    _group_name
   get group_name () {
        return this._group_name
    }
   set group_name (val) {
        this._group_name = val
        this.params['group_name'] = val
    }
    _auth_code
   get auth_code () {
        return this._auth_code
    }
   set auth_code (val) {
        this._auth_code = val
        this.params['auth_code'] = val
    }
}
export class AdminupdGroupOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'admin'
        this.action = 'updGroup'
    }
    group_name
    auth_code
}
export class AdmindescriptionIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'admin'
        this.action = 'description'
        this.returnData = new AdmindescriptionOut()
    }
}
export class AdmindescriptionOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'admin'
        this.action = 'description'
    }
}
export class AdminapidocIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'admin'
        this.action = 'apidoc'
        this.returnData = new AdminapidocOut()
    }
}
export class AdminapidocOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'admin'
        this.action = 'apidoc'
    }
}
export class AdminapiexportIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'admin'
        this.action = 'apiexport'
        this.returnData = new AdminapiexportOut()
    }
}
export class AdminapiexportOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'admin'
        this.action = 'apiexport'
    }
}
   let adminApis = {
        AdmintestIn,AdmintestOut,AdminindexAuthIn,AdminindexAuthOut,AdminloginIn,AdminloginOut,AdminlogoutIn,AdminlogoutOut,AdminuserListIn,AdminuserListOut,AdmingroupListIn,AdmingroupListOut,AdminaddUserIn,AdminaddUserOut,AdminuserIn,AdminuserOut,AdminuserGIn,AdminuserGOut,AdmindUserIn,AdmindUserOut,AdmindUserGIn,AdmindUserGOut,AdminupdUserIn,AdminupdUserOut,AdminaddGroupIn,AdminaddGroupOut,AdminupdGroupIn,AdminupdGroupOut,AdmindescriptionIn,AdmindescriptionOut,AdminapidocIn,AdminapidocOut,AdminapiexportIn,AdminapiexportOut
    }
    export default adminApis
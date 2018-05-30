import {ApiBase, ApiOutBase} from './ApiBase'
export class UsertestIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'test'
        this.returnData = new UsertestOut()
    }
}
export class UsertestOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'test'
    }
    t
}
export class UserinfoIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'info'
        this.returnData = new UserinfoOut()
    }
}
export class UserinfoOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'info'
    }
    id
    user
}
export class UserregisterIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'register'
        this.returnData = new UserregisterOut()
    }
    _unid
   get unid () {
        return this._unid
    }
   set unid (val) {
        this._unid = val
        this.params['unid'] = val
    }
    _username
   get username () {
        return this._username
    }
   set username (val) {
        this._username = val
        this.params['username'] = val
    }
    _sex
   get sex () {
        return this._sex
    }
   set sex (val) {
        this._sex = val
        this.params['sex'] = val
    }
    _avatar_origin
   get avatar_origin () {
        return this._avatar_origin
    }
   set avatar_origin (val) {
        this._avatar_origin = val
        this.params['avatar_origin'] = val
    }
    _moToken
   get moToken () {
        return this._moToken
    }
   set moToken (val) {
        this._moToken = val
        this.params['moToken'] = val
    }
}
export class UserregisterOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'register'
    }
    user
    sid
}
export class UserloginIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'login'
        this.returnData = new UserloginOut()
    }
    _unid
   get unid () {
        return this._unid
    }
   set unid (val) {
        this._unid = val
        this.params['unid'] = val
    }
    _username
   get username () {
        return this._username
    }
   set username (val) {
        this._username = val
        this.params['username'] = val
    }
    _sex
   get sex () {
        return this._sex
    }
   set sex (val) {
        this._sex = val
        this.params['sex'] = val
    }
    _avatar_origin
   get avatar_origin () {
        return this._avatar_origin
    }
   set avatar_origin (val) {
        this._avatar_origin = val
        this.params['avatar_origin'] = val
    }
    _moToken
   get moToken () {
        return this._moToken
    }
   set moToken (val) {
        this._moToken = val
        this.params['moToken'] = val
    }
}
export class UserloginOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'login'
    }
    user
    sid
}
export class UserqueryIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'query'
        this.returnData = new UserqueryOut()
    }
    _count
   get count () {
        return this._count
    }
   set count (val) {
        this._count = val
        this.params['count'] = val
    }
    _page
   get page () {
        return this._page
    }
   set page (val) {
        this._page = val
        this.params['page'] = val
    }
    _flags
   get flags () {
        return this._flags
    }
   set flags (val) {
        this._flags = val
        this.params['flags'] = val
    }
    _channel_id
   get channel_id () {
        return this._channel_id
    }
   set channel_id (val) {
        this._channel_id = val
        this.params['channel_id'] = val
    }
    _isactivity
   get isactivity () {
        return this._isactivity
    }
   set isactivity (val) {
        this._isactivity = val
        this.params['isactivity'] = val
    }
    _sex
   get sex () {
        return this._sex
    }
   set sex (val) {
        this._sex = val
        this.params['sex'] = val
    }
    _username
   get username () {
        return this._username
    }
   set username (val) {
        this._username = val
        this.params['username'] = val
    }
}
export class UserqueryOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'query'
    }
    count
    page
    flags
    arrUser
    totalPage
    len
}
export class UsermodifyIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'modify'
        this.returnData = new UsermodifyOut()
    }
    _id
   get id () {
        return this._id
    }
   set id (val) {
        this._id = val
        this.params['id'] = val
    }
    _tags
   get tags () {
        return this._tags
    }
   set tags (val) {
        this._tags = val
        this.params['tags'] = val
    }
    _gold
   get gold () {
        return this._gold
    }
   set gold (val) {
        this._gold = val
        this.params['gold'] = val
    }
    _charm
   get charm () {
        return this._charm
    }
   set charm (val) {
        this._charm = val
        this.params['charm'] = val
    }
    _mobile
   get mobile () {
        return this._mobile
    }
   set mobile (val) {
        this._mobile = val
        this.params['mobile'] = val
    }
    _isactivity
   get isactivity () {
        return this._isactivity
    }
   set isactivity (val) {
        this._isactivity = val
        this.params['isactivity'] = val
    }
}
export class UsermodifyOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'modify'
    }
    id
    tags
    gold
    charm
    mobile
    isactivity
}
export class UserupdatetagsIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'updatetags'
        this.returnData = new UserupdatetagsOut()
    }
    _id
   get id () {
        return this._id
    }
   set id (val) {
        this._id = val
        this.params['id'] = val
    }
    _tagsKey
   get tagsKey () {
        return this._tagsKey
    }
   set tagsKey (val) {
        this._tagsKey = val
        this.params['tagsKey'] = val
    }
    _tagsValue
   get tagsValue () {
        return this._tagsValue
    }
   set tagsValue (val) {
        this._tagsValue = val
        this.params['tagsValue'] = val
    }
}
export class UserupdatetagsOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'updatetags'
    }
}
export class UserblockIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'block'
        this.returnData = new UserblockOut()
    }
    _id
   get id () {
        return this._id
    }
   set id (val) {
        this._id = val
        this.params['id'] = val
    }
    _value
   get value () {
        return this._value
    }
   set value (val) {
        this._value = val
        this.params['value'] = val
    }
}
export class UserblockOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'block'
    }
}
export class UsergoldDetailsIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'goldDetails'
        this.returnData = new UsergoldDetailsOut()
    }
    _count
   get count () {
        return this._count
    }
   set count (val) {
        this._count = val
        this.params['count'] = val
    }
    _page
   get page () {
        return this._page
    }
   set page (val) {
        this._page = val
        this.params['page'] = val
    }
}
export class UsergoldDetailsOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'goldDetails'
    }
    count
    page
    totalPage
    len
    arrDetails
}
export class UserpaySucHandlerIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'paySucHandler'
        this.returnData = new UserpaySucHandlerOut()
    }
    _order_id
   get order_id () {
        return this._order_id
    }
   set order_id (val) {
        this._order_id = val
        this.params['order_id'] = val
    }
    _gold
   get gold () {
        return this._gold
    }
   set gold (val) {
        this._gold = val
        this.params['gold'] = val
    }
    _user_id
   get user_id () {
        return this._user_id
    }
   set user_id (val) {
        this._user_id = val
        this.params['user_id'] = val
    }
    _way
   get way () {
        return this._way
    }
   set way (val) {
        this._way = val
        this.params['way'] = val
    }
}
export class UserpaySucHandlerOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'paySucHandler'
    }
}
export class UserfirstPayIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'firstPay'
        this.returnData = new UserfirstPayOut()
    }
}
export class UserfirstPayOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'firstPay'
    }
    json
}
export class UserportraitQueryIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'portraitQuery'
        this.returnData = new UserportraitQueryOut()
    }
}
export class UserportraitQueryOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'portraitQuery'
    }
    arrUserPortrait
}
export class UserportraitStatusIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'portraitStatus'
        this.returnData = new UserportraitStatusOut()
    }
    _head_type
   get head_type () {
        return this._head_type
    }
   set head_type (val) {
        this._head_type = val
        this.params['head_type'] = val
    }
}
export class UserportraitStatusOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'portraitStatus'
    }
}
export class UsersignActionIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'signAction'
        this.returnData = new UsersignActionOut()
    }
}
export class UsersignActionOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'signAction'
    }
    info
}
export class UsersignAwardQueryIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'signAwardQuery'
        this.returnData = new UsersignAwardQueryOut()
    }
}
export class UsersignAwardQueryOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'signAwardQuery'
    }
    arrSignAward
}
export class UsersignQueryIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'signQuery'
        this.returnData = new UsersignQueryOut()
    }
}
export class UsersignQueryOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'signQuery'
    }
    arrSign
}
export class UsersignStatusIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'signStatus'
        this.returnData = new UsersignStatusOut()
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
export class UsersignStatusOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'signStatus'
    }
}
export class UsergoldRankIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'goldRank'
        this.returnData = new UsergoldRankOut()
    }
    _count
   get count () {
        return this._count
    }
   set count (val) {
        this._count = val
        this.params['count'] = val
    }
    _page
   get page () {
        return this._page
    }
   set page (val) {
        this._page = val
        this.params['page'] = val
    }
}
export class UsergoldRankOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'goldRank'
    }
    count
    page
    totalPage
    len
    arrRank
}
export class UserearningsRankIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'earningsRank'
        this.returnData = new UserearningsRankOut()
    }
    _count
   get count () {
        return this._count
    }
   set count (val) {
        this._count = val
        this.params['count'] = val
    }
    _page
   get page () {
        return this._page
    }
   set page (val) {
        this._page = val
        this.params['page'] = val
    }
}
export class UserearningsRankOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'earningsRank'
    }
    count
    page
    totalPage
    len
    arrEarnings
}
export class UseruserQueryIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'userQuery'
        this.returnData = new UseruserQueryOut()
    }
}
export class UseruserQueryOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'userQuery'
    }
    info
}
export class UserctsStatisticalDataIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'ctsStatisticalData'
        this.returnData = new UserctsStatisticalDataOut()
    }
    _reason
   get reason () {
        return this._reason
    }
   set reason (val) {
        this._reason = val
        this.params['reason'] = val
    }
}
export class UserctsStatisticalDataOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'ctsStatisticalData'
    }
}
export class UserpicHandleIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'picHandle'
        this.returnData = new UserpicHandleOut()
    }
}
export class UserpicHandleOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'picHandle'
    }
}
export class UserdescriptionIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'description'
        this.returnData = new UserdescriptionOut()
    }
}
export class UserdescriptionOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'description'
    }
}
export class UserapidocIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'apidoc'
        this.returnData = new UserapidocOut()
    }
}
export class UserapidocOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'apidoc'
    }
}
export class UserapiexportIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'user'
        this.action = 'apiexport'
        this.returnData = new UserapiexportOut()
    }
}
export class UserapiexportOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'user'
        this.action = 'apiexport'
    }
}
   let userApis = {
        UsertestIn,UsertestOut,UserinfoIn,UserinfoOut,UserregisterIn,UserregisterOut,UserloginIn,UserloginOut,UserqueryIn,UserqueryOut,UsermodifyIn,UsermodifyOut,UserupdatetagsIn,UserupdatetagsOut,UserblockIn,UserblockOut,UsergoldDetailsIn,UsergoldDetailsOut,UserpaySucHandlerIn,UserpaySucHandlerOut,UserfirstPayIn,UserfirstPayOut,UserportraitQueryIn,UserportraitQueryOut,UserportraitStatusIn,UserportraitStatusOut,UsersignActionIn,UsersignActionOut,UsersignAwardQueryIn,UsersignAwardQueryOut,UsersignQueryIn,UsersignQueryOut,UsersignStatusIn,UsersignStatusOut,UsergoldRankIn,UsergoldRankOut,UserearningsRankIn,UserearningsRankOut,UseruserQueryIn,UseruserQueryOut,UserctsStatisticalDataIn,UserctsStatisticalDataOut,UserpicHandleIn,UserpicHandleOut,UserdescriptionIn,UserdescriptionOut,UserapidocIn,UserapidocOut,UserapiexportIn,UserapiexportOut
    }
    export default userApis
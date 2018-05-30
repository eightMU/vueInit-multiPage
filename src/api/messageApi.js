import {ApiBase, ApiOutBase} from './ApiBase'
export class MessageinfoIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'message'
        this.action = 'info'
        this.returnData = new MessageinfoOut()
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
export class MessageinfoOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'message'
        this.action = 'info'
    }
    message
}
export class MessageaddIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'message'
        this.action = 'add'
        this.returnData = new MessageaddOut()
    }
    _title
   get title () {
        return this._title
    }
   set title (val) {
        this._title = val
        this.params['title'] = val
    }
    _userId
   get userId () {
        return this._userId
    }
   set userId (val) {
        this._userId = val
        this.params['userId'] = val
    }
    _content
   get content () {
        return this._content
    }
   set content (val) {
        this._content = val
        this.params['content'] = val
    }
    _type
   get type () {
        return this._type
    }
   set type (val) {
        this._type = val
        this.params['type'] = val
    }
    _icon_type
   get icon_type () {
        return this._icon_type
    }
   set icon_type (val) {
        this._icon_type = val
        this.params['icon_type'] = val
    }
    _usertags
   get usertags () {
        return this._usertags
    }
   set usertags (val) {
        this._usertags = val
        this.params['usertags'] = val
    }
    _gameId
   get gameId () {
        return this._gameId
    }
   set gameId (val) {
        this._gameId = val
        this.params['gameId'] = val
    }
    _isup
   get isup () {
        return this._isup
    }
   set isup (val) {
        this._isup = val
        this.params['isup'] = val
    }
    _icon
   get icon () {
        return this._icon
    }
   set icon (val) {
        this._icon = val
        this.params['icon'] = val
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
}
export class MessageaddOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'message'
        this.action = 'add'
    }
    id
    title
    userId
    content
    time
    type
    icon_type
    usertags
    gameId
    isup
    icon
    name
    desc
}
export class MessagemodifyIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'message'
        this.action = 'modify'
        this.returnData = new MessagemodifyOut()
    }
    _id
   get id () {
        return this._id
    }
   set id (val) {
        this._id = val
        this.params['id'] = val
    }
    _content
   get content () {
        return this._content
    }
   set content (val) {
        this._content = val
        this.params['content'] = val
    }
    _type
   get type () {
        return this._type
    }
   set type (val) {
        this._type = val
        this.params['type'] = val
    }
    _usertags
   get usertags () {
        return this._usertags
    }
   set usertags (val) {
        this._usertags = val
        this.params['usertags'] = val
    }
    _gameId
   get gameId () {
        return this._gameId
    }
   set gameId (val) {
        this._gameId = val
        this.params['gameId'] = val
    }
    _userId
   get userId () {
        return this._userId
    }
   set userId (val) {
        this._userId = val
        this.params['userId'] = val
    }
    _isup
   get isup () {
        return this._isup
    }
   set isup (val) {
        this._isup = val
        this.params['isup'] = val
    }
}
export class MessagemodifyOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'message'
        this.action = 'modify'
    }
    id
    content
    type
    usertags
    gameId
    userId
    isup
}
export class MessagedeleteIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'message'
        this.action = 'delete'
        this.returnData = new MessagedeleteOut()
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
export class MessagedeleteOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'message'
        this.action = 'delete'
    }
    id
}
export class MessagesendUserMIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'message'
        this.action = 'sendUserM'
        this.returnData = new MessagesendUserMOut()
    }
    _title
   get title () {
        return this._title
    }
   set title (val) {
        this._title = val
        this.params['title'] = val
    }
    _userId
   get userId () {
        return this._userId
    }
   set userId (val) {
        this._userId = val
        this.params['userId'] = val
    }
    _content
   get content () {
        return this._content
    }
   set content (val) {
        this._content = val
        this.params['content'] = val
    }
    _type
   get type () {
        return this._type
    }
   set type (val) {
        this._type = val
        this.params['type'] = val
    }
    _icon_type
   get icon_type () {
        return this._icon_type
    }
   set icon_type (val) {
        this._icon_type = val
        this.params['icon_type'] = val
    }
    _usertags
   get usertags () {
        return this._usertags
    }
   set usertags (val) {
        this._usertags = val
        this.params['usertags'] = val
    }
    _gameId
   get gameId () {
        return this._gameId
    }
   set gameId (val) {
        this._gameId = val
        this.params['gameId'] = val
    }
    _isup
   get isup () {
        return this._isup
    }
   set isup (val) {
        this._isup = val
        this.params['isup'] = val
    }
    _icon
   get icon () {
        return this._icon
    }
   set icon (val) {
        this._icon = val
        this.params['icon'] = val
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
}
export class MessagesendUserMOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'message'
        this.action = 'sendUserM'
    }
    id
    title
    userId
    content
    time
    type
    icon_type
    usertags
    gameId
    isup
    icon
    name
    desc
}
export class MessagequeryUserMessageIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'message'
        this.action = 'queryUserMessage'
        this.returnData = new MessagequeryUserMessageOut()
    }
}
export class MessagequeryUserMessageOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'message'
        this.action = 'queryUserMessage'
    }
    userId
    arrMessage
}
export class MessagedescriptionIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'message'
        this.action = 'description'
        this.returnData = new MessagedescriptionOut()
    }
}
export class MessagedescriptionOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'message'
        this.action = 'description'
    }
}
export class MessageapidocIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'message'
        this.action = 'apidoc'
        this.returnData = new MessageapidocOut()
    }
}
export class MessageapidocOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'message'
        this.action = 'apidoc'
    }
}
export class MessageapiexportIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'message'
        this.action = 'apiexport'
        this.returnData = new MessageapiexportOut()
    }
}
export class MessageapiexportOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'message'
        this.action = 'apiexport'
    }
}
   let messageApis = {
        MessageinfoIn,MessageinfoOut,MessageaddIn,MessageaddOut,MessagemodifyIn,MessagemodifyOut,MessagedeleteIn,MessagedeleteOut,MessagesendUserMIn,MessagesendUserMOut,MessagequeryUserMessageIn,MessagequeryUserMessageOut,MessagedescriptionIn,MessagedescriptionOut,MessageapidocIn,MessageapidocOut,MessageapiexportIn,MessageapiexportOut
    }
    export default messageApis
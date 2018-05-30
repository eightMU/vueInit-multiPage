import {ApiBase, ApiOutBase} from './ApiBase'
export class NoticeinfoIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'notice'
        this.action = 'info'
        this.returnData = new NoticeinfoOut()
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
export class NoticeinfoOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'notice'
        this.action = 'info'
    }
    id
    content
    startTime
    fps
    endTime
    templateid
    link
    origin
    count
}
export class NoticelistsIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'notice'
        this.action = 'lists'
        this.returnData = new NoticelistsOut()
    }
}
export class NoticelistsOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'notice'
        this.action = 'lists'
    }
    NoticeList
    templateList
}
export class NoticequeryIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'notice'
        this.action = 'query'
        this.returnData = new NoticequeryOut()
    }
}
export class NoticequeryOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'notice'
        this.action = 'query'
    }
    arrNotice
}
export class NoticequeryUserNoticeIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'notice'
        this.action = 'queryUserNotice'
        this.returnData = new NoticequeryUserNoticeOut()
    }
}
export class NoticequeryUserNoticeOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'notice'
        this.action = 'queryUserNotice'
    }
    arrNotice
}
export class NoticeaddIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'notice'
        this.action = 'add'
        this.returnData = new NoticeaddOut()
    }
    _content
   get content () {
        return this._content
    }
   set content (val) {
        this._content = val
        this.params['content'] = val
    }
    _startTime
   get startTime () {
        return this._startTime
    }
   set startTime (val) {
        this._startTime = val
        this.params['startTime'] = val
    }
    _fps
   get fps () {
        return this._fps
    }
   set fps (val) {
        this._fps = val
        this.params['fps'] = val
    }
    _endTime
   get endTime () {
        return this._endTime
    }
   set endTime (val) {
        this._endTime = val
        this.params['endTime'] = val
    }
    _templateid
   get templateid () {
        return this._templateid
    }
   set templateid (val) {
        this._templateid = val
        this.params['templateid'] = val
    }
    _link
   get link () {
        return this._link
    }
   set link (val) {
        this._link = val
        this.params['link'] = val
    }
    _origin
   get origin () {
        return this._origin
    }
   set origin (val) {
        this._origin = val
        this.params['origin'] = val
    }
    _count
   get count () {
        return this._count
    }
   set count (val) {
        this._count = val
        this.params['count'] = val
    }
    _currentcount
   get currentcount () {
        return this._currentcount
    }
   set currentcount (val) {
        this._currentcount = val
        this.params['currentcount'] = val
    }
    _tags
   get tags () {
        return this._tags
    }
   set tags (val) {
        this._tags = val
        this.params['tags'] = val
    }
    _type_id
   get type_id () {
        return this._type_id
    }
   set type_id (val) {
        this._type_id = val
        this.params['type_id'] = val
    }
}
export class NoticeaddOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'notice'
        this.action = 'add'
    }
    id
    content
    startTime
    fps
    endTime
    templateid
    link
    origin
    count
    currentcount
    tags
    type_id
    name
    descr
    color
    content_color
}
export class NoticemodifyIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'notice'
        this.action = 'modify'
        this.returnData = new NoticemodifyOut()
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
    _startTime
   get startTime () {
        return this._startTime
    }
   set startTime (val) {
        this._startTime = val
        this.params['startTime'] = val
    }
    _fps
   get fps () {
        return this._fps
    }
   set fps (val) {
        this._fps = val
        this.params['fps'] = val
    }
    _endTime
   get endTime () {
        return this._endTime
    }
   set endTime (val) {
        this._endTime = val
        this.params['endTime'] = val
    }
    _templateid
   get templateid () {
        return this._templateid
    }
   set templateid (val) {
        this._templateid = val
        this.params['templateid'] = val
    }
    _link
   get link () {
        return this._link
    }
   set link (val) {
        this._link = val
        this.params['link'] = val
    }
    _origin
   get origin () {
        return this._origin
    }
   set origin (val) {
        this._origin = val
        this.params['origin'] = val
    }
    _count
   get count () {
        return this._count
    }
   set count (val) {
        this._count = val
        this.params['count'] = val
    }
}
export class NoticemodifyOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'notice'
        this.action = 'modify'
    }
    id
    content
    startTime
    fps
    endTime
    templateid
    link
    origin
    count
}
export class NoticedeleteIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'notice'
        this.action = 'delete'
        this.returnData = new NoticedeleteOut()
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
export class NoticedeleteOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'notice'
        this.action = 'delete'
    }
    id
}
export class NoticeaddRemoteIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'notice'
        this.action = 'addRemote'
        this.returnData = new NoticeaddRemoteOut()
    }
    _content
   get content () {
        return this._content
    }
   set content (val) {
        this._content = val
        this.params['content'] = val
    }
    _startTime
   get startTime () {
        return this._startTime
    }
   set startTime (val) {
        this._startTime = val
        this.params['startTime'] = val
    }
    _fps
   get fps () {
        return this._fps
    }
   set fps (val) {
        this._fps = val
        this.params['fps'] = val
    }
    _endTime
   get endTime () {
        return this._endTime
    }
   set endTime (val) {
        this._endTime = val
        this.params['endTime'] = val
    }
    _templateid
   get templateid () {
        return this._templateid
    }
   set templateid (val) {
        this._templateid = val
        this.params['templateid'] = val
    }
    _link
   get link () {
        return this._link
    }
   set link (val) {
        this._link = val
        this.params['link'] = val
    }
    _origin
   get origin () {
        return this._origin
    }
   set origin (val) {
        this._origin = val
        this.params['origin'] = val
    }
    _count
   get count () {
        return this._count
    }
   set count (val) {
        this._count = val
        this.params['count'] = val
    }
    _currentcount
   get currentcount () {
        return this._currentcount
    }
   set currentcount (val) {
        this._currentcount = val
        this.params['currentcount'] = val
    }
    _tags
   get tags () {
        return this._tags
    }
   set tags (val) {
        this._tags = val
        this.params['tags'] = val
    }
    _type_id
   get type_id () {
        return this._type_id
    }
   set type_id (val) {
        this._type_id = val
        this.params['type_id'] = val
    }
}
export class NoticeaddRemoteOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'notice'
        this.action = 'addRemote'
    }
    id
    content
    startTime
    fps
    endTime
    templateid
    link
    origin
    count
    currentcount
    tags
    type_id
    name
    descr
    color
    content_color
}
export class NoticeinfoMubanIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'notice'
        this.action = 'infoMuban'
        this.returnData = new NoticeinfoMubanOut()
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
export class NoticeinfoMubanOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'notice'
        this.action = 'infoMuban'
    }
    id
    name
    tags
    piroity
    desc
}
export class NoticeaddMubanIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'notice'
        this.action = 'addMuban'
        this.returnData = new NoticeaddMubanOut()
    }
    _name
   get name () {
        return this._name
    }
   set name (val) {
        this._name = val
        this.params['name'] = val
    }
    _tags
   get tags () {
        return this._tags
    }
   set tags (val) {
        this._tags = val
        this.params['tags'] = val
    }
    _piroity
   get piroity () {
        return this._piroity
    }
   set piroity (val) {
        this._piroity = val
        this.params['piroity'] = val
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
export class NoticeaddMubanOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'notice'
        this.action = 'addMuban'
    }
    id
    name
    tags
    piroity
    desc
}
export class NoticelistMubanIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'notice'
        this.action = 'listMuban'
        this.returnData = new NoticelistMubanOut()
    }
}
export class NoticelistMubanOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'notice'
        this.action = 'listMuban'
    }
    NoticeList
    templateList
}
export class NoticemodifyMubanIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'notice'
        this.action = 'modifyMuban'
        this.returnData = new NoticemodifyMubanOut()
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
    _tags
   get tags () {
        return this._tags
    }
   set tags (val) {
        this._tags = val
        this.params['tags'] = val
    }
    _piroity
   get piroity () {
        return this._piroity
    }
   set piroity (val) {
        this._piroity = val
        this.params['piroity'] = val
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
export class NoticemodifyMubanOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'notice'
        this.action = 'modifyMuban'
    }
    id
    name
    tags
    piroity
    desc
}
export class NoticedeleteMubanIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'notice'
        this.action = 'deleteMuban'
        this.returnData = new NoticedeleteMubanOut()
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
export class NoticedeleteMubanOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'notice'
        this.action = 'deleteMuban'
    }
    id
}
export class NoticedescriptionIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'notice'
        this.action = 'description'
        this.returnData = new NoticedescriptionOut()
    }
}
export class NoticedescriptionOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'notice'
        this.action = 'description'
    }
}
export class NoticeapidocIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'notice'
        this.action = 'apidoc'
        this.returnData = new NoticeapidocOut()
    }
}
export class NoticeapidocOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'notice'
        this.action = 'apidoc'
    }
}
export class NoticeapiexportIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'notice'
        this.action = 'apiexport'
        this.returnData = new NoticeapiexportOut()
    }
}
export class NoticeapiexportOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'notice'
        this.action = 'apiexport'
    }
}
   let noticeApis = {
        NoticeinfoIn,NoticeinfoOut,NoticelistsIn,NoticelistsOut,NoticequeryIn,NoticequeryOut,NoticequeryUserNoticeIn,NoticequeryUserNoticeOut,NoticeaddIn,NoticeaddOut,NoticemodifyIn,NoticemodifyOut,NoticedeleteIn,NoticedeleteOut,NoticeaddRemoteIn,NoticeaddRemoteOut,NoticeinfoMubanIn,NoticeinfoMubanOut,NoticeaddMubanIn,NoticeaddMubanOut,NoticelistMubanIn,NoticelistMubanOut,NoticemodifyMubanIn,NoticemodifyMubanOut,NoticedeleteMubanIn,NoticedeleteMubanOut,NoticedescriptionIn,NoticedescriptionOut,NoticeapidocIn,NoticeapidocOut,NoticeapiexportIn,NoticeapiexportOut
    }
    export default noticeApis
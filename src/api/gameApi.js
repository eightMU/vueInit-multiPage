import {ApiBase, ApiOutBase} from './ApiBase'
export class GamedataIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'game'
        this.action = 'data'
        this.returnData = new GamedataOut()
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
export class GamedataOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'game'
        this.action = 'data'
    }
    id
    gameInfo
    arrGame
}
export class GamequeryIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'game'
        this.action = 'query'
        this.returnData = new GamequeryOut()
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
    _name
   get name () {
        return this._name
    }
   set name (val) {
        this._name = val
        this.params['name'] = val
    }
    _recommend
   get recommend () {
        return this._recommend
    }
   set recommend (val) {
        this._recommend = val
        this.params['recommend'] = val
    }
    _is_up
   get is_up () {
        return this._is_up
    }
   set is_up (val) {
        this._is_up = val
        this.params['is_up'] = val
    }
    _tags
   get tags () {
        return this._tags
    }
   set tags (val) {
        this._tags = val
        this.params['tags'] = val
    }
}
export class GamequeryOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'game'
        this.action = 'query'
    }
    id
    count
    page
    totalPage
    len
    name
    recommend
    is_up
    tags
    arrGame
}
export class GameinfoIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'game'
        this.action = 'info'
        this.returnData = new GameinfoOut()
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
export class GameinfoOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'game'
        this.action = 'info'
    }
    id
    gameInfo
    arrGame
}
export class GamestatusIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'game'
        this.action = 'status'
        this.returnData = new GamestatusOut()
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
export class GamestatusOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'game'
        this.action = 'status'
    }
    id
    status
}
export class GameupdateIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'game'
        this.action = 'update'
        this.returnData = new GameupdateOut()
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
    _name_english
   get name_english () {
        return this._name_english
    }
   set name_english (val) {
        this._name_english = val
        this.params['name_english'] = val
    }
    _game_dec
   get game_dec () {
        return this._game_dec
    }
   set game_dec (val) {
        this._game_dec = val
        this.params['game_dec'] = val
    }
    _tags
   get tags () {
        return this._tags
    }
   set tags (val) {
        this._tags = val
        this.params['tags'] = val
    }
    _version
   get version () {
        return this._version
    }
   set version (val) {
        this._version = val
        this.params['version'] = val
    }
    _picture_url
   get picture_url () {
        return this._picture_url
    }
   set picture_url (val) {
        this._picture_url = val
        this.params['picture_url'] = val
    }
    _display_index
   get display_index () {
        return this._display_index
    }
   set display_index (val) {
        this._display_index = val
        this.params['display_index'] = val
    }
    _display_ishot
   get display_ishot () {
        return this._display_ishot
    }
   set display_ishot (val) {
        this._display_ishot = val
        this.params['display_ishot'] = val
    }
    _is_up
   get is_up () {
        return this._is_up
    }
   set is_up (val) {
        this._is_up = val
        this.params['is_up'] = val
    }
    _home
   get home () {
        return this._home
    }
   set home (val) {
        this._home = val
        this.params['home'] = val
    }
    _addr
   get addr () {
        return this._addr
    }
   set addr (val) {
        this._addr = val
        this.params['addr'] = val
    }
    _publisher
   get publisher () {
        return this._publisher
    }
   set publisher (val) {
        this._publisher = val
        this.params['publisher'] = val
    }
    _recommend
   get recommend () {
        return this._recommend
    }
   set recommend (val) {
        this._recommend = val
        this.params['recommend'] = val
    }
}
export class GameupdateOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'game'
        this.action = 'update'
    }
    id
    name
    name_english
    game_dec
    tags
    version
    picture_url
    display_index
    display_ishot
    is_up
    home
    addr
    publisher
    recommend
}
export class GameaddIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'game'
        this.action = 'add'
        this.returnData = new GameaddOut()
    }
    _name
   get name () {
        return this._name
    }
   set name (val) {
        this._name = val
        this.params['name'] = val
    }
    _name_english
   get name_english () {
        return this._name_english
    }
   set name_english (val) {
        this._name_english = val
        this.params['name_english'] = val
    }
    _game_dec
   get game_dec () {
        return this._game_dec
    }
   set game_dec (val) {
        this._game_dec = val
        this.params['game_dec'] = val
    }
    _tags
   get tags () {
        return this._tags
    }
   set tags (val) {
        this._tags = val
        this.params['tags'] = val
    }
    _version
   get version () {
        return this._version
    }
   set version (val) {
        this._version = val
        this.params['version'] = val
    }
    _picture_url
   get picture_url () {
        return this._picture_url
    }
   set picture_url (val) {
        this._picture_url = val
        this.params['picture_url'] = val
    }
    _display_index
   get display_index () {
        return this._display_index
    }
   set display_index (val) {
        this._display_index = val
        this.params['display_index'] = val
    }
    _display_ishot
   get display_ishot () {
        return this._display_ishot
    }
   set display_ishot (val) {
        this._display_ishot = val
        this.params['display_ishot'] = val
    }
    _is_up
   get is_up () {
        return this._is_up
    }
   set is_up (val) {
        this._is_up = val
        this.params['is_up'] = val
    }
    _home
   get home () {
        return this._home
    }
   set home (val) {
        this._home = val
        this.params['home'] = val
    }
    _addr
   get addr () {
        return this._addr
    }
   set addr (val) {
        this._addr = val
        this.params['addr'] = val
    }
    _addr_home
   get addr_home () {
        return this._addr_home
    }
   set addr_home (val) {
        this._addr_home = val
        this.params['addr_home'] = val
    }
    _publisher
   get publisher () {
        return this._publisher
    }
   set publisher (val) {
        this._publisher = val
        this.params['publisher'] = val
    }
    _recommend
   get recommend () {
        return this._recommend
    }
   set recommend (val) {
        this._recommend = val
        this.params['recommend'] = val
    }
}
export class GameaddOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'game'
        this.action = 'add'
    }
    id
    name
    name_english
    game_dec
    tags
    version
    picture_url
    display_index
    display_ishot
    is_up
    home
    addr
    addr_home
    created_time
    publisher
    recommend
}
export class GamedeleteIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'game'
        this.action = 'delete'
        this.returnData = new GamedeleteOut()
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
export class GamedeleteOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'game'
        this.action = 'delete'
    }
    id
    gameInfo
    arrGame
}
export class GameregisterIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'game'
        this.action = 'register'
        this.returnData = new GameregisterOut()
    }
    _name
   get name () {
        return this._name
    }
   set name (val) {
        this._name = val
        this.params['name'] = val
    }
    _name_english
   get name_english () {
        return this._name_english
    }
   set name_english (val) {
        this._name_english = val
        this.params['name_english'] = val
    }
    _game_dec
   get game_dec () {
        return this._game_dec
    }
   set game_dec (val) {
        this._game_dec = val
        this.params['game_dec'] = val
    }
    _tags
   get tags () {
        return this._tags
    }
   set tags (val) {
        this._tags = val
        this.params['tags'] = val
    }
    _version
   get version () {
        return this._version
    }
   set version (val) {
        this._version = val
        this.params['version'] = val
    }
    _picture_url
   get picture_url () {
        return this._picture_url
    }
   set picture_url (val) {
        this._picture_url = val
        this.params['picture_url'] = val
    }
    _display_index
   get display_index () {
        return this._display_index
    }
   set display_index (val) {
        this._display_index = val
        this.params['display_index'] = val
    }
    _display_ishot
   get display_ishot () {
        return this._display_ishot
    }
   set display_ishot (val) {
        this._display_ishot = val
        this.params['display_ishot'] = val
    }
    _is_up
   get is_up () {
        return this._is_up
    }
   set is_up (val) {
        this._is_up = val
        this.params['is_up'] = val
    }
    _home
   get home () {
        return this._home
    }
   set home (val) {
        this._home = val
        this.params['home'] = val
    }
    _addr
   get addr () {
        return this._addr
    }
   set addr (val) {
        this._addr = val
        this.params['addr'] = val
    }
}
export class GameregisterOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'game'
        this.action = 'register'
    }
}
export class GamewidgetIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'game'
        this.action = 'widget'
        this.returnData = new GamewidgetOut()
    }
    _name
   get name () {
        return this._name
    }
   set name (val) {
        this._name = val
        this.params['name'] = val
    }
    _name_english
   get name_english () {
        return this._name_english
    }
   set name_english (val) {
        this._name_english = val
        this.params['name_english'] = val
    }
    _game_dec
   get game_dec () {
        return this._game_dec
    }
   set game_dec (val) {
        this._game_dec = val
        this.params['game_dec'] = val
    }
    _tags
   get tags () {
        return this._tags
    }
   set tags (val) {
        this._tags = val
        this.params['tags'] = val
    }
    _version
   get version () {
        return this._version
    }
   set version (val) {
        this._version = val
        this.params['version'] = val
    }
    _picture_url
   get picture_url () {
        return this._picture_url
    }
   set picture_url (val) {
        this._picture_url = val
        this.params['picture_url'] = val
    }
    _display_index
   get display_index () {
        return this._display_index
    }
   set display_index (val) {
        this._display_index = val
        this.params['display_index'] = val
    }
    _display_ishot
   get display_ishot () {
        return this._display_ishot
    }
   set display_ishot (val) {
        this._display_ishot = val
        this.params['display_ishot'] = val
    }
    _is_up
   get is_up () {
        return this._is_up
    }
   set is_up (val) {
        this._is_up = val
        this.params['is_up'] = val
    }
    _home
   get home () {
        return this._home
    }
   set home (val) {
        this._home = val
        this.params['home'] = val
    }
    _addr
   get addr () {
        return this._addr
    }
   set addr (val) {
        this._addr = val
        this.params['addr'] = val
    }
}
export class GamewidgetOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'game'
        this.action = 'widget'
    }
}
export class GamedescriptionIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'game'
        this.action = 'description'
        this.returnData = new GamedescriptionOut()
    }
}
export class GamedescriptionOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'game'
        this.action = 'description'
    }
}
export class GameapidocIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'game'
        this.action = 'apidoc'
        this.returnData = new GameapidocOut()
    }
}
export class GameapidocOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'game'
        this.action = 'apidoc'
    }
}
export class GameapiexportIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'game'
        this.action = 'apiexport'
        this.returnData = new GameapiexportOut()
    }
}
export class GameapiexportOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'game'
        this.action = 'apiexport'
    }
}
   let gameApis = {
        GamedataIn,GamedataOut,GamequeryIn,GamequeryOut,GameinfoIn,GameinfoOut,GamestatusIn,GamestatusOut,GameupdateIn,GameupdateOut,GameaddIn,GameaddOut,GamedeleteIn,GamedeleteOut,GameregisterIn,GameregisterOut,GamewidgetIn,GamewidgetOut,GamedescriptionIn,GamedescriptionOut,GameapidocIn,GameapidocOut,GameapiexportIn,GameapiexportOut
    }
    export default gameApis
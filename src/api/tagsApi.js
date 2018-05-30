import {ApiBase, ApiOutBase} from './ApiBase'
export class TagseachUsersTagsIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'tags'
        this.action = 'eachUsersTags'
        this.returnData = new TagseachUsersTagsOut()
    }
}
export class TagseachUsersTagsOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'tags'
        this.action = 'eachUsersTags'
    }
}
export class TagsgetUTagsIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'tags'
        this.action = 'getUTags'
        this.returnData = new TagsgetUTagsOut()
    }
    _arrUid
   get arrUid () {
        return this._arrUid
    }
   set arrUid (val) {
        this._arrUid = val
        this.params['arrUid'] = val
    }
}
export class TagsgetUTagsOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'tags'
        this.action = 'getUTags'
    }
    arrUid
    arrTagsInfo
}
export class TagsdescriptionIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'tags'
        this.action = 'description'
        this.returnData = new TagsdescriptionOut()
    }
}
export class TagsdescriptionOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'tags'
        this.action = 'description'
    }
}
export class TagsapidocIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'tags'
        this.action = 'apidoc'
        this.returnData = new TagsapidocOut()
    }
}
export class TagsapidocOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'tags'
        this.action = 'apidoc'
    }
}
export class TagsapiexportIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'tags'
        this.action = 'apiexport'
        this.returnData = new TagsapiexportOut()
    }
}
export class TagsapiexportOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'tags'
        this.action = 'apiexport'
    }
}
   let tagsApis = {
        TagseachUsersTagsIn,TagseachUsersTagsOut,TagsgetUTagsIn,TagsgetUTagsOut,TagsdescriptionIn,TagsdescriptionOut,TagsapidocIn,TagsapidocOut,TagsapiexportIn,TagsapiexportOut
    }
    export default tagsApis
import {ApiBase, ApiOutBase} from './ApiBase'
export class TrdauthmohomeIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'trdauth'
        this.action = 'mohome'
        this.returnData = new TrdauthmohomeOut()
    }
}
export class TrdauthmohomeOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'trdauth'
        this.action = 'mohome'
    }
    t
}
export class TrdauthmoauthIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'trdauth'
        this.action = 'moauth'
        this.returnData = new TrdauthmoauthOut()
    }
}
export class TrdauthmoauthOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'trdauth'
        this.action = 'moauth'
    }
    t
}
export class TrdauthmoCBIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'trdauth'
        this.action = 'moCB'
        this.returnData = new TrdauthmoCBOut()
    }
}
export class TrdauthmoCBOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'trdauth'
        this.action = 'moCB'
    }
    t
}
export class TrdauthdescriptionIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'trdauth'
        this.action = 'description'
        this.returnData = new TrdauthdescriptionOut()
    }
}
export class TrdauthdescriptionOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'trdauth'
        this.action = 'description'
    }
}
export class TrdauthapidocIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'trdauth'
        this.action = 'apidoc'
        this.returnData = new TrdauthapidocOut()
    }
}
export class TrdauthapidocOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'trdauth'
        this.action = 'apidoc'
    }
}
export class TrdauthapiexportIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'trdauth'
        this.action = 'apiexport'
        this.returnData = new TrdauthapiexportOut()
    }
}
export class TrdauthapiexportOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'trdauth'
        this.action = 'apiexport'
    }
}
   let trdauthApis = {
        TrdauthmohomeIn,TrdauthmohomeOut,TrdauthmoauthIn,TrdauthmoauthOut,TrdauthmoCBIn,TrdauthmoCBOut,TrdauthdescriptionIn,TrdauthdescriptionOut,TrdauthapidocIn,TrdauthapidocOut,TrdauthapiexportIn,TrdauthapiexportOut
    }
    export default trdauthApis
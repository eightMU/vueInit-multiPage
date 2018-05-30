import {ApiBase, ApiOutBase} from './ApiBase'
export class ShopgetProductsIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'getProducts'
        this.returnData = new ShopgetProductsOut()
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
export class ShopgetProductsOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'getProducts'
    }
    id
    arrProduct
    product
}
export class ShopproductQueryIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'productQuery'
        this.returnData = new ShopproductQueryOut()
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
export class ShopproductQueryOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'productQuery'
    }
    id
    count
    page
    totalPage
    len
    arrProduct
    productInfo
}
export class ShopproductInfoIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'productInfo'
        this.returnData = new ShopproductInfoOut()
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
export class ShopproductInfoOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'productInfo'
    }
    id
    brand
    type
    name
    item_desc
    time
    url_id
    url
    img
    lunbo_1
    lunbo_2
    lunbo_3
    lunbo_4
    lunbo_5
    display_index
    is_up
    trader_type
    trader_name
    price
}
export class ShopproductAddIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'productAdd'
        this.returnData = new ShopproductAddOut()
    }
    _brand
   get brand () {
        return this._brand
    }
   set brand (val) {
        this._brand = val
        this.params['brand'] = val
    }
    _type
   get type () {
        return this._type
    }
   set type (val) {
        this._type = val
        this.params['type'] = val
    }
    _name
   get name () {
        return this._name
    }
   set name (val) {
        this._name = val
        this.params['name'] = val
    }
    _item_desc
   get item_desc () {
        return this._item_desc
    }
   set item_desc (val) {
        this._item_desc = val
        this.params['item_desc'] = val
    }
    _time
   get time () {
        return this._time
    }
   set time (val) {
        this._time = val
        this.params['time'] = val
    }
    _urlId
   get urlId () {
        return this._urlId
    }
   set urlId (val) {
        this._urlId = val
        this.params['urlId'] = val
    }
    _url
   get url () {
        return this._url
    }
   set url (val) {
        this._url = val
        this.params['url'] = val
    }
    _img
   get img () {
        return this._img
    }
   set img (val) {
        this._img = val
        this.params['img'] = val
    }
    _lunbo_1
   get lunbo_1 () {
        return this._lunbo_1
    }
   set lunbo_1 (val) {
        this._lunbo_1 = val
        this.params['lunbo_1'] = val
    }
    _lunbo_2
   get lunbo_2 () {
        return this._lunbo_2
    }
   set lunbo_2 (val) {
        this._lunbo_2 = val
        this.params['lunbo_2'] = val
    }
    _lunbo_3
   get lunbo_3 () {
        return this._lunbo_3
    }
   set lunbo_3 (val) {
        this._lunbo_3 = val
        this.params['lunbo_3'] = val
    }
    _lunbo_4
   get lunbo_4 () {
        return this._lunbo_4
    }
   set lunbo_4 (val) {
        this._lunbo_4 = val
        this.params['lunbo_4'] = val
    }
    _lunbo_5
   get lunbo_5 () {
        return this._lunbo_5
    }
   set lunbo_5 (val) {
        this._lunbo_5 = val
        this.params['lunbo_5'] = val
    }
    _display_index
   get display_index () {
        return this._display_index
    }
   set display_index (val) {
        this._display_index = val
        this.params['display_index'] = val
    }
    _is_up
   get is_up () {
        return this._is_up
    }
   set is_up (val) {
        this._is_up = val
        this.params['is_up'] = val
    }
    _trader_type
   get trader_type () {
        return this._trader_type
    }
   set trader_type (val) {
        this._trader_type = val
        this.params['trader_type'] = val
    }
    _trader_name
   get trader_name () {
        return this._trader_name
    }
   set trader_name (val) {
        this._trader_name = val
        this.params['trader_name'] = val
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
export class ShopproductAddOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'productAdd'
    }
    id
    brand
    type
    name
    item_desc
    time
    urlId
    url
    img
    lunbo_1
    lunbo_2
    lunbo_3
    lunbo_4
    lunbo_5
    display_index
    is_up
    trader_type
    trader_name
    price
}
export class ShopgetColorsIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'getColors'
        this.returnData = new ShopgetColorsOut()
    }
}
export class ShopgetColorsOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'getColors'
    }
    arrColor
}
export class ShopcolorQueryIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'colorQuery'
        this.returnData = new ShopcolorQueryOut()
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
export class ShopcolorQueryOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'colorQuery'
    }
    count
    page
    totalPage
    len
    type
    arrColor
    colorInfo
}
export class ShopcolorInfoIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'colorInfo'
        this.returnData = new ShopcolorInfoOut()
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
export class ShopcolorInfoOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'colorInfo'
    }
    id
    shop_id
    shop_name
    color
    display_index
    is_up
}
export class ShopattributeQueryIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'attributeQuery'
        this.returnData = new ShopattributeQueryOut()
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
    _type
   get type () {
        return this._type
    }
   set type (val) {
        this._type = val
        this.params['type'] = val
    }
    _brand
   get brand () {
        return this._brand
    }
   set brand (val) {
        this._brand = val
        this.params['brand'] = val
    }
}
export class ShopattributeQueryOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'attributeQuery'
    }
    count
    page
    totalPage
    len
    type
    brand
    arrAttribute
}
export class ShopattributeInfoIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'attributeInfo'
        this.returnData = new ShopattributeInfoOut()
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
export class ShopattributeInfoOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'attributeInfo'
    }
    id
    color_id
    color_name
    attr_name
    price
    size
    weight
    img
    zhekou
    is_up
    inventory
    shop_id
    shop_name
}
export class ShopattributeUpdateIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'attributeUpdate'
        this.returnData = new ShopattributeUpdateOut()
    }
    _id
   get id () {
        return this._id
    }
   set id (val) {
        this._id = val
        this.params['id'] = val
    }
    _color_id
   get color_id () {
        return this._color_id
    }
   set color_id (val) {
        this._color_id = val
        this.params['color_id'] = val
    }
    _color_name
   get color_name () {
        return this._color_name
    }
   set color_name (val) {
        this._color_name = val
        this.params['color_name'] = val
    }
    _attr_name
   get attr_name () {
        return this._attr_name
    }
   set attr_name (val) {
        this._attr_name = val
        this.params['attr_name'] = val
    }
    _price
   get price () {
        return this._price
    }
   set price (val) {
        this._price = val
        this.params['price'] = val
    }
    _size
   get size () {
        return this._size
    }
   set size (val) {
        this._size = val
        this.params['size'] = val
    }
    _weight
   get weight () {
        return this._weight
    }
   set weight (val) {
        this._weight = val
        this.params['weight'] = val
    }
    _img
   get img () {
        return this._img
    }
   set img (val) {
        this._img = val
        this.params['img'] = val
    }
    _zhekou
   get zhekou () {
        return this._zhekou
    }
   set zhekou (val) {
        this._zhekou = val
        this.params['zhekou'] = val
    }
    _is_up
   get is_up () {
        return this._is_up
    }
   set is_up (val) {
        this._is_up = val
        this.params['is_up'] = val
    }
    _inventory
   get inventory () {
        return this._inventory
    }
   set inventory (val) {
        this._inventory = val
        this.params['inventory'] = val
    }
    _shop_id
   get shop_id () {
        return this._shop_id
    }
   set shop_id (val) {
        this._shop_id = val
        this.params['shop_id'] = val
    }
    _shop_name
   get shop_name () {
        return this._shop_name
    }
   set shop_name (val) {
        this._shop_name = val
        this.params['shop_name'] = val
    }
}
export class ShopattributeUpdateOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'attributeUpdate'
    }
    id
    color_id
    color_name
    attr_name
    price
    size
    weight
    img
    zhekou
    is_up
    inventory
    shop_id
    shop_name
}
export class ShopaddressQueryIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'addressQuery'
        this.returnData = new ShopaddressQueryOut()
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
export class ShopaddressQueryOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'addressQuery'
    }
    count
    page
    totalPage
    len
    arrAddress
}
export class ShopaddressInfoIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'addressInfo'
        this.returnData = new ShopaddressInfoOut()
    }
}
export class ShopaddressInfoOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'addressInfo'
    }
    id
    user_id
    name
    phone
    province
    city
    area
    address
    post
    isDefault
    province_id
    city_id
    area_id
}
export class ShopaddressAddIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'addressAdd'
        this.returnData = new ShopaddressAddOut()
    }
    _name
   get name () {
        return this._name
    }
   set name (val) {
        this._name = val
        this.params['name'] = val
    }
    _phone
   get phone () {
        return this._phone
    }
   set phone (val) {
        this._phone = val
        this.params['phone'] = val
    }
    _province
   get province () {
        return this._province
    }
   set province (val) {
        this._province = val
        this.params['province'] = val
    }
    _city
   get city () {
        return this._city
    }
   set city (val) {
        this._city = val
        this.params['city'] = val
    }
    _area
   get area () {
        return this._area
    }
   set area (val) {
        this._area = val
        this.params['area'] = val
    }
    _address
   get address () {
        return this._address
    }
   set address (val) {
        this._address = val
        this.params['address'] = val
    }
    _post
   get post () {
        return this._post
    }
   set post (val) {
        this._post = val
        this.params['post'] = val
    }
    _isDefault
   get isDefault () {
        return this._isDefault
    }
   set isDefault (val) {
        this._isDefault = val
        this.params['isDefault'] = val
    }
    _province_id
   get province_id () {
        return this._province_id
    }
   set province_id (val) {
        this._province_id = val
        this.params['province_id'] = val
    }
    _city_id
   get city_id () {
        return this._city_id
    }
   set city_id (val) {
        this._city_id = val
        this.params['city_id'] = val
    }
    _area_id
   get area_id () {
        return this._area_id
    }
   set area_id (val) {
        this._area_id = val
        this.params['area_id'] = val
    }
}
export class ShopaddressAddOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'addressAdd'
    }
    id
    user_id
    name
    phone
    province
    city
    area
    address
    post
    isDefault
    province_id
    city_id
    area_id
}
export class ShopaddressUpdateIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'addressUpdate'
        this.returnData = new ShopaddressUpdateOut()
    }
    _name
   get name () {
        return this._name
    }
   set name (val) {
        this._name = val
        this.params['name'] = val
    }
    _phone
   get phone () {
        return this._phone
    }
   set phone (val) {
        this._phone = val
        this.params['phone'] = val
    }
    _province
   get province () {
        return this._province
    }
   set province (val) {
        this._province = val
        this.params['province'] = val
    }
    _city
   get city () {
        return this._city
    }
   set city (val) {
        this._city = val
        this.params['city'] = val
    }
    _area
   get area () {
        return this._area
    }
   set area (val) {
        this._area = val
        this.params['area'] = val
    }
    _address
   get address () {
        return this._address
    }
   set address (val) {
        this._address = val
        this.params['address'] = val
    }
    _post
   get post () {
        return this._post
    }
   set post (val) {
        this._post = val
        this.params['post'] = val
    }
    _isDefault
   get isDefault () {
        return this._isDefault
    }
   set isDefault (val) {
        this._isDefault = val
        this.params['isDefault'] = val
    }
    _province_id
   get province_id () {
        return this._province_id
    }
   set province_id (val) {
        this._province_id = val
        this.params['province_id'] = val
    }
    _city_id
   get city_id () {
        return this._city_id
    }
   set city_id (val) {
        this._city_id = val
        this.params['city_id'] = val
    }
    _area_id
   get area_id () {
        return this._area_id
    }
   set area_id (val) {
        this._area_id = val
        this.params['area_id'] = val
    }
}
export class ShopaddressUpdateOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'addressUpdate'
    }
    id
    user_id
    name
    phone
    province
    city
    area
    address
    post
    isDefault
    province_id
    city_id
    area_id
}
export class ShopaddressDeleteIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'addressDelete'
        this.returnData = new ShopaddressDeleteOut()
    }
}
export class ShopaddressDeleteOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'addressDelete'
    }
    id
    user_id
    name
    phone
    province
    city
    area
    address
    post
    isDefault
    province_id
    city_id
    area_id
}
export class ShoporderExchangeIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'orderExchange'
        this.returnData = new ShoporderExchangeOut()
    }
    _shop_id
   get shop_id () {
        return this._shop_id
    }
   set shop_id (val) {
        this._shop_id = val
        this.params['shop_id'] = val
    }
    _color_id
   get color_id () {
        return this._color_id
    }
   set color_id (val) {
        this._color_id = val
        this.params['color_id'] = val
    }
    _attribute_id
   get attribute_id () {
        return this._attribute_id
    }
   set attribute_id (val) {
        this._attribute_id = val
        this.params['attribute_id'] = val
    }
}
export class ShoporderExchangeOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'orderExchange'
    }
    shop_id
    color_id
    attribute_id
    arrGame
}
export class ShopcreateOrderIdIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'createOrderId'
        this.returnData = new ShopcreateOrderIdOut()
    }
}
export class ShopcreateOrderIdOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'createOrderId'
    }
}
export class ShopshopOrderAddIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'shopOrderAdd'
        this.returnData = new ShopshopOrderAddOut()
    }
    _order_time
   get order_time () {
        return this._order_time
    }
   set order_time (val) {
        this._order_time = val
        this.params['order_time'] = val
    }
    _address
   get address () {
        return this._address
    }
   set address (val) {
        this._address = val
        this.params['address'] = val
    }
    _expire
   get expire () {
        return this._expire
    }
   set expire (val) {
        this._expire = val
        this.params['expire'] = val
    }
    _shop_id
   get shop_id () {
        return this._shop_id
    }
   set shop_id (val) {
        this._shop_id = val
        this.params['shop_id'] = val
    }
    _color_id
   get color_id () {
        return this._color_id
    }
   set color_id (val) {
        this._color_id = val
        this.params['color_id'] = val
    }
    _attribute_id
   get attribute_id () {
        return this._attribute_id
    }
   set attribute_id (val) {
        this._attribute_id = val
        this.params['attribute_id'] = val
    }
    _address_id
   get address_id () {
        return this._address_id
    }
   set address_id (val) {
        this._address_id = val
        this.params['address_id'] = val
    }
    _status
   get status () {
        return this._status
    }
   set status (val) {
        this._status = val
        this.params['status'] = val
    }
    _shop_name
   get shop_name () {
        return this._shop_name
    }
   set shop_name (val) {
        this._shop_name = val
        this.params['shop_name'] = val
    }
    _color_name
   get color_name () {
        return this._color_name
    }
   set color_name (val) {
        this._color_name = val
        this.params['color_name'] = val
    }
    _attribute_name
   get attribute_name () {
        return this._attribute_name
    }
   set attribute_name (val) {
        this._attribute_name = val
        this.params['attribute_name'] = val
    }
    _price
   get price () {
        return this._price
    }
   set price (val) {
        this._price = val
        this.params['price'] = val
    }
    _count
   get count () {
        return this._count
    }
   set count (val) {
        this._count = val
        this.params['count'] = val
    }
    _total_price
   get total_price () {
        return this._total_price
    }
   set total_price (val) {
        this._total_price = val
        this.params['total_price'] = val
    }
    _user_id
   get user_id () {
        return this._user_id
    }
   set user_id (val) {
        this._user_id = val
        this.params['user_id'] = val
    }
    _order_id
   get order_id () {
        return this._order_id
    }
   set order_id (val) {
        this._order_id = val
        this.params['order_id'] = val
    }
    _shop_type
   get shop_type () {
        return this._shop_type
    }
   set shop_type (val) {
        this._shop_type = val
        this.params['shop_type'] = val
    }
    _shop_brand
   get shop_brand () {
        return this._shop_brand
    }
   set shop_brand (val) {
        this._shop_brand = val
        this.params['shop_brand'] = val
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
export class ShopshopOrderAddOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'shopOrderAdd'
    }
    id
    order_time
    address
    expire
    shop_id
    color_id
    attribute_id
    address_id
    status
    shop_name
    color_name
    attribute_name
    price
    count
    total_price
    user_id
    order_id
    shop_type
    shop_brand
    img
}
export class ShopawardStatusIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'awardStatus'
        this.returnData = new ShopawardStatusOut()
    }
    _order_id
   get order_id () {
        return this._order_id
    }
   set order_id (val) {
        this._order_id = val
        this.params['order_id'] = val
    }
}
export class ShopawardStatusOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'awardStatus'
    }
    info
    instructions
}
export class ShoporderQueryIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'orderQuery'
        this.returnData = new ShoporderQueryOut()
    }
    _status
   get status () {
        return this._status
    }
   set status (val) {
        this._status = val
        this.params['status'] = val
    }
    _shop_type
   get shop_type () {
        return this._shop_type
    }
   set shop_type (val) {
        this._shop_type = val
        this.params['shop_type'] = val
    }
}
export class ShoporderQueryOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'orderQuery'
    }
    status
    shop_type
    arrOrder
    orderInfo
}
export class ShopuploadLunboIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'uploadLunbo'
        this.returnData = new ShopuploadLunboOut()
    }
}
export class ShopuploadLunboOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'uploadLunbo'
    }
    serverPath
}
export class ShopdescriptionIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'description'
        this.returnData = new ShopdescriptionOut()
    }
}
export class ShopdescriptionOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'description'
    }
}
export class ShopapidocIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'apidoc'
        this.returnData = new ShopapidocOut()
    }
}
export class ShopapidocOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'apidoc'
    }
}
export class ShopapiexportIn extends ApiBase {
   constructor (){
        super()
        this.controller = 'shop'
        this.action = 'apiexport'
        this.returnData = new ShopapiexportOut()
    }
}
export class ShopapiexportOut extends ApiOutBase {
    constructor (){
        super()
        this.controller = 'shop'
        this.action = 'apiexport'
    }
}
   let shopApis = {
        ShopgetProductsIn,ShopgetProductsOut,ShopproductQueryIn,ShopproductQueryOut,ShopproductInfoIn,ShopproductInfoOut,ShopproductAddIn,ShopproductAddOut,ShopgetColorsIn,ShopgetColorsOut,ShopcolorQueryIn,ShopcolorQueryOut,ShopcolorInfoIn,ShopcolorInfoOut,ShopattributeQueryIn,ShopattributeQueryOut,ShopattributeInfoIn,ShopattributeInfoOut,ShopattributeUpdateIn,ShopattributeUpdateOut,ShopaddressQueryIn,ShopaddressQueryOut,ShopaddressInfoIn,ShopaddressInfoOut,ShopaddressAddIn,ShopaddressAddOut,ShopaddressUpdateIn,ShopaddressUpdateOut,ShopaddressDeleteIn,ShopaddressDeleteOut,ShoporderExchangeIn,ShoporderExchangeOut,ShopcreateOrderIdIn,ShopcreateOrderIdOut,ShopshopOrderAddIn,ShopshopOrderAddOut,ShopawardStatusIn,ShopawardStatusOut,ShoporderQueryIn,ShoporderQueryOut,ShopuploadLunboIn,ShopuploadLunboOut,ShopdescriptionIn,ShopdescriptionOut,ShopapidocIn,ShopapidocOut,ShopapiexportIn,ShopapiexportOut
    }
    export default shopApis
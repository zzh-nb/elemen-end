// 定义请求方式
export const Method = {
  GET: "get",
  POST: "post",
  PUT: 'PUT',
  DELETE: 'DELETE',
}

export const PATH = {

  // 登录接口：
  LOGIN: '/manage/user/login.do',

  // 退出
  GOOUT: '/user/logout.do',

  // 商品管理：
  SHOPP: '/manage/product/list.do',

  // 查询
  SEARCH: '/manage/product/search.do',

  // 品类管理
  OTHER: '/manage/category/get_category.do',

  // 订单管理
  ORDER: 'manage/order/list.do',

  //商品上架与下架
  status: '/manage/product/set_sale_status.do',

  //商品详情
  detail: '/manage/product/detail.do',

  //品级
  category: '/manage/category/get_category.do',

  //修改商品
  setShop: '/manage/product/save.do',

  //上传图片
  imgs: '/manage/product/upload.do',

  //修改品类
  setCategory: '/manage/category/set_category_name.do',

  //添加品类
  addCategory: '/manage/category/add_category.do',

  //订单搜索
  order_search: '/manage/order/search.do',
  
  //订单详情
  order_detail: '/manage/order/detail.do',
}

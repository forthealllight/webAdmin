import Mock from 'mockjs';
// import fetch from 'isomorphic-fetch';
// import Ajax from '../common/ajax.js';
// Mock.mock('/api/index', 'get', {
//   'name': 'yuxiaoliang',
//   'age': 23
// });
//测试用例
Mock.mock('/api/goodList', 'get', {
  'data':{
    list: [
      {
        num: 'S8180',
        type: '生活用品',
        price: 100,
        desp: '余小亮卖的生活用品'
      }, {
        num: 'S8181',
        type: '代步工具',
        price: 1000,
        desp: '余小亮卖的代步工具'
      }, {
        num: 'S8182',
        type: '数码电器',
        price: 6000,
        desp: '余小亮卖的数码电器'
      }, {
        num: 'S8183',
        type: '生活用品',
        price: 300,
        desp: '余小亮卖的生活用品2'
      }
    ],
  },
  'msg':'ok',
  'code':200
});
Mock.mock('/api/goodList/remove','get',{
  'data':[],
  'msg':'ok',
  'code':200
});
Mock.mock('/api/goodsList','get',function(options){
  return {
   'data':{
      list:[{
        goodsId:'XMU12',
        goodsdesp: '这是一本好书1',
        price: 32,
        state: '上架中',
        type:'数码电器',
        genre:'出售中',
        release:'2017年2月10日19:40',
        operation:'删除'
      }, {
        goodsId:'XMU13',
        goodsdesp: '这是一本好书',
        price: 32,
        state: '上架中',
        type:'数码电器',
        genre:'出售中',
        release:'2017年2月10日19:40',
        operation:'删除'
      }, {
        goodsId:'XMU14',
        goodsdesp: '这是一本好书',
        price: 32,
        state: '上架中',
        type:'数码电器',
        genre:'出售中',
        release:'2017年2月10日19:40',
        operation:'删除'
      }, {
        goodsId:'XMU15',
        goodsdesp: '这是一本好书',
        price: 32,
        state: '上架中',
        type:'数码电器',
        genre:'出售中',
        release:'2017年2月10日19:40',
        operation:'删除'
      }],
      currentPage:'1',
      totalPages:'10'
   },
   'msg':'ok',
   'code':200
}
}); 









// fetch('/api/index', {method: 'GET'}).then(function(response) {
//   return response.json();
// }).then(function(data) {
//   console.log(data);
//   console.log(1);
// }).catch(function(e) {
//   console.log("Oops, error");
// });

//坑爹的mockjs,压根就不支持fetch
// function timeoutPromise(timeout, err, promise) {
//   return new Promise(function(resolve, reject) {
//     promise.then(resolve, reject);
//     setTimeout(reject.bind(null, err), timeout);
//   });
// }
// timeoutPromise(100, new Error('Timed Out!'), fetch('/api/index')).then(res => {
//   console.log(res);
// });

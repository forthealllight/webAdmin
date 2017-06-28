export default (url,opt) => {
  var myPromise=new Promise(function(resolve,reject){
    opt = opt || {};
    opt.method = opt.method.toUpperCase() || 'POST';
    opt.url = url || '';
    opt.async = opt.async || true;
    opt.data = opt.data || null;
    opt.success = opt.success || function() {};
    var xmlHttp = null;
    if (XMLHttpRequest) {
      xmlHttp = new XMLHttpRequest();
    } else {
      xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    var params = [];
    for (var key in opt.data) {
      params.push(key + '=' + opt.data[key]);
    }
    var postData = params.join('&');
    if (opt.method.toUpperCase() === 'POST') {
      xmlHttp.open(opt.method, opt.url, opt.async);
      xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
      xmlHttp.send(postData);
    } else if (opt.method.toUpperCase() === 'GET') {
      if (postData != '') {
        xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
      } else {
        xmlHttp.open(opt.method, opt.url, opt.async);
      }
      //如果没有get参数,则请求为空,并且没有？
      xmlHttp.send(null);
    }
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        resolve(xmlHttp.responseText);
      }else if(xmlHttp.readyState == 4 && xmlHttp.status != 200){
        reject('error the question is no result');
      }
    };
  });
  //有些时候会uncaught in promise 等等问题
  return myPromise;
};
// my('/api/goodList',{
//   method: 'get',
//   dataType: 'json',
// }).then(function(x){console.log(1),function(x){console.log(2)}});

//简化ajax过程，仅仅是为了方便mock

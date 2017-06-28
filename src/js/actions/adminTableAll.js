import myFetch from '../common/ajax.js';
export const queryGoodsList=(desp)=>(dispatch)=>{
  //开始详细的过滤和筛选条件后，进行详细的查询
  let sdata={
     address:desp.currentAddress.key,
     genre:desp.currentGenre,
     state:desp.currentState,
     type:desp.currentType.key,
     keyWords:desp.currentKeyWords
  };
  myFetch('/api/goodsList',{
  	method:'get',
  	dataType:'json'
  }).then(function(json){
  	 json=JSON.parse(json);
     let dataList=json.data.list;
     dispatch({
     	type:'queryGoodsList',
     	dataList:dataList,
      totalPages:json.data.totalPages
     })
  })
}
export const upLoadGoods=(id)=>(dispatch)=>{
  debugger;

}
export const downLoadGoods=(id)=>(dispatch)=>{

}
export const deleteGoods=(id)=>(dispatch)=>{
  
}
import myFetch from '../common/ajax.js';
export default ()=>(dispatch)=>{
    myFetch('/api/goodList',{
      method: 'get',
      dataType: 'json',
    }).then(function(json){
      var json=JSON.parse(json);
      if(json.msg==200){
        dispatch({type:'init',data:json.data});
      }
    },function(error){
      console.log(error);
    });
};

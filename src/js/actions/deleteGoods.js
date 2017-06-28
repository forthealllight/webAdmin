import myFetch from '../common/ajax.js';
export default (id)=>(dispatch)=>{
    myFetch('/api/goodList/remove',{
      method: 'get',
      dataType: 'json',
    }).then(function(json){
      var json=JSON.parse(json);
      if(json.msg==200){
        dispatch({type:'remove',id:id});
      }
    },function(error){
      console.log(error);
    });
};

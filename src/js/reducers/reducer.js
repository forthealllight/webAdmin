import {combineReducers} from 'redux';
import {navState} from '../states/navState.js';
import {searchState} from '../states/searchState.js';
import {tableState} from '../states/tableState.js';
//默认的listItems的状态
const myCurrentPageName = (state = '', action) => {
  switch (action.type) {
    case "index":
      return "首页管理";
    case "goods":
      return "商品管理";
    case "database":
      return "数据统计";
    default:
      return "首页管理";
  }
};
const examineData={
  // 此页面的view对应的state定义在了这里
  'data':{
    list: [
      // {
      //   num: '1',
      //   type: '1',
      //   price: '1',
      //   desp: '1'
      // }
    ],
    detailUrl:''
  },
};
//默认的examineList的状态,相当于我们这里设置了一个页面的state结构
const myExamData = (state = examineData, action) => {
  switch (action.type) {
    case 'init':
      let myData= Object.assign({},state.data,{list:action.data.list});
      debugger
      return Object.assign({},state,{data:myData});
    case 'remove':
      let choseItem = action.id;
      let myList=[];
      myList=(state.data.list||[]).slice();
      myList.forEach(function(item, index, arr) {
        if (item.num == choseItem) {
          arr.splice(index, 1);
        }
      });
      let myDataRemove= Object.assign({},state.data,{list:myList});
      return Object.assign({},state,{data:myDataRemove});

    default:
    return state;
  }
  // 这样就不行
  // state.forEach(function(item, index, arr) {
  //   if (item.num == choseItem) {
  //     arr.splice(index, 1);
  //   }
  // });
  // return state;
};
const myNavList = (state = navState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
//改变search条件
const mySearchDetail = (state = searchState, action) => {
  switch (action.type) {
    case 'changeState':
       let currentState=action.key;
       //必须是纯函数哦～
       return Object.assign({},state,{currentState:currentState});
    case 'changeGenre':
       let currentGenre=action.key;
       return Object.assign({},state,{currentGenre:currentGenre});
    case 'changeType':
       let currentType={
         key:action.key,
         value:action.value
       };
       return Object.assign({},state,{currentType:currentType});
    case 'changeAddress':
       let currentAddress={
         key:action.key,
         value:action.value
       };
       return Object.assign({},state,{currentAddress:currentAddress});
    case 'changeKeyWords':
       let currentKeyWords=action.value;
       return Object.assign({},state,{currentKeyWords:currentKeyWords});
    default:
      return state;
  }
};
const myTableDetail = (state=tableState,action)=>{
  switch(action.type){
    case 'queryGoodsList':
      let dataList=action.dataList;
      return Object.assign({},state,{tableList:dataList});
    default:
      return state;
 }
};
const myReducer = combineReducers({
  listItems: myNavList, 
  currentPageName: myCurrentPageName, 
  examineData: myExamData,
  searchDetail:mySearchDetail,
  tableDetail:myTableDetail
});
export default myReducer;

import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import  Nav from '../containers/nav.js';
import Examine from '../containers/examine.js';
import Admin from '../containers/admin.js';
import History from '../containers/history.js';
import {Router,Route,Link,IndexRoute,hashHistory} from 'react-router';

// class App extends React.Component{
//   render(){
//     return(
//       <Router history={hashHistory}>
//         <Route path='/' component={Nav}>
//            <IndexRoute component={Examine}/>
//            <Route path='examine' component={Examine}/>
//            <Route path='admin' component={Admin}/>
//            <Route path='history' component={History}/>
//            <Route path='feedback' component={Feedback}/>
//         </Route>
//       </Router>
//     )
//   }
// }
// export default App;
// App.contextTypes={
//   store:PropTypes.object.isRequired
// }
export const routes={
  path:'/',
  component:Nav,
  indexRoute:{component:Examine},
  childRoutes:[
    {path:'index',component:Examine},
    {path:'goods',component:Admin},
    {path:'database',component:History},
  ]
};

//配置动态路由，实现按需加载
// export const routes={
//   path:'/',
//   getComponent(nextState,callback){
//     require.ensure([],require=>{
//       callback(null,require('../components/nav').default);
//     },'nav');
//   },
//   indexRoute:{
//     getComponent(nextState,callback){
//       require.ensure([],require=>{
//         callback(null,require('../components/examine').default);
//       },'examine');
//     }
//   },
//   childRoutes:[{
//     path:'examine',
//     getComponent(nextState,callback){
//       require.ensure([],require=>{
//         callback(null,require('../components/examine').default);
//       },'examine');
//     }
//   },
//   {
//     path:'admin',
//     getComponent(nextState,callback){
//       require.ensure([],require=>{
//         callback(null,require('../components/admin').default);
//       },'admin');
//     }
//   },
//   {
//     path:'history',
//     getComponent(nextState,callback){
//       require.ensure([],require=>{
//         callback(null,require('../components/history').default);
//       },'history');
//     }
//   },
//   {
//     path:'feedback',
//     getComponent(nextState,callback){
//       require.ensure([],require=>{
//         callback(null,require('../components/feedback').default);
//       },'feedback');
//     }
//   }
// ]
// };


// <Router history={browserHistory}> 官方推荐使用的是browserHistory，但是需要在服务器端做相应的配置，否则会404
// const mapStateToProps=(state)=>{
//   return{
//     currentName:state.currentName,
//     listItems:state.listItems
//   }
// }
// const mapDispatchToProps=(dispatch)=>{
//   return{
//
//   }
// }

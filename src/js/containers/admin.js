import React from 'react';
import { Button,Input,Radio,Menu,Dropdown,Icon,Table,Checkbox,Popover} from 'antd';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AdminSearch from '../components/adminSearch.js';
import AdminTable from '../components/AdminTable.js';
import {changeState,changeGenre,changeType,changeAddress,changeKeyWords} from '../actions/adminSearchAll.js';
import {queryGoodsList} from '../actions/adminTableAll.js';
class Admin extends React.Component{
  constructor(props){
    super(props);
  };
  render(){
    const {searchDetail}=this.props;
    const {changeState,changeGenre,changeType,
      changeAddress,changeKeyWords}=this.props;
    //向下传递搜索属性,必须有this.props的赋值，否则会变的很奇怪
    const {queryGoodsList,tableDetail}=this.props;
    return(
      <div className="m-admin">
         <div className="m-admin-header">
          商品管理-所有商品
         </div>
         <div className="m-admin-search">
          搜索选项:
         </div>
         <AdminSearch searchDetail={searchDetail} 
         changeState={changeState} changeGenre={changeGenre} 
         changeType={changeType} changeAddress={changeAddress} 
         changeKeyWords={changeKeyWords} queryGoodsList={queryGoodsList}/>
         <AdminTable queryGoodsList={queryGoodsList} tableDetail={tableDetail} searchDetail={searchDetail}/>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return {
    searchDetail:state.searchDetail,
    tableDetail:state.tableDetail
  };
}
const mapDispatchToProps=(dispatch)=>{
  return {
    changeState:(e)=>{
       dispatch(changeState(e));
    },
    changeGenre:(e)=>{
       dispatch(changeGenre(e));
    },
    changeType:(item)=>{
       dispatch(changeType(item));
    },
    changeAddress:(item)=>{
       dispatch(changeAddress(item));
    },
    changeKeyWords:(e)=>{
       dispatch(changeKeyWords(e));
    },
    queryGoodsList:(desp)=>{
       dispatch(queryGoodsList(desp));
    }
  }
}
Admin.contextTypes = {
  store: PropTypes.object.isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(Admin)

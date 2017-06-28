// var css = require('../../style/examine/index.less');
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ExamineList from '../components/examineList';
import deleteGoods from '../actions/deleteGoods.js';
import allGoodsList from '../actions/allGoodsList.js';
import myFetch from '../common/ajax.js';
//自己写了一个fetch....因为mock插件很多不支持fetch
class Examine extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var store = this.context.store;
    var dispatch=store.dispatch;
    dispatch(allGoodsList());
    //初始化状态，利用了thunk中间件，dispatch内的action可以为函数
  }
  render() {
    const {data, removeOut} = this.props;
    return (<ExamineList list={data.list} onClickRemove={removeOut}/>);
  }
}
const mapStateToProps = (state) => {
  return {data: state.examineData.data};
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeOut: (typeId) => {
      dispatch(deleteGoods(typeId));
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Examine);
Examine.contextTypes = {
  store: PropTypes.object.isRequired
}
//这里封装了组件，通过connect方法可以封装这个组件

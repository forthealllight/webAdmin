// var css = require('../../style/examine/index.less');
import React from 'react';
import PropTypes from 'prop-types';
import {Router, Route, Link} from 'react-router';
class ExamineItem extends React.Component {
  constructor(props) {
    super(props);
    this.myOnClickRemove = this.myOnClickRemove.bind(this);
    //这里有个坑，所有在class类定义的方法，必须bind(this)，才能用上下文所传递过来的值
  }
  myOnClickRemove(id) {
    const {onClickRemove} = this.props;
    onClickRemove(id);
  }
  render() {
    const {item} = this.props;
    return (
      <tr>
        <td>{item.num}</td>
        <td>{item.type}</td>
        <td>${item.price}</td>
        <td>{item.desp}</td>
        <td>
          <span className="edit" onClick={this.myOnClickRemove.bind(this, item.num)}>删除</span>
          <Link to="/examine/feedback"><span className="edit">编辑</span></Link>
        </td>
      </tr>
    );
  }
}
export default ExamineItem;

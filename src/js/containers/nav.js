// var title = require('../../style/nav/index.less');
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Router, Route, Link} from 'react-router';
import fetch from 'isomorphic-fetch';
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageName: "",
      listItems: []
    };
    this.selectType = this.selectType.bind(this);
  }
  componentDidMount() {
    const state = this.context.store.getState();
    this.setState(state);
    //this.setState这个方法本身就是异步的
  }
  selectType(id) {
    const store = this.context.store;
    store.dispatch({type: id});
    const name = store.getState().currentPageName;
    this.setState({currentPageName:name});
    //state中，如果要显示，则必须要改变，因为componentDidMount方法只在开始时仅执行一次
  }
  render() {
    const items = this.state.listItems;
    const store = this.context.store;
    //setState本身异步，但是在state中还是可以拿到的
    return (
      <div>      
        <div className="m-nav-right">
          {this.props.children}
        </div>
        <ul className="m-nav-ul">
          <li className="m-nav-bar"><i className="iconfont icon-mulu"/></li>
          {items.map((item) => <Link to={item.index} key={item.name}>
            <li className={item.name == this.state.currentPageName
              ? 'active'
              : ''} onClick={this.selectType.bind(this, item.typeId)}>
              <i className={'iconfont'+' '+item.iconId}/>{item.name}
            </li>
          </Link>)}
        </ul>
      </div>
    )
  }
}
Nav.contextTypes = {
  store: PropTypes.object.isRequired
}
export default Nav;

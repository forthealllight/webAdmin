import React from 'react';
import {Button,Input,Radio,Menu,Dropdown,Icon,Checkbox} from 'antd';
const RadioGroup = Radio.Group;
class AdminSearch extends React.Component{
    constructor(props){
       super(props);
    };
    render(){
      const {searchDetail}=this.props;
      const {stateList,typeList,genreList,addressList}=searchDetail;
      const {currentState,currentType,currentGenre,currentAddress,currentKeyWords}=searchDetail;
      const {changeState,changeGenre,changeType,changeAddress,changeKeyWords}=this.props;
      const {queryGoodsList}=this.props;
      ;
      const menuType=(
        <Menu onClick={changeType}>
          {typeList.map((item)=><Menu.Item key={item.key}>{item.value}</Menu.Item>)}
        </Menu>
      );
      const menuAddress=(
        <Menu onClick={changeAddress}>
          {addressList.map((item)=><Menu.Item key={item.key}>{item.value}</Menu.Item>)}
        </Menu>
      );
    	return (
          <ul className="m-admin-search-list">
            <li>商品状态：
              <RadioGroup onChange={changeState} value={currentState} defaultValue={1}>
                {
                  stateList.map(
                    (item)=><Radio value={item.key} key={item.value}>{item.value}</Radio>
                  )
                }
              </RadioGroup>
            </li>        
            <li>商品种类：
               <Dropdown overlay={menuType} placement="bottomCenter">
                 <Button>{currentType.value}</Button>
               </Dropdown>
            </li>
            <li>商品类别：
              <RadioGroup onChange={changeGenre} value={currentGenre} defaultValue={1}>
                {genreList.map((item)=><Radio value={item.key} key={item.key}>{item.value}</Radio>)}
              </RadioGroup>
            </li>
            <li>所在校区：
               <Dropdown overlay={menuAddress} placement="bottomCenter">
                 <Button>{currentAddress.value}</Button>
               </Dropdown>
            </li>
            <div className="f-search">
              <div className="f-search-input">
                <Input placeholder="请输入关键词" onChange={changeKeyWords}/>
              </div>
              <div className="f-search-button">
                <Button type="primary" onClick={queryGoodsList.bind(this,searchDetail)}>查询</Button>
              </div>
            </div>
        </ul>
    	)
    }
}

export default AdminSearch;


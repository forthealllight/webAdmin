// var css=require('../../style/examine/index.less');
import React from 'react';
import PropTypes from 'prop-types';
import ExamineItem from './examineItem';
class ExamineList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {list,onClickRemove}=this.props;
    return(
      <div className="m-examine">
        <table>
          <thead>
            <tr>
              <th width="150px">商品编号</th>
              <th width="150px">商品类别</th>
              <th width="150px">商品价格</th>
              <th width="150px">商品描述</th>
              <th width="150px">操作</th>
            </tr>
          </thead>
          <tbody>
            {list.map(function(item,index){
              //forEach相当于仅仅是遍历数组，并不会有其他的问题，而map则是对数组的每一项进行操作，并且会返回改变后的数组
               return(
                 <ExamineItem item={item} key={index} onClickRemove={onClickRemove}/>
               )
            })
           }
          </tbody>
        </table>
      </div>
    )
  }
}
export default ExamineList;
ExamineList.propTypes={
  list:PropTypes.array.isRequired
};

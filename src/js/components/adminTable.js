import React from 'react';
import {Button,Input,Radio,Menu,Dropdown,Icon,Table,Checkbox,Popover} from 'antd';
const content = (
  <div style={{width:'50px',height:'80px'}}>
    <p style={{height:'25px',lineHeight:'25px',cursor:'pointer'}}>上架商品</p>
    <p style={{height:'25px',lineHeight:'25px',cursor:'pointer'}}>下架商品</p>
    <p style={{height:'25px',lineHeight:'25px',cursor:'pointer'}}>删除商品</p>
  </div>
);
const columns = [{
  title:'商品ID',
  dataIndex:'goodsId',
},
{
  title: '商品描述',
  dataIndex: 'goodsdesp',
  render: text => <div><img  width={50} height={50} style={{verticalAlign:'middle',marginRight:'5px'}} src="../../assets/images/timg.jpeg"/>{text} </div>,
},{
  title: '售价',
  dataIndex: 'price',
  render:text => <span>￥{text}</span>
},
{
  title: '状态',
  dataIndex: 'state',
},{
  title: '商品种类',
  dataIndex: 'type',
},{
  title: '商品类别',
  dataIndex: 'genre',
},{
  title: '发布时间',
  dataIndex: 'release',
},{
  title: '操作',
  dataIndex: 'operation',
  render:text =>
  <Popover content={content} title="操作" trigger="hover" placement="bottom" >
    <i className="iconfont icon-shezhi"></i>
  </Popover>
},];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User',    // Column configuration not to be checked
  }),
};
class AdminTable extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const {queryGoodsList,searchDetail}=this.props;
    queryGoodsList(searchDetail);
  }
  render(){
    const {tableDetail}=this.props;
    console.log(tableDetail.tableList);
    const data=[];
    tableDetail.tableList.forEach(function(item,index){
       item.key=index+1;
       data.push(item);
    });
    return(
      <div className="m-admin-content">
         <Table rowSelection={rowSelection} columns={columns} dataSource={data}/>
      </div>
    )
  }
}
export default AdminTable;










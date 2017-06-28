export const changeState=(e)=>(dispatch)=>{
	let key=e.target.value;
	dispatch({
 		type:'changeState',
	 	key:key
	});
}
export const changeGenre=(e)=>(dispatch)=>{
  	let key=e.target.value;
  	dispatch({
     	type:'changeGenre',
     	key:key
  	})
}
export const changeType=(item)=>(dispatch)=>{
    let key=item.key;
    let value=item.item.props.children;
    dispatch({
    	type:'changeType',
    	key:key,
    	value:value
    })
}
export const changeAddress=(item)=>(dispatch)=>{
	let key=item.key;
	let value=item.item.props.children;
	dispatch({
		type:'changeAddress',
		key:key,
		value:value
	})
}
export const changeKeyWords=(e)=>(dispatch)=>{
    let value=e.target.value;
    dispatch({
    	type:'changeKeyWords',
    	value:value
    })
}
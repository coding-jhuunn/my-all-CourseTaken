import {ReactNode} from 'react';



interface ListGenetics<T>{
    items: T[];
    render:(item:T)=>ReactNode
}

 const List = <T,>({items,render}:ListGenetics<T>)=> {
  return (
    <ul>
        {items.map((item,i)=>(
            <li key={i}>
                {render(item)}
            </li>
        ))}
    </ul>
  )
}




export default List;
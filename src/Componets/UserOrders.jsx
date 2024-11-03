import TableComp from "./TableComp"
import { useSelector } from "react-redux"

function UserOrders(){

    const data = useSelector(state =>{
        return state.orders})   
    
    const columesProdacts =
    [
        {
          key: 'name',
          title: 'title',
        },
        {
            key: 'quntety',
            title: 'qty',
        },
        {
            key: 'date',
            title: 'date',
        },
        {
            key: 'price',
            title: 'total',
        }
    ]
    
    const renderProdacts = (col,raw) => {
        if(col.key === "price"){
            return <div className="text-blue-500 font-bold"> {Number(raw[col.key]) * Number(raw["quntety"])}</div>;
        }

        return <div className="text-blue-500 font-bold"> {raw[col.key]}</div>;
    }

    return (<div className="text-black-400 font-bold border-double border-4 border-indigo-600">
        <TableComp data={data} columns={columesProdacts} render={renderProdacts}/>  
    </div>)
}

export default UserOrders
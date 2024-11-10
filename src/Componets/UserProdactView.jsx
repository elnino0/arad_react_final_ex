import { useState } from 'react'
import FilterProdacts from './FilterProdacts'
import UserProdact from './UserProdact'

function UserProdactsView({prodacts, onAdd, onRemove}){

    const [filter,setFilter] = useState({})

    const onFilterUpdate = (filterUpdate) =>{
        setFilter(filterUpdate)
    }

    const generateProdact = (prodacts) =>{
        if(prodacts.length == 0 ){
            return <div> <h3>No items found</h3> </div>
        }

        return <div className=' border-solid border-4 border-black-300 bg-slate-200 size-full md:size-auto p-10 gap-10'> 
        <ul>
        {prodacts.map((prod,index) =>{
                    if(filter.cat && prod.cat.includes(filter.cat)  ){
                        return
                    }

                    if(filter.title &&  !prod.name.includes(filter.title)  ){
                        return
                    }

                    if(filter.price &&  !prod.price < filter.price ){
                        return
                    }

                return <li key={index}><UserProdact prodact={prod} onAdd={onAdd} onRemove={onRemove} /> </li>
            })
        }
        </ul>
        </div>
    }

    return (<div className="">
        <div><FilterProdacts onUpdate={onFilterUpdate}/> </div>
        
        {generateProdact(prodacts)}
    </div>)
}

export default UserProdactsView
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

        return <ul>
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
    }

    return (<div>
        <FilterProdacts onUpdate={onFilterUpdate}/>
        {generateProdact(prodacts)}
    </div>)
}

export default UserProdactsView
import { useSelector } from "react-redux"

function UserProdact({prodact ,onAdd, onRemove}){
    const imageStyle = {
        height:"170px",
        width:"auto",
    }

    const amount = useSelector((state) =>{ 
        
        if(state.cart.lenght == 0){
            return 0
        }

        const index = state.cart.findIndex((i) => i.id === prodact.id);
        if(index == -1){
            return 0
        }

        return state.cart[index].count
    })


    const Add = (e)=>{
        onAdd(prodact, amount + 1)
    }

    const Remove = (e) =>{
        
        if(amount <= 0){
            return
        }
        
        onRemove(prodact.id, amount - 1)
    }

    return (<div className="flex flex-raw grid-cols-2 gap-1 border-solid border-4 border-black-300 bg-sky-500/20 rounded-lg mt-6">

        <div  className="flex flex-col gap-2 self-center bg-blue-500/20 rounded-lg ml-6 mr-6 mt-6 mb-6" >
            <div className="place-self-center bg-blue-500/10 rounded-lg ml-6 mr-6 mt-6 mb-6">
                <article className="text-wrap">
                    <h3 className="text-xl">{prodact.name}</h3> 
                    <p className="line-clamp-3 hover:line-clamp-4 text-xl">{prodact.des}</p>
                    <label className="text-xl">Price : {prodact.price}</label>
                </article>
            </div>
            <div className="flex gap-2 place-self-center bg-green-100/50 mr-6 mb-6">
                <button className="bg-blue-500/10 rounded-lg text-2xl " onClick={e => Remove(e)} >-</button>
                <label  className="bg-white rounded-lg text-2xl ">{amount}</label> 
                <button className="bg-blue-500/10 rounded-lg text-2xl " onClick={e => Add(e)}>+</button>
            </div>
        </div>

        <div className="flex gap-20">

            <div className="self-start ml-6 mr-6 mt-6 mb-6">
                 <img style={imageStyle} src={prodact.link} alt={prodact.name} />
            </div>
           
            <div className="self-center bg-indigo-500/70 border-solid border-4 border-black-300 text-2xl mr-6">
                <label> Bought {prodact.bought} </label>
            </div>
       
       </div>


    </div>)
}

export default UserProdact
import Client from "../apiClient/ApiClient"


function Logout({onLogout}){
    const clinet = Client.getInstance()
    const onclick = (e) =>{
        onLogout(e)
        clinet.logout()
    }

    return <div className="bg-white">
        <button className="text-blue-400 text-xl ml-6 mr-6 mt-6 mb-6" onClick={e=>{onclick(e)}}> Logout </button>
    </div>

}


export default Logout
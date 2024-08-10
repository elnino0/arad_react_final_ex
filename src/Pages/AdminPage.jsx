
function AdminPage({loggedIn}){

return (<>
        <div>
            {
                loggedIn == true ? <div><h1> Logged in </h1>  </div> : <h1> Not logged in</h1>
            }
        </div>
</>)
}

export default AdminPage
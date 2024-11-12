import { Tab} from "@mui/material"
import TabContext from "@mui/lab/TabContext"; 
import { TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import UserAccount from "../Componets/UserAccount";
import UserOrders from "../Componets/UserOrders";
import UserShop from "../Componets/UserShop";
import Logout from "../Componets/Logout";
import { useNavigate } from "react-router-dom";


function UserView({user, prodacts, orders}){
    const nav = useNavigate()
    const [value, setValue] = useState("1");
    
    const handleChange = (event, newValue) => { 
        setValue(newValue); 
      }; 

    return (<div>
        <div className="absolute top-0 right-11"> 
                <Logout onLogout={()=>{nav("/login")}}/>
        </div> 
        <br />
    <TabContext value={value}> 
        <TabList  aria-label="basic tabs example" onChange={handleChange}>
            <Tab label="Account" value="1"/>
            <Tab label="Orders" value="2"/>
            <Tab label="Shop" value="3"/>
        </TabList >
            <TabPanel value="1"><UserAccount OnSave={user.OnSave}/></TabPanel> 
            <TabPanel value="2"><UserOrders  orders={orders}/></TabPanel> 
            <TabPanel value="3"> <UserShop  prodacts={prodacts}/> </TabPanel>
        </TabContext>
        </div>
        )
    }
    
    export default UserView
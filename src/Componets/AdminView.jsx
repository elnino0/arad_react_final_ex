import { Tab} from "@mui/material"
import TabContext from "@mui/lab/TabContext"; 
import { TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import Categoies from "./Categories";
import Customers from "./Customers";
import Prodacts from "./Prodacts";
import Statistics from "./Statistics";
import Logout from "./Logout";
import { useNavigate } from "react-router-dom";

function AdminView({categoies, prodacts}){
    const nav = useNavigate()
    const [value, setValue] = useState("1");
    
    const handleChange = (event, newValue) => { 
        setValue(newValue); 
      }; 

    return (<div className="">
            <div className="absolute top-0 right-11"> 
                <Logout onLogout={()=>{nav("/login")}}/>
            </div> 
            <br />
        <div className="">
            <TabContext value={value}> 
                <TabList  aria-label="basic tabs example" onChange={handleChange}>
                    <Tab label="Categies" value="1"/>
                    <Tab label="Prodacts" value="2"/>
                    <Tab label="Customers" value="3"/>
                    <Tab label="Statistics" value="4"/>
                </TabList >
                    <TabPanel value="1"><Categoies onAdd={categoies.onAdd} onRemove={categoies.onRemove} onUpdate={categoies.onUpdate}/></TabPanel> 
                    <TabPanel value="2"><Prodacts  onUpdate={prodacts.onUpdate} onAdd={prodacts.onAdd}/></TabPanel> 
                    <TabPanel value="3"> <Customers /> </TabPanel>
                    <TabPanel value="4"><Statistics /></TabPanel> 
                    </TabContext> 
            </div>
        </div>
        )
    }
    
    export default AdminView
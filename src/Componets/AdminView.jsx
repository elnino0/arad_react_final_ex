import { Tab} from "@mui/material"
import TabContext from "@mui/lab/TabContext"; 
import { TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import Categoies from "./Categories";
import Customers from "./Customers";
import Prodacts from "./Prodacts";
import Statistics from "./Statistics";

function AdminView({categoies, prodacts}){
    
    const [value, setValue] = useState("1");
    
    const handleChange = (event, newValue) => { 
        console.log("newValue", newValue)
        setValue(newValue); 
      }; 

    return (<>
    <TabContext value={value}> 
        <TabList  aria-label="basic tabs example" onChange={handleChange}>
            <Tab label="Categies" value="1"/>
            <Tab label="Prodacts" value="2"/>
            <Tab label="Customers" value="3"/>
            <Tab label="Statistics" value="4"/>
        </TabList >
            <TabPanel value="1"><Categoies onAdd={categoies.onAdd} onRemove={categoies.onRemove} onUpdate={categoies.onUpdate}/></TabPanel> 
            <TabPanel value="2"><Prodacts  onUpdate={prodacts.onRemove} onAdd={prodacts.onAdd}/></TabPanel> 
            <TabPanel value="3"> <Customers /> </TabPanel>
            <TabPanel value="4"><Statistics /></TabPanel> 
            </TabContext> 
            </>
        )
    }
    
    export default AdminView
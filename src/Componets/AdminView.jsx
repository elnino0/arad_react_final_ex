import { Tab} from "@mui/material"
import TabContext from "@mui/lab/TabContext"; 
import { TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import Categoies from "./Categories";

function AdminView({categoies}){
    
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
            <TabPanel value="1"><Categoies categoies={categoies.data} onAdd={categoies.onAdd} onRemove={categoies.onRemove} onUpdate={categoies.onUpdate}/></TabPanel> 
            <TabPanel value="2">Algorithms</TabPanel> 
            <TabPanel value="3">Web Development</TabPanel>
            <TabPanel value="4">Web Development also</TabPanel> 
            </TabContext> 
            </>
        )
    }
    
    export default AdminView
import { useSelector } from "react-redux"
import ApexChartBar from "./BarChart"
import PieChart from "./PieChart"

function Statistics({}){
    console.log("Statistics")
    const data = useSelector(state =>{
         return state.statistics
    })
    return (<div>
            <PieChart data={data}/> <br />
            <ApexChartBar data={data}/>
    </div>)
}

export default Statistics
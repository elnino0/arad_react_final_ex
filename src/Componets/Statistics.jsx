import { useSelector } from "react-redux"
import ApexChartBar from "./BarChart"
import PieChart from "./PieChart"

function Statistics({}){
    const data = useSelector(state =>{
         return state.statistics
    })

    console.log( "orders  ", data)


    return (<div>
            <PieChart data={data}/> <br />
            <ApexChartBar data={data}/>
    </div>)
}

export default Statistics
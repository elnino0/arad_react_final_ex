import ApexChartBar from "./BarChart"
import PieChart from "./PieChart"

function Statistics({statistics}){
    console.log("Statistics")
    return (<div>
            <PieChart data={statistics}/> <br />
            <ApexChartBar data={statistics}/>
    </div>)
}

export default Statistics
import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChartBar extends React.Component {

    constructor(props) {
      super(props);
       this.data = props.data
    }

    sortData(){
        
        this.data.sort((a, b) =>   { return  Date.parse(a.date) -  Date.parse(b.date)})
    }
     
    configState(){

      let categories = this.data.map(item =>{ return item.date})

        categories = categories.filter((item,index) =>{
            return categories.indexOf(item) === index;
        } )        

        let prtodacts = this.data.map(item =>{ return item.name})

        prtodacts = prtodacts.filter((item,index) =>{
            return prtodacts.indexOf(item) === index;
        } )        

        const series = [];
        for(let prod of prtodacts){
            series.push({name:prod, data: new Array(categories.length).fill(0)})
        }

        for(let item of this.data){
            for(let ser of series){
                if(item.name === ser.name){
                    ser["data"][categories.indexOf(item.date)] += item.quntety
                }
            }
        }
        
        this.state = {
          
          series: series,
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: categories,
            },
            yaxis: {
              title: {
                text: '$ (thousands)'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " thousands"
                }
              }
            }
          },
        
        
        };
    }

    render() {
        this.sortData()
        this.configState()
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

export default ApexChartBar

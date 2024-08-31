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

        console.log("categories ---- ",categories)
        console.log("series ---- ",series)

        this.state = {

            series: series,
            options: {
              chart:{
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                  show: true
                },
                zoom: {
                  enabled: true
                }
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  borderRadius: 10,
                  borderRadiusApplication: 'end', // 'around', 'end'
                  borderRadiusWhenStacked: 'last', // 'all', 'last'
                  dataLabels: {
                    total: {
                      enabled: true,
                      style: {
                        fontSize: '13px',
                        fontWeight: 900
                      }
                    }
                  }
                },
            },
              dataLabels: {
                enabled: true,
                offsetY: -20,
                style: {
                  fontSize: '12px',
                  colors: ["#304758"]
                }
              },
              
              xaxis: {
                type: 'datetime',
                categories: categories,

              },
              legend: {
                position: 'right',
                offsetY: 40
              },
              yaxis: {
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false,
                },
                labels: {
                  show: false,
                }
              
              },
              title: {
                text: '',
                floating: true,
                offsetY: 330,
                align: 'center',
                style: {
                  color: '#444'
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

import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
   
  // If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
  // import dynamic from "next/dynamic";
  // const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
    
  const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]


  function getCharacter(index) {
      return hexCharacters[index]
  }
  
  function generateJustOneColor(num){
  
      let hexColorRep = "#"
  
      for (let position = 0; position < 6; position++){
          hexColorRep += getCharacter( (position + num * 7) % hexCharacters.length)
      }
  
      return hexColorRep
  
  }

   
  export default function PieChart({data}) {
  const dataMap ={}

  for(let datum of data ){
      if( !(datum.name in dataMap)){
        dataMap[datum.name] = {qty:0 ,color : generateJustOneColor(datum.prodactId) }
      }

      dataMap[datum.name]["qty"] += datum.quntety 
  }

  const series = Object.keys(dataMap).map(key =>{
    return dataMap[key]["qty"]
  })
  const labels=Object.keys(dataMap)
  const colors = Object.keys(dataMap).map(key =>{
    return dataMap[key]["color"]
  })

  const chartConfig = {
    type: "pie",
    width: 280,
    height: 280,  
    series:series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      labels: labels,
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: colors,
      legend: {
        show: false,
      },
    },
  };


    return (
      <Card>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
        >
          <div>
            <Typography variant="h6" color="blue-gray">
              Pie Chart
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="max-w-sm font-normal"
            >
              Visualize your data in a simple way using the
              @material-tailwind/react chart plugin.
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="mt-4 grid place-items-center px-2">
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    );
  }
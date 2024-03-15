import { ResponsiveLine } from '@nivo/line';
import { useState, useEffect } from 'react';
import _ from 'lodash';
import '../../data/dataset1.json';
import '../../data/dataset2.json';
import themeColor from './theme.js';

let dataColors = [
  '#43BC9A',
  '#55C3A4',
  '#68CAAE',
  '#7AD1B9',
  '#8DD8C3',
  '#9FDFCD',
  '#B2E6D7',
  '#C5ECE1',
  '#D8F3EB',
  '#ECF9F5'
];
const months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre", ]

const MyResponsiveLine = ({
  data,
  lines
}) => {


  //let opt = _.chain(data).map(indicatorBy).uniq().value();
  //let tmpData = _.cloneDeep(data);
  //onst dataFormatted = opt.map((elt, index) => {

  // let calcul = _.sumBy(tmpData.filter((e) => !!e && e[indicatorBy] === elt).filter((e) => !!e && e[indicatorBy]), function (o) {
  //   if ((!!o && typeof o[`${indicator}`] === 'number')) {
  //     return Number(o[`${indicator}`]);
  //   } else if (!!o && !!o[`${indicator}`] && !!o[`${indicator}`] !== 'NaN' && typeof o[`${indicator}`] === 'string') {
  //     return Number(o[`${indicator}`].replace(',', '.').replace(' €', '').replace(' ', ''));
  //   } else {
  //     return 0;
  //   }
  // })

  // return {
  //   "Axe": elt,
  //   [indicator]: Number(calcul),
  //   "Montant_compensableColor": dataColors[index]
  // }
  //)

  const dataFormatted = data.reduce((acc, item) => {
    const currentMonth = item.Mois_circulation;
    // Pas de mois = skip item
    if (!currentMonth) return acc;

    for (let keyFilter in lines) {
      // Filtre désactivé = skip filtre
      if (lines[keyFilter] === false) continue;

      if (acc[keyFilter] === undefined) {
        acc[keyFilter] = {
          "id": keyFilter,
          "color": "hsl(253, 70%, 50%)",
          "data": Array.from({length: 12}, (_, index) => {
            return {
              x: index + 1,
              y: 0,
              
            }
          })
        }
      }
      const filterData = acc[keyFilter];
      let monthData = filterData.data[currentMonth-1];

      switch (keyFilter) {
        case 'impact':
          monthData.y += item.Pax === "" || item.Pax === undefined
            ? 0 :
            (
              typeof item.Pax === "string"
                ? Number(item.Pax)
                : item.Pax
            )
          break;
        case 'amount':
          monthData.y += item.Montant_compensable === ""
            ? 0 :
            (
              typeof item.Montant_compensable === "string"
                ? /* 9 577,50 € */ Number(item.Montant_compensable.replace(',', '.').replace(' €', '').replace(' ', ''))
                : item.Montant_compensable
            )
          break;
        case 'deletedTrains':
          monthData.y += item.Suppression === ""
            ? 0 :
            (
              typeof item.Suppression === "string"
                ? Number(item.Suppression)
                : item.Suppression
            )
        
          break;
        default:
          monthData.y += 0;
        
      }
    }
    return acc;
  }, {});

  console.log('dataFormatted: ', dataFormatted);

  return (
    <ResponsiveLine
      data={Object.values(dataFormatted)}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: false,
        reverse: false
      }}
      yFormat=" >-.2f"
      curve="natural"
      theme={{"axis": {"ticks": {
        "line": {
            "stroke": "#777777",
            "strokeWidth": 1
        },
        "text": {
            "fontSize": 10,
            "fill": "#ffffff",
            "outlineWidth": 0,
            "outlineColor": "transparent"
        }
    }}
}}
      axisTop={null}
      axisRight={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Valeurs 2',
        legendOffset: +40,
        legendPosition: 'middle'
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Mois',
        legendOffset: 36,
        legendPosition: 'middle',
        format: (month) => months[month-1]
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Valeurs',
        legendOffset: -40,
        legendPosition: 'middle'
      }}
      
      enableGridX={false}
      
      lineWidth={5}
      pointSize={10}
      pointColor={{ from: 'color', modifiers: [] }}
      pointBorderColor={{ theme: 'background' }}
      pointLabelYOffset={-12}
      enableArea={true}
      areaOpacity={0.3}
      useMesh={true}
      legends={[]}
      motionConfig={{
        mass: 1,
        tension: 170,
        friction: 26,
        clamp: false,
        precision: 0.01,
        velocity: 0
      }}
    />
  )
}


export default MyResponsiveLine;

/*
 const MyResponsiveLine = ({ data/ }) => (
     <ResponsiveLine
         data={!!data ? data : dataNivo}
         keys={[
            "plane",
            "helicopter",
            "boat",
            "train",
            "subway",
            "bus",
            "car",
            "moto",
            "bicycle",
            "horse",
            "skateboard",
            "others"
         ]}
          
         margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
         xScale={{ type: 'point' }}
         yScale={{
             type: 'linear',
             min: 'auto',
             max: 'auto',
             stacked: false,
             reverse: false
         }}
         yFormat=" >-.2f"
         curve="natural"
         axisTop={null}
         axisRight={null}
         axisBottom={{
             tickSize: 5,
             tickPadding: 5,
             tickRotation: 0,
             legend: 'transportation',
             legendOffset: 36,
             legendPosition: 'middle'
         }}
         axisLeft={{
             tickSize: 5,
             tickPadding: 5,
             tickRotation: 0,
             legend: 'count',
             legendOffset: -40,
             legendPosition: 'middle'
         }}
         enableGridX={false}
         colors={{ scheme: 'greens' }}
         lineWidth={5}
         pointSize={10}
         pointColor={{ from: 'color', modifiers: [] }}
         pointBorderColor={{ theme: 'background' }}
         pointLabelYOffset={-12}
         enableArea={true}
         areaOpacity={0.3}
         useMesh={true}
         legends={[]}
         motionConfig={{
             mass: 1,
             tension: 170,
             friction: 26,
             clamp: false,
             precision: 0.01,
             velocity: 0
         }}
     />
 )
 

   export default MyResponsiveLine
*/

/*
    <ResponsiveLine
        data={!!data ? data : dataNivo}
        keys={[
           "plane",
           "helicopter",
           "boat",
           "train",
           "subway",
           "bus",
           "car",
           "moto",
           "bicycle",
           "horse",
           "skateboard",
           "others"
        ]}
         
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        colors={{ scheme: 'greens' }}
        lineWidth={5}
        pointSize={10}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderColor={{ theme: 'background' }}
        pointLabelYOffset={-12}
        enableArea={true}
        areaOpacity={0.3}
        useMesh={true}
        legends={[]}
        motionConfig={{
            mass: 1,
            tension: 170,
            friction: 26,
            clamp: false,
            precision: 0.01,
            velocity: 0
        }}
    />
)


  export default MyResponsiveLine

  */
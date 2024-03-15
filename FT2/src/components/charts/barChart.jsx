import { ResponsiveBar } from '@nivo/bar'
import { useState, useEffect } from 'react';
import _ from 'lodash';

const dataNivo =  [
    {
      "Axe": "AD",
      "hot dog": 43,
      "hot dogColor": "hsl(350, 70%, 50%)",
      "burger": 68,
      "burgerColor": "hsl(321, 70%, 50%)",
      "sandwich": 154,
      "sandwichColor": "hsl(5, 70%, 50%)",
      "kebab": 6,
      "kebabColor": "hsl(86, 70%, 50%)",
      "fries": 153,
      "friesColor": "hsl(241, 70%, 50%)",
      "donut": 30,
      "donutColor": "hsl(249, 70%, 50%)"
    },
    {
      "Axe": "AE",
      "hot dog": 146,
      "hot dogColor": "hsl(200, 70%, 50%)",
      "burger": 188,
      "burgerColor": "hsl(276, 70%, 50%)",
      "sandwich": 3,
      "sandwichColor": "hsl(116, 70%, 50%)",
      "kebab": 117,
      "kebabColor": "hsl(317, 70%, 50%)",
      "fries": 147,
      "friesColor": "hsl(291, 70%, 50%)",
      "donut": 180,
      "donutColor": "hsl(354, 70%, 50%)"
    },

  ]


  let dataColors = [
    '#6D00FC'

];


const MyResponsiveBar = ({
  data,
  indicator,
  indicatorBy
}) => {


  const [dataLoaded, setDataLoaded] = useState();
  const [createDataSet, setCreateDataSet] = useState();
  const [dataFormatted, setDataFormated] = useState();

  useEffect(() => {
      if (data) {
        setDataLoaded(data);
      }
  }, []);




useEffect(() => {
  if (dataLoaded) {
    console.log('dataLoaded: ', dataLoaded);
    let opt = _.chain(dataLoaded).map(indicatorBy).uniq().value();
    setCreateDataSet(opt);
  }
}, [dataLoaded]);


  useEffect(() => {
   
    console.log('createDataSet: ', createDataSet);
    let tmpData = _.cloneDeep(dataLoaded);


    let arrayTmp = [];
 
if(createDataSet) {
  
  createDataSet.map((elt, index) => {
    
    let calcul = _.sumBy(tmpData.filter((e) => !!e && e[indicatorBy] === elt).filter((e) => !!e && e[indicatorBy]), function (o) {
      if((!!o && typeof o[`${indicator}`] === 'number')) {
        return Number(o[`${indicator}`]);
      } else if(!!o && !!o[`${indicator}`] && !!o[`${indicator}`] !== 'NaN' && typeof o[`${indicator}`] === 'string') {
        return Number(o[`${indicator}`].replace(',','.').replace(' €', '').replace(' ', ''));
      } else {
        return 0;
      }
  })

      arrayTmp.push(
          {
          "Axe": elt,
          [indicator]: Number(calcul),
          "Montant_compensableColor": dataColors[index]
        }
      )
 
    
 })
 }

   // console.log('arrayTmp: ', arrayTmp);
     setDataFormated(arrayTmp);


  }, [createDataSet]);


useEffect(() => {
  console.log('dataFormatted: ', dataFormatted);
}, [dataFormatted]);





  
  
  return(
    <ResponsiveBar
        data={(!!dataFormatted && dataFormatted.length > 0) ? dataFormatted : dataNivo}
        keys={[
          indicator
        ]}
        valueFormat={value => (Math.round(value / 10000) / 100) + "M"}
        indexBy={indicatorBy}
        margin={{ top: 50, right: 130, bottom: 50, left: 80 }}
        padding={0.75}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={dataColors}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        axisTop={null}
        axisRight={null}
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
        axisBottom={{
            tickSize: 5,
            tickPadding: 0,
            tickRotation: 90,
            rotation: 90,
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: indicator,
            legendPosition: 'middle',
            legendOffset: -60,
            truncateTickAt: 0,
            format: value =>
            (Math.round(value / 10000) / 100) + "M",
        }}
        enableGridY={false}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
)
      }


export default MyResponsiveBar;
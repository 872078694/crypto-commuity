import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';
import BitCoinData from './BitCoinData.json'

export function DemoChart () {
    const options = {
        title: {
          text: 'My chart'
        },
        series: [{
          data: BitCoinData,
          color: '#00FA9A',
        }],
        credits: {
            enabled: false
        },
        yAxis: {
            gridLineWidth: 0,
            title: null,
            "startOnTick": true
        },
        xAxis: {
            lineWidth: 1,
            tickWidth: 0,
        }
      }
    return <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
}
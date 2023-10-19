import React from 'react'

import ApexCharts from 'react-apexcharts';
function Performance() { 
    const localStorageApiData = JSON.parse(localStorage.getItem("apiData"));
    const performanceData = localStorageApiData.dasbhoardPage.performance;
    console.log(performanceData);


    const perOptions = {
        chart: {
            height: "272.671px",
            width: '439px',
            type: 'line',
            background: '#435c70',
            foreColor: "white"
        },
        series:[{
            data:performanceData
        }],
        yaxis:{
            categories: performanceData
        },
        plotOptions: {
            bar: {
                horizontal: true, // Set the chart to horizontal mode
            }
        },
        dataLabels: {
            enabled: false
        }

    }
  return (
   <>
    <div className='main-content-wrapper'>
                <div className='dashboard-content'>
                    <div className='latest-hits-content'>
                        <h2 className='latest-heading'>Performance</h2>
                        <div className='chart'>
                            <ApexCharts perOptions={perOptions} series={perOptions.series} width={500} height={300} />
                        </div>
                    </div>
                </div>
            </div>
        
   </>
  )
}

export default Performance;
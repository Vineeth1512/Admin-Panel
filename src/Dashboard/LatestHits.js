import React from 'react';
import "./Dashboard.css";
import ApexCharts from 'react-apexcharts';
import NotifcationList from './NotifcationList';
import OrdersList from './OrdersList';
function LatestHits() {
    const localStorageApiData = JSON.parse(localStorage.getItem("apiData"));
    const DashboardDetails = localStorageApiData.dasbhoardPage;
    const featuredData = DashboardDetails.latestHits.featured;
    const latestData = DashboardDetails.latestHits.latest;
    const months = DashboardDetails.latestHits.months;
    const popularData = DashboardDetails.latestHits.popular;
    const performanceData = DashboardDetails.performance;
    const datakeys = Object.keys(performanceData)
    const dataValues = Object.values(performanceData);
    

    const options = {
        chart: {
            height: "272.671px",
            width: '439px',
            type: 'line',
            background: '#435c70',
            foreColor: "white"
        },
        series: [{
            name: "Featured",
            data: featuredData,
        },
        {
            name: "latest",
            data: latestData,
        },
        {
            name: "popular",
            data: popularData,
        }
        ],
        xaxis: {
            categories: months,
        },
        options: {
            stroke: {
                curve: 'smooth',
            }
        }
    };
    const options2 = {
        chart: {
            type: 'bar',
            height: "272.671px",
            width: '439px',
            background: '#435c70',
            foreColor: "white"

        },

        plotOptions: {
            bar: {
                horizontal: true,
                distributed: true,
                barHeight: '30%',
            },
        },

        dataLabels: {
            enabled: false,
        },

        xaxis: {
            categories: datakeys
        },
    };
    const series = [
        {
            data: dataValues
        },
    ];
    const storage = DashboardDetails.storage;
    const storageSeries = Object.keys(storage)
    const storageLabels = Object.values(storage);
    var options3 = {
        series: storageLabels,
        chart: {
            width: 380,
            type: 'pie',
            foreColor: "white"
        },
        labels: storageSeries,
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    const notificationData = DashboardDetails.notifications;
    const ordersList = DashboardDetails.orders;

    return (
        <>
            <div className='latest-perfomance-wrapper'>
                <div className='dashboard-content'>
                    <div className='latest-hits-content'>
                        <h2 className='latest-heading'>Latest Hits</h2>
                        <div className='chart'>
                            <ApexCharts options={options} series={options.series} width={500} height={300} />
                        </div>
                    </div>
                    <div className='latest-hits-content'>
                        <h2 className='latest-heading'>Performance</h2>
                        <div className='chart'>
                            <ApexCharts options={options2} series={series} type="bar" width={500} height={300} />
                        </div>
                    </div>
                </div>
            </div >

            <div className='storage-notification-wrapper'>
                <div className='dashboard-content'>
                    <div className='latest-hits-content'>
                        <h2 className='latest-heading'>Storage Information</h2>
                        <div className='chart'>
                            <ApexCharts options={options3} type="pie" series={options3.series} width={500} height={300} />
                        </div>
                    </div>

                    <div className='latest-hits-content'>
                        <h2 className='latest-heading'>Notification List</h2>
                        {notificationData.map((user, i) => {
                            return <NotifcationList
                                key={i}
                                pic={user.pic}
                                message={user.message}
                                time={user.time}
                            />
                        })}
                    </div>
                </div>
            </div >
            <div className='order-list-wrapper'>
                <h2>Orders List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Order No.</th>
                            <th>Status</th>
                            <th>Operators</th>
                            <th>Location</th>
                            <th>Distance</th>
                            <th>Start Date</th>
                            <th>EST Delivery Due</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersList.map((order, i) => {
                            return <OrdersList
                                key={i}
                                orderNo={order.orderNo}
                                status={order.status}
                                location={order.location}
                                operators={order.operators}
                                distance={order.distance}
                                startDate={order.startDate}
                                deliveryDate={order.deliveryDate}                      
                            />
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default LatestHits;

import React from 'react'

function OrdersList(props) {
    let spanClassName;
    if (props.status === 'Moving') {
        spanClassName = 'status-span-green';
    } 
    else if (props.status === 'Pending') {
        spanClassName = 'status-span-yellow';
    } 
    else if (props.status === 'Cancelled') {
        spanClassName = 'status-span-red';
    }
     else {
        spanClassName = 'status-span-blue';
    }

    return (
        <>
            <tr>
                <td><strong>#{props.orderNo}</strong></td>
                <td className="order-list-status">
                    <span className={spanClassName}>
                    </span>{props.status}</td><td><strong>{props.operators}</strong></td>
                <td><strong>{props.location}</strong></td>
                <td><strong>{props.distance} km</strong></td>
                <td>{props.startDate}</td>
                <td>{props.deliveryDate}</td>
            </tr>
        </>
    )
}

export default OrdersList
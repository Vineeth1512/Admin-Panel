import React from 'react'
function NotifcationList(props) {
    return (
        <>
            <div className="notification-container">
                <img src={props.pic} alt="0" />
                <p>{props.message}<br></br>
                    <span> {props.time}</span>
                </p>
            </div>
        </>
    )
}

export default NotifcationList
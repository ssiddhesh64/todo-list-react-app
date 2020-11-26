import React from 'react'
import './style.css'

export const Toast = ({show, title, description}) => {
    let ss = show ? "toast-show" : "toast-hide"
    return (
        <div className={ss}>
            {/* <div className="toast-body"> */}
                {/* <div className="toast-title"> */}
                    <h3>{title}</h3>
                {/* </div> */}
                {/* <div className="toast-desc"> */}
                    {description}
                {/* </div> */}
            {/* </div> */}
        </div>
    )
}

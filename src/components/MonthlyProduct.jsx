import React from 'react'
import PropTypes from 'prop-types'

const MonthlyProduct = props => {
    return (
        <div>
            <h5 className="modal-card"><a href='#'>{props.month}</a></h5>
            <div className="modal-container">
                <ul className="list-container">
                    {props.selection.map((item, index) =>
                        <li key={index} className="item-list">{item}</li>    
                    )}
                </ul>
            </div>
        </div>
    )
}

MonthlyProduct.PropTypes = {
    month: PropTypes.string.isRequired,
    selection: PropTypes.array.isRequired
}

export default MonthlyProduct
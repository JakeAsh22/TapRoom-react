import React from 'react';
import PropTypes from 'prop-types';

const Schedule = props => {
    return(
        <div className='dayBlocks'>
            <h6>{props.day}</h6>
            <ul>
                <li>{props.location}</li>
                <li>{props.hours}</li>
                <li>{props.booth}</li>
            </ul>
        </div>
    )
}

Schedule.propTypes = {
    day: PropTypes.string,
    location: PropTypes.string,
    hours: PropTypes.string,
    booth: PropTypes.string
}

export default Schedule;
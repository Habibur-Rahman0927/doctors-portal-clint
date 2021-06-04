import React from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import chair from '../../../images/Mask Group 1.png'

const AppoinmentHeader = ({handleDataChange}) => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 className="section-title">Appoinment</h1>
                    <Calendar
                        onChange={handleDataChange}
                        value={new Date()}
                    />
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppoinmentHeader;
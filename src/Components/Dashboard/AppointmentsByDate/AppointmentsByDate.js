import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({ appoinments }) => {
    console.log(appoinments)
    return (
        <div>
            <h2 className="text-brand text-center">Appointments</h2>
            {
                appoinments.length ?
                 <AppointmentShortList appoinments={appoinments}></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;
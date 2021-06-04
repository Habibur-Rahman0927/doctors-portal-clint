import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { UserContext } from '../../../App';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'

const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: "100vh"
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appoinments, setAppoinments] = useState([])
    const handleDataChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({date:selectedDate, email: loggedInUser.email})
        })
            .then(res => res.json())
            .then(data => {
                setAppoinments(data);
            })
    }, [selectedDate])
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                    <h1 className="text-brand text-center">Calender</h1>
                    <Calendar
                        onChange={handleDataChange}
                        value={new Date()}
                        className="calenderDesgin"
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appoinments={appoinments}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
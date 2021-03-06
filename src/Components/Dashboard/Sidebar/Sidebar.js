import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [isDoctor, setIsDoctor] = useState(false);
    // useEffect(() => {
    //     fetch('http://localhost:5000/isDoctor', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsDoctor(data));
    // }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/doctor/dashboard" className="text-white textDecoration">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/appointment" className="text-white textDecoration">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                    </Link>
                </li>

              {/*   {isDoctor && */} <div>
                    <li>
                        <Link to="/doctor/patients" className="text-white textDecoration">
                            <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="text-white textDecoration">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/addDoctors" className="text-white textDecoration">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="text-white textDecoration" >
                            <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                        </Link>
                    </li>
                </div>{/* } */}
            </ul>
            <div>
                <Link to="/" className="text-white textDecoration"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;
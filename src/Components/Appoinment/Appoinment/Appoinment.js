import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Home/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import BookAppoinment from '../BookAppoinment/BookAppoinment';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDataChange = date => {
        setSelectedDate(date)
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item active">
                    <Link className="nav-link ms-4" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link ms-4" to="/login">Login</Link>
                    </li>

                    <li class="nav-item">
                    <Link className="nav-link ms-4" to="/dashboard">Dashboard</Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link ms-4 text-black" to="/dashboard">Admin</Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link ms-4 text-black" to="#">Blogs</Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link ms-4 text-black" to="#">Contact Us</Link>
                    </li>
                </ul>

            </div>
        </nav>
            <AppoinmentHeader handleDataChange={handleDataChange}></AppoinmentHeader>
            <BookAppoinment date={selectedDate}></BookAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;
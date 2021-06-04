import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/Mask Group 1.png'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 className="section-title">Your New Smaile <br /> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni dolore, ipsam eum cumque commodi.</p>
                <Link to="/getAppointment"><button className="btn btn-brand" >GET APPOINTMENT</button></Link>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;
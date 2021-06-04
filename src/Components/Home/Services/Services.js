import React from 'react';
import fluoride from '../../../images/001-dental.png';
import cavity from '../../../images/tooth (1).png';
import teeth from '../../../images/tooth.png';
import ServicesDetails from '../ServicesDetails/ServicesDetails';
const serviceData = [
    {
        name: "Fluoride Treatment",
        img: fluoride
    },
    {
        name: "Cavity Filling",
        img: cavity
    },
    {
        name: "Teeth Whitening",
        img: teeth
    }
]
const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: "#1CC7C1" }}>OUR SERVICES</h5>
                <h2 className="section-title">Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5" >
                    {
                        serviceData.map(service => <ServicesDetails service={service}></ServicesDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;
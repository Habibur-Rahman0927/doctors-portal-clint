import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './AppoinmentForm.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: "0px 1px 20px 0px gray"
    }
};

Modal.setAppElement('#root')

const AppoinmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();
        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {if(success){closeModal()} })
    }
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input placeholder="Enter Your Name" type="name" {...register("name")} class="form-control inputStyle" required />
                    </div>
                    <div className="form-group">
                        <input placeholder="Enter Your Email" type="email"{...register("email")} class="form-control inputStyle" required />
                    </div>
                    <div className="form-group">
                        <input placeholder="Enter Your Number" type="number" {...register("Number")} class="form-control inputStyle" required />
                    </div>
                    <div className="form-group">
                        <select {...register("gender")} class="form-control inputStyle">
                            <option disabled={true} value="Not set">Select Gender</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div className="form-group row">

                        <div className="col-4">
                            <input type="number" placeholder="Age" {...register("age", { min: 2, max: 120 })} class="form-control" required />
                        </div>
                        <div className="col-4">
                            <input type="number" placeholder="Weight" {...register("Weight", { min: 15, max: 200 })} class="form-control" required />
                        </div>
                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand mt-2">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppoinmentForm;
import React from 'react';

const AppointmentShortList = ({ appoinments }) => {
    console.log(appoinments)
    return (
        <div className="p-2" style={{marginTop : "80px"}}>


            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Phone</th>
                        <th className="text-secondary" scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appoinments.map((appoinments, index) =>

                            <tr>
                                <td>{appoinments.name}</td>
                                <td>{appoinments.Number}</td>
                                <td>{appoinments.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentShortList;
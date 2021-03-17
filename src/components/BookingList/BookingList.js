import React, { useEffect, useState } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import './BookingList.css';

const AdminPanel = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://foodlover005.herokuapp.com/booking-list')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <div className="adminPanel">
            <div className="admin-panel-inner">
                <h5 className="text-center text-uppercase mb-4">List of booking</h5>
                {
                    bookings.length ?
                        <div className="table-responsive">
                            <table className="table border">
                                <thead className='thead-dark'>
                                    <tr>
                                        <th>SL</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bookings.map((booking, index) =>
                                            <tr>
                                                <th>{index + 1}</th>
                                                <td>{booking.name}</td>
                                                <td>{booking.phone}</td>
                                                <td>{booking.email}</td>
                                                <td>{(booking.date)}</td>
                                                <td>{booking.time}</td>
                                            </tr>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>

                        :

                        <div className="d-flex justify-content-center align-items-center">
                            <PropagateLoader color={'#f1ba47'}></PropagateLoader>
                        </div>
                }
            </div>
        </div>
    );
};

export default AdminPanel;
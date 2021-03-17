import aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import { Auth } from '../Login/Auth';
import './Booking.css';

const Booking = () => {
    const auth = Auth();
    const user = JSON.parse(auth.user);
    
    const [startDate, setStartDate] = useState(new Date());
    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        user ?
        fetch('https://foodlover005.herokuapp.com/booking', {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({...data, date:startDate})
        })
        .then(res => res.json())
        .then((restul) => {
            if(restul){
                swal({
                    title:"Thank You",
                    text:"Your Booking added successfully",
                    icon:"success",
                    button:"Ok"
                })
            }
        })

        :
        history.push('/login')
    };

    //init aos
    useEffect(() => {
        aos.init({duration: 2000})
    },[])

    return (
        <div className="booking" id="booking">
            <div className="section-head-2" data-aos="fade-left">
                <h1 className="section-title-2">Book A Table</h1>
                <p className="section-desc-2">Try Delicious Food</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} data-aos="zoom-in">
                <div className="row">
                    <div className="col-md-6">
                        <select name="person" className="form-select" ref={register}>
                            <option value="1">1 Person</option>
                            <option value="2">2 Person</option>
                            <option value="3">3 Person</option>
                            <option value="4">4 Person</option>
                            <option value="5">5 Person</option>
                            <option value="6">6 Person</option>
                            <option value="7">7 Person</option>
                            <option value="8">8 Person</option>
                            <option value="9">9 Person</option>
                            <option value="10">10 Person</option>
                            <option value="11">11 Person</option>
                            <option value="12">12 Person</option>
                        </select>
                        {errors.person && <span>This field is required</span>}
                    </div>
                    <div className="col-md-6">
                        <DatePicker className='form-control' selected={startDate} onChange={date => {date:setStartDate(date)}} />
                    </div>
                    <div className="col-md-6">
                        <select name="time" className="form-select" ref={register}>
                            <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                        </select>
                        {errors.time && <span>This field is required</span>}
                    </div>
                    <div className="col-md-6">
                        <input name="name" className="form-control" ref={register({ required: true })} placeholder='Name' />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="col-md-6">
                        <input name="email" type="email" className="form-control" ref={register({ required: true })} placeholder="Email" />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="col-md-6">
                        <input name="phone" type="number" className="form-control" ref={register({ required: true, minLength:11})} placeholder="Phone" />
                        {errors.phone && <span>Minimum 11 and Maximum 14 Number</span>}
                    </div>
                </div>
                <input type="submit" value="Booking Now" className='btn-brand d-block ml-auto' />
            </form>
        </div>
    );
};

export default Booking;
import React, {useState} from 'react'
import {DateButton} from "./style"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment"
import Calender from "../../assets/cal.svg"


export default function CustomDate() {
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = ({ value, onClick }) => (
      <DateButton onClick={onClick}>
        <div> 
        {moment(value).format('MMMM YYYY')}
        </div>  

       <img src={Calender} alt="icon" className="cal-icon"/>
      </DateButton>
    );
    return (
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<ExampleCustomInput />}
      />
    );
}
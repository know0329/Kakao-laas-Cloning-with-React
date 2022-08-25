import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Button from '@mui/material/Button';
import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

/*export default function Example(props) {
  const [startDate, setStartDate] = useState(null);
  return (
    <Button>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        placeholderText="시작일 날짜"
        isClearable
        disabledKeyboardNavigation
      />
    </Button>
  );
}
*/
export default function Example() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <>
      <DatePicker
        selectsRange={true}
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        onChange={update => {
          setDateRange(update);
        }}
        isClearable={true}
      />
    </>
  );
}

/*
() => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
  );
};
*/

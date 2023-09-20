import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const ResorceOnline = () => {

    const [value, setValue] = React.useState(dayjs(new Date()));

    const handleSetValue = (e) => {
        setValue(e)
        console.log(e)
    }

  return (
    <div className="page-content">
    </div>
  );
};

export default ResorceOnline;

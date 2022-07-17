import React, { useState } from "react";
import { Box, TextField }from '@mui/material';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import styles from './DateSelect.module.scss';

function DateSelect({articles, getSortedPostsDate}) {
    const [value, setValue] = useState([null, null]);
    console.log([value]);
    return (
        <div className={styles.wrap}>
        <LocalizationProvider
            dateAdapter={AdapterDateFns}
            localeText={{ start: 'От', end: 'До' }}
        >
            <DateRangePicker
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        <TextField sx={{ backgroundColor:'#fff' }} {...startProps} />
                        <Box sx={{ mx: 1 }}> - </Box>
                        <TextField sx={{ backgroundColor:'#fff' }} {...endProps} />
                    </React.Fragment>
                )}
            />
        </LocalizationProvider>
        </div>
    );
}

export default DateSelect;

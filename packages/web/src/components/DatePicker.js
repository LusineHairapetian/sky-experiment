import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import * as React from 'react';

export default function DatePicker({ label, name, formik }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label={label}
        inputFormat='MM/DD/YYYY'
        value={formik.values[name]}
        name={name}
        onChange={(value) => formik.setFieldValue(name, value, true)}
        onBlur={formik.handleBlur}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

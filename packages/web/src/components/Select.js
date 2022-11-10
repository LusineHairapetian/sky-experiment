import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { default as MaterialSelect } from '@mui/material/Select';
import * as React from 'react';

export default function Select({ options, label, id, name, required, formik }) {
  console.log(formik);
  return (
    <FormControl variant='standard' fullWidth sx={{ m: 1 }}>
      <InputLabel id={id} required={required}>
        {label}
      </InputLabel>
      <MaterialSelect
        labelId='demo-simple-select-standard-label'
        id={id}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label={label}
        name={name}
      >
        {options.map((option) => (
          <MenuItem value={option} key={option}>
            {option}
          </MenuItem>
        ))}
      </MaterialSelect>
    </FormControl>
  );
}

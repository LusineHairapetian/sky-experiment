import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import * as Yup from 'yup';

import { DatePicker, Select } from '../components';

const subsidiaryOptions = ['Rooftop', 'Ground Mounted'];
const clientOptions = ['Norsk Solar', 'Green Production'];
const paymentTermOptions = [0, 7, 14];

export const getValidationSchema = () =>
  Yup.object({
    title: Yup.string().required('Enter the agreement title'),
    billingFrequency: Yup.string().required('Select billing frequency'),
    subsidiary: Yup.string().required('Select the subsidiary'),
    paymentTerms: Yup.string().required('Select the payment terms'),
    client: Yup.string().required('Select the client'),
    startDate: Yup.string().required('Select the start date'),
    endDate: Yup.string().required('Select the end date'),
  }).required();

function AgreementForm({ header, formProps }, ref) {
  const { values, errors, handleChange, handleBlur, touched, setFieldValue } =
    formProps;
  return (
    <>
      <Typography variant='h6' gutterBottom>
        {header}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl variant='standard' fullWidth sx={{ m: 1 }}>
            <TextField
              required
              id='title'
              name='title'
              label='Agreement title'
              fullWidth
              variant='standard'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.title}
              error={touched.title && Boolean(errors.title)}
              helperText={touched.title && errors.title}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant='standard' fullWidth sx={{ m: 1 }}>
            <FormLabel id='billing-frequency' required>
              Billing frequency
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby='billing-frequency'
              name='billingFrequency'
              defaultValue='monthly'
              value={values.password}
            >
              <FormControlLabel
                value='monthly'
                control={<Radio />}
                label='Monthly'
              />
              <FormControlLabel
                value='quarterly'
                control={<Radio />}
                label='Quarterly'
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            required
            label='Subsidiary'
            id='subsidiary'
            name='subsidiary'
            formik={{ values, handleBlur, handleChange }}
            options={subsidiaryOptions}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            required
            label='Payment terms (in calendar days after invoice date)'
            id='payment-terms'
            name='paymentTerms'
            formik={{ values, handleBlur, handleChange }}
            options={paymentTermOptions}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            required
            label='Client'
            id='client'
            name='client'
            formik={{ values, handleBlur, handleChange }}
            options={clientOptions}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <DatePicker
            name='startDate'
            formik={{ values, handleBlur, handleChange, setFieldValue }}
            label='Start date*'
            required
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <DatePicker
            name='endDate'
            formik={{ values, handleBlur, handleChange, setFieldValue }}
            label='End date*'
            required
          />
        </Grid>
      </Grid>
    </>
  );
}

export default AgreementForm;

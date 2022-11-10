import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AgreementForm from '../modules/AgreementForm';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

function ExperimentPage() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep === 0) {
      return setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(0);
  };

  const steps = [
    {
      header: 'Register agreement',
      formComponent: (props) => <AgreementForm {...props} />,
      onSubmit: () => {
        /* Send request to backend and manage validation result here */
      },
      initialValues: {
        title: '',
        billingFrequency: 'monthly',
        subsidiary: '',
        paymentTerms: '',
        client: '',
        startDate: null,
        endDate: null,
      },
      validationSchema: Yup.object({
        title: Yup.string().required('Enter the agreement title'),
        billingFrequency: Yup.string().required('Select billing frequency'),
        subsidiary: Yup.string().required('Select the subsidiary'),
        paymentTerms: Yup.string().required('Select the payment terms'),
        client: Yup.string().required('Select the client'),
        startDate: Yup.string().required('Select the start date'),
        endDate: Yup.string().required('Select the end date'),
      }).required(),
    },
    {
      header: 'Add products',
    },
    {
      header: 'Add escalations',
    },
    {
      header: 'Add services',
    },
    {
      header: 'Forecast generation',
    },
    {
      header: 'Review',
    },
  ];

  function getStepContent(step, formProps) {
    const { header, formComponent } = steps[step];

    switch (step) {
      case 0:
        return formComponent({ header, formProps });
      default:
        return <div>{header}</div>;
    }
  }

  return (
    <Container component='main' sx={{ mt: 8, mb: 2 }}>
      <Typography variant='h5' component='h5' gutterBottom>
        Experimental form
      </Typography>
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map(({ header }) => (
          <Step key={header}>
            <StepLabel>{header}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Formik
        initialValues={steps[activeStep].initialValues}
        validationSchema={steps[activeStep].validationSchema}
        onSubmit={steps[activeStep].onSubmit}
      >
        {(formProps) => {
          return (
            <Form>
              {getStepContent(activeStep, formProps)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  type='Submit'
                  variant='contained'
                  onClick={handleNext}
                  disabled={!formProps.dirty || !formProps.isValid}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Next
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}

export default ExperimentPage;

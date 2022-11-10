import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function HomePage() {
  return (
    <Container component='main' sx={{ mt: 8, mb: 2 }} maxWidth='sm'>
      <Typography variant='h5' component='h5' gutterBottom>
        Welcome to an experimental web app
      </Typography>
      <Typography variant='h6' component='h6' gutterBottom>
        {'Navigate to experiment page to fill in some forms'}
      </Typography>
    </Container>
  );
}

export default HomePage;

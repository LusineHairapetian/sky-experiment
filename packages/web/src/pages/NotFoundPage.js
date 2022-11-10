import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function NotFoundPage() {
  return (
    <Container component='main' sx={{ mt: 8, mb: 2 }} maxWidth='sm'>
      <Typography variant='h2' component='h1' gutterBottom>
        Seems like you got lost, this page does not exist :(
      </Typography>
      <Typography variant='body1'>
        <Link to='/'>Let's go back home</Link>
      </Typography>
    </Container>
  );
}

export default NotFoundPage;

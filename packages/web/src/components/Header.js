import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar
      position='static'
      color='default'
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant='h4' color='inherit' noWrap sx={{ flexGrow: 1 }}>
          <Link to='/'> Skyfri</Link>
        </Typography>
        <nav>
          <Link to='/experiment'>
            <Typography
              variant='button'
              color='text.primary'
              sx={{ my: 1, mx: 1.5 }}
            >
              Experiment
            </Typography>
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

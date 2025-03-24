import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import background1 from '/src/assets/photo1.jpg';
import background2 from '/src/assets/photo2.jpg';
import background3 from '/src/assets/photo3.jpg';

function App() {
  return (
    <Box>
      {/* NavBar */}
      <AppBar position="fixed" sx={{ backgroundColor: '#333' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Mountain Man Crew
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Spacer to prevent content from hiding under NavBar */}
      <Box sx={{ height: '64px' }} />

      {/* Photos */}
      <Box>
        <Box
          sx={{
            height: '100vh',
            backgroundImage: `url(${background1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Box
          sx={{
            height: '100vh',
            backgroundImage: `url(${background2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Box
          sx={{
            height: '100vh',
            backgroundImage: `url(${background3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Box>
    </Box>
  );
}

export default App;

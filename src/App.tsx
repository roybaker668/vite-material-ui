import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

const photos = [
  '/photo1.jpg',
  '/photo2.jpg',
  '/photo3.jpg',
  '/photo4.jpg',
  '/photo5.jpg',
  '/photo6.jpg',
  '/photo7.jpg',
  '/photo8.jpg',
  '/photo9.jpg',
  '/photo10.jpg',
  '/photo11.jpg',
  '/photo12.jpg',
];

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

      {/* Centered Title */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Mountain Man Crew
        </Typography>
        <Typography variant="h5">
          Explore the Toughest Routes in the North East and Beyond
        </Typography>
      </Box>

      {/* Photos */}
      {photos.map((photo, index) => (
        <Box
          key={index}
          sx={{
            height: '100vh',
            backgroundImage: `url(${photo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
    </Box>
  );
}

export default App;

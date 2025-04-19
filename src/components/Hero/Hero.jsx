import React from 'react'
import { Typography, Box, Stack, Button, Container } from '@mui/material'
import Espresso from '../../assets/images/espresso-coffee.png'

const Hero = () => {
    return (
        <Container id="home">
           <Stack
             direction={{xs: 'column', md: 'row'}}
             spacing={2}
             sx={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '85vh',
             }}
             >
                <Box
                 sx={{
                    width: { xs: "100%", md: "50%" }, // Ensure this Box takes
                    padding: '3rem 0',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '.5rem',
                    alignItems: 'center'
                 }}
                >
                    <Typography variant="h1" sx={{ fontSize: {xs: '3rem', md: '4rem'} }}>Coffee For All</Typography>
                        <Typography variant='h4' sx={{ fontSize: { xs: '1rem', md: '1.5rem'}}}>
                            The coffee revolution starts now.
                        </Typography>
                        <Button variant="contained" color='secondary' href="#coffee">Order Now</Button>
                </Box>

                <Box
                sx={{
                    width: "50%", // Ensure this Box takes 50% of the width
                    padding: 2,
                    textAlign: 'center',
                }}
                >
                    <img src={Espresso} alt="espresso coffee drink" 
                    style={{width: '100%'}}/>

                </Box>

           </Stack>
        </Container>
    )
}

export default Hero
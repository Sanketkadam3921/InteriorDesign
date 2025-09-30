import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#f5f5f5',
                py: 6,
                mt: 'auto',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            KalaKruti
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Creating beautiful and functional interior spaces that reflect your unique style and personality.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Services
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#" color="text.secondary" underline="hover">
                                Residential Design
                            </Link>
                            <Link href="#" color="text.secondary" underline="hover">
                                Commercial Design
                            </Link>
                            <Link href="#" color="text.secondary" underline="hover">
                                Consultation
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="/projects" color="text.secondary" underline="hover">
                                Projects
                            </Link>
                            <Link href="/designs" color="text.secondary" underline="hover">
                                Designs
                            </Link>
                            <Link href="/contact" color="text.secondary" underline="hover">
                                Contact
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton color="primary">
                                <Facebook />
                            </IconButton>
                            <IconButton color="primary">
                                <Instagram />
                            </IconButton>
                            <IconButton color="primary">
                                <Twitter />
                            </IconButton>
                            <IconButton color="primary">
                                <LinkedIn />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ borderTop: 1, borderColor: 'divider', mt: 4, pt: 4, textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        © 2024 KalaKruti. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}


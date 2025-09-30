import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import ServiceCard from './ServiceCard';

export default function HomeServices() {
    const services = [
        {
            title: "Residential Design",
            description:
                "Create beautiful and functional homes that reflect your lifestyle and personality.",
        },
        {
            title: "Commercial Design",
            description:
                "Professional office and retail spaces that enhance productivity and brand image.",
        },
        {
            title: "Consultation",
            description:
                "Expert advice and guidance to help you make the best design decisions.",
        },
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
                Our Services
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
                {services.map((service, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={index}
                        sx={{ display: 'flex' }} // 🔹 ensures all cards are equal height
                    >
                        <ServiceCard title={service.title} description={service.description} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

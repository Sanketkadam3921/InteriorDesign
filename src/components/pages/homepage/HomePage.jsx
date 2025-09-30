import React from 'react';
import { Box } from '@mui/material';
import Hero from './Hero';
import HomeServices from './HomepageServices';
import HomePageFeatured from './HomePageFeatured';

export default function HomePage() {
    return (
        <Box>
            <Hero />
            <HomeServices />
            <HomePageFeatured />
        </Box>
    );
}

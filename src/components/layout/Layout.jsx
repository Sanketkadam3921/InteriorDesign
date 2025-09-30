import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from '../main/Header';
import Footer from '../main/Footer';

export default function Layout() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
}


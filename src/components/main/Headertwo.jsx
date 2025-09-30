import React from 'react';
import { Box, Button, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export default function Headertwo() {
    const theme = useTheme();
    const location = useLocation();

    const navItems = [
        { label: 'How it works', path: '/how-it-works' },
        { label: 'Offerings', path: '/offerings' },
        { label: 'Price Calculators', path: '/price-calculators' },
        { label: 'Modular Journey', path: '/modular-journey' },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                py: 1.5,
                px: { xs: 2, md: 4 },
                mx: { xs: 1, md: 'auto' },
                width: { xs: 'calc(100% - 16px)', md: 'calc(100% - 32px)' },
                position: 'fixed', // Make it fixed like the header
                top: '110px', // Position it right below the header with some margin
                left: { xs: '8px', md: '16px' },
                right: { xs: '8px', md: '16px' },
                zIndex: 1299, // Just below the main header
            }}
        >
            {navItems.map((item) => (
                <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{
                        color: location.pathname === item.path ? theme.palette.primary.main : 'text.primary',
                        fontWeight: location.pathname === item.path ? 'bold' : '500',
                        mx: 2,
                        textTransform: 'none',
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        '&:hover': { backgroundColor: theme.palette.action.hover },
                    }}
                >
                    {item.label}
                </Button>
            ))}
        </Box>
    );
}
